# type: ignore
from __future__ import annotations
import typing
from .metadata import Metadata
from . import settings
from . import helpers
from . import errors


class Layout(Metadata):
    """Layout representation

    API      | Usage
    -------- | --------
    Public   | `from frictionless import Layout`

    Parameters:
        descriptor? (str|dict): layout descriptor
        header_rows? (int[]): row numbers to form header (list all of them not only from/to)
        header_join? (str): a string to be used as a joiner for multiline header
        header_case? (bool): whether to respect header case (default: True)
        pick_rows? ((str|int)[]): what rows to pick
        skip_rows? ((str|int)[]): what rows to skip
    """

    def __init__(
        self,
        descriptor=None,
        *,
        header=None,
        header_rows=None,
        header_join=None,
        header_case=None,
        pick_rows=None,
        skip_rows=None,
    ):
        self.setinitial("header", header)
        self.setinitial("headerRows", header_rows)
        self.setinitial("headerJoin", header_join)
        self.setinitial("headerCase", header_case)
        self.setinitial("pickRows", pick_rows)
        self.setinitial("skipRows", skip_rows)
        super().__init__(descriptor)

    @Metadata.property
    def header(self):
        """
        Returns:
            bool: if there is a header row
        """
        return self.get("header", settings.DEFAULT_HEADER)

    @Metadata.property
    def header_rows(self):
        """
        Returns:
            int[]: header rows
        """
        if not self.header:
            return []
        return self.get("headerRows", settings.DEFAULT_HEADER_ROWS)

    @Metadata.property
    def header_join(self):
        """
        Returns:
            str: header joiner
        """
        return self.get("headerJoin", settings.DEFAULT_HEADER_JOIN)

    @Metadata.property
    def header_case(self):
        """
        Returns:
            str: header case sensitive
        """
        return self.get("headerCase", settings.DEFAULT_HEADER_CASE)

    @Metadata.property
    def pick_rows(self):
        """
        Returns:
            (str|int)[]?: pick rows
        """
        return self.get("pickRows")

    @Metadata.property
    def skip_rows(self):
        """
        Returns:
            (str|int)[]?: skip rows
        """
        return self.get("skipRows")

    @Metadata.property(write=False)
    def pick_rows_compiled(self):
        """
        Returns:
            re?: compiled pick rows
        """
        return helpers.compile_regex(self.pick_rows)

    @Metadata.property(write=False)
    def skip_rows_compiled(self):
        """
        Returns:
            re?: compiled skip fields
        """
        return helpers.compile_regex(self.skip_rows)

    # Expand

    def expand(self):
        """Expand metadata"""
        self.setdefault("header", self.header)
        self.setdefault("headerRows", self.header_rows)
        self.setdefault("headerJoin", self.header_join)
        self.setdefault("headerCase", self.header_case)

    # Read

    def read_labels(self, sample):

        # Collect lists
        lists = []
        row_number = 0
        for row_position, cells in enumerate(sample, start=1):
            if self.read_filter_rows(cells, row_position=row_position):
                row_number += 1
                if row_number in self.header_rows:
                    lists.append(helpers.stringify_label(cells))
                if row_number >= max(self.header_rows, default=0):
                    break

        # No header
        if not self.header:
            return []

        # Get labels
        labels = []
        prev_cells = {}
        for cells in lists:
            for index, cell in enumerate(cells):
                if prev_cells.get(index) == cell:
                    continue
                prev_cells[index] = cell
                if len(labels) <= index:
                    labels.append(cell)
                    continue
                labels[index] = self.header_join.join([labels[index], cell])

        return labels

    def read_fragment(self, sample):

        # Collect fragment
        fragment = []
        row_number = 0
        fragment_positions = []
        for row_position, cells in enumerate(sample, start=1):
            if self.read_filter_rows(cells, row_position=row_position):
                row_number += 1
                if self.header_rows and row_number < self.header_rows[0]:
                    continue
                if row_number in self.header_rows:
                    continue
                fragment_positions.append(row_position)
                fragment.append(cells)

        return fragment, fragment_positions

    def read_filter_rows(self, cells, *, row_position):
        match = True
        cell = cells[0] if cells else None
        cell = "" if cell is None else str(cell)
        for name in ["pick", "skip"]:
            if name == "pick":
                items = self.pick_rows_compiled
            else:
                items = self.skip_rows_compiled
            if not items:
                continue
            match = match and name == "skip"
            for item in items:
                if item == "<blank>":
                    if not any(cell for cell in cells if cell not in ["", None]):
                        match = not match
                elif isinstance(item, str):
                    if item == cell or (item and cell.startswith(item)):
                        match = not match
                elif isinstance(item, int) and item == row_position:
                    match = not match
                elif isinstance(item, typing.Pattern) and item.match(cell):
                    match = not match
        return match

    # Metadata

    metadata_Error = errors.LayoutError
    metadata_profile = {  # type: ignore
        "type": "object",
        "additionalProperties": False,
        "properties": {
            "header": {"type": "boolean"},
            "headerRows": {"type": "array", "items": {"type": "number"}},
            "headerJoin": {"type": "string"},
            "headerCase": {"type": "boolean"},
            "skipFields": {"type": "array"},
            "limitFields": {"type": "number", "minimum": 1},
            "pickRows": {"type": "array"},
            "skipRows": {"type": "array"},
            "limitRows": {"type": "number", "minimum": 1},
        },
    }
