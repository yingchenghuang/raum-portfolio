import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_NUREMBERG_FOREST_WRITING_20260628_START */';
const end = '/* RAUM_NUREMBERG_FOREST_WRITING_20260628_END */';

const article = {
  "id": "w-nuremberg-forest-art-academy-20260628",
  "year": "2026",
  "month": "06",
  "title_zh": "城市・土地・文化敘事（十）紐倫堡藝術學院的林中顯影",
  "title_en": "City, Land and Cultural Narratives X: Forest Exposure at the Academy of Fine Arts Nuremberg",
  "title_de": "Stadt, Land und kulturelle Erzählungen X: Wald-Belichtung an der Akademie der Bildenden Künste Nürnberg",
  "note_zh": "不同季節裡，時常走在 Valznerweiher 的森林裡晨光散步。那是藝術與哲學的散步路徑。它來自身體，來自一種大自然禮物的接收。",
  "note_en": "Across different seasons, I often walked in the morning light through the forest of Valznerweiher. It was a path of art and philosophy, received through the body as a gift from nature.",
  "note_de": "In verschiedenen Jahreszeiten ging ich oft im Morgenlicht durch den Wald von Valznerweiher. Es war ein Weg der Kunst und Philosophie, vom Körper empfangen wie ein Geschenk der Natur.",
  "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbDfhPQfkzh-iuV5pWh6-9Mca2MFnfLzVP_SpW4FVXiu21-NtbYpjrlTA4xtVlNFv6pF58_iA7O07Y3YyAGAv-7aSCtcj1K7T64p3HLI2hlxuIXllYxXleO8Jf29hbXeVnstm3jWCkRYtYNCDJa4G6MzVlr1Xdj_3RMDVxbBaocL5r6SIXeQvc61C_SBA/w480-h640/Forst%2003.03.2014.JPG",
  "images": [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbDfhPQfkzh-iuV5pWh6-9Mca2MFnfLzVP_SpW4FVXiu21-NtbYpjrlTA4xtVlNFv6pF58_iA7O07Y3YyAGAv-7aSCtcj1K7T64p3HLI2hlxuIXllYxXleO8Jf29hbXeVnstm3jWCkRYtYNCDJa4G6MzVlr1Xdj_3RMDVxbBaocL5r6SIXeQvc61C_SBA/w480-h640/Forst%2003.03.2014.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisRvBxLs2msKatG33h-kiLDFeU7UyszRUPkw9CTyjFx4C7mkxXR-v6Z_BCO120_zKYM7fsy0OP5uIpPASItOqGBi9_NtSAEBN_qUSGZt3rmKSHtBTTSYqeSDdHdGmPfzdv_TacIU99aF1ykJ8nRLFvzsPnU2I9WSg24CZxXzsRp4HdDPosYqv3fPVRiuk/w640-h480/DSC02897.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9PlDeg5YvGdakkaE0Ql3zd-C23iTilZwzEwuR6UAjTRIrlROTYEQ14G2ItzCJlsZcP6qWEbDyGqcgmWXRNRlnZq15cJkBr4CjuLDKOmBYFH9QETRkqa8-yijeyL5ikYsaKbg2GhxmWhBaCFnyliyMuy4XTYXNMgGu_Kp6F7zVuFnZiznl4ro6gWnYwOo/w640-h480/DSC04144%20%E6%8B%B7%E8%B2%9D.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk7gewmMJJzT2LBJJaPpNqwviESV3CisycZvNHfyPoLc0jYsL-SS8qwJCS3_8BFnpdLZw_DmpyviyzFuqKOyg6bKoPNgb124R55BrG7-0fLwu5tPJFqwc12-6O6f_EV4YjZWKup1EWDrWnigTEsU8h82ETKONjvA5d2a4-0KC2Z1joUAzY8wM2jeEhJvg/w480-h640/DSC04485.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEf61EUoDXpmf3c2XBJB8VGkod96NqIQqqAcOACF-r4YRfl7kzUNQc16GkhP4J7fDAwrAmL01FrIM4Ze6ssmMxYj0K5XcAOl0iPolMd8TlgnaJzGBvZm4cyK2LeZl1ETCuNkiHGVAkxLIxYDeAvqBUXo7ylNC9qBLCFamIj9rQI-tURyVeMT9bA_DjrL8/w640-h440/adbk%20nurnberg.jpg"
  ],
  "image_alt_zh": "紐倫堡藝術學院林中校園原部落格圖片",
  "image_alt_en": "Original blog image of the forest campus at the Academy of Fine Arts Nuremberg",
  "image_alt_de": "Originales Blogbild des Waldcampus der Akademie der Bildenden Künste Nürnberg",
  "essay_zh": [
    "城市・土地・文化敘事（十）紐倫堡藝術學院的林中顯影",
    "紐倫堡藝術學院的林中顯影",
    "不同季節裡，時常走在 Valznerweiher 的森林裡晨光散步。那是藝術與哲學的散步路徑。它來自身體，來自一種大自然禮物的接收。",
    "建築師Sep Ruf 設計這座校園時，刻意不在他的亭台之間蓋室內走廊，他用一條條只有屋頂、兩側全然開敞的長廊把工作室串起來。於是每一次從木工坊走到繪畫教室，我都得走出室內，踏進森林。冬天的清晨，冷風直接灌進長廊，落葉在腳下沙沙作響，雨後的松針氣味黏在空氣裡。剛來的時候我抱怨過冷，後來才懂，那是建築師的刻意。他要藝術家的身體持續和自然的溫度、風向、濕度摩擦，因為他相信，那種摩擦才是創作的泉源。",
    "這座德語區最古老的藝術學院創立於 1662 年，卻把最關鍵的一次重生留給了 1954 年。要讀懂它為什麼隱身在城市邊陲的帝國森林，得回到戰後西德的廢墟。紐倫堡曾經是納粹的標竿城市，希特勒在這裡蓋了沉重、對稱、充滿壓迫的黨代會集會場，用巨大的石材和絕對的軸線，彰顯極權的集體意志。戰後重建這所學校時，巴伐利亞政府做了一個根本的決定。新校區必須在空間上，徹底和那套紀念碑式的宏大決裂。他們刻意避開象徵權力核心的市中心，把學校放進森林與動物園的綠帶。在那套政策邏輯裡，森林是治療與重生的催化劑，讓藝術教育重新回到個體與自然的對話。",
    "建築師 Sep Ruf，把這個政治命題翻譯成了空間。他的核心只有一句話。不要高牆，不要大門，不要紀念碑。他蓋了十二座低矮、平頂、罩著大片玻璃的亭台，像在森林裡下棋一樣，把它們嵌進老橡樹和松樹之間的空隙。所有亭台都只有一層，謙遜地蹲在樹影下，高度低於成熟的樹冠。透明在這裡被提煉成一種政治美學，玻璃越透明，權力就越無處藏匿黑箱。森林的綠意與四季穿過沒有鍍膜的玻璃，毫無阻擋地撞進工作室，森林本身就成了最壯麗的壁紙。他甚至把樹當成活的建築構件，夏天茂密的樹葉化身遮陽傘，擋下大半直射的熱；冬天葉子落盡，珍貴的陽光便長驅直入。整座校園，是一個用透明、輕盈、分散，去對抗軸線、石材與威權的空間裝置。",
    "我在這片森林校園中裡待了幾年後的思考，這套浪漫的民主美學並非理所當然。直到回到台灣，我需要被重新校對，家鄉的課題我熟悉的那些土地故事。Sep Ruf 教我用透明去對抗紀念碑。森林校園給我的核心啟示，得換一副肉身去重新詮釋故鄉記憶。",
    "氰版攝影是用陽光顯影的。我把城市紀錄、把收集撿回來的物件、把田野裡的痕跡，鋪在塗了感光劑的紙上，交給太陽，光會慢慢把它們的影子洗成一片普魯士藍。這件事我做了很久才回頭看懂，它其實是那座森林校園的另一種轉譯。Sep Ruf 讓樹影穿過玻璃落進工作室，那是一張活的、流動的、隨四季改變的影像。我做的，是把那一瞬間的光與影留在紙上，留下一張會褪色、會和時間一起呼吸的記錄。它對抗石材的萬世不朽，正如那些白色細鋼框的玻璃亭台，當年對抗Albert Speer的花崗岩列柱。",
    "六十年後，柏林的 Hascher Jehle 團隊來擴建這座校園。他們沒有抄襲，也沒有急著彰顯自己。他們解構 Sep Ruf 的設計基因，用二十一世紀的清水混凝土，重新翻譯那種輕盈與懸浮，把走廊繼續留在戶外，只加一片遮雨的屋頂。他們把這個動作叫做類型學的類比。我後來明白，我做的也是一種類比。我用藍曬，翻譯 Sep Ruf 關於光、森林與記錄的承諾。真正的傳承，向來無關複製一座建築的外貌。它讓精神換一種材料，在另一片土地上重新呼吸。",
    "作為一個做城市研究的人，我現在會說，那座森林校園是我讀過最深的一份空間文本。它從不教人怎麼蓋房子。它教的是一種對待土地、權力與時間的態度。建築是靜止的，森林是活的，Sep Ruf 刻意留白，讓樹的生長去填補建築的空隙，讓邊界一年比一年模糊。",
    "如今回想，那片帝國森林裡的光，或許是我顯影的起點。它是我做過的最大的一張藍曬。只是當年我站在裡面，還不知道，自己正被那樣的光，慢慢洗成藍色。"
  ],
  "essay_en": [
    "City, Land and Cultural Narratives X: Forest Exposure at the Academy of Fine Arts Nuremberg",
    "Forest Exposure at the Academy of Fine Arts Nuremberg",
    "Across different seasons, I often walked in the morning light through the forest of Valznerweiher. It was a path of art and philosophy. It came from the body, from receiving a gift from nature.",
    "When architect Sep Ruf designed this campus, he deliberately did not build indoor corridors between his pavilions. Instead, he connected the studios with roofed corridors whose two sides were entirely open. So every time I walked from the wood workshop to the painting classroom, I had to leave the interior and step into the forest. On winter mornings, the cold wind poured directly into the corridor, fallen leaves rustled underfoot, and the smell of pine needles after rain clung to the air. At first I complained about the cold. Later I understood that it was the architect’s intention. He wanted the artist’s body to keep rubbing against nature’s temperature, wind direction and humidity, because he believed that friction was the source of creation.",
    "This oldest art academy in the German-speaking world was founded in 1662, yet it reserved its most crucial rebirth for 1954. To understand why it hides in the imperial forest at the edge of the city, one must return to the ruins of postwar West Germany. Nuremberg had once been the model city of Nazism. Hitler built heavy, symmetrical and oppressive party rally grounds here, using massive stone and absolute axes to display the collective will of totalitarian power. When this school was rebuilt after the war, the Bavarian government made a fundamental decision: in spatial terms, the new campus had to break completely with that monumental grandeur. They deliberately avoided the city center, the symbolic core of power, and placed the school within the green belt of forest and zoo. In that policy logic, the forest became a catalyst for healing and rebirth, allowing art education to return to a dialogue between the individual and nature.",
    "Architect Sep Ruf translated this political proposition into space. His core idea could be reduced to one sentence: no high walls, no grand gates, no monuments. He built twelve low, flat-roofed pavilions wrapped in large sheets of glass, placing them like chess pieces among the gaps between old oaks and pines. All the pavilions have only one floor, crouching humbly beneath the tree shadows, lower than the crowns of mature trees. Here, transparency was distilled into a political aesthetics: the more transparent the glass, the fewer black boxes in which power could hide. The greenery and seasons of the forest passed through uncoated glass and rushed into the studios without obstruction; the forest itself became the most magnificent wallpaper. He even treated trees as living architectural components: in summer, dense leaves became parasols, blocking much of the direct heat; in winter, when the leaves had fallen, precious sunlight could enter freely. The entire campus is a spatial installation that uses transparency, lightness and dispersion to resist axes, stone and authority.",
    "After spending several years in this forest campus, I came to think that this romantic democratic aesthetics was not something to be taken for granted. Only after returning to Taiwan did I need to be recalibrated by the land stories of my hometown, by the questions I knew so well. Sep Ruf taught me to use transparency to resist monuments. The core revelation that the forest campus gave me had to be reinterpreted through another body, in relation to the memory of home.",
    "Cyanotype photography is developed by sunlight. I place urban records, found objects I have collected, and traces from fieldwork onto paper coated with photosensitive solution, then hand them to the sun. Light slowly washes their shadows into Prussian blue. I did this for a long time before looking back and understanding that it was another translation of that forest campus. Sep Ruf let tree shadows pass through glass and fall into the studio: a living, flowing image that changes with the seasons. What I do is keep one instant of light and shadow on paper, leaving a record that will fade and breathe with time. It resists the immortality of stone, just as those white, thin steel-framed glass pavilions once resisted Albert Speer’s granite columns.",
    "Sixty years later, the Berlin team Hascher Jehle came to expand the campus. They did not copy it, nor did they rush to display themselves. They deconstructed Sep Ruf’s design genes and used twenty-first-century fair-faced concrete to translate that lightness and suspension anew, keeping the corridors outdoors and adding only a roof against the rain. They called this gesture a typological analogy. I later understood that what I do is also a kind of analogy. Through cyanotype, I translate Sep Ruf’s promise about light, forest and record. True inheritance has never been about copying the appearance of a building. It allows a spirit to change materials and breathe again on another piece of land.",
    "As someone who works on urban research, I would now say that this forest campus is one of the deepest spatial texts I have ever read. It never teaches people how to build a house. It teaches an attitude toward land, power and time. Architecture is still; the forest is alive. Sep Ruf deliberately left blank space, allowing the growth of trees to fill the gaps of architecture and letting boundaries become more blurred year after year.",
    "Looking back now, the light in that imperial forest may have been the starting point of my exposure. It is the largest cyanotype I have ever made. Back then, I was standing inside it without yet knowing that I was slowly being washed blue by that light."
  ],
  "essay_de": [
    "Stadt, Land und kulturelle Erzählungen X: Wald-Belichtung an der Akademie der Bildenden Künste Nürnberg",
    "Wald-Belichtung an der Akademie der Bildenden Künste Nürnberg",
    "In verschiedenen Jahreszeiten ging ich oft im Morgenlicht durch den Wald von Valznerweiher. Das war ein Spazierweg der Kunst und Philosophie. Er kam aus dem Körper, aus dem Empfangen eines Geschenks der Natur.",
    "Als der Architekt Sep Ruf diesen Campus entwarf, baute er zwischen seinen Pavillons bewusst keine Innenkorridore. Stattdessen verband er die Ateliers mit überdachten Gängen, deren beide Seiten völlig offen sind. Jedes Mal, wenn ich von der Holzwerkstatt zum Malereiraum ging, musste ich also den Innenraum verlassen und in den Wald treten. An Wintermorgen strömte der kalte Wind direkt in den Gang, Laub raschelte unter den Füßen, und der Geruch von Kiefernnadeln nach dem Regen klebte in der Luft. Am Anfang beklagte ich die Kälte. Später verstand ich, dass dies Absicht des Architekten war. Er wollte, dass der Körper der Künstlerinnen und Künstler ständig mit Temperatur, Windrichtung und Feuchtigkeit der Natur in Reibung bleibt, weil er glaubte, dass genau diese Reibung die Quelle des Schaffens ist.",
    "Diese älteste Kunstakademie im deutschsprachigen Raum wurde 1662 gegründet, doch ihre entscheidendste Wiedergeburt hob sie sich für 1954 auf. Um zu verstehen, warum sie sich im Reichswald am Rand der Stadt verbirgt, muss man zu den Ruinen der westdeutschen Nachkriegszeit zurückkehren. Nürnberg war einst die Vorzeigestadt des Nationalsozialismus. Hitler ließ hier schwere, symmetrische und bedrückende Reichsparteitagsanlagen errichten, mit gewaltigem Stein und absoluten Achsen, um den kollektiven Willen der totalitären Macht sichtbar zu machen. Beim Wiederaufbau dieser Schule traf die bayerische Regierung eine grundlegende Entscheidung: Der neue Campus musste räumlich vollständig mit dieser monumentalen Größe brechen. Man vermied bewusst das Stadtzentrum als symbolischen Kern der Macht und legte die Schule in den Grüngürtel aus Wald und Tiergarten. In dieser politischen Logik wurde der Wald zu einem Katalysator von Heilung und Wiedergeburt, damit die Kunstausbildung wieder in einen Dialog zwischen Individuum und Natur zurückkehren konnte.",
    "Der Architekt Sep Ruf übersetzte diese politische Aufgabe in Raum. Sein Kern lässt sich in einem Satz fassen: keine hohen Mauern, keine großen Tore, keine Denkmäler. Er baute zwölf niedrige, flach gedeckte Pavillons, von großen Glasflächen umgeben, und setzte sie wie Schachfiguren in die Zwischenräume alter Eichen und Kiefern. Alle Pavillons haben nur ein Geschoss, hocken bescheiden im Baumschatten und bleiben niedriger als die Kronen der ausgewachsenen Bäume. Transparenz wird hier zu einer politischen Ästhetik verdichtet: Je transparenter das Glas, desto weniger Verstecke bleiben der Macht. Das Grün und die Jahreszeiten des Waldes dringen durch unbeschichtetes Glas ungehindert in die Ateliers; der Wald selbst wird zur großartigsten Tapete. Ruf behandelte Bäume sogar als lebendige Bauteile: Im Sommer werden dichte Blätter zu Sonnenschirmen und halten einen Großteil der direkten Hitze ab; im Winter, wenn die Blätter gefallen sind, kann das kostbare Sonnenlicht frei eintreten. Der ganze Campus ist eine räumliche Installation, die mit Transparenz, Leichtigkeit und Zerstreuung gegen Achsen, Stein und Autorität arbeitet.",
    "Nachdem ich einige Jahre in diesem Waldcampus verbracht hatte, wurde mir klar, dass diese romantische demokratische Ästhetik keineswegs selbstverständlich ist. Erst nach meiner Rückkehr nach Taiwan musste ich mich durch die mir vertrauten Landgeschichten meiner Heimat neu kalibrieren lassen. Sep Ruf lehrte mich, Transparenz gegen Monumente einzusetzen. Die zentrale Erkenntnis des Waldcampus musste mit einem anderen Körper neu auf die Erinnerung an die Heimat übertragen werden.",
    "Cyanotypie wird durch Sonnenlicht belichtet. Ich lege Stadtaufzeichnungen, gesammelte Fundstücke und Spuren aus der Feldforschung auf Papier, das mit lichtempfindlicher Lösung bestrichen ist, und übergebe sie der Sonne. Das Licht wäscht ihre Schatten langsam in Preußischblau. Ich machte das lange, bevor ich rückblickend verstand, dass es eigentlich eine andere Übersetzung jenes Waldcampus ist. Sep Ruf ließ Baumschatten durch Glas in die Ateliers fallen: ein lebendiges, fließendes Bild, das sich mit den Jahreszeiten verändert. Was ich tue, ist, einen Augenblick von Licht und Schatten auf Papier festzuhalten, eine Aufzeichnung, die verblassen und mit der Zeit atmen wird. Sie widersetzt sich der Unsterblichkeit des Steins, so wie jene weißen Glas-Pavillons mit dünnen Stahlrahmen einst den Granitsäulen Albert Speers widersprachen.",
    "Sechzig Jahre später erweiterte das Berliner Büro Hascher Jehle diesen Campus. Sie kopierten nicht und hatten es auch nicht eilig, sich selbst in den Vordergrund zu stellen. Sie zerlegten Sep Rufs Entwurfsgene und übersetzten mit Sichtbeton des einundzwanzigsten Jahrhunderts jene Leichtigkeit und Schwebung neu. Die Gänge blieben draußen; hinzu kam nur ein schützendes Dach gegen den Regen. Sie nannten diese Geste eine typologische Analogie. Später verstand ich, dass auch meine Arbeit eine Art Analogie ist. Mit der Cyanotypie übersetze ich Sep Rufs Versprechen von Licht, Wald und Aufzeichnung. Wahre Weitergabe hatte nie damit zu tun, das Aussehen eines Gebäudes zu kopieren. Sie lässt einen Geist das Material wechseln und auf einem anderen Stück Land neu atmen.",
    "Als jemand, der Stadtforschung betreibt, würde ich heute sagen, dass dieser Waldcampus einer der tiefsten räumlichen Texte ist, die ich je gelesen habe. Er lehrt nicht, wie man Häuser baut. Er lehrt eine Haltung gegenüber Land, Macht und Zeit. Architektur ist still; der Wald ist lebendig. Sep Ruf ließ bewusst Leerstellen, damit das Wachstum der Bäume die Lücken der Architektur füllt und die Grenzen von Jahr zu Jahr unschärfer werden.",
    "Wenn ich heute zurückblicke, war das Licht in jenem Reichswald vielleicht der Ausgangspunkt meiner Belichtung. Es ist die größte Cyanotypie, die ich je gemacht habe. Damals stand ich nur darin und wusste noch nicht, dass ich von diesem Licht langsam blau gewaschen wurde."
  ],
  "href": "https://genius912.blogspot.com/2026/06/blog-post_28.html"
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
  const RAUM_NUREMBERG_FOREST_WRITING = ${JSON.stringify(article, null, 2)};
  const existingIndex = WRITINGS.findIndex((writing) => (
    writing.id === RAUM_NUREMBERG_FOREST_WRITING.id ||
    writing.href === RAUM_NUREMBERG_FOREST_WRITING.href ||
    writing.title_zh === RAUM_NUREMBERG_FOREST_WRITING.title_zh
  ));
  if (existingIndex >= 0) {
    WRITINGS.splice(existingIndex, 1);
  }
  WRITINGS.unshift(RAUM_NUREMBERG_FOREST_WRITING);
  window.WRITINGS = WRITINGS;
}
${end}
`;

const anchor = 'const LINKS = [';
if (!html.includes(anchor)) {
  throw new Error('Cannot find LINKS insertion point.');
}
html = html.replace(anchor, `${block}\n${anchor}`);
writeFileSync(file, html, 'utf8');
console.log('Synced Nuremberg forest writing article.');
