import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const oldUrl = 'https://www.calameo.com/read/00754380023602a5550da';
const newUrl = 'https://www.calameo.com/read/0082507103a273e62e01b';

let html = readFileSync(file, 'utf8');
if (!html.includes(oldUrl) && !html.includes(newUrl)) {
  throw new Error('Cannot find Calameo link in index.html');
}
html = html.split(oldUrl).join(newUrl);
writeFileSync(file, html, 'utf8');
console.log('Updated Calameo portfolio link');
