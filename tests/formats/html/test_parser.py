import pytest
from frictionless import Resource, formats


# General


@pytest.mark.parametrize(
    "source, selector",
    [
        ("data/table1.html", "table"),
        ("data/table2.html", "table"),
        ("data/table3.html", ".mememe"),
    ],
)
def test_html_parser(source, selector):
    control = formats.HtmlControl(selector=selector)
    with Resource(source, control=control) as resource:
        assert resource.format == "html"
        assert resource.header == ["id", "name"]
        assert resource.read_rows() == [
            {"id": 1, "name": "english"},
            {"id": 2, "name": "中国人"},
        ]


# Write


@pytest.mark.skip
def test_html_parser_write(tmpdir):
    source = Resource("data/table.csv")
    target = source.write(str(tmpdir.join("table.html")))
    with target:
        assert target.header == ["id", "name"]
        assert target.read_rows() == [
            {"id": 1, "name": "english"},
            {"id": 2, "name": "中国人"},
        ]


# Problems


@pytest.mark.skip
def test_html_parser_newline_in_cell_issue_865(tmpdir):
    source = Resource("data/table-with-newline.html")
    target = source.write(str(tmpdir.join("table.csv")))
    with target:
        assert target.header == ["id", "name"]
        assert target.read_rows() == [
            {"id": 1, "name": "with newline"},
            {"id": 2, "name": "with newline"},
            {"id": 3, "name": "with\nnewline"},
            {"id": 4, "name": "with\\nnewline"},
        ]


@pytest.mark.skip
def test_html_parser_newline_in_cell_construction_file_issue_865(tmpdir):
    source = Resource("data/construction.html")
    target = source.write(str(tmpdir.join("table.csv")))
    target.infer(stats=True)
    assert target.stats["rows"] == 226