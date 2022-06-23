import pytest
from frictionless import Resource

pytestmark = pytest.mark.skip


# General


def test_validate_compression():
    resource = Resource("data/table.csv.zip")
    report = resource.validate()
    assert report.valid


def test_validate_compression_explicit():
    resource = Resource("data/table.csv.zip", compression="zip")
    report = resource.validate()
    assert report.valid


def test_validate_compression_invalid():
    resource = Resource("data/table.csv.zip", compression="bad")
    report = resource.validate()
    assert report.flatten(["code", "note"]) == [
        ["compression-error", 'compression "bad" is not supported'],
    ]
