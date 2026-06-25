import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const badJoin = "existing.essay_zh.join('" + String.fromCharCode(10) + "')";
const goodJoin = 'existing.essay_zh.join(String.fromCharCode(10))';
const gridStart = '/* RAUM_REMOVE_GRID_TOGGLE_20260626_START */';
const gridEnd = '/* RAUM_REMOVE_GRID_TOGGLE_20260626_END */';

let html = readFileSync(file, 'utf8');
let changed = false;

if (html.includes(badJoin)) {
  html = html.split(badJoin).join(goodJoin);
  changed = true;
  console.log('Repaired land narrative seven generated join syntax.');
} else {
  console.log('No land narrative seven syntax repair needed.');
}

const beforeGridCleanup = html;
const markedBlock = new RegExp(`\\n?\\s*${gridStart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${gridEnd.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`, 'g');
html = html.replace(markedBlock, '\n');

html = html.replace(/\n\s*<button\s+className=\{\s*'rp-grid-toggle '\s*\+\s*\(grid \? 'on' : ''\)\s*\}[\s\S]*?<\/button>/g, '');
html = html.replace(/\{grid && <GridOverlay \/>\}/g, '{false && <GridOverlay />}');

const gridCss = `
  ${gridStart}
  .rp-grid-toggle,
  button[aria-label*="grid" i],
  button[aria-label*="版面格線"],
  button[aria-label*="Raster" i] {
    display: none !important;
  }
  .rp-grid-overlay {
    display: none !important;
  }
  ${gridEnd}
`;

if (html.includes('</style>')) {
  html = html.replace('</style>', `${gridCss}\n</style>`);
}

if (html !== beforeGridCleanup) {
  changed = true;
  console.log('Removed grid toggle from final generated index.');
}

if (changed) {
  writeFileSync(file, html, 'utf8');
} else {
  console.log('No generated index changes needed.');
}
