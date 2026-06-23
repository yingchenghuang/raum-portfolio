import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '<!-- RAUM_PUBLIC_SPACE_IMAGE_FIX_20260623_START -->';
const end = '<!-- RAUM_PUBLIC_SPACE_IMAGE_FIX_20260623_END -->';
const image = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjt2P22WULthTcN_Hbq-dgeXga7HN-_Z2z29zSybcG3I_RTT0Gw8Zx7hA0ukncb1FrU6UREaJ3QxoKrbtf2Kn8ww-GTSZpJ1sKCWqGqmjp0e5sZQ3m2VZRhc8MigueDiGaJL9HCo3yKSK0/s1600/DSC08834.JPG';

let html = readFileSync(file, 'utf8');
html = html.replace(new RegExp(`\\n?${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}\\n?`, 'g'), '\n');

const patch = `
${start}
<script>
(() => {
  const image = ${JSON.stringify(image)};
  const titleParts = ['土地．文化敘事（三）', '公共空間的美感經驗'];

  const getWritings = () => {
    try {
      if (Array.isArray(WRITINGS)) return WRITINGS;
    } catch (error) {}
    return Array.isArray(window.WRITINGS) ? window.WRITINGS : [];
  };

  const patchWritingData = () => {
    getWritings().forEach((writing) => {
      const text = [writing?.id, writing?.title_zh, writing?.title_en, writing?.title_de].filter(Boolean).join(' ');
      if (writing?.id === 'w-land-narrative-03' || titleParts.every((part) => text.includes(part))) {
        writing.image = image;
        writing.images = [image];
        writing.image_alt_zh = '土地．文化敘事（三）公共空間的美感經驗';
        writing.image_alt_en = 'Land and Cultural Narratives III: Aesthetic Experience in Public Space';
        writing.image_alt_de = 'Land und kulturelle Erzählungen III: ästhetische Erfahrung im öffentlichen Raum';
      }
    });
  };

  const isTargetImage = (img) => {
    const alt = img.getAttribute('alt') || '';
    if (titleParts.some((part) => alt.includes(part))) return true;
    const scope = img.closest('[data-writing-id="w-land-narrative-03"], article, section, .writing-card, .writing-detail, .modal');
    const text = scope?.textContent || '';
    return titleParts.every((part) => text.includes(part));
  };

  const patchImages = () => {
    document.querySelectorAll('img').forEach((img) => {
      if (!isTargetImage(img)) return;
      img.removeAttribute('srcset');
      img.removeAttribute('sizes');
      if (img.src !== image) img.src = image;
    });
  };

  const fix = () => {
    patchWritingData();
    patchImages();
  };

  document.addEventListener('DOMContentLoaded', () => {
    fix();
    if (document.body) {
      new MutationObserver(fix).observe(document.body, { childList: true, subtree: true });
    }
  });
  window.addEventListener('load', fix);
  setTimeout(fix, 300);
  setTimeout(fix, 1200);
})();
</script>
${end}
`;

if (!html.includes('</body>')) {
  throw new Error('Cannot find closing body tag');
}

html = html.replace('</body>', `${patch}\n</body>`);
writeFileSync(file, html, 'utf8');
console.log('Installed public-space writing image fallback.');

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
