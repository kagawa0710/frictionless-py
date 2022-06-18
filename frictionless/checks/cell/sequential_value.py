from ... import errors
from ...check import Check


class sequential_value(Check):
    """Check that a column having sequential values"""

    code = "sequential-value"
    Errors = [errors.SequentialValueError]

    def __init__(self, *, field_name=None):
        self.field_name = field_name

    # Properties

    field_name: str
    """# TODO: add docs"""

    # Connect

    def connect(self, resource):
        super().connect(resource)
        self.__cursor = None
        self.__exited = False

    # Validate

    def validate_start(self):
        if self.field_name not in self.resource.schema.field_names:
            note = 'sequential value check requires field "%s"' % self.field_name
            yield errors.CheckError(note=note)

    def validate_row(self, row):
        if not self.__exited:
            cell = row[self.field_name]
            try:
                self.__cursor = self.__cursor or cell
                assert self.__cursor == cell
                self.__cursor += 1
            except Exception:
                self.__exited = True
                yield errors.SequentialValueError.from_row(
                    row,
                    note="the value is not sequential",
                    field_name=self.field_name,
                )

    # Metadata

    metadata_profile = {  # type: ignore
        "type": "object",
        "requred": ["fieldName"],
        "properties": {
            "code": {},
            "fieldName": {"type": "string"},
        },
    }
