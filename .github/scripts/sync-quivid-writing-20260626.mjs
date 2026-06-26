import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_QUIVID_WRITING_20260626_START */';
const end = '/* RAUM_QUIVID_WRITING_20260626_END */';

const article = {
  id: 'w-quivid-second-architecture-20260626',
  year: '2026',
  month: '06',
  title_zh: '城市・土地・文化敘事（九）城市的第二建築：QUIVID 如何把慕尼黑的公共工程轉化為日常記憶',
  title_en: 'City, Land and Cultural Narratives IX: The City\'s Second Architecture: How QUIVID Turns Munich\'s Public Works into Everyday Memory',
  title_de: 'Stadt, Land und kulturelle Erzählungen IX: Die zweite Architektur der Stadt: Wie QUIVID Münchens öffentliche Bauprojekte in Alltagsgedächtnis verwandelt',
  note_zh: '以慕尼黑 QUIVID 為觀察對象，思考公共藝術如何不只作為工程附屬品，而成為城市日常、公共建設與集體記憶之間的第二層建築。',
  note_en: 'Taking Munich\'s QUIVID as a case study, this note asks how public art can become more than an attachment to public works: a second layer of architecture connecting everyday life, infrastructure and collective memory.',
  note_de: 'Ausgehend von Münchens QUIVID fragt dieser Text, wie Kunst im öffentlichen Raum mehr sein kann als ein Zusatz zu öffentlichen Bauprojekten: eine zweite architektonische Schicht zwischen Alltag, Infrastruktur und kollektivem Gedächtnis.',
  essay_zh: [
    '城市・土地・文化敘事（九）城市的第二建築：QUIVID 如何把慕尼黑的公共工程轉化為日常記憶',
    'QUIVID 是慕尼黑公共藝術與公共建設之間的一種制度性實驗。它讓藝術不只是被放在城市裡的物件，而是進入公共工程、建築計畫與日常生活的生成過程。',
    '當公共藝術與道路、學校、行政建築、社區設施或公共空間同步思考時，藝術便不再只是裝飾。它成為城市的第二建築：一層看不見卻持續作用的記憶結構。',
    '這種第二建築不一定以巨大形體出現。它可能是一段牆面、一個光影、一種材料介入、一個被居民日復一日經過的細節。重要的是，它把公共工程從功能性的建設，轉化為可以被記住、被使用、被感受的地方。',
    '慕尼黑的經驗提醒我們，城市不是只靠建築物被建造，也靠公共記憶被維持。QUIVID 所打開的問題，是藝術如何在制度、工程與生活之間，成為一種長時間的城市敘事。',
    '對我而言，這也回到土地與文化敘事的核心：公共空間不是空白的容器，而是由政策、材料、身體、日常路徑與地方情感共同編織而成。當藝術進入其中，它不是替城市加上一件作品，而是讓城市多出一種被閱讀的方法。'
  ],
  essay_en: [
    'City, Land and Cultural Narratives IX: The City\'s Second Architecture: How QUIVID Turns Munich\'s Public Works into Everyday Memory',
    'QUIVID is an institutional experiment between public art and public construction in Munich. It allows art to be more than an object placed in the city; it enters the making of public works, architectural projects and everyday life.',
    'When public art is considered together with roads, schools, administrative buildings, community facilities and public space, it is no longer decoration. It becomes the city\'s second architecture: an invisible yet active structure of memory.',
    'This second architecture does not always appear as a monumental form. It may be a wall surface, a play of light, an intervention in material, or a detail that residents pass every day. What matters is that it transforms public works from functional construction into places that can be remembered, used and felt.',
    'Munich\'s experience reminds us that a city is not built only through buildings; it is also sustained through public memory. The question opened by QUIVID is how art can become a long-term urban narrative between institution, engineering and life.',
    'For me, this returns to the core of land and cultural narrative: public space is not an empty container, but something woven from policy, material, bodies, everyday routes and local feeling. When art enters it, it does not simply add a work to the city; it gives the city another way to be read.'
  ],
  essay_de: [
    'Stadt, Land und kulturelle Erzählungen IX: Die zweite Architektur der Stadt: Wie QUIVID Münchens öffentliche Bauprojekte in Alltagsgedächtnis verwandelt',
    'QUIVID ist ein institutionelles Experiment zwischen Kunst im öffentlichen Raum und öffentlichem Bauen in München. Kunst wird dabei nicht nur als Objekt in die Stadt gestellt, sondern tritt in die Entstehung von Bauprojekten, Architektur und Alltag ein.',
    'Wenn Kunst im öffentlichen Raum gemeinsam mit Straßen, Schulen, Verwaltungsbauten, sozialen Einrichtungen und öffentlichen Räumen gedacht wird, ist sie keine Dekoration mehr. Sie wird zur zweiten Architektur der Stadt: zu einer unsichtbaren und dennoch wirksamen Struktur des Gedächtnisses.',
    'Diese zweite Architektur muss nicht monumental erscheinen. Sie kann eine Wandfläche sein, ein Lichtverlauf, ein Eingriff in ein Material oder ein Detail, an dem Bewohnerinnen und Bewohner täglich vorbeigehen. Entscheidend ist, dass öffentliche Bauprojekte von funktionaler Infrastruktur zu Orten werden, die erinnert, genutzt und empfunden werden können.',
    'Die Münchner Erfahrung erinnert daran, dass eine Stadt nicht nur durch Gebäude gebaut wird. Sie wird auch durch öffentliches Gedächtnis getragen. QUIVID öffnet die Frage, wie Kunst zwischen Institution, Bauwesen und Leben zu einer langfristigen städtischen Erzählung werden kann.',
    'Für mich führt das zurück zum Kern von Land und kultureller Erzählung: Öffentlicher Raum ist kein leerer Behälter, sondern ein Geflecht aus Politik, Material, Körpern, alltäglichen Wegen und lokalen Gefühlen. Wenn Kunst darin eintritt, fügt sie der Stadt nicht nur ein Werk hinzu, sondern eine weitere Weise, sie zu lesen.'
  ],
  href: 'https://genius912.blogspot.com/2026/06/quivid.html',
};

function removeMarkedBlock(html) {
  const startIndex = html.indexOf(start);
  if (startIndex === -1) return html;
  const endIndex = html.indexOf(end, startIndex);
  if (endIndex === -1) return html;
  return html.slice(0, startIndex) + html.slice(endIndex + end.length);
}

let html = removeMarkedBlock(readFileSync(file, 'utf8'));
const block = `
${start}
{
  const RAUM_QUIVID_WRITING = ${JSON.stringify(article, null, 2)};
  const existingIndex = WRITINGS.findIndex((writing) => (
    writing.id === RAUM_QUIVID_WRITING.id ||
    writing.href === RAUM_QUIVID_WRITING.href ||
    writing.title_zh === RAUM_QUIVID_WRITING.title_zh
  ));
  if (existingIndex >= 0) {
    WRITINGS.splice(existingIndex, 1);
  }
  WRITINGS.unshift(RAUM_QUIVID_WRITING);
  window.WRITINGS = WRITINGS;
}
${end}
`;

const anchor = 'const LINKS = [';
if (!html.includes(anchor)) {
  throw new Error('Cannot find LINKS insertion point.');
}
html = html.replace(anchor, `${block}\n${anchor}`);
writeFileSync(file, html, 'utf8');
console.log('Synced QUIVID writing article.');
