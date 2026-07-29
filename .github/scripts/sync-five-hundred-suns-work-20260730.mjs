import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_FIVE_HUNDRED_SUNS_WORK_20260730_START */';
const end = '/* RAUM_FIVE_HUNDRED_SUNS_WORK_20260730_END */';

const project = {
  id: 'five-hundred-suns',
  no: '033',
  featured: true,
  blogUrl: 'https://genius912.blogspot.com/2026/07/das-gewicht-von-funfhundert-sonnen.html',
  year: '2026',
  month: '07',
  type: 'installation',
  site_zh: '德國・紐倫堡 St. Egidien 教堂',
  site_en: 'St. Egidien Church, Nuremberg, Germany',
  site_de: 'St. Egidienkirche, Nürnberg, Deutschland',
  title_zh: '五百個太陽的重量',
  title_en: 'The Weight of Five Hundred Suns',
  title_de: 'Das Gewicht von fünfhundert Sonnen',
  summary_zh: '一艘由五百個人類願望構成的飛船。參與者的願望經人工智慧轉譯為夢境圖像，再以藍曬與螢光材料顯影於宣紙，形成介於飛船、方舟、翅膀與未知生命體之間的空間裝置。',
  summary_en: 'A spacecraft composed of five hundred human wishes. Participants’ desires are translated by artificial intelligence into dreamlike images, then developed on xuan paper with cyanotype and fluorescent materials, forming a spatial installation between spacecraft, ark, wing and unknown life form.',
  summary_de: 'Ein Flugkörper aus fünfhundert menschlichen Wünschen. Die Wünsche der Teilnehmenden werden mithilfe künstlicher Intelligenz in traumartige Bilder übersetzt und mit Cyanotypie sowie fluoreszierenden Materialien auf chinesischem Papier sichtbar gemacht.',
  blurb_zh: '五百個人、五百個夢想、五百顆私人太陽。',
  blurb_en: 'Five hundred people, five hundred dreams, five hundred private suns.',
  blurb_de: 'Fünfhundert Menschen, fünfhundert Träume, fünfhundert private Sonnen.',
  images: [
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNvwGe35Xd8z_gdLztw2I9eTRTFlp94CRuKPzp9spF9oaIB8PYCWoDVxEdT1GntsjJ2Ai8WndmxfbqHW5FwRKeQaShttNvXBVyu_p9crCi6IizCJMarOTs0fgaDp8XeFHzeWgf03yPoQ2nR9fj_RypYvFdRzSQw4kao83_CTqLEncD3mj4V_KRb6_vhO4/w640-h412/Das-Gewicht-von-fuenfhundert-Sonnen.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgilz0ScZJY15oNjpiD51ArwC4GSBvLZhldKpG_rejq7bSqMWeDPwddQ0V9uh2yCiq_GApaa5GaCGbCbku7NxlJ6NDy1Cv4F9H7rLbvscSsy0fI0GCkL062HCbgpjfwtcVcpnAs2McWlcK1Sz3_noX0oSJ1sQfZrKrtnAun_BwV847j05X3iM2Ns_JHRpA/w640-h360/Das-Gewicht-von-fuenfhundert-Sonnen-2.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj73I7OAU-oISKFn1zMYB8XDAQgwxz8Y-jcNCSH2Bxgp7-bjQUkCbZX8AbtNNmpFvO1B5LWfC7-IwbzXfaSO_NiL9K62_Iiy2dQB3cWW6sO2jOifY8CD0763X-4HHg1ESX13Ak4o7_FJ21ntdH7C7fB6MNdymIk6r1NNYOYyvQqGn6jlulQVCpGtV6zzfI/w640-h360/Das-Gewicht-von-fuenfhundert-Sonnen-3.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr_fEcXHIVUL_pkdaVQXZkSjSV0i4i7uEA8m4SOC-ghT40FvsfemjxCHZb1fHGa_SArzyh2J3AZeCGsYjnum-PFOXYRYxAteiSZeTzlqPqTMKzoiTbs8oD4x-ihcLs8DREG8i2ddrKjASXq63JGYBY-kQ7KjEUlqQrw0oij7G3PEoMUF11hYVRkXU7zO8/w640-h360/Das-Gewicht-von-fuenfhundert-Sonnen-4.jpg',
  ],
  accent: '#D6A23A',
};

const detail = {
  headline_zh: '一艘由五百個人類願望構成的飛船',
  headline_en: 'A spacecraft composed of five hundred human wishes',
  headline_de: 'Ein Flugkörper aus fünfhundert menschlichen Wünschen',
  essay_zh: [
    '《五百個太陽的重量》是一艘由五百個人類願望構成的飛船。作品邀請不同年齡、文化與生命經驗的參與者回答：「如果現實不再限制你，你最渴望抵達怎樣的人生？」他們的回答涉及愛、健康、財富、自由、權力、重逢、青春、成功與逃離。每段文字經人工智慧轉譯為夢境圖像，再以藍曬與螢光材料顯影於宣紙，繃張於圓形繡框之中。五百個繡框如同舷窗、細胞、光環與私人太陽，覆蓋於輕型船體骨架，形成一艘介於飛船、方舟、翅膀與未知生命體之間的空間裝置。',
    '遠觀時，五百個願望聚合成完整而宏大的飛行身體；靠近後，船體分裂為五百個私密世界。每個願望都提供向上的力量，也增加飛船必須承載的重量。人工智慧在此成為「慾望的顯影機」，將尚未成形的渴望快速轉化為可見未來。然而，當五百幅圖像並置，理想住宅、完美身體、遠方旅行、成功人生、永恆青春與自由狀態不斷重複。演算法看似理解個人願望，同時揭露人類的夢想早已受到廣告、電影、社群媒體與集體文化塑造。我們追求的未來，究竟源於內心，還是由時代共同製造？',
    '藍曬讓太陽成為實際參與創作的力量。光使圖像浮現，過量的光也會吞沒細節。這種雙重性連結伊卡洛斯神話：接近太陽象徵突破限制的勇氣，也伴隨失控與墜落的危險。當代人類以科技、人工智慧、資料與資本建造新的翅膀，不斷擴張能力，試圖預測未來、控制環境並突破生命限制。然而，每一次能力的增加，也會生成新的慾望，使飛行成為沒有終點的循環。',
    '作品設置於 St. Egidien 教堂。教堂長久承載人類對救贖、永恆與未知世界的想像；今日，人們逐漸把相似期待轉向科技與人工智慧，輸入願望，要求機器為尚未發生的人生生成圖像。這艘船因此成為當代的世俗方舟與新的巴別塔，承載人類逃離限制的渴望，也呈現人類試圖自行建造通往未來的道路。',
    '飛船微微傾斜，停留於升起與失速之間。燈光依序喚醒五百個願望，船體彷彿聚集能量；當亮度升至最高，藍曬細節逐漸被強光覆蓋，巨大的影子投射於教堂之中。明亮船身如天使展翼，陰影卻化為怪物與失控幻象。天使與怪物共享同一副骨架，希望與傲慢也源於同一股向上力量。',
    '當光與聲音衰退，飛船回到深藍，只留下螢光殘像。它沒有真正墜落，也未曾抵達，而是在生成、膨脹、失控與重生之間循環。《五百個太陽的重量》承認慾望推動藝術、科技與文明，同時追問：當慾望成為無限增長的命令，飛行是否仍有方向？',
    '這艘船測量的，是人類在接近太陽之前，已攜帶多少尚未被理解的願望。五百個人、五百個夢想、五百顆私人太陽，共同形成一艘等待起飛的船。它可能是通往未來的方舟，也可能是一副正在融化的翅膀。',
  ],
  essay_en: [
    'The Weight of Five Hundred Suns is a spacecraft composed of five hundred human wishes. The work invites participants of different ages, cultures and life experiences to answer: “If reality no longer limited you, what kind of life would you most long to reach?” Their answers touch on love, health, wealth, freedom, power, reunion, youth, success and escape. Each text is translated by artificial intelligence into a dream image, then developed on xuan paper with cyanotype and fluorescent materials and stretched inside circular embroidery hoops. The five hundred hoops resemble portholes, cells, halos and private suns, covering a lightweight hull structure and forming a spatial installation between spacecraft, ark, wing and unknown life form.',
    'From a distance, five hundred wishes gather into a complete and monumental flying body; up close, the hull splits into five hundred intimate worlds. Each wish provides upward force, but also adds to the weight the spacecraft must carry. Artificial intelligence becomes a “developer of desire,” quickly turning unformed longing into a visible future. Yet when five hundred images are placed together, ideal homes, perfect bodies, distant travel, successful lives, eternal youth and states of freedom repeat again and again. The algorithm appears to understand individual wishes, while also revealing that human dreams have long been shaped by advertising, cinema, social media and collective culture. Does the future we pursue come from within, or is it manufactured collectively by the age?',
    'Cyanotype allows the sun to become an actual force participating in the making of the work. Light makes images appear, but excessive light can also swallow details. This duality connects the work to the myth of Icarus: approaching the sun symbolizes the courage to break through limits, while also carrying the danger of losing control and falling. Contemporary humanity builds new wings from technology, artificial intelligence, data and capital, constantly expanding its abilities in an attempt to predict the future, control the environment and overcome the limits of life. Yet every increase in ability also generates new desires, turning flight into a cycle without an endpoint.',
    'The work is installed in St. Egidien Church. Churches have long carried human imagination about salvation, eternity and unknown worlds. Today, people increasingly turn similar expectations toward technology and artificial intelligence, entering wishes and asking machines to generate images of lives that have not yet happened. The ship therefore becomes a contemporary secular ark and a new Tower of Babel, carrying humanity’s desire to escape limitation while presenting the human attempt to build a road to the future by its own power.',
    'The spacecraft tilts slightly, suspended between ascent and stall. Lights awaken the five hundred wishes one after another, and the hull seems to gather energy. As the brightness reaches its peak, the cyanotype details are gradually covered by strong light, while a vast shadow is cast through the church. The luminous body resembles an angel spreading its wings, yet its shadow turns into a monster and an image of a future out of control. Angel and monster share the same skeleton; hope and arrogance arise from the same upward force.',
    'When light and sound recede, the spacecraft returns to deep blue, leaving only fluorescent afterimages. It does not truly fall, nor does it ever arrive. Instead, it cycles between generation, expansion, loss of control and rebirth. The Weight of Five Hundred Suns acknowledges desire as a force that drives art, technology and civilization, while asking: when desire becomes a command for unlimited growth, does flight still have a direction?',
    'This ship measures how many still-ununderstood wishes humanity already carries before approaching the sun. Five hundred people, five hundred dreams and five hundred private suns together form a ship waiting to take off. It may be an ark toward the future, or it may be a pair of wings already beginning to melt.',
  ],
  essay_de: [
    '„Das Gewicht von fünfhundert Sonnen“ ist ein Flugkörper, der aus fünfhundert menschlichen Wünschen besteht. Menschen unterschiedlichen Alters, verschiedener kultureller Hintergründe und Lebenserfahrungen werden eingeladen, dieselbe Frage zu beantworten: „Welches Leben würdest du erreichen wollen, wenn die Wirklichkeit dich nicht länger begrenzen würde?“ Die Antworten handeln von Liebe, Gesundheit, Reichtum, Freiheit, Macht, Wiederbegegnung, Jugend, Erfolg und dem Wunsch, dem gegenwärtigen Leben zu entkommen. Jeder Text wird mithilfe künstlicher Intelligenz in ein traumartiges Bild übersetzt. Anschließend wird das Motiv durch Cyanotypie und fluoreszierende Materialien auf chinesischem Papier sichtbar gemacht und in einen runden Stickrahmen eingespannt. Die fünfhundert Rahmen erinnern an Bullaugen, Zellen, Heiligenscheine und private Sonnen. Sie bedecken eine leichte, schiffsartige Tragstruktur und bilden eine räumliche Installation, deren Gestalt zwischen Raumschiff, Arche, Flügel und unbekanntem Lebewesen oszilliert.',
    'Aus der Distanz verbinden sich die fünfhundert Wünsche zu einem monumentalen Flugkörper. Beim Näherkommen zerfällt diese scheinbare Einheit in fünfhundert intime Welten. Jeder Wunsch erzeugt eine aufwärtsgerichtete Kraft und vergrößert zugleich das Gewicht, das das Schiff tragen muss.',
    'Die künstliche Intelligenz übernimmt dabei die Funktion einer „Entwicklungsmaschine des Begehrens“. Sie verwandelt sprachliche Vorstellungen in sichtbare Zukunftsbilder und gibt Wünschen eine Form, die zuvor nur im Inneren existierte. Werden jedoch fünfhundert Bilder nebeneinandergestellt, treten deutliche Wiederholungen hervor: ideale Häuser, perfekte Körper, Reisen in die Ferne, beruflicher Erfolg, ewige Jugend und absolute Freiheit. Der Algorithmus scheint jeden individuellen Wunsch zu verstehen. Gleichzeitig legt er offen, wie stark menschliche Zukunftsbilder durch Werbung, Filme, soziale Medien und kollektive kulturelle Vorstellungen geprägt sind. Entsteht die Zukunft, nach der wir streben, tatsächlich in unserem Inneren? Oder verfolgen wir Bilder, die unsere Zeit bereits für uns entworfen hat?',
    'Durch die Cyanotypie wird die Sonne zu einer realen Mitwirkenden am Entstehungsprozess. Licht lässt das Bild aus der leeren Fläche hervortreten. Eine zu starke Belichtung kann seine Einzelheiten jedoch wieder verschlucken. Diese doppelte Eigenschaft des Lichts verbindet die Arbeit mit dem Mythos von Ikarus. Die Annäherung an die Sonne verkörpert den Mut, Grenzen zu überschreiten, und trägt zugleich die Gefahr von Kontrollverlust und Absturz in sich.',
    'Ikarus erscheint hier als Sinnbild der gegenwärtigen Zivilisation. Der Mensch baut seine neuen Flügel aus Technologie, künstlicher Intelligenz, Daten und Kapital. Er erweitert seine Fähigkeiten, versucht die Zukunft vorherzusagen, seine Umwelt zu kontrollieren und die Grenzen des Lebens zu überwinden. Mit jeder Erweiterung seiner Möglichkeiten entstehen jedoch neue Wünsche. Das Fliegen verwandelt sich dadurch in einen Kreislauf ohne endgültiges Ziel.',
    'Die Installation befindet sich in der Nürnberger Kirche St. Egidien. Kirchen tragen seit Jahrhunderten die menschlichen Vorstellungen von Erlösung, Ewigkeit und unbekannten Welten. Menschen übergaben dort ihr unkontrollierbares Schicksal einer göttlichen Macht. Heute richten sich vergleichbare Erwartungen zunehmend an Technologie und künstliche Intelligenz. Wir geben unsere Wünsche in Maschinen ein und verlangen von ihnen Bilder eines Lebens, das noch nicht stattgefunden hat.',
    'Das Flugobjekt wird dadurch zu einer zeitgenössischen, säkularen Arche und zugleich zu einem neuen Turm zu Babel. Es trägt den Wunsch, den Begrenzungen des Lebens zu entkommen, und verkörpert den Versuch des Menschen, aus eigener Kraft einen Weg in eine unbekannte Zukunft zu errichten.',
    'Das Schiff hängt leicht geneigt im Kirchenraum und befindet sich zwischen Aufstieg und Strömungsabriss. Nach und nach erweckt das Licht die fünfhundert Wünsche. Die einzelnen Bilder beginnen zu leuchten, als würde der Körper Energie für seinen Abflug sammeln. Sobald die Beleuchtung ihre höchste Intensität erreicht, werden die Details der Cyanotypien vom Licht überlagert. Gleichzeitig wächst der Schatten des Flugkörpers über die Architektur der Kirche.',
    'Der leuchtende Körper erinnert an einen Engel mit ausgebreiteten Flügeln. Sein vergrößerter Schatten verwandelt sich in ein fremdes Wesen, ein Monster oder das Bild einer außer Kontrolle geratenen Zukunft. Engel und Monster teilen dasselbe Skelett. Hoffnung und Hybris entstehen aus derselben Kraft, die den Menschen nach oben zieht.',
    'Wenn Licht und Klang langsam abnehmen, kehrt das Schiff in ein tiefes Blau zurück. Nur fluoreszierende Nachbilder bleiben sichtbar. Es stürzt nicht endgültig ab und erreicht kein bestimmtes Ziel. Es bewegt sich fortwährend zwischen Entstehung, Ausdehnung, Kontrollverlust und Wiedergeburt.',
    '„Das Gewicht von fünfhundert Sonnen“ erkennt das Begehren als eine Kraft an, aus der Kunst, Technologie und Zivilisation hervorgehen. Zugleich stellt die Arbeit die Frage, ob ein Flug noch eine Richtung besitzt, sobald das Begehren zu einem Befehl unbegrenzten Wachstums wird.',
    'Dieses Schiff misst, wie viele unverstandene Wünsche die Menschheit bereits mit sich trägt, bevor sie versucht, sich der Sonne zu nähern. Fünfhundert Menschen, fünfhundert Träume und fünfhundert private Sonnen bilden gemeinsam ein Schiff, das auf seinen Abflug wartet. Es könnte eine Arche auf dem Weg in die Zukunft sein. Es könnte ebenso ein Flügel sein, der bereits zu schmelzen beginnt.',
  ],
  chapters: null,
  press: [
    { date: '2026.07', source: 'Blog', source_en: 'Blog', label_zh: '閱讀原文', label_en: 'Read original post', label_de: 'Originaltext lesen', href: 'https://genius912.blogspot.com/2026/07/das-gewicht-von-funfhundert-sonnen.html' },
  ],
  materials_zh: 'AI 生成圖像 · 藍曬 · 螢光材料 · 宣紙 · 圓形繡框 · 輕型船體骨架 · 燈光與聲音',
  materials_en: 'AI-generated imagery · cyanotype · fluorescent materials · xuan paper · circular embroidery hoops · lightweight hull structure · light and sound',
  materials_de: 'KI-generierte Bilder · Cyanotypie · fluoreszierende Materialien · chinesisches Papier · runde Stickrahmen · leichte Tragstruktur · Licht und Klang',
  role_zh: '空間裝置 / 參與式創作 / 主創',
  role_en: 'Spatial installation · participatory creation · lead artist',
  role_de: 'Rauminstallation · partizipative Arbeit · Künstlerische Leitung',
};

const archiveItem = {
  no: project.no,
  month: project.month,
  title_zh: project.title_zh,
  title_en: project.title_en,
  title_de: project.title_de,
  site: '紐倫堡 / Nürnberg',
  site_zh: project.site_zh,
  site_en: project.site_en,
  site_de: project.site_de,
  type: project.type,
  link: `#${project.id}`,
};

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
  const project = ${JSON.stringify(project, null, 2)};
  const detail = ${JSON.stringify(detail, null, 2)};
  const archiveItem = ${JSON.stringify(archiveItem, null, 2)};

  const existingProjectIndex = window.PROJECTS.findIndex((item) => item.id === project.id || item.blogUrl === project.blogUrl);
  if (existingProjectIndex >= 0) window.PROJECTS.splice(existingProjectIndex, 1);
  window.PROJECTS.unshift(project);

  let archiveGroup = window.ARCHIVE.find((group) => group.year === project.year);
  if (!archiveGroup) {
    archiveGroup = { year: project.year, items: [] };
    window.ARCHIVE.unshift(archiveGroup);
  }
  archiveGroup.items = archiveGroup.items.filter((item) => item.link !== archiveItem.link && item.title_zh !== archiveItem.title_zh);
  archiveGroup.items.unshift(archiveItem);

  window.DETAILS[project.id] = detail;
}
${end}
`;

const anchor = '</script>\n  <script type="text/babel" data-inline="src/detail-view.jsx">';
if (!html.includes(anchor)) {
  throw new Error('Cannot find detail-view insertion point.');
}
html = html.replace(anchor, `${block}\n${anchor}`);
writeFileSync(file, html, 'utf8');
console.log('Synced Five Hundred Suns work.');
