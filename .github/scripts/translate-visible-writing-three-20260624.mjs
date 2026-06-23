import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_VISIBLE_WRITING_TRANSLATIONS_20260624_START */';
const end = '/* RAUM_VISIBLE_WRITING_TRANSLATIONS_20260624_END */';

const blueNightImage =
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwcO7R2Jv7N_bjPVt2GflurNyJrmFcTAgLEOph5SKOXQPE5ZclSI0ubP7LAqhW3UT3MY9Yf3CwlJmvLVDUCemStCVlkl0E-4-zCLrX26ncoCgGpfPqZ9vu52Q-AOxjjRu1t2IHsfqbva2ydlZE-2hiJaWaNs9uJmnB688Kmqpz-IlTYZic2PpqhNkH4zY/w640-h480/%E8%87%AA%E7%94%B1%E7%9A%84%E7%95%8C%E7%B7%9A.JPG';

const patches = {
  'w-blue-night-20260622': {
    title_en: 'Land and Cultural Narratives VI: Nuremberg Blue Night Art Festival',
    title_de: 'Land und kulturelle Erzählungen VI: Die Blaue Nacht Nürnberg',
    note_en:
      'Work: The Boundaries of Freedom (Die Grenzen der Freiheit). A public-art project for Nuremberg Blue Night, using barriers and warning lights to ask how freedom is shaped in public space.',
    note_de:
      'Werk: Die Grenzen der Freiheit. Ein Public-Art-Projekt für die Blaue Nacht Nürnberg, das mit Absperrungen und Warnlichtern fragt, wie Freiheit im öffentlichen Raum geformt wird.',
    essay_en: [
      'Nuremberg Blue Night Art Festival',
      'Work: The Boundaries of Freedom (Die Grenzen der Freiheit)',
      'In 2015, Nuremberg Blue Night took freedom as its theme. I used construction barriers and warning lights to build a temporary maze in the courtyard of the Old Town Hall, inviting visitors to move through a space where freedom and restriction were felt through the body.',
      'A barrier usually means control, closure or detour. In this work, it was returned to the audience. Every movement of a barrier created a new path, while also becoming a possible obstacle for someone else.',
      'Freedom is not an abstract slogan. It is a choice made while sharing space with others. The work brought the invisible boundaries of urban order into view and asked viewers to feel the relation between freedom, responsibility and courtesy.',
      'Public art begins from the whole environment. It reads society, economy, culture, history, space and time together, then turns those layers into an experience that can be entered.',
    ],
    essay_de: [
      'Die Blaue Nacht Nürnberg',
      'Werk: Die Grenzen der Freiheit',
      'Im Jahr 2015 stand die Blaue Nacht Nürnberg unter dem Thema Freiheit. Ich verwendete Bauzäune und Warnlichter, um im Innenhof des Alten Rathauses ein temporäres Labyrinth zu bauen, in dem Freiheit und Begrenzung körperlich erfahrbar wurden.',
      'Ein Zaun bedeutet im Stadtraum meist Kontrolle, Sperre oder Umweg. In dieser Arbeit wurde er dem Publikum zurückgegeben. Jede Bewegung eines Zauns erzeugte einen neuen Weg und konnte zugleich zum Hindernis für andere werden.',
      'Freiheit ist kein abstrakter Slogan. Sie ist eine Entscheidung, die entsteht, wenn man Raum mit anderen teilt. Die Arbeit machte die unsichtbaren Grenzen städtischer Ordnung sichtbar und fragte nach Freiheit, Verantwortung und Rücksicht.',
      'Öffentliche Kunst beginnt mit dem gesamten Umfeld. Sie liest Gesellschaft, Ökonomie, Kultur, Geschichte, Raum und Zeit zusammen und verwandelt diese Schichten in eine Erfahrung, die betreten werden kann.',
    ],
    image_alt_en: 'Nuremberg Blue Night Art Festival',
    image_alt_de: 'Die Blaue Nacht Nürnberg',
    image_caption_en: 'Land and Cultural Narratives VI: Nuremberg Blue Night Art Festival',
    image_caption_de: 'Land und kulturelle Erzählungen VI: Die Blaue Nacht Nürnberg',
  },
  'w-writing-start-201702': {
    title_en: 'Starting Point',
    title_de: 'Ausgangspunkt',
    note_en:
      'When I began writing about space, the outline was not yet clear. I started by looking back at fieldwork, movement and the places where life leaves traces.',
    note_de:
      'Als ich begann, über Raum zu schreiben, war die Kontur noch nicht klar. Ich begann mit einem Rückblick auf Feldarbeit, Bewegung und Orte, an denen Leben Spuren hinterlässt.',
    essay_en: [
      'When I decided to begin writing about space, I did not yet have a clear framework for the questions I wanted to pursue. I was not trying to propose a finished point of view; I was trying to find a thread.',
      'In 2014 I began to sort through earlier field experiences, movements, observations and notes. Looking back from Taiwan, those fragments gradually became a way to return to the stories that had happened on the land.',
      'Writing is a method of arranging experience. It gives scattered observations a sequence, lets memories meet evidence, and allows a place to be understood through both body and thought.',
      'The starting point is not a conclusion. It is a position from which one can begin again: to look at the relation between people and place, between daily life and public space, and between memory and landscape.',
      'For me, writing about space is also writing about how we live. Each place carries traces of use, feeling, order and conflict. To write is to slowly read those traces.',
    ],
    essay_de: [
      'Als ich beschloss, über Raum zu schreiben, hatte ich noch kein klares Gerüst für die Fragen, die mich beschäftigten. Ich wollte keine fertige Position formulieren, sondern einen Faden finden.',
      '2014 begann ich, frühere Felderfahrungen, Bewegungen, Beobachtungen und Notizen zu ordnen. Aus der Rückkehr nach Taiwan heraus wurden diese Fragmente allmählich zu einer Möglichkeit, zu den Geschichten zurückzukehren, die auf dem Land geschehen waren.',
      'Schreiben ist eine Methode, Erfahrung zu ordnen. Es gibt verstreuten Beobachtungen eine Folge, lässt Erinnerung und Beleg aufeinandertreffen und macht einen Ort zugleich körperlich und gedanklich lesbar.',
      'Der Ausgangspunkt ist kein Schluss. Er ist eine Position, von der aus man neu beginnen kann: die Beziehung zwischen Menschen und Ort, zwischen Alltag und öffentlichem Raum, zwischen Erinnerung und Landschaft zu betrachten.',
      'Über Raum zu schreiben bedeutet für mich auch, über die Art zu schreiben, wie wir leben. Jeder Ort trägt Spuren von Gebrauch, Gefühl, Ordnung und Konflikt. Schreiben heißt, diese Spuren langsam zu lesen.',
    ],
    image_alt_en: 'Starting Point',
    image_alt_de: 'Ausgangspunkt',
    image_caption_en: 'Starting Point',
    image_caption_de: 'Ausgangspunkt',
  },
  'w-hallo-servus-2026': {
    title_en:
      'Land and Cultural Narratives IV: Hallo! Servus! Barter, Street Affection and Urban Order',
    title_de:
      'Land und kulturelle Erzählungen IV: Hallo! Servus! Tausch, Straßenmenschlichkeit und städtische Ordnung',
    note_en:
      'From a simple greeting, the project observes how a city is seen, touched and understood through barter, street vending and everyday encounters.',
    note_de:
      'Aus einem einfachen Gruß heraus beobachtet das Projekt, wie eine Stadt durch Tausch, Straßenverkauf und alltägliche Begegnungen gesehen, berührt und verstanden wird.',
    essay_en: [
      'The project begins with one phrase: “Hallo! Servus!” A daily greeting opens a field of observation: how a city is seen, touched, exchanged and understood in ordinary life.',
      'For a traveler, the most memorable parts of a city are often not monuments, but small scenes along the street. A vendor, a passerby, a brief conversation and an improvised exchange can reveal the social texture of a place.',
      'Barter is not only an economic action. It is a temporary relationship. It allows objects, gestures and trust to circulate, and it shows how people negotiate value beyond price.',
      'Street life contains its own order. It is not always written into regulation, but it appears through distance, rhythm, courtesy, occupation and movement.',
      'Through these encounters, the city becomes less like a map and more like a living system. Affection, rule, flexibility and conflict all meet in the small public spaces of everyday life.',
    ],
    essay_de: [
      'Das Projekt beginnt mit einem Satz: „Hallo! Servus!“ Ein alltäglicher Gruß öffnet ein Beobachtungsfeld: wie eine Stadt im gewöhnlichen Leben gesehen, berührt, getauscht und verstanden wird.',
      'Für Reisende bleiben oft nicht die Monumente am stärksten in Erinnerung, sondern kleine Szenen auf der Straße. Ein Händler, eine Passantin, ein kurzes Gespräch und ein improvisierter Austausch können die soziale Textur eines Ortes sichtbar machen.',
      'Tausch ist nicht nur eine wirtschaftliche Handlung. Er ist eine vorübergehende Beziehung. Er lässt Dinge, Gesten und Vertrauen zirkulieren und zeigt, wie Menschen Wert jenseits des Preises aushandeln.',
      'Das Straßenleben besitzt seine eigene Ordnung. Sie steht nicht immer in Vorschriften, sondern erscheint durch Abstand, Rhythmus, Höflichkeit, Besetzung und Bewegung.',
      'Durch diese Begegnungen wird die Stadt weniger zu einer Karte als zu einem lebendigen System. Zuneigung, Regel, Beweglichkeit und Konflikt treffen in den kleinen öffentlichen Räumen des Alltags aufeinander.',
    ],
    image_alt_en:
      'Land and Cultural Narratives IV: Hallo! Servus! Barter, Street Affection and Urban Order',
    image_alt_de:
      'Land und kulturelle Erzählungen IV: Hallo! Servus! Tausch, Straßenmenschlichkeit und städtische Ordnung',
    image_caption_en:
      'Land and Cultural Narratives IV: Hallo! Servus! Barter, Street Affection and Urban Order',
    image_caption_de:
      'Land und kulturelle Erzählungen IV: Hallo! Servus! Tausch, Straßenmenschlichkeit und städtische Ordnung',
  },
};

const fallbacks = {
  'w-blue-night-20260622': {
    id: 'w-blue-night-20260622',
    year: '2026',
    month: '06',
    title_zh: '土地．文化敘事（六）紐倫堡藍夜藝術節',
    note_zh:
      '作品：《自由的界線》（Die Grenzen der Freiheit）。以工程圍欄與警示燈在紐倫堡舊市政廳內庭建立一座可被觀眾移動與協商的迷宮。',
    essay_zh: [
      '紐倫堡藍夜藝術節',
      '作品：《自由的界線》（Die Grenzen der Freiheit）',
      '以工程圍欄與警示燈，在舊市政廳的內庭裡築起一座可以移動的迷宮，讓觀眾在彼此讓路與互相阻擋之間，碰觸自由的邊界。',
    ],
    href: 'https://genius912.blogspot.com/2026/06/blog-post_22.html',
    image: blueNightImage,
    images: [blueNightImage],
    image_alt_zh: '土地．文化敘事（六）紐倫堡藍夜藝術節',
    image_caption_zh: '土地．文化敘事（六）紐倫堡藍夜藝術節',
  },
};

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

function buildBlock() {
  return `
${start}
const RAUM_VISIBLE_WRITING_TRANSLATIONS_20260624 = ${JSON.stringify({ patches, fallbacks }, null, 2)};
{
  const { patches: translationPatches, fallbacks: writingFallbacks } = RAUM_VISIBLE_WRITING_TRANSLATIONS_20260624;
  const patchWriting = (id) => {
    const patch = translationPatches[id];
    const fallback = writingFallbacks[id];
    const existing = WRITINGS.find((writing) => writing.id === id);
    if (existing) {
      Object.assign(existing, patch);
      if (fallback?.image) {
        existing.image = existing.image || fallback.image;
        existing.images = Array.isArray(existing.images) && existing.images.length ? existing.images : fallback.images;
      }
      return;
    }
    if (fallback) {
      WRITINGS.unshift({ ...fallback, ...patch });
    }
  };
  Object.keys(translationPatches).forEach(patchWriting);
}
window.WRITINGS = WRITINGS;
${end}
`;
}

let html = removeMarkedBlock(readFileSync(file, 'utf8'));
if (!html.includes('const LINKS = [')) {
  throw new Error('Cannot find LINKS insertion point.');
}
html = html.replace(/\nconst LINKS = \[/, `${buildBlock()}\nconst LINKS = [`);
writeFileSync(file, html, 'utf8');