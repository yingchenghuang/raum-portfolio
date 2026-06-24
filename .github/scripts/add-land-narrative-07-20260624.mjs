import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_LAND_NARRATIVE_07_20260624_START */';
const end = '/* RAUM_LAND_NARRATIVE_07_20260624_END */';

const source = {
  id: 'w-land-narrative-07-body-city-measure',
  href: 'https://genius912.blogspot.com/2026/06/blog-post_24.html',
  year: '2026',
  month: '06',
  title_zh: '土地．文化敘事（七）身體作為城市丈量單位',
  title_en: 'Land and Cultural Narratives VII: The Body as a Unit for Measuring the City',
  title_de: 'Land und kulturelle Erzählungen VII: Der Körper als Maßeinheit der Stadt',
};

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
  const text = decodeHtml(
    body
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<br\s*\/?\s*>/gi, '\n')
      .replace(/<\/(?:p|div|h\d|li)>/gi, '\n')
      .replace(/<[^>]+>/g, '')
  )
    .replace(/\r/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim();

  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !['分享', '取得連結', 'Facebook', 'Twitter', 'Pinterest', '電子郵件', '其他應用程式'].includes(line));
}

async function fetchArticle() {
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
  const note = essay.find((line) => line.length > 30 && line !== source.title_zh) || essay[1] || source.title_zh;

  return {
    id: source.id,
    year: source.year,
    month: source.month,
    title_zh: source.title_zh,
    title_en: source.title_en,
    title_de: source.title_de,
    note_zh: note,
    note_en: note,
    note_de: note,
    essay_zh: essay.length ? essay : ['請點選下方「閱讀原文」前往 Blogger 查看完整文章。'],
    essay_en: essay.length ? essay : ['Use the original-source link below to read the full post on Blogger.'],
    essay_de: essay.length ? essay : ['Über den Originallink unten kann der vollständige Beitrag auf Blogger gelesen werden.'],
    href: source.href,
    image: images[0] || '',
    images,
    image_alt_zh: source.title_zh,
    image_alt_en: source.title_en,
    image_alt_de: source.title_de,
    image_caption_zh: source.title_zh,
    image_caption_en: source.title_en,
    image_caption_de: source.title_de,
  };
}

function fallbackArticle() {
  return {
    id: source.id,
    year: source.year,
    month: source.month,
    title_zh: source.title_zh,
    title_en: source.title_en,
    title_de: source.title_de,
    note_zh: '請點選下方「閱讀原文」前往 Blogger 查看完整文章。',
    note_en: 'Use the original-source link below to read the full post on Blogger.',
    note_de: 'Über den Originallink unten kann der vollständige Beitrag auf Blogger gelesen werden.',
    essay_zh: ['請點選下方「閱讀原文」前往 Blogger 查看完整文章。'],
    essay_en: ['Use the original-source link below to read the full post on Blogger.'],
    essay_de: ['Über den Originallink unten kann der vollständige Beitrag auf Blogger gelesen werden.'],
    href: source.href,
    image: '',
    images: [],
    image_alt_zh: source.title_zh,
    image_alt_en: source.title_en,
    image_alt_de: source.title_de,
    image_caption_zh: source.title_zh,
    image_caption_en: source.title_en,
    image_caption_de: source.title_de,
  };
}

let article;
try {
  article = await fetchArticle();
} catch (error) {
  console.warn(`Land narrative 07 fallback used: ${error.message}`);
  article = fallbackArticle();
}

let html = removeMarkedBlock(readFileSync(file, 'utf8'));
const block = `
${start}
const RAUM_LAND_NARRATIVE_07 = ${JSON.stringify(article, null, 2)};
for (let index = WRITINGS.length - 1; index >= 0; index -= 1) {
  const writing = WRITINGS[index];
  if (writing.id === RAUM_LAND_NARRATIVE_07.id || writing.href === RAUM_LAND_NARRATIVE_07.href) {
    WRITINGS.splice(index, 1);
  }
}
WRITINGS.unshift(RAUM_LAND_NARRATIVE_07);
window.WRITINGS = WRITINGS;
${end}
`;

const anchor = 'const LINKS = [';
if (!html.includes(anchor)) throw new Error('Cannot find LINKS insertion point.');
html = html.replace(anchor, `${block}\n${anchor}`);
writeFileSync(file, html, 'utf8');
console.log('Added land narrative seven writing article');
