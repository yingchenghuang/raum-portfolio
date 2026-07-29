import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_FIVE_HUNDRED_SUNS_COVER_20260730_START */';
const end = '/* RAUM_FIVE_HUNDRED_SUNS_COVER_20260730_END */';
const projectId = 'five-hundred-suns';
const requestedCover = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj73I7OAU-oISKFn1zMYB8XDAQgwxz8Y-jcNCSH2Bxgp7-bjQUkCbZX8AbtNNmpFvO1B5LWfC7-IwbzXfaSO_NiL9K62_Iiy2dQB3cWW6sO2jOifY8CD0763X-4HHg1ESX13Ak4o7_FJ21ntdH7C7fB6MNdymIk6r1NNYOYyvQqGn6jlulQVCpGtV6zzfI/w640-h360/Das-Gewicht-von-fuenfhundert-Sonnen-3.jpg';

function removeMarkedBlock(html) {
  const startIndex = html.indexOf(start);
  if (startIndex === -1) return html;
  const endIndex = html.indexOf(end, startIndex);
  if (endIndex === -1) return html;
  return html.slice(0, startIndex) + html.slice(endIndex + end.length);
}

let html = removeMarkedBlock(readFileSync(file, 'utf8'));
const block = `
${start}
{
  const requestedCover = ${JSON.stringify(requestedCover)};
  const project = window.PROJECTS.find((item) => item.id === ${JSON.stringify(projectId)});
  if (!project) throw new Error('Five Hundred Suns project not found.');
  project.images = [requestedCover, ...project.images.filter((src) => src !== requestedCover)];
}
${end}
`;

const anchor = '/* RAUM_FIVE_HUNDRED_SUNS_WORK_20260730_END */';
if (!html.includes(anchor)) {
  throw new Error('Cannot find Five Hundred Suns work block.');
}
html = html.replace(anchor, `${anchor}\n${block}`);
writeFileSync(file, html, 'utf8');
console.log('Updated Five Hundred Suns cover image.');
