import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_TYPOGRAPHY_ALIGNMENT_20260629_START */';
const end = '/* RAUM_TYPOGRAPHY_ALIGNMENT_20260629_END */';

let html = readFileSync(file, 'utf8');
const blockPattern = new RegExp(`\\n?\\s*${start.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${end.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`, 'g');
html = html.replace(blockPattern, '\n');

const css = `
${start}
:root {
  --rp-reading-measure: min(100%, 92ch);
  --rp-golden-left: 38.2%;
  --rp-golden-right: 61.8%;
  --rp-golden-gap: clamp(40px, 5vw, 112px);
}

.rp-detail-body,
.rp-writing-detail-body {
  max-width: none !important;
  width: 100% !important;
  box-sizing: border-box;
  grid-template-columns: minmax(280px, var(--rp-golden-left)) minmax(0, var(--rp-golden-right)) !important;
  column-gap: var(--rp-golden-gap) !important;
  align-items: start;
}

.rp-detail-body > *,
.rp-writing-detail-body > * {
  min-width: 0;
}

.rp-detail-essay,
.rp-detail-ch-body,
.rp-writing-detail-body p,
.rp-writing-detail-body article,
.rp-writing-detail-body .rp-detail-essay,
.rp-about-body,
.rp-about-lead,
.rp-studio-body,
.rp-arch-body,
.rp-arch-note,
.rp-objects-lead,
.rp-objects-intro,
.rp-work-summary,
.rp-obj-body,
.rp-obj-detail,
.rp-archive-detail,
.rp-footer-body {
  text-align: justify;
  text-align-last: left;
  text-justify: inter-character;
  hanging-punctuation: allow-end;
  hyphens: auto;
  -webkit-hyphens: auto;
  overflow-wrap: break-word;
  word-break: normal;
  line-break: strict;
  max-width: var(--rp-reading-measure);
}

.rp-detail-essay,
.rp-detail-chapters,
.rp-writing-detail-body > :not(.rp-writing-figure):not(figure):not(img) {
  justify-self: stretch;
  width: 100%;
}

.rp-writing-figure,
.rp-detail-fig,
.rp-detail-gallery,
.rp-detail-hero,
.rp-detail-plate {
  max-width: 100%;
}

.rp-writing-detail-body p,
.rp-detail-essay p,
.rp-detail-ch-body p,
.rp-about-body p,
.rp-studio-body p,
.rp-arch-body p,
.rp-objects-lead p,
.rp-objects-intro p,
.rp-work-summary p,
.rp-obj-body p,
.rp-obj-detail p,
.rp-archive-detail p,
.rp-footer-body p {
  text-align: justify;
  text-align-last: left;
  text-justify: inter-character;
  hyphens: auto;
  -webkit-hyphens: auto;
  overflow-wrap: break-word;
  word-break: normal;
  line-break: strict;
}

.rp-writing-row,
.rp-writing-detail,
.rp-detail,
.rp-work-info,
.rp-obj-head,
.rp-obj-taxcard,
.rp-press-source,
.rp-detail-title,
.rp-detail-headline,
.rp-writing-detail h1,
.rp-writing-detail h2,
.rp-writing-detail h3 {
  overflow-wrap: anywhere;
  word-break: normal;
  hyphens: auto;
  -webkit-hyphens: auto;
  text-wrap: balance;
}

.rp-writing-row .rp-work-summary,
.rp-writing-row .rp-obj-body,
.rp-writing-row p,
.rp-writing-detail p,
.rp-writing-detail-body p {
  letter-spacing: 0.01em;
  word-spacing: 0.02em;
}

html[lang^="zh"] .rp-writing-detail-body,
html[lang^="zh"] .rp-writing-detail-body p,
html[lang^="zh"] .rp-detail-essay,
html[lang^="zh"] .rp-detail-essay p,
html[lang^="zh"] .rp-detail-ch-body,
html[lang^="zh"] .rp-detail-ch-body p {
  text-justify: inter-ideograph;
  line-break: strict;
  letter-spacing: 0.015em;
}

html[lang^="en"] .rp-writing-detail-body p,
html[lang^="de"] .rp-writing-detail-body p,
html[lang^="en"] .rp-detail-essay,
html[lang^="en"] .rp-detail-essay p,
html[lang^="de"] .rp-detail-essay,
html[lang^="de"] .rp-detail-essay p,
html[lang^="en"] .rp-detail-ch-body,
html[lang^="en"] .rp-detail-ch-body p,
html[lang^="de"] .rp-detail-ch-body,
html[lang^="de"] .rp-detail-ch-body p {
  text-justify: auto;
  letter-spacing: 0;
  word-spacing: 0.04em;
}

.rp-nav,
.rp-header,
.rp-lang-toggle,
.rp-cta-btn,
.rp-cta-ghost,
.rp-detail-close,
.rp-detail-meta,
.rp-detail-mono,
.rp-detail-source,
.rp-work-cta,
.rp-obj-tags,
.rp-obj-tax,
.rp-footer-mail {
  text-align: initial;
  text-align-last: auto;
  hyphens: manual;
  -webkit-hyphens: manual;
}

@media (min-width: 1200px) {
  .rp-detail-body,
  .rp-writing-detail-body {
    padding-left: clamp(56px, 4vw, 92px) !important;
    padding-right: clamp(72px, 8vw, 168px) !important;
  }

  .rp-detail-essay,
  .rp-detail-ch-body,
  .rp-writing-detail-body p,
  .rp-writing-detail-body article {
    max-width: min(100%, 980px);
  }
}

@media (max-width: 980px) {
  .rp-detail-body,
  .rp-writing-detail-body {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }
}

@media (max-width: 760px) {
  .rp-writing-detail-body,
  .rp-detail-body {
    max-width: none !important;
    width: 100% !important;
  }

  .rp-writing-detail-body p,
  .rp-detail-essay,
  .rp-detail-essay p,
  .rp-detail-ch-body,
  .rp-detail-ch-body p,
  .rp-about-body,
  .rp-about-lead,
  .rp-studio-body,
  .rp-arch-body,
  .rp-arch-note,
  .rp-objects-lead,
  .rp-objects-intro,
  .rp-work-summary,
  .rp-obj-body,
  .rp-obj-detail,
  .rp-archive-detail,
  .rp-footer-body {
    max-width: 100%;
    text-align: justify;
    text-justify: inter-character;
    overflow-wrap: anywhere;
  }
}
${end}
`;

if (!html.includes('</style>')) {
  throw new Error('Cannot find style insertion point.');
}
html = html.replace('</style>', `${css}\n</style>`, 1);
writeFileSync(file, html, 'utf8');
console.log('Applied typography alignment styles.');
