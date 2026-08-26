#!/usr/bin/env python3
"""Apply a prepared reading sync manifest to the static archive."""

from __future__ import annotations

import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
READING = ROOT / "reading"


def load(path: Path):
    return json.loads(path.read_text())


def write(path: Path, value) -> None:
    if isinstance(value, list):
        rows = [json.dumps(item, ensure_ascii=False, separators=(",", ":")) for item in value]
        path.write_text("[\n" + ",\n".join(rows) + "\n]\n")
    else:
        path.write_text(json.dumps(value, ensure_ascii=False, separators=(",", ":")) + "\n")


def note_bucket(identifier: str) -> int:
    value = 5381
    for character in identifier:
        value = (((value << 5) + value) ^ ord(character)) & 0xFFFFFFFF
    return value % 128


def upsert_note(identifier: str, markdown: str) -> Path:
    bucket = f"{note_bucket(identifier):03d}"
    primary = READING / "notes" / f"chunk-{bucket}.json"
    repair = READING / "notes" / f"repair-{bucket}.json"
    primary_data = load(primary)
    if identifier in primary_data:
        primary_data[identifier] = markdown
        write(primary, primary_data)
        return primary
    if repair.exists():
        repair_data = load(repair)
        if identifier in repair_data:
            repair_data[identifier] = markdown
            write(repair, repair_data)
            return repair
    primary_data[identifier] = markdown
    write(primary, primary_data)
    return primary


def main() -> None:
    manifest = load(Path(sys.argv[1]))
    data_paths = {
        path.stem: path
        for path in (READING / "data").glob("*.json")
        if path.stem != "covers"
    }
    groups = {key: load(path) for key, path in data_paths.items()}
    covers_path = READING / "data" / "covers.json"
    covers = load(covers_path)
    changed_notes = set()

    for book in manifest["new"]:
        record = {
            "n": book["number"],
            "t": book["title"],
            "a": book["author"],
            "u": book["notion_id"],
            "y": book["youtube"],
            "ys": book.get("ys", "search"),
        }
        group = groups[book["category_key"]]
        existing = next((item for item in group if item["n"] == record["n"]), None)
        if existing:
            existing.update(record)
        else:
            group.append(record)
        group.sort(key=lambda item: int(item["n"]))
        covers[record["n"]] = book["cover"]
        changed_notes.add(upsert_note(record["u"], book["markdown"]))

    for update in manifest["updates"]:
        found = None
        for group in groups.values():
            for record in group:
                if record["n"] == update["number"]:
                    found = record
                    break
            if found:
                break
        if not found:
            raise SystemExit(f"Existing book not found: {update['number']}")
        found["t"] = update["title"]
        found["a"] = update["author"]
        found["u"] = update.get("notion_id", found["u"])
        found["y"] = update["youtube"]
        found["ys"] = update.get("ys", found.get("ys", "search"))
        covers[found["n"]] = update["cover"]
        changed_notes.add(upsert_note(found["u"], update["markdown"]))

    for key, path in data_paths.items():
        write(path, groups[key])
    write(covers_path, dict(sorted(covers.items())))
    print(json.dumps({"new": len(manifest["new"]), "updated": len(manifest["updates"]), "note_files": sorted(str(path.relative_to(ROOT)) for path in changed_notes)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
