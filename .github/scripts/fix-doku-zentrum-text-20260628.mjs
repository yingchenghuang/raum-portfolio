import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
let html = readFileSync(file, 'utf8');

const replacements = [
  [
    'Domenig 的核心動作是切。他讓一條約 130 公尺的玻璃鋼構斜向通道穿過 Kongresshalle 北翼，官方叫它 glass Stake，一根楔子打進建築，永久破壞納粹那種強迫性的直角、對稱與軸線秩序。',
    'Domenig 的核心動作是切。他讓一條約 130 公尺的玻璃鋼構斜向通道穿過 Kongresshalle 北翼，叫它 glass Stake，一根楔子打進建築，永久破壞納粹那種強迫性的直角、對稱與軸線秩序。'
  ],
  [
    'Domenig’s core action was to cut. He ran an approximately 130-meter glass-and-steel diagonal passage through the north wing of the Kongresshalle. Officially called the glass Stake, it is a wedge driven into the building, permanently damaging the forced right angles, symmetry and axial order of Nazi architecture.',
    'Domenig’s core action was to cut. He ran an approximately 130-meter glass-and-steel diagonal passage through the north wing of the Kongresshalle. Called the glass Stake, it is a wedge driven into the building, permanently damaging the forced right angles, symmetry and axial order of Nazi architecture.'
  ],
  [
    'Domenigs zentrale Handlung ist der Schnitt. Er führt einen etwa 130 Meter langen diagonalen Glas-Stahl-Gang durch den Nordflügel der Kongresshalle. Offiziell wird er glass Stake genannt: ein Keil, der in das Gebäude getrieben wird und die erzwungenen rechten Winkel, die Symmetrie und die Achsenordnung der nationalsozialistischen Architektur dauerhaft beschädigt.',
    'Domenigs zentrale Handlung ist der Schnitt. Er führt einen etwa 130 Meter langen diagonalen Glas-Stahl-Gang durch den Nordflügel der Kongresshalle. Genannt wird er glass Stake: ein Keil, der in das Gebäude getrieben wird und die erzwungenen rechten Winkel, die Symmetrie und die Achsenordnung der nationalsozialistischen Architektur dauerhaft beschädigt.'
  ]
];

for (const [from, to] of replacements) {
  html = html.split(from).join(to);
}

writeFileSync(file, html, 'utf8');
console.log('Synced corrected Doku-Zentrum wording.');

await import('./sync-human-rights-road-writing-20260629.mjs');
