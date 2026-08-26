#!/usr/bin/env python3
"""Export Apple Notes book records from the local NoteStore database.

The script is read-only. It decodes the protobuf payload used by modern Apple
Notes and emits JSON so the reading archive importer can diff records safely.
"""

from __future__ import annotations

import argparse
import gzip
import json
import sqlite3
from pathlib import Path


APPLE_EPOCH = 978_307_200


def read_varint(data: bytes, index: int) -> tuple[int, int]:
    value = 0
    shift = 0
    while True:
        byte = data[index]
        index += 1
        value |= (byte & 0x7F) << shift
        if byte < 0x80:
            return value, index
        shift += 7


def protobuf_fields(data: bytes):
    index = 0
    while index < len(data):
        key, index = read_varint(data, index)
        field, wire = key >> 3, key & 7
        if wire == 0:
            value, index = read_varint(data, index)
        elif wire == 1:
            value, index = data[index:index + 8], index + 8
        elif wire == 2:
            length, index = read_varint(data, index)
            value, index = data[index:index + length], index + length
        elif wire == 5:
            value, index = data[index:index + 4], index + 4
        else:
            raise ValueError(f"Unsupported protobuf wire type: {wire}")
        yield field, wire, value


def length_field(data: bytes, number: int) -> bytes:
    for field, wire, value in protobuf_fields(data):
        if field == number and wire == 2:
            return value
    raise ValueError(f"Missing protobuf field {number}")


def decode_note(data: bytes) -> str:
    root = gzip.decompress(data)
    document = length_field(root, 2)
    note = length_field(document, 3)
    return length_field(note, 2).decode("utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("database", type=Path)
    parser.add_argument("--folder", default="2.書")
    parser.add_argument("--created-after", default="2001-01-01 00:00:00")
    parser.add_argument("--note-pk", type=int)
    parser.add_argument("--metadata-only", action="store_true")
    args = parser.parse_args()

    connection = sqlite3.connect(f"file:{args.database}?mode=ro", uri=True)
    connection.row_factory = sqlite3.Row
    folder = connection.execute(
        "SELECT Z_PK FROM ZICCLOUDSYNCINGOBJECT WHERE Z_ENT=14 AND ZTITLE2=?",
        (args.folder,),
    ).fetchone()
    if not folder:
        raise SystemExit(f"Folder not found: {args.folder}")

    rows = connection.execute(
        """
        SELECT n.Z_PK AS note_pk, n.ZTITLE1 AS title, n.ZIDENTIFIER AS identifier,
               n.ZCREATIONDATE3 AS created, n.ZMODIFICATIONDATE1 AS modified,
               d.ZDATA AS payload
        FROM ZICCLOUDSYNCINGOBJECT n
        JOIN ZICNOTEDATA d ON d.Z_PK=n.ZNOTEDATA
        WHERE n.Z_ENT=11 AND n.ZFOLDER=?
          AND datetime(n.ZCREATIONDATE3 + ?, 'unixepoch', 'localtime') > ?
        ORDER BY n.ZCREATIONDATE3, n.Z_PK
        """,
        (folder["Z_PK"], APPLE_EPOCH, args.created_after),
    ).fetchall()

    if args.note_pk is not None:
        rows = [row for row in rows if row["note_pk"] == args.note_pk]

    records = []
    for row in rows:
        urls = [
            item[0]
            for item in connection.execute(
                "SELECT ZURLSTRING FROM ZICCLOUDSYNCINGOBJECT WHERE ZNOTE=? AND ZURLSTRING IS NOT NULL",
                (row["note_pk"],),
            ).fetchall()
        ]
        records.append(
            {
                "note_pk": row["note_pk"],
                "title": row["title"],
                "identifier": row["identifier"],
                "created": connection.execute(
                    "SELECT datetime(? + ?, 'unixepoch', 'localtime')",
                    (row["created"], APPLE_EPOCH),
                ).fetchone()[0],
                "modified": connection.execute(
                    "SELECT datetime(? + ?, 'unixepoch', 'localtime')",
                    (row["modified"], APPLE_EPOCH),
                ).fetchone()[0],
                "body": "" if args.metadata_only else decode_note(row["payload"]),
                "urls": urls,
            }
        )
    print(json.dumps(records, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
