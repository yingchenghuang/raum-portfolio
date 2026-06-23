import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_WRITING_SOURCE_STRICT_START */';
const end = '/* RAUM_WRITING_SOURCE_STRICT_END */';

const sources = {
  'w-land-narrative-01': {
    href: 'https://genius912.blogspot.com/2026/06/blog-post.html',
    title_zh: '無人的市場，與自己的對話',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEhYEqJDoBol1gIqGCTbdy_pPqetg5ygAdfY8QipgAv8rd6OR4ugH236BY0aoDesBQM_ztbzBFSzWsWdwUKD93At_d9i4eggFQFPo8M_8JYdlLCJRj28TLygSb0ABeoeQT4Qv-tCFjksiGV5ns353CTgEDXUse-Tdbim-DFjaAY1wnY9NHl3TeSdJYKZ=s1600'
  },
  'w-land-narrative-02': {
    href: 'https://genius912.blogspot.com/2026/06/archaologie-einer-seelenlosen-stadt.html',
    title_zh: '一座無魂城市的考古學',
    title_en: 'Archaeology of a soulless city',
    title_de: 'Archäologie einer seelenlosen Stadt',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUI-HsqEPaKgG5WDu0Gaf_jKCTv5goWYjrv6wzJn1lKbFDd3A4gCN1030RzSasrmN5NUAJZcx2KMY2T7RcHSMWP5YHQv9DRUEfeRipnnxqFZ1mU5tqTiAEiNJqIf01uK2Zgcatxk5f2Es/s1600/Altrathaus-11.jpg'
  },
  'w-land-narrative-03': {
    href: 'https://genius912.blogspot.com/2026/06/blog-post_20.html',
    title_zh: '公共空間的美感經驗',
    image: 'data:image/jpeg;base64,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 '
  },
  'w-hallo-servus-2026': {
    href: 'https://genius912.blogspot.com/2026/06/hallo-servus.html',
    title_zh: 'Hallo! Servus!',
    title_en: 'Hallo! Servus!',
    title_de: 'Hallo! Servus!',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc_3-YtqTQ-xv8tBAVCeyrrMR_x4nfDbGpyFaNqP1yirE3rl2oK1Z5CBRghS1GRYctH7832-fBcYMFDgMPlI0bjKDr4LGdnJsoLRmcodf3Thy804VZ0orslzMlxPs7zMnw806Yj8PYOUg/s1600/Hallo!%2BServus%2B!%2B%2B2012.10.03.jpg'
  },
  'w-subbus-european-action': {
    href: 'https://genius912.blogspot.com/2026/06/subbus.html',
    title_zh: 'SUBBUS',
    title_en: 'SUBBUS',
    title_de: 'SUBBUS',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgA_30cWd-HvldCmT5GLGtUCLVSjyxln8aEsossr0C62TuhsstwB3Uml9lwkwAaO1fc4bfxSXSqL-tD827j-cgqOlcBJ1qZIAJJpCipnEdBnqoHS_ngHw9jdznilxEyL1EB-YmXyHKHLNw/s1600/DSC01236.JPG'
  }
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

let html = readFileSync(file, 'utf8');
html = removeMarkedBlock(html);

const block = `
${start}
const RAUM_WRITING_SOURCE_STRICT = ${JSON.stringify(sources, null, 2)};
const RAUM_WRITING_IMAGE_KEYS = [
  'image',
  'images',
  'image_alt_zh',
  'image_alt_en',
  'image_alt_de',
  'image_caption_zh',
  'image_caption_en',
  'image_caption_de'
];
WRITINGS.forEach((writing) => {
  const source = RAUM_WRITING_SOURCE_STRICT[writing.id];
  RAUM_WRITING_IMAGE_KEYS.forEach((key) => delete writing[key]);
  if (!source) return;
  Object.assign(writing, source);
  writing.image_alt_zh = source.title_zh || source.title_en || source.title_de || writing.title_zh;
  writing.image_alt_en = source.title_en || source.title_zh || source.title_de || writing.title_en;
  writing.image_alt_de = source.title_de || source.title_zh || source.title_en || writing.title_de;
  writing.image_caption_zh = source.title_zh || writing.title_zh;
  writing.image_caption_en = source.title_en || writing.title_en;
  writing.image_caption_de = source.title_de || writing.title_de;
});
${end}
`;

const anchor = 'const LINKS = [';
if (!html.includes(anchor)) throw new Error('Cannot find LINKS array');

html = html.replace(anchor, `${block}\n${anchor}`);
writeFileSync(file, html, 'utf8');
console.log('Restricted writing images and titles to original blog sources');