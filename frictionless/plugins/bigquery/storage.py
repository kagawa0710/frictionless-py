import io
import re
import csv
import json
import time
from slugify import slugify
from functools import partial
from ...exception import FrictionlessException
from ...resource import Resource
from ...package import Package
from ...storage import Storage
from ...schema import Schema
from ...field import Field
from ... import helpers
from ... import errors
from .dialect import BigqueryDialect
from . import settings


class BigqueryStorage(Storage):
    """BigQuery storage implementation

    API      | Usage
    -------- | --------
    Public   | `from frictionless.plugins.bigquery import BigqueryStorage`

    Parameters:
        service (object): BigQuery `Service` object
        project (str): BigQuery project name
        dataset (str): BigQuery dataset name
        prefix? (str): prefix for all names

    """

    def __init__(self, source, *, dialect=None):
        dialect = dialect or BigqueryDialect()
        self.__service = source
        self.__project = dialect.project
        self.__dataset = dialect.dataset
        self.__prefix = dialect.prefix

    def __iter__(self):
        names = []

        # Get response
        response = (
            self.__service.tables()
            .list(projectId=self.__project, datasetId=self.__dataset)
            .execute()
        )

        # Extract names
        for table in response.get("tables", []):
            table_id = table["tableReference"]["tableId"]
            name = self.__read_convert_name(table_id)
            if name is not None:
                names.append(name)

        return iter(names)

    # Read

    def read_resource(self, name):
        bq_name = self.__write_convert_name(name)
        google_errors = helpers.import_from_plugin(
            "googleapiclient.errors", plugin="bigquery"
        )

        # Get response
        try:
            response = (
                self.__service.tables()
                .get(
                    projectId=self.__project,
                    datasetId=self.__dataset,
                    tableId=bq_name,
                )
                .execute()
            )
        except google_errors.HttpError:
            note = f'Resource "{name}" does not exist'
            raise FrictionlessException(errors.StorageError(note=note))

        # Create resource
        schema = self.__read_convert_schema(response["schema"])
        data = partial(self.__read_convert_data, name, schema)
        resource = Resource(name=name, schema=schema, data=data)

        return resource

    def read_package(self):
        package = Package()
        for name in self:
            resource = self.read_resource(name)
            package.resources.append(resource)
        return package

    def __read_convert_name(self, bq_name):
        if bq_name.startswith(self.__prefix):
            return bq_name.replace(self.__prefix, "", 1)
        return None

    def __read_convert_schema(self, bq_schema):
        schema = Schema()

        # Fields
        for bq_field in bq_schema["fields"]:
            field_type = self.__read_convert_type(bq_field["type"])
            field = Field(name=bq_field["name"], type=field_type)
            if bq_field.get("mode", "NULLABLE") != "NULLABLE":
                field.required = True
            schema.fields.append(field)

        return schema

    def __read_convert_data(self, name, schema):
        bq_name = self.__write_convert_name(name)

        # Get response
        response = (
            self.__service.tabledata()
            .list(projectId=self.__project, datasetId=self.__dataset, tableId=bq_name)
            .execute()
        )

        # Collect rows
        data = []
        for fields in response["rows"]:
            cells = [field["v"] for field in fields["f"]]
            data.append(cells)

        # Sort data
        data = sorted(
            data, key=lambda cells: cells[0] if cells[0] is not None else "null"
        )

        # Emit data
        yield schema.field_names
        yield from data

    def __read_convert_type(self, bq_type=None):

        # Mapping
        mapping = {
            "BOOLEAN": "boolean",
            "DATE": "date",
            "DATETIME": "datetime",
            "INTEGER": "integer",
            "FLOAT": "number",
            "STRING": "string",
            "TIME": "time",
        }

        # Return type
        if bq_type:
            return mapping.get(bq_type, "string")

        # Return mapping
        return mapping

    # Write

    def write_resource(self, resource, *, force=False):
        package = Package(resources=[resource])
        self.write_package(package, force=force)

    def write_package(self, package, *, force=False):
        existent_names = list(self)

        # Check existence
        for resource in package.resources:
            if resource.name in existent_names:
                if not force:
                    note = f'Resource "{resource.name}" already exists'
                    raise FrictionlessException(errors.StorageError(note=note))
                self.delete_resource(resource.name)

        # Write resource
        for resource in package.resources:
            if not resource.schema:
                resource.infer()

            # Write metadata
            bq_name = self.__write_convert_name(resource.name)
            bq_schema = self.__write_convert_schema(resource.schema)
            body = {
                "tableReference": {
                    "projectId": self.__project,
                    "datasetId": self.__dataset,
                    "tableId": bq_name,
                },
                "schema": bq_schema,
            }
            self.__service.tables().insert(
                projectId=self.__project, datasetId=self.__dataset, body=body
            ).execute()

            # Write data
            self.__write_convert_data(resource)

    def __write_convert_name(self, name):
        return _slugify_name(self.__prefix + name)

    def __write_convert_schema(self, schema):
        bq_schema = {"fields": []}

        # Fields
        for field in schema.fields:
            bq_type = self.__write_convert_type(field.type)
            mode = "NULLABLE"
            if field.required:
                mode = "REQUIRED"
            bq_schema["fields"].append(
                {
                    "name": _slugify_name(field.name),
                    "type": bq_type,
                    "mode": mode,
                }
            )

        return bq_schema

    def __write_convert_data(self, resource):
        mapping = self.__write_convert_type()

        # Fallback fields
        fallback_fields = []
        mapping = self.__write_convert_type()
        for field in resource.schema.fields:
            if not mapping.get(field.type):
                fallback_fields.append(field)

        # Timezone fields
        timezone_fields = []
        for field in resource.schema.fields:
            if field.type in ["datetime", "time"]:
                timezone_fields.append(field)

        # Write data
        buffer = []
        with resource:
            for row in resource.row_stream:
                for field in fallback_fields:
                    row[field.name], notes = field.write_cell(row[field.name])
                for field in timezone_fields:
                    if row[field.name] is not None:
                        row[field.name] = row[field.name].replace(tzinfo=None)
                buffer.append(row.to_list())
                if len(buffer) > settings.BUFFER_SIZE:
                    self.__write_convert_data_start_job(resource.name, buffer)
                    buffer = []
            if len(buffer) > 0:
                self.__write_convert_data_start_job(resource.name, buffer)

    def __write_convert_data_start_job(self, name, buffer):
        http = helpers.import_from_plugin("apiclient.http", plugin="bigquery")
        bq_name = self.__write_convert_name(name)

        # Process buffer to byte stream csv
        chars = io.StringIO()
        writer = csv.writer(chars)
        for cells in buffer:
            writer.writerow(cells)
        bytes = io.BufferedRandom(io.BytesIO(chars.getvalue().encode("utf-8")))

        # Prepare job body
        body = {
            "configuration": {
                "load": {
                    "destinationTable": {
                        "projectId": self.__project,
                        "datasetId": self.__dataset,
                        "tableId": bq_name,
                    },
                    "sourceFormat": "CSV",
                }
            }
        }

        # Prepare job media body
        mimetype = "application/octet-stream"
        media_body = http.MediaIoBaseUpload(bytes, mimetype=mimetype)

        # Make request to Big Query
        response = (
            self.__service.jobs()
            .insert(projectId=self.__project, body=body, media_body=media_body)
            .execute()
        )

        # Wait the job
        try:
            self.__write_convert_data_finish_job(response)
        except Exception as exception:
            if "not found: job" in str(exception).lower():
                note = "BigQuery plugin supports only the US location of datasets"
                raise FrictionlessException(errors.StorageError(note=note))
            raise

    def __write_convert_data_finish_job(self, response):

        # Get job instance
        job = self.__service.jobs().get(
            projectId=response["jobReference"]["projectId"],
            jobId=response["jobReference"]["jobId"],
        )

        # Wait done
        while True:
            result = job.execute(num_retries=1)
            if result["status"]["state"] == "DONE":
                if result["status"].get("errors"):
                    note = "\n".join(er["message"] for er in result["status"]["errors"])
                    raise FrictionlessException(errors.StorageError(note=note))
                break
            time.sleep(1)

    def __write_convert_type(self, type=None):

        # Mapping
        mapping = {
            "any": "STRING",
            "boolean": "BOOLEAN",
            "date": "DATE",
            "datetime": "DATETIME",
            "integer": "INTEGER",
            "number": "FLOAT",
            "string": "STRING",
            "time": "TIME",
            "year": "INTEGER",
        }

        # Return type
        if type:
            return mapping.get(type, "STRING")

        # Return mapping
        return mapping

    # Delete

    def delete_resource(self, name, *, ignore=False):
        return self.delete_package([name], ignore=ignore)

    def delete_package(self, names, *, ignore=False):
        existent_names = list(self)

        # Iterater over buckets
        for name in names:

            # Check existent
            if name not in existent_names:
                if not ignore:
                    note = f'Resource "{name}" does not exist'
                    raise FrictionlessException(errors.StorageError(note=note))
                continue

            # Make delete request
            bq_name = self.__write_convert_name(name)
            self.__service.tables().delete(
                projectId=self.__project, datasetId=self.__dataset, tableId=bq_name
            ).execute()


# Internal


def _slugify_name(name):
    # Referene:
    # https://cloud.google.com/bigquery/docs/reference/v2/tables
    MAX_LENGTH = 128
    VALID_NAME = r"^[a-zA-Z_]\w{0,%d}$" % (MAX_LENGTH - 1)
    if not re.match(VALID_NAME, name):
        name = slugify(name, separator="_")
    return name[:MAX_LENGTH]


def _uncast_value(value, field):
    # NOTE:
    # Eventially should be moved to:
    # https://github.com/frictionlessdata/tableschema-py/issues/161
    if isinstance(value, (list, dict)):
        value = json.dumps(value)
    else:
        value = str(value)
    return value
