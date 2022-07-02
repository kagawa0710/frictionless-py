import pytest
from frictionless import validate, helpers


# General


@pytest.mark.skip
def test_report_task_to_summary_valid():
    report = validate("data/capital-valid.csv")
    output = report.tasks[0].to_summary()
    file_size = 50 if not helpers.is_platform("windows") else 56
    assert (
        output.count("File name              | data/capital-valid.csv")
        and output.count(f"File size (bytes)      | {file_size}                    ")
        and output.count("Total Time Taken (sec) | ")
    )


@pytest.mark.skip
def test_report_task_to_summary_invalid():
    report = validate("data/capital-invalid.csv")
    output = report.tasks[0].to_summary()
    file_size = 171 if not helpers.is_platform("windows") else 183
    assert (
        output.count("File name                         | data/capital-invalid.csv")
        and output.count(f"File size (bytes)                 | {file_size}        ")
        and output.count("Total Time Taken (sec)            |")
        and output.count("Total Errors                      | 5          ")
        and output.count("Duplicate Label (duplicate-label) | 1          ")
        and output.count("Missing Cell (missing-cell)       | 1          ")
        and output.count("Blank Row (blank-row)             | 1          ")
        and output.count("Type Error (type-error)           | 1          ")
        and output.count("Extra Cell (extra-cell)           | 1          ")
    )


@pytest.mark.skip
def test_report_task_to_summary_file_not_found():
    report = validate("data/capital-invalids.csv")
    output = report.tasks[0].to_summary()
    assert (
        output.count("File name (Not Found)       | data/capital-invalids.csv")
        and output.count("File size                   | N/A")
        and output.count("Total Time Taken (sec)      ")
        and output.count("Total Errors                | 1")
        and output.count("Scheme Error (scheme-error) | 1")
    )


@pytest.mark.skip
def test_report_reporttask_summary_zippedfile():
    report = validate("data/table.csv.zip")
    output = report.tasks[0].to_summary()
    assert output.count("data/table.csv.zip => table.csv") and output.count("198")


@pytest.mark.skip
def test_report_task_to_summary_last_row_checked():
    report = validate("data/capital-invalid.csv", limit_errors=2)
    output = report.tasks[0].to_summary()
    assert (
        output.count("Rows Checked(Partial)**           | 10")
        and output.count("Total Errors                      | 2")
        and output.count("Duplicate Label (duplicate-label) | 1")
        and output.count("Missing Cell (missing-cell)       | 1")
    )


@pytest.mark.skip
def test_report_task_to_summary_errors_with_count():
    report = validate("data/capital-invalid.csv")
    output = report.tasks[0].to_summary()
    assert (
        output.count("Total Errors                      | 5          ")
        and output.count("Duplicate Label (duplicate-label) | 1          ")
        and output.count("Missing Cell (missing-cell)       | 1          ")
        and output.count("Blank Row (blank-row)             | 1          ")
        and output.count("Type Error (type-error)           | 1          ")
        and output.count("Extra Cell (extra-cell)           | 1          ")
    )