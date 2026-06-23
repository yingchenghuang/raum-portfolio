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
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGam9mc8jEyFjgVowLxgdsjrXoA5ouHgPBbJclPuAej_uC-k_YlAk5eViF1OHWFruiHENo_j5hE-CBG_fjYNDqblbW8RjwxZf_MnSMydoQZhEn5M6o5BKjwq9ThJF_zqs11Uu7N3AQTOsUAcnpDf3p1ydcueIgcnAufA48BVIE8Yvco9PAw_zyhPVGEnU/w640-h480/DSC06519-1.jpg'
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
