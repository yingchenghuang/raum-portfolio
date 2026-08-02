import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_CITY_TIME_MAIN_IMAGE_FIX_20260803_START */';
const end = '/* RAUM_CITY_TIME_MAIN_IMAGE_FIX_20260803_END */';
const requestedImage = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGXM3I31rprQ8UmM9eCicu4OXVcAAhkexhHAzx7vAH004lqNef0gYO1dJR60K7VRl243iKL4KpDy66F91PClg4UBXqUzrn_NnFDJOitIzoBBMDDSbuoOPveU24UNtNjK2a8hINz-M-vqOQHP44k32nEshtDcJgFRbLcHOnn40mVmbmWgd-LXFtI3-Ve3M/s4896/14.16%20Nu%CC%88rnberg-3.JPG';

function removeMarkedBlock(html) {
  const startIndex = html.indexOf(start);
  if (startIndex === -1) return html;
  const endIndex = html.indexOf(end, startIndex);
  if (endIndex === -1) return html;
  return html.slice(0, startIndex) + html.slice(endIndex + end.length);
}

let html = removeMarkedBlock(readFileSync(file, 'utf8'));
const block = `\n${start}\n{\n  const article = WRITINGS.find((writing) => writing.id === 'w-city-time-record-20260803' || writing.href === 'https://genius912.blogspot.com/2026/08/blog-post_03.html');\n  if (article) {\n    article.image = ${JSON.stringify(requestedImage)};\n    const existingImages = Array.isArray(article.images) ? article.images.filter((image) => image !== ${JSON.stringify(requestedImage)}) : [];\n    article.images = [${JSON.stringify(requestedImage)}, ...existingImages];\n    article.image_alt_zh = '紐倫堡聖母教堂小人舞鐘原部落格圖片';\n    article.image_alt_en = 'Original blog image of the Männleinlaufen clock at Nuremberg Frauenkirche';\n    article.image_alt_de = 'Originales Blogbild der Männleinlaufen-Uhr an der Nürnberger Frauenkirche';\n    window.WRITINGS = WRITINGS;\n  }\n}\n${end}\n`;

const anchor = 'const LINKS = [';
if (!html.includes(anchor)) {
  throw new Error('Cannot find LINKS insertion point.');
}
html = html.replace(anchor, `${block}\n${anchor}`);
writeFileSync(file, html, 'utf8');
console.log('Set requested City Time article main image.');
