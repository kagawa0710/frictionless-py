from __future__ import annotations
from typing import TYPE_CHECKING, Optional, List
from ..checklist import Checklist
from ..exception import FrictionlessException
from ..report import Report
from .. import helpers

if TYPE_CHECKING:
    from ..error import Error
    from .resource import Resource


def validate(
    resource: "Resource",
    checklist: Optional[Checklist] = None,
    *,
    original: bool = False,
):
    """Validate resource

    Parameters:
        checklist? (checklist): a Checklist object
        original? (bool): validate metadata as it is

    Returns:
        Report: validation report
    """

    # Create state
    timer = helpers.Timer()
    errors: List[Error] = []
    warnings: List[str] = []
    original_resource = resource.to_copy()

    # Prepare checklist
    checklist = checklist or resource.checklist or Checklist()
    checks = checklist.connect(resource)
    if not checklist.metadata_valid:
        errors = checklist.metadata_errors
        return Report.from_validation(time=timer.time, errors=errors)

    # Prepare resource
    try:
        resource.open()
    except FrictionlessException as exception:
        resource.close()
        errors = [exception.error]
        return Report.from_validation_task(resource, time=timer.time, errors=errors)

    # Validate metadata
    metadata = original_resource if original else resource
    if not metadata.metadata_valid:
        errors = metadata.metadata_errors
        return Report.from_validation_task(resource, time=timer.time, errors=errors)

    # Validate data
    with resource:

        # Validate start
        for index, check in enumerate(checks):
            for error in check.validate_start():
                if error.code == "check-error":
                    del checks[index]
                if checklist.match(error):
                    errors.append(error)

        # Validate rows
        if resource.tabular:
            while True:

                # Emit row
                try:
                    row = next(resource.row_stream)  # type: ignore
                except FrictionlessException as exception:
                    errors.append(exception.error)
                    continue
                except StopIteration:
                    break

                # Validate row
                for check in checks:
                    for error in check.validate_row(row):
                        if checklist.match(error):
                            errors.append(error)

                # Limit errors
                if checklist.limit_errors:
                    if len(errors) >= checklist.limit_errors:
                        errors = errors[: checklist.limit_errors]
                        warning = f"reached error limit: {checklist.limit_errors}"
                        warnings.append(warning)
                        break

                # Limit memory
                if checklist.limit_memory:
                    if not row.row_number % 100000:
                        memory = helpers.get_current_memory_usage()
                        if memory and memory >= checklist.limit_memory:
                            warning = f"reached memory limit: {checklist.limit_memory}MB"
                            warnings.append(warning)
                            break

        # Validate end
        if not warnings:
            if not resource.tabular:
                helpers.pass_through(resource.byte_stream)
            for check in checks:
                for error in check.validate_end():
                    if checklist.match(error):
                        errors.append(error)

    # Return report
    return Report.from_validation_task(
        resource,
        time=timer.time,
        scope=checklist.scope,
        errors=errors,
        warnings=warnings,
    )