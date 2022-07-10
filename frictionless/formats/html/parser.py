# type: ignore
import tempfile
from ...resource import Parser
from ...system import system
from .control import HtmlControl
from ... import helpers


class HtmlParser(Parser):
    """HTML parser implementation."""

    requires_loader = True
    supported_types = [
        "string",
    ]

    # Read

    def read_cell_stream_create(self):
        pq = helpers.import_from_extras("pyquery", name="html").PyQuery

        # Get table
        page = pq(self.loader.text_stream.read(), parser="html")
        control = self.resource.dialect.get_control("html", ensure=HtmlControl())
        tables = page.find(control.selector)
        table = pq(tables[0]) if tables else None
        if not table:
            return

        # Stream headers
        data = (
            table.children("thead").children("tr")
            + table.children("thead")
            + table.children("tr")
            + table.children("tbody").children("tr")
        )
        data = [pq(r) for r in data if len(r) > 0]
        first_row = data.pop(0)
        headers = [pq(th).text() for th in first_row.find("th,td")]
        yield headers

        # Stream data
        data = [pq(tr).find("td") for tr in data]
        data = [[pq(td).text() for td in tr] for tr in data if len(tr) > 0]
        yield from data

    # Write

    # NOTE:
    # We can rebase on pyquery for writing this html
    # It will give us an ability to support HtmlDialect
    def write_row_stream(self, source):
        html = "<html><body><table>\n"
        with source:
            html += "<tr>"
            for name in source.schema.field_names:
                html += f"<td>{name}</td>"
            html += "</tr>\n"
            for row in source.row_stream:
                cells = row.to_list(types=self.supported_types)
                html += "<tr>"
                for cell in cells:
                    html += f"<td>{cell}</td>"
                html += "</tr>\n"
        html += "</table></body></html>"
        with tempfile.NamedTemporaryFile(
            "wt", delete=False, encoding=self.resource.encoding
        ) as file:
            file.write(html)
        loader = system.create_loader(self.resource)
        result = loader.write_byte_stream(file.name)
        return result
