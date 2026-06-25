import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_REMOVE_GRID_TOGGLE_20260626_START */';
const end = '/* RAUM_REMOVE_GRID_TOGGLE_20260626_END */';

let html = readFileSync(file, 'utf8');
const existing = new RegExp(`\\n?\\s*${start.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${end.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`, 'g');
html = html.replace(existing, '\n');

const css = `
  ${start}
  .rp-grid-toggle,
  button[aria-label*="grid" i],
  button[aria-label*="版面格線"],
  button[aria-label*="Raster" i] {
    display: none !important;
  }
  .rp-grid-overlay {
    display: none !important;
  }
  ${end}
`;

if (!html.includes('</style>')) {
  throw new Error('Cannot find </style> in index.html');
}

html = html.replace('</style>', `${css}\n</style>`);
writeFileSync(file, html, 'utf8');
console.log('Removed the grid toggle button from the generated site.');
