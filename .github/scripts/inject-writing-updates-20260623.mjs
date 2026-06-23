import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_WRITING_UPDATES_20260623_START */';
const end = '/* RAUM_WRITING_UPDATES_20260623_END */';

const sources = [
  {
    id: 'w-blue-night-20260622',
    href: 'https://genius912.blogspot.com/2026/06/blog-post_22.html',
    year: '2026',
    month: '06',
    title: '土地．文化敘事（六）紐倫堡藍夜藝術節',
  },
  {
    id: 'w-writing-start-201702',
    href: 'https://genius912.blogspot.com/2017/02/blog-post.html',
    year: '2017',
    month: '02',
    title: '起點',
  },
  {
    id: 'w-subbus-european-action',
    href: 'https://genius912.blogspot.com/2026/06/subbus.html',
    year: '2026',
    month: '06',
    title: 'SUBBUS',
  },
];

function removeMarkedBlock(html) {
  let output = html;
  while (output.includes(start)) {
    const startIndex = output.indexOf(start);
    const lineStart = output.lastIndexOf('\n', startIndex);
    const endIndex = output.indexOf(end, startIndex);
    if (endIndex === -1) break;
    const lineEnd = output.indexOf('\n', endIndex + end.length);
    const from = lineStart === -1 ? startIndex : lineStart;
    const to = lineEnd === -1 ? endIndex + end.length : lineEnd;
    output = output.slice(0, from) + '\n' + output.slice(to + 1);
  }
  return output;
}

function decodeHtml(value = '') {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => String.fromCodePoint(parseInt(num, 10)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function uniq(list) {
  return [...new Set(list.filter(Boolean))];
}

function extractPostBody(html) {
  const match = html.match(/<div[^>]+class=["'][^"']*post-body[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<div[^>]+class=["'][^"']*post-footer/i);
  return match ? match[1] : '';
}

function extractImages(body) {
  return uniq(
    [...body.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)]
      .map((match) => decodeHtml(match[1]))
      .filter((url) => !url.includes('blogger.com/img/icon'))
  );
}

function textFromBody(body) {
  let text = body
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/<\/(?:p|div|h\d|li)>/gi, '\n')
    .replace(/<[^>]+>/g, '');
  text = decodeHtml(text)
    .replace(/\r/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim();

  text = text
    .replace(/([。！？])([一二三四五六七八九十]、)/g, '$1\n$2')
    .replace(/(。)(SUBBUS｜Kuratorisches Project|SUBBUS｜Kuratorisches Projekt)/g, '$1\n$2')
    .replace(/([。！？])(Ausstellungszeit|展覽時間)/g, '$1\n$2')
    .replace(/([。！？])(\d+\.\s)/g, '$1\n$2');

  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !['分享', '取得連結', 'Facebook', 'Twitter', 'Pinterest', '電子郵件', '其他應用程式'].includes(line));
}

async function fetchArticle(source) {
  const response = await fetch(source.href, {
    headers: {
      'user-agent': 'Mozilla/5.0 RAUM portfolio updater',
      accept: 'text/html,application/xhtml+xml',
    },
  });
  if (!response.ok) throw new Error(`Fetch failed ${response.status}: ${source.href}`);

  const html = await response.text();
  const body = extractPostBody(html);
  const images = extractImages(body);
  const essay = textFromBody(body);
  const note = essay.find((line) => line.length > 30 && line !== source.title) || essay[1] || source.title;

  return {
    id: source.id,
    year: source.year,
    month: source.month,
    title_zh: source.title,
    title_en: source.title,
    title_de: source.title,
    note_zh: note,
    note_en: note,
    note_de: note,
    essay_zh: essay.length ? essay : [`請點選下方「閱讀原文」前往 Blogger 查看完整文章。`],
    essay_en: essay.length ? essay : [`Use the original-source link below to read the full post on Blogger.`],
    essay_de: essay.length ? essay : [`Über den Originallink unten kann der vollständige Beitrag auf Blogger gelesen werden.`],
    href: source.href,
    image: images[0] || '',
    images,
    image_alt_zh: source.title,
    image_alt_en: source.title,
    image_alt_de: source.title,
    image_caption_zh: source.title,
    image_caption_en: source.title,
    image_caption_de: source.title,
  };
}

function buildBlock(articles) {
  return `
${start}
const RAUM_WRITING_UPDATES_20260623 = ${JSON.stringify(articles, null, 2)};
const RAUM_WRITING_UPDATE_IDS = new Set(RAUM_WRITING_UPDATES_20260623.map((item) => item.id));
for (let index = WRITINGS.length - 1; index >= 0; index -= 1) {
  const writing = WRITINGS[index];
  if (
    RAUM_WRITING_UPDATE_IDS.has(writing.id) ||
    RAUM_WRITING_UPDATES_20260623.some((item) => item.href === writing.href) ||
    writing.href === 'https://genius912.blogspot.com/2015/07/bus-geschmacke.html'
  ) {
    WRITINGS.splice(index, 1);
  }
}
WRITINGS.unshift(...RAUM_WRITING_UPDATES_20260623);
window.WRITINGS = WRITINGS;
${end}
`;
}

let html = removeMarkedBlock(readFileSync(file, 'utf8'));
const articles = await Promise.all(sources.map(fetchArticle));
const block = buildBlock(articles);

if (html.includes('const LINKS = [')) {
  html = html.replace(/\nconst LINKS = \[/, `${block}\nconst LINKS = [`);
} else {
  throw new Error('Cannot find LINKS insertion point.');
}

writeFileSync(file, html, 'utf8');