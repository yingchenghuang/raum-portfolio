import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_SUBBUS_TRANSLATION_20260624_START */';
const end = '/* RAUM_SUBBUS_TRANSLATION_20260624_END */';

function paragraphs(text) {
  return text
    .trim()
    .split(/\n{2,}/)
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

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

const translation = {
  title_en: 'Land and Cultural Narratives V: The Bus as Artistic Medium - SUBBUS European Action Curatorial Project',
  title_de: 'Land und kulturelle Erzählungen V: Der Bus als künstlerisches Medium - SUBBUS Europäisches Aktions- und Kurationsprojekt',
  note_en: 'What rules does art need? None. Can we break them? Yes. At the beginning I imagined a bus full of possibilities: food and conflict, cleanliness and confusion, and a new way of living born inside the bus.',
  note_de: 'Welche Regeln braucht die Kunst? Keine. Können wir sie brechen? Ja. Am Anfang stellte ich mir einen Bus voller Möglichkeiten vor: Essen und Konflikt, Sauberkeit und Verwirrung, ein neuer Lebensstil, der im Bus entsteht.',
  essay_en: paragraphs(`
The Bus as Artistic Medium

SUBBUS European Action Curatorial Project

What rules does art need? None. Can we break them? Yes. At the beginning I imagined a bus full of possibilities: food and conflict, cleanliness and confusion. A new way of living was born inside the bus. For this action, I invited friends to hold a breakfast party in the bus.

Exhibition period: 2014-2015. Project sites: touring actions across Germany and several European cities. Type: performance art, spatial translation, cross-cultural curatorial practice.

1. Curatorial Starting Point: Redefining the Bus as Cultural Space

In a curatorial course in Germany in 2014, the SUBBUS project began from bodily experience. Each participant proposed their own interpretation of the bus and its possibilities. I started from the memory of crowded buses in Taiwan and placed it beside the German public-transport rule that strictly forbids eating and drinking. From this contrast, the bus became a moving cultural intersection.

During the annual exhibition, I curated a performance called the Bus Sandwich Project. Its inspiration came from our in-between generation. We are like the middle layer of a sandwich, pressed between tradition above and transformation below, searching in the gap for a new vocabulary and a bodily strategy.

2. Exhibition Medium: A Moving Bus

SUBBUS is a curatorial platform that can be translated in many ways. This bus carries people and objects, but also the knowledge of action, the space of debate and the curatorial experiment itself.

Without a clear consensus at the beginning, we completed every stage through collective creation: purchasing the bus, rebuilding it, developing the theme and opening it to public participation. The space continued to form through the process and entered into dialogue with audiences, cities and citizens at each site.

3. Redefining Space: Between Public and Private

Through discussion and practical work, the bus became a flexible and transformable space. By day it could be a research room, meeting room or site for art lectures; by night it could become a camping space, a mobile exhibition space or even a temporary urban club.

We asked how a space opens, and under what conditions publicness comes into being. At each stop, we built direct dialogue with local citizens.

4. Aim of the Artistic Action: Building a Platform for Exchange

During the project, we traveled through several European cities, working with local museums and art associations while also entering community spaces and social margins. SUBBUS became a platform for dialogue between art and public space, reconsidering mobility, embodiment and spatial negotiation from a cross-cultural perspective.

5. Design Challenge and Practical Thinking

The rebuilding of the bus was limited by both budget and time. We had to find a balance between completely emptying the space and introducing professional design. This was a negotiation between value and function, and also a technical problem.

In the end, we found a solution that joined function with spirit, allowing this moving exhibition site to respond to the diversity of collective use and to the flexibility of artistic action.

6. A Journey without a Standard Answer

SUBBUS is an unfinished experiment, a curatorial journey that cannot be fully planned in advance. It proves that art can exist in a space without white walls, and that curating can happen within moving dialogue and dialectics. This bus is a spatial narrative that continues to form.
`),
  essay_de: paragraphs(`
Der Bus als künstlerisches Medium

SUBBUS Europäisches Aktions- und Kurationsprojekt

Welche Regeln braucht die Kunst? Keine. Können wir sie brechen? Ja. Am Anfang stellte ich mir einen Bus voller Möglichkeiten vor: Essen und Konflikt, Sauberkeit und Verwirrung. Im Bus entstand eine neue Lebensweise. Für diese Aktion lud ich Freunde zu einer Frühstücksparty in den Bus ein.

Ausstellungszeit: 2014-2015. Projektorte: Aktionen in Deutschland und mehreren europäischen Städten. Form: Performancekunst, Raumübersetzung und transkulturelle kuratorische Praxis.

1. Kuratorischer Ausgangspunkt: Den Bus als kulturellen Raum neu definieren

In einem kuratorischen Seminar in Deutschland entwickelte sich 2014 das Projekt SUBBUS aus körperlicher Erfahrung. Jede teilnehmende Person schlug eine eigene Deutung des Busses und seiner Möglichkeiten vor. Ich ging von der Erinnerung an überfüllte Busse in Taiwan aus und stellte sie der deutschen Regel gegenüber, im öffentlichen Nahverkehr nicht zu essen oder zu trinken. Aus diesem Gegensatz wurde der Bus zu einem kulturellen Kreuzungspunkt in Bewegung.

Während der Jahresausstellung kuratierte ich eine Performance mit dem Titel Bus-Sandwich-Projekt. Die Idee entstand aus unserer Generation dazwischen. Wir sind wie die mittlere Schicht eines Sandwichs, eingeklemmt zwischen der Tradition von oben und dem Wandel von unten, auf der Suche nach einer neuen Sprache und einer körperlichen Strategie im Zwischenraum.

2. Ausstellungsmedium: Ein fahrender Bus

SUBBUS ist eine kuratorische Plattform, die sich auf viele Weise übersetzen lässt. Dieser Bus trägt Menschen und Dinge, aber auch das Wissen der Aktion, den Raum der Debatte und das kuratorische Experiment selbst.

Ohne einen klaren Konsens zu Beginn vollzogen wir jeden Schritt in kollektiver Arbeit: den Kauf des Busses, den Umbau, die Entwicklung der Fragestellung und die Öffnung für öffentliche Teilhabe. Der Raum entstand fortlaufend im Prozess und trat an jedem Ort in Dialog mit Publikum, Stadt und Bürgerinnen und Bürgern.

3. Raum neu definieren: Zwischen Öffentlichkeit und Privatheit

Durch Diskussion und praktische Arbeit wurde der Bus zu einem flexibel wandelbaren Raum. Tagsüber konnte er Forschungsraum, Besprechungsraum oder Ort für Kunstvorträge sein; nachts wurde er Campingraum, fahrender Ausstellungsraum oder sogar ein temporärer Stadtclub.

Wir fragten, wie sich ein Raum öffnet und unter welchen Bedingungen Öffentlichkeit entsteht. An jedem Standort bauten wir einen direkten Dialog mit den Bürgerinnen und Bürgern auf.

4. Ziel der künstlerischen Aktion: Eine Plattform des Austauschs

Während des Projekts bereisten wir mehrere europäische Städte, arbeiteten mit lokalen Museen und Kunstvereinen zusammen und gingen auch in soziale Räume und gesellschaftliche Randzonen. SUBBUS wurde zu einer Plattform für den Dialog zwischen Kunst und öffentlichem Raum und befragte aus transkultureller Sicht Mobilität, Körperlichkeit und Raumverhandlung neu.

5. Gestalterische Herausforderung und praktisches Denken

Der Umbau des Busses war durch Budget und Zeit doppelt begrenzt. Wir mussten ein Gleichgewicht finden zwischen der völligen Leerung des Raums und dem Einsatz professioneller Gestaltung. Das war eine Verhandlung zwischen Wert und Funktion und zugleich eine technische Aufgabe.

Am Ende fanden wir eine Lösung, die Funktion und Geist verbindet und diesen fahrenden Ausstellungsort der Vielfalt kollektiver Nutzung sowie der Beweglichkeit künstlerischer Aktion gerecht werden lässt.

6. Eine Reise ohne festgelegte Antwort

SUBBUS ist ein unvollendetes Experiment, eine kuratorische Reise, die sich nicht vollständig vorplanen lässt. Es zeigt, dass Kunst in einem Raum ohne weiße Wände bestehen kann und dass Kuratieren in bewegten Dialogen und in der Dialektik geschehen kann. Dieser Bus ist ein räumlicher Erzählkörper, der sich fortwährend bildet.
`),
  image_alt_en: 'The Bus as Artistic Medium - SUBBUS European Action Curatorial Project',
  image_alt_de: 'Der Bus als künstlerisches Medium - SUBBUS Europäisches Aktions- und Kurationsprojekt',
  image_caption_en: 'Land and Cultural Narratives V: The Bus as Artistic Medium - SUBBUS European Action Curatorial Project',
  image_caption_de: 'Land und kulturelle Erzählungen V: Der Bus als künstlerisches Medium - SUBBUS Europäisches Aktions- und Kurationsprojekt',
};

function buildBlock() {
  return `
${start}
const RAUM_SUBBUS_TRANSLATION_20260624 = ${JSON.stringify(translation, null, 2)};
WRITINGS.forEach((writing) => {
  if (writing.id !== 'w-subbus-european-action') return;
  Object.assign(writing, RAUM_SUBBUS_TRANSLATION_20260624);
});
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