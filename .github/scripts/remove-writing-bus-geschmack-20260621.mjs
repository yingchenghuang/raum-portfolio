import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_WRITING_REMOVE_BUS_GESCHMACK_START */';
const end = '/* RAUM_WRITING_REMOVE_BUS_GESCHMACK_END */';

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
for (let index = WRITINGS.length - 1; index >= 0; index -= 1) {
  const writing = WRITINGS[index];
  if (
    writing.id === 'w-bus-geschmacke-2015-update' ||
    writing.href === 'https://genius912.blogspot.com/2015/07/bus-geschmacke.html'
  ) {
    WRITINGS.splice(index, 1);
  }
}
${end}
`;

const anchor = 'const LINKS = [';
if (!html.includes(anchor)) throw new Error('Cannot find LINKS array');

html = html.replace(anchor, `${block}\n${anchor}`);
writeFileSync(file, html, 'utf8');
console.log('Removed Bus Geschmack from writing section');