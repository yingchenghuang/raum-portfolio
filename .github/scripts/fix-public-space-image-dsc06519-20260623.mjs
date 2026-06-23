import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '<!-- RAUM_PUBLIC_SPACE_IMAGE_FIX_20260623_START -->';
const end = '<!-- RAUM_PUBLIC_SPACE_IMAGE_FIX_20260623_END -->';
const image = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGam9mc8jEyFjgVowLxgdsjrXoA5ouHgPBbJclPuAej_uC-k_YlAk5eViF1OHWFruiHENo_j5hE-CBG_fjYNDqblbW8RjwxZf_MnSMydoQZhEn5M6o5BKjwq9ThJF_zqs11Uu7N3AQTOsUAcnpDf3p1ydcueIgcnAufA48BVIE8Yvco9PAw_zyhPVGEnU/w640-h480/DSC06519-1.jpg';

let html = readFileSync(file, 'utf8');
html = html.replace(new RegExp(`\\n?${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}\\n?`, 'g'), '\n');
html = html.replace(/https:\/\/blogger\.googleusercontent\.com\/img\/b\/R29vZ2xl\/AVvXsEjt2P22WULthTcN_Hbq-dgeXga7HN-_Z2z29zSybcG3I_RTT0Gw8Zx7hA0ukncb1FrU6UREaJ3QxoKrbtf2Kn8ww-GTSZpJ1sKCWqGqmjp0e5sZQ3m2VZRhc8MigueDiGaJL9HCo3yKSK0\/s1600\/DSC08834\.JPG/g, image);

const patch = `
${start}
<script>
(() => {
  const image = ${JSON.stringify(image)};
  const titleParts = ['土地．文化敘事（三）', '公共空間的美感經驗'];
  const fix = () => {
    try {
      const writings = Array.isArray(WRITINGS) ? WRITINGS : (Array.isArray(window.WRITINGS) ? window.WRITINGS : []);
      writings.forEach((writing) => {
        const text = [writing?.id, writing?.title_zh, writing?.title_en, writing?.title_de].filter(Boolean).join(' ');
        if (writing?.id === 'w-land-narrative-03' || titleParts.every((part) => text.includes(part))) {
          writing.image = image;
          writing.images = [image];
        }
      });
    } catch (error) {}
    document.querySelectorAll('img').forEach((img) => {
      const text = [img.alt || '', img.closest('article, section, .modal, .writing-card, .writing-detail')?.textContent || ''].join(' ');
      if (!titleParts.some((part) => text.includes(part)) && !img.src.includes('DSC08834.JPG')) return;
      img.removeAttribute('srcset');
      img.removeAttribute('sizes');
      img.src = image;
    });
  };
  document.addEventListener('DOMContentLoaded', fix);
  window.addEventListener('load', fix);
  setTimeout(fix, 300);
  setTimeout(fix, 1200);
})();
</script>
${end}
`;

if (!html.includes('</body>')) throw new Error('Cannot find closing body tag');
html = html.replace('</body>', `${patch}\n</body>`);
writeFileSync(file, html, 'utf8');
console.log('Forced DSC06519 public-space image.');

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
