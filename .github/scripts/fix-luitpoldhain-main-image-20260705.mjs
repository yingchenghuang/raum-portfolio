import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const oldImage = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLa9g52RWKBIgBH-oqlzGuM_5eVJNi6pRHI026FIlkZ9LQQ5Xs8wZJyYMch-o3QjUzgR4eVKfUC8S2ombMLBvmHrQpFHjuvsdawlCk1eY8cTBsaBuvtZ1XZxkGNSrpLSRwNS4UD_GOgetFz9jXdbpzLV2ZzeBcKH5H7S6lBsuHBw-UQUIWFCq0YQMtDVg/w640-h96/%E7%B4%90%E5%80%AB%E5%A0%A1%20Luitpoldhain-03.JPG';
const newImage = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAGbpzHVGpPfUofO0coq4Z2eGnAZrHwJWvZbmeeDTYRh6m57AKYSWZuRLU06fNgCJ0I1E0W1vcXKfTzZmYhXx_Kky_rsqJu9ygNrLqzI3eHlGjmu3KLpWRKweQOkDD7_rwxc2s6o4TMZ7vreZhqyTqWcP2XYHHn2okQKKgt3BUYb6N1Lhwq1GmcOdQmPI/w640-h376/%E7%B4%90%E5%80%AB%E5%A0%A1%20Luitpoldhain-01.jpg';

let html = readFileSync(file, 'utf8');

const blockStart = '/* RAUM_LUITPOLDHAIN_WRITING_20260705_START */';
const blockEnd = '/* RAUM_LUITPOLDHAIN_WRITING_20260705_END */';
const startIndex = html.indexOf(blockStart);
const endIndex = html.indexOf(blockEnd, startIndex);

if (startIndex === -1 || endIndex === -1) {
  throw new Error('Cannot find Luitpoldhain article block.');
}

let block = html.slice(startIndex, endIndex + blockEnd.length);
block = block.replace(`"image": "${oldImage}"`, `"image": "${newImage}"`);
block = block.replace(
  `"images": [\n    "${oldImage}",\n    "${newImage}",`,
  `"images": [\n    "${newImage}",\n    "${oldImage}",`
);

html = html.slice(0, startIndex) + block + html.slice(endIndex + blockEnd.length);
writeFileSync(file, html, 'utf8');
console.log('Set clearer Luitpoldhain main image.');
