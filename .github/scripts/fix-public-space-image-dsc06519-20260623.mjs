import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '<!-- RAUM_PUBLIC_SPACE_IMAGE_FIX_20260623_START -->';
const end = '<!-- RAUM_PUBLIC_SPACE_IMAGE_FIX_20260623_END -->';
const oldImage = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjt2P22WULthTcN_Hbq-dgeXga7HN-_Z2z29zSybcG3I_RTT0Gw8Zx7hA0ukncb1FrU6UREaJ3QxoKrbtf2Kn8ww-GTSZpJ1sKCWqGqmjp0e5sZQ3m2VZRhc8MigueDiGaJL9HCo3yKSK0/s1600/DSC08834.JPG';
const image = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGam9mc8jEyFjgVowLxgdsjrXoA5ouHgPBbJclPuAej_uC-k_YlAk5eViF1OHWFruiHENo_j5hE-CBG_fjYNDqblbW8RjwxZf_MnSMydoQZhEn5M6o5BKjwq9ThJF_zqs11Uu7N3AQTOsUAcnpDf3p1ydcueIgcnAufA48BVIE8Yvco9PAw_zyhPVGEnU/w640-h480/DSC06519-1.jpg';

let html = readFileSync(file, 'utf8');
html = html.replace(new RegExp(`\\n?${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}\\n?`, 'g'), '\n');
html = html.split(oldImage).join(image);
writeFileSync(file, html, 'utf8');
console.log('Set DSC06519 only in writing data; removed broad image override.');

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
