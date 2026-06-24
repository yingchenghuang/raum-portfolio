import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const badJoin = "existing.essay_zh.join('" + String.fromCharCode(10) + "')";
const goodJoin = 'existing.essay_zh.join(String.fromCharCode(10))';

let html = readFileSync(file, 'utf8');
if (html.includes(badJoin)) {
  html = html.split(badJoin).join(goodJoin);
  writeFileSync(file, html, 'utf8');
  console.log('Repaired land narrative seven generated join syntax.');
} else {
  console.log('No land narrative seven syntax repair needed.');
}
