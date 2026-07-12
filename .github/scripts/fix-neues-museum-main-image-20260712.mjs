import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const blockStart = '/* RAUM_NEUES_MUSEUM_WRITING_20260712_START */';
const blockEnd = '/* RAUM_NEUES_MUSEUM_WRITING_20260712_END */';
const requestedImage = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgShYDopPz9zEEWiVZhvGHHN_1egva7hFi7irs0LPwTabTEM_U7NeFU-L4wihpJcf8h-5t41u5OB435TuprvFjARkim01owAkkJTQNjmsILEQagfdf-o66928y12qCQZP_9M6e3YSYwR72iJqKcfWRSQtMneTSQyKsrMhkX484laWBL-wNF53lQrnM8fS0/w480-h640/%E7%B4%90%E5%80%AB%E5%A0%A1%E6%96%B0%E5%8D%9A%E7%89%A9%E9%A4%A8-06.JPG';

let html = readFileSync(file, 'utf8');
const startIndex = html.indexOf(blockStart);
const endIndex = html.indexOf(blockEnd, startIndex);

if (startIndex === -1 || endIndex === -1) {
  throw new Error('Cannot find Neues Museum article block.');
}

let block = html.slice(startIndex, endIndex + blockEnd.length);
const articleMatch = block.match(/const RAUM_NEUES_MUSEUM_WRITING = ([\s\S]*?);\n/);
if (!articleMatch) {
  throw new Error('Cannot find Neues Museum article object.');
}

const article = JSON.parse(articleMatch[1]);
article.image = requestedImage;
article.images = [requestedImage, ...article.images.filter((src) => src !== requestedImage)];

const nextBlock = block.replace(
  articleMatch[0],
  `const RAUM_NEUES_MUSEUM_WRITING = ${JSON.stringify(article, null, 2)};\n`
);

html = html.slice(0, startIndex) + nextBlock + html.slice(endIndex + blockEnd.length);
writeFileSync(file, html, 'utf8');
console.log('Set requested Neues Museum main image.');
