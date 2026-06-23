import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_TRIM_WRITING_IMAGES_20260623_START */';
const end = '/* RAUM_TRIM_WRITING_IMAGES_20260623_END */';

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

let html = readFileSync(file, 'utf8');
html = removeMarkedBlock(html);

const block = `
${start}
WRITINGS.forEach((writing) => {
  if (typeof writing.image === 'string') writing.image = writing.image.trim();
  if (Array.isArray(writing.images)) {
    writing.images = writing.images.map((image) => typeof image === 'string' ? image.trim() : image);
  }
});
const RAUM_PUBLIC_SPACE_IMAGE = RAUM_WRITING_SOURCE_STRICT?.['w-land-narrative-03']?.image?.trim();
if (RAUM_PUBLIC_SPACE_IMAGE) {
  WRITINGS.forEach((writing) => {
    if (writing.id !== 'w-land-narrative-03') return;
    writing.image = RAUM_PUBLIC_SPACE_IMAGE;
    writing.images = [RAUM_PUBLIC_SPACE_IMAGE];
    writing.image_alt_zh = writing.title_zh || '土地．文化敘事（三）公共空間的美感經驗';
    writing.image_alt_en = writing.title_en || writing.image_alt_zh;
    writing.image_alt_de = writing.title_de || writing.image_alt_zh;
    writing.image_caption_zh = writing.title_zh || '土地．文化敘事（三）公共空間的美感經驗';
    writing.image_caption_en = writing.title_en || writing.image_caption_zh;
    writing.image_caption_de = writing.title_de || writing.image_caption_zh;
  });
}
window.WRITINGS = WRITINGS;
${end}
`;

const anchor = 'const LINKS = [';
if (!html.includes(anchor)) throw new Error('Cannot find LINKS array');
html = html.replace(anchor, `${block}\n${anchor}`);
writeFileSync(file, html, 'utf8');
console.log('Trimmed and restored writing image sources');
