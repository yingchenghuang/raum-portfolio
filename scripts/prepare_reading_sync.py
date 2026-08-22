#!/usr/bin/env python3
"""Prepare the 2026-08-23 reading archive sync manifest."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from urllib.parse import quote_plus


NEW_BOOKS = [
    (10903, "1067", "誰在操控你的選擇：洞察人性的自由之路", "黃啟團", "心理學", "psych", "", "https://www.cite.com.my/images/p_download/1743361.jpg"),
    (10904, "1068", "麥肯錫精英高效閱讀法", "赤羽雄二", "溝通表達", "reading", "", "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1586882942i/53178541.jpg"),
    (10913, "1069", "盛世之鑰：開放文明的興衰真相", "約翰・諾貝里（Johan Norberg）", "歷史人文", "history", "Peak Human: What We Can Learn from the Rise and Fall of Golden Ages", "https://www.hamiltonbook.com/media/image_full/9291717A.JPG"),
    (10912, "1070", "如何停止憂慮，開創人生", "戴爾・卡內基（Dale Carnegie）", "心理學", "psych", "How to Stop Worrying and Start Living", "https://www.cite.com.my/images/p_download/1477845.jpg"),
    (10945, "1071", "靈魂在工作：從異化、焦慮到自主", "弗朗科・比弗・貝拉爾迪（Franco Berardi）", "社會科學", "society", "The Soul at Work: From Alienation to Autonomy", "https://ptext.nju.edu.cn/__local/B/38/49/C5875228F1E1540055CA65E4286_050FD7C3_600F.jpeg"),
    (10939, "1072", "人生很短，我決定活得有趣", "李冰", "自我成長", "work", "", "https://www.cite.com.my/images/p_download/1618527.jpg"),
    (10982, "1073", "吃佛", "芭芭拉・德米克（Barbara Demick）", "歷史人文", "history", "Eat the Buddha: Life and Death in a Tibetan Town", "https://shoplineimg.com/64d0d2a255b63e0022d2c5ea/65ee9f61230c270017837c58/800x.png"),
    (10987, "1074", "過曝世代", "陳品皓", "社會科學", "society", "", "https://img2.91mai.com/o2o/image/52c6e58d-bcca-46da-b266-ca968d6286e3.jpg"),
    (10974, "1075", "自願被吃的豬：100個啟發性的哲學思想實驗", "朱立安・巴吉尼（Julian Baggini）", "哲學思辨", "phil", "The Pig That Wants to Be Eaten", "https://cdn.cite.com.tw/images/r/RV1150.jpg"),
    (10972, "1076", "終身成長", "卡羅爾・德韋克（Carol S. Dweck）", "心理學", "psych", "Mindset: The New Psychology of Success", "https://covers.openlibrary.org/b/isbn/9780345472328-L.jpg"),
    (10981, "1077", "意念使用手冊：瞬間改變時間和空間的量子習慣", "村松大輔", "心理學", "psych", "", "https://www.kb199.com/data/soft_img/1752751003.jpg"),
    (10991, "1078", "智慧通膨下的新商機：AI 時代的稀缺能力與新護城河", "程世嘉（蕭玉品採訪整理）", "科技趨勢", "tech", "Thriving in Intelligence Inflation", "https://imgs.cwgv.com.tw/books/BCB/BCB918/cover/thumb/BCB918.png"),
    (10983, "1079", "原始智能", "安格斯・弗萊徹（Angus Fletcher）", "設計創意", "art", "Primal Intelligence: You Are Smarter Than You Know", "https://imgs.cwgv.com.tw/articles/80/36680/preview/36680.png"),
    (10979, "1080", "5%的改變", "李松蔚", "心理學", "psych", "", "https://www.unionbook.com.sg/cdn/shop/products/9787541163777.jpg?v=1661569202"),
    (10999, "1081", "聰明人的個人成長", "史蒂夫・帕弗利納（Steve Pavlina）", "自我成長", "work", "Personal Development for Smart People: The Conscious Pursuit of Personal Growth", "https://cdn.kobo.com/book-images/d5ed275e-f5cc-406f-946b-54636b538b98/1200/1200/False/personal-development-for-smart-people-1.jpg"),
    (11001, "1082", "如何將知識轉化為行動", "肯・布蘭佳、保羅・梅爾、迪克・魯厄", "自我成長", "work", "Know Can Do! Put Your Know-How into Action", "https://pictures.abebooks.com/inventory/31155355351.jpg"),
    (11000, "1083", "文化的重要作用：價值觀如何影響人類進步", "山繆・杭亭頓、勞倫斯・哈里森（主編）", "社會科學", "society", "Culture Matters: How Values Shape Human Progress", "https://www.newton.com.tw/img/9/bc2/cGcq5yMyIjNiFTZjZWZ3EmNjZ2NzEWO0IGOxQDZkVTZ1MTN4IjN1QmMjVGNv0WZ0l2LjlGcvU2apFmYv02bj5SdklWYi5yYyN3Ztl2LvoDc0RHa.jpg"),
    (11087, "1084", "做困難的事", "史蒂夫・馬格尼斯（Steve Magness）", "心理學", "psych", "Do Hard Things: Why We Get Resilience Wrong and the Surprising Science of Real Toughness", "https://www.crossword.in/cdn/shop/files/do-hard-things-why-we-get-resilience-wrong-and-the-surprising-science-of-real-toughness-paperback-steve-magness-bk0478298-40660343685337.jpg?v=1775117529"),
]


UPDATES = [
    (10998, "0031", "BCG企畫思考", "田中志", "商業理財", "business", "https://imgs.cwgv.com.tw/books/BCB/BCB870/cover/thumb/BCB870.png", "39c34a20271a817cbe10c8bd467e6440"),
    (10942, "0221", "六頂思考帽", "愛德華・德博諾", "旅行紀實", "misc", "https://m.media-amazon.com/images/I/91n9Zw4Nb4L._SL1500_.jpg", "39c34a20271a811daa82dc0d85c8295f"),
    (10977, "0425", "幸福正能量：從幸福到更幸福的 N+1 法則", "徐培剛", "心理學", "psych", "https://m.media-amazon.com/images/I/81nhKY5WXLL._SL1500_.jpg", "39c34a20271a81348db6c111b5266529"),
    (11002, "1027", "驅動自己，也激勵別人", "史蒂芬・摩菲", "商業理財", "business", "https://m.media-amazon.com/images/I/71eOyCABEHL._SL1175_.jpg", "39c34a20271a818ab87be256df5062ba"),
    (10914, "1062", "世界頂尖人士如何度過他們的「假日」", "越川慎司", "自我成長", "work", "https://cdn.cite.com.tw/images/a/A1720440.jpg", "3b034a20271a815d8959e7c8ec1604e2"),
]

NOTION_IDS = {
    "1067": "3c434a20271a814397c6f756f7780e0d",
    "1068": "3c434a20271a81b98efae4c25e8205a3",
    "1069": "3c434a20271a81c2b53fdac7b13f7987",
    "1070": "3c434a20271a810c8975c2a5d8dbb9a2",
    "1071": "3c434a20271a817f9b77fda09bcc552f",
    "1072": "3c434a20271a818191d0fcc45110bd5b",
    "1073": "3c434a20271a8130bdb1da5821ee7958",
    "1074": "3c434a20271a819ebcf1e4b470eb582a",
    "1075": "3c434a20271a815fbfbdefa64778175b",
    "1076": "3c434a20271a815c9402ddba32260871",
    "1077": "3c434a20271a8145b545f017723d7af0",
    "1078": "3c434a20271a81f8bd23faca133ff4d2",
    "1079": "3c434a20271a815b8346c65a9100e6a9",
    "1080": "3c434a20271a813aa3aed62654642fa8",
    "1081": "3c434a20271a81588a50c1c573bcb3fd",
    "1082": "3c434a20271a81698e23ea8d6c8cd9df",
    "1083": "3c434a20271a81a2b529c11d8f273044",
    "1084": "3c434a20271a81d58c58f45e809dde5c",
}

PNG_COVERS = {"1073", "1083"}


def clean_body(body: str) -> str:
    lines = body.replace("寶貝", "").splitlines()
    while lines and not lines[0].strip():
        lines.pop(0)
    if lines and (lines[0].lstrip().startswith("（書）") or lines[0].lstrip().startswith("《")):
        lines.pop(0)
    cleaned = []
    for line in lines:
        value = line.rstrip()
        if re.match(r"^(來源|字數|最後整理|資料狀態|資料識別碼)[：:]", value.strip()):
            continue
        if value.strip() in {"<empty-block/>", "-", "###"}:
            continue
        cleaned.append(value)
    return "\n".join(cleaned).strip()


def note_markdown(number: str, title: str, author: str, category: str, english: str, cover: str, bodies: list[str]) -> str:
    youtube = "https://www.youtube.com/results?search_query=" + quote_plus(f"{title} 書評")
    parts = [
        f"# {number}｜{title}",
        "## 書籍資料",
        f"**中文書名：** {title}",
    ]
    if english:
        parts.append(f"**英文書名：** {english}")
    parts.extend([
        f"**作者：** {author}",
        f"**分類：** {category}",
        f"![原書書封｜{title}]({cover})",
        f"[YouTube 搜尋｜{title}]({youtube})",
        "## 完整筆記",
        bodies[0],
    ])
    for index, body in enumerate(bodies[1:], 2):
        parts.extend(["---", f"## 補充筆記 {index}", body])
    return "\n\n".join(parts)


def main() -> None:
    source = json.loads(Path(sys.argv[1]).read_text())
    by_pk = {record["note_pk"]: record for record in source}
    manifest = {"new": [], "updates": []}

    for pk, number, title, author, category, key, english, cover in NEW_BOOKS:
        bodies = [clean_body(by_pk[pk]["body"])]
        if pk == 10999:
            bodies += [clean_body(by_pk[10964]["body"]), clean_body(by_pk[10973]["body"])]
        youtube = "https://www.youtube.com/results?search_query=" + quote_plus(f"{title} 書評")
        local_cover = f"assets/covers/{number}.{'png' if number in PNG_COVERS else 'jpg'}"
        manifest["new"].append({
            "number": number, "title": title, "author": author,
            "category": category, "category_key": key, "english": english,
            "cover": local_cover, "source_cover": cover, "youtube": youtube,
            "markdown": note_markdown(number, title, author, category, english, local_cover, bodies),
            "notion_id": NOTION_IDS[number],
            "apple_note_ids": [pk] + ([10964, 10973] if pk == 10999 else []),
        })

    for pk, number, title, author, category, key, cover, notion_id in UPDATES:
        youtube = "https://www.youtube.com/results?search_query=" + quote_plus(f"{title} 書評")
        manifest["updates"].append({
            "number": number, "title": title, "author": author,
            "category": category, "category_key": key, "cover": cover,
            "youtube": youtube, "notion_id": notion_id,
            "markdown": note_markdown(number, title, author, category, "", cover, [clean_body(by_pk[pk]["body"])]),
            "apple_note_ids": [pk],
        })

    print(json.dumps(manifest, ensure_ascii=False))


if __name__ == "__main__":
    main()
