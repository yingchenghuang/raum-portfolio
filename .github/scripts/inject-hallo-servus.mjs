import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_HALLO_SERVUS_PATCH_START */';
const end = '/* RAUM_HALLO_SERVUS_PATCH_END */';

const hallo = {
  id: 'w-hallo-servus-2026',
  year: '2026',
  month: '06',
  title_zh: '以物易物．街道的人情與城市秩序',
  title_en: 'Barter, Street Affection and Urban Order',
  title_de: 'Tauschhandel, Straßennähe und städtische Ordnung',
  note_zh: '從一句「Hallo! Servus!」出發，以改造嬰兒車、台灣物件、奉茶與以物易物，測試街道中的信任、價值與公共關係。',
  note_en: 'Beginning with the greeting “Hallo! Servus!”, this action uses a converted pram, Taiwanese objects, tea hospitality and barter to test trust, value and public relations in the street.',
  note_de: 'Ausgehend vom Gruß „Hallo! Servus!“ untersucht die Aktion mit umgebautem Kinderwagen, taiwanischen Objekten, Tee und Tauschhandel Vertrauen, Wert und öffentliche Beziehungen auf der Straße.',
  essay_zh: [
    '本計畫從一句平實的問候「Hallo! Servus!」展開。以最日常的語彙，我們發動一場關於城市如何被觀看、被觸碰與被理解的行動。旅人最先記住的，常是街頭攤販：短暫對話即可交換大量在地資訊；而「街販、行人、空間」的微型場景，正是觀察都市活力的最佳切口。',
    '在不同制度與文化下，街頭買賣如何形塑都市節奏與社會關係？以物易物能否重置我們對「價值」與「信任」的想像？台灣的街販以機動與彈性著稱，約翰尼斯堡的街販凸顯移動群體的經濟韌性，德國的街販則在營業時間與空間規範中呈現相對固定且合規的秩序。',
    '三個場域構成一條從「高機動、弱合法性」到「高秩序、低機動」的光譜。這些差異折射的是制度、經濟與公共空間文化的多重層理。流動攤販不是單一問題，而是城市治理、稅制公平、公共衛生、交通安全與生存權之間的多方拉扯。',
    '在經濟不景氣的情境下，許多人轉向小本流動生意以降低租金與固定成本；即便面對稽查與罰單，仍選擇上路。手推車、貨車或機車成為替代店面的載體。它更貼近街道、貼近人群，也更能回應碎片化的市場需求。',
    '本計畫將以物易物作為方法學。交換不必等價，它建立在彼此的需求關係與互信機制上；價值不只由價格決定，還包含記憶、文化意義與關係的建立。我們不浪漫化以物易物，也不否定貨幣，而是把「交換」還原為社會關係的生成與談判。',
    '行動以一個可移動攤位為載具，進入街道與人流之中：以日常問候開場，展示來自台灣的日用品、食品、書籍與文化意象小物，讓每件物件都成為「說話者」；以物易物，不設定價，邀請對方提出願意交換的物件或承諾；並以奉茶文化作為待客之道，縮短陌生距離。',
    '為什麼是嬰兒車？在歐洲城市，推嬰兒車散步是尋常之景。嬰兒車的形象親和、速度緩慢、易於停留，能創造被動與主動之間的友善掩飾與停駐時刻，也具有強烈的視覺辨識度。覆以客家花布後，它把東方文化意象與西方日常器物並置，形成跨文化的吸引點。',
    '德國城市擁有完整的公共空間系統與步行導向的節奏，提供了慢速交流的現場條件；週末店鋪休息的制度也創造服務空缺。雖然臨時街售屬法律灰區，本計畫定位為行動測試：不以營利為目的，而是對制度、日常與人情之間關係的藝術性試探。',
    '攤販是認識一座城市的基礎印象生成器。它使開放空間不再抽象，而成為居民可自由活動、可暫留與交流的場域。固定攤販在時間與地點上建立認同；移動攤販則在法律與空間的縫隙中求生。公共空間正是在這些細節裡被具體化。',
    '展覽可呈現嬰兒車改造裝置、待客茶水、可交換的台灣物件、交易與對話記錄牆，也可整理互動筆記、影像紀錄與制度對照。評估不只看交換成功率，也看談判時間、重複互動、觀眾對台灣文化的辨識，以及對街販與公共空間管理的看法是否改變。',
    '以物易物不是回到過去，而是將價值的定錨從「價格」轉向「關係」。在問候、遞茶與交換的慢速時刻中，城市露出它的心跳：它不只有規則，更有人情；不只有效率，還有等待。這就是我們想與觀眾共同經驗的，在秩序之中，重新發明信任。'
  ],
  essay_en: [
    'The project begins with a simple greeting: “Hallo! Servus!” Using the most ordinary words, it launches an action about how a city is seen, touched and understood. What travellers often remember first are street vendors. A brief conversation can exchange a great deal of local knowledge, and the small scene of vendor, passerby and space becomes an ideal point of entry into urban vitality.',
    'How does street trade shape urban rhythm and social relations under different systems and cultures? Can barter reset our imagination of value and trust? In Taiwan, street vendors are known for mobility and flexibility. In Johannesburg, vendors reveal the economic resilience of migrant communities. In Germany, street vending tends to appear more fixed and regulated under rules of opening hours and spatial management.',
    'These three contexts form a spectrum from high mobility and weak legality to high order and low mobility. Their differences reveal layered relations among institutions, economy and the culture of public space. Mobile vending is not a single issue; it is a field of tension among urban governance, tax fairness, public health, traffic safety and the right to survive.',
    'During economic downturns, many people turn to small-scale mobile businesses to reduce rent and fixed costs. Even when facing inspections or fines, they still choose the street. Carts, vans and scooters become substitutes for storefronts. They are closer to the street, closer to people, and more able to respond to fragmented market needs.',
    'This project uses barter as a methodology. Exchange does not have to be equivalent; it can be founded on mutual need and trust. Value is not determined only by price, but also by memory, cultural meaning and the making of relationships. The project neither romanticizes barter nor rejects money; it returns exchange to the generation and negotiation of social relations.',
    'The action enters streets and pedestrian flows through a mobile stall. It begins with everyday greetings, displays Taiwanese daily objects, foods, books and cultural signs, and lets each object become a speaker. Prices are turned off. Participants are invited to propose an object or promise in return, while tea hospitality shortens the distance between strangers.',
    'Why a pram? In European cities, walking with a pram is an ordinary scene. Its image is approachable, its pace is slow, and it easily creates moments of pause. It offers a friendly disguise between passive presence and active invitation, while remaining visually recognizable. Covered with Hakka floral cloth, it places eastern cultural imagery beside a western everyday object and creates a cross-cultural point of attraction.',
    'German cities offer complete public-space systems and pedestrian rhythms that support slow exchange. Weekend shop closures also create service gaps. Although temporary street selling can sit in a legal grey zone, this project positions itself as an action test: not a commercial activity, but an artistic probing of the relationship among systems, everyday life and human warmth.',
    'The street vendor is a generator of first impressions of a city. It turns open space from abstraction into a field where residents can move, pause and communicate. Fixed vendors build identity through time and place; mobile vendors survive in gaps between law and space. Public space becomes concrete through these small details.',
    'The exhibition can present the converted pram, tea service, exchangeable Taiwanese objects, and a wall of transaction and conversation records. It can also gather interaction notes, video documentation and comparisons of vending regulations. Evaluation is not limited to successful exchanges; it also observes negotiation time, repeated encounters, cultural recognition of Taiwan, and changes in how participants think about vendors and public-space management.',
    'Barter is not a return to the past. It shifts the anchor of value from price to relationship. In the slow moments of greeting, offering tea and exchanging objects, the city reveals its pulse: not only rules, but human warmth; not only efficiency, but waiting. This is what the project hopes to experience with its audience: reinventing trust inside order.'
  ],
  essay_de: [
    'Das Projekt beginnt mit einem einfachen Gruß: „Hallo! Servus!“ Mit den alltäglichsten Worten eröffnet es eine Aktion darüber, wie eine Stadt gesehen, berührt und verstanden werden kann. Reisende erinnern sich oft zuerst an Straßenverkäufer. In einem kurzen Gespräch lässt sich viel lokales Wissen austauschen, und die kleine Szene aus Verkäufer, Passant und Raum wird zu einem Zugang zur urbanen Lebendigkeit.',
    'Wie prägt Straßenhandel unter unterschiedlichen Systemen und Kulturen den Rhythmus der Stadt und ihre sozialen Beziehungen? Kann Tauschhandel unsere Vorstellung von Wert und Vertrauen neu ausrichten? In Taiwan sind Straßenverkäufer für Mobilität und Flexibilität bekannt. In Johannesburg zeigen sie die ökonomische Widerstandskraft mobiler Gemeinschaften. In Deutschland erscheinen sie unter den Regeln von Öffnungszeiten und Raumordnung eher festgelegt und reguliert.',
    'Diese drei Felder bilden ein Spektrum von hoher Mobilität und schwacher Legalität bis zu hoher Ordnung und geringer Mobilität. Die Unterschiede verweisen auf die Schichten von Institution, Ökonomie und öffentlicher Raumkultur. Mobile Straßenverkäufe sind kein Einzelproblem, sondern ein Spannungsfeld zwischen Stadtverwaltung, Steuergerechtigkeit, öffentlicher Hygiene, Verkehrssicherheit und dem Recht auf Existenz.',
    'In Zeiten wirtschaftlicher Unsicherheit wenden sich viele Menschen kleinen mobilen Geschäften zu, um Miete und fixe Kosten zu senken. Auch angesichts von Kontrollen und Bußgeldern wählen sie die Straße. Handwagen, Lieferwagen oder Roller ersetzen das Geschäftslokal. Sie sind näher an der Straße, näher an den Menschen und können auf fragmentierte Bedürfnisse des Marktes reagieren.',
    'Das Projekt verwendet Tauschhandel als Methode. Austausch muss nicht gleichwertig sein; er kann auf gegenseitigem Bedarf und Vertrauen beruhen. Wert entsteht nicht nur durch Preis, sondern auch durch Erinnerung, kulturelle Bedeutung und Beziehung. Das Projekt romantisiert den Tauschhandel nicht und lehnt Geld nicht ab; es führt den Austausch zurück auf die Entstehung und Aushandlung sozialer Beziehungen.',
    'Die Aktion betritt Straßen und Fußgängerströme mit einem mobilen Stand. Sie beginnt mit alltäglichen Begrüßungen, zeigt taiwanische Alltagsobjekte, Lebensmittel, Bücher und kulturelle Zeichen und lässt jedes Objekt zum Sprecher werden. Der Preis wird ausgeschaltet. Die Teilnehmenden werden eingeladen, ein Objekt oder ein Versprechen zum Tausch vorzuschlagen, während die Teegastfreundschaft die Distanz zwischen Fremden verkürzt.',
    'Warum ein Kinderwagen? In europäischen Städten gehört der Spaziergang mit Kinderwagen zum gewöhnlichen Bild. Seine Erscheinung ist zugänglich, sein Tempo langsam, und er ermöglicht Momente des Verweilens. Er schafft eine freundliche Tarnung zwischen passiver Präsenz und aktiver Einladung und besitzt zugleich eine starke visuelle Wiedererkennbarkeit. Mit Hakka-Blumenstoff bedeckt, stellt er östliche Kulturzeichen neben ein westliches Alltagsobjekt und bildet einen interkulturellen Anziehungspunkt.',
    'Deutsche Städte verfügen über ausgeprägte öffentliche Räume und fußgängerorientierte Rhythmen, die langsamen Austausch ermöglichen. Auch die Schließzeiten am Wochenende schaffen Lücken der Versorgung. Obwohl temporärer Straßenverkauf rechtlich eine Grauzone berühren kann, versteht sich dieses Projekt als Handlungstest: nicht als kommerzielle Tätigkeit, sondern als künstlerische Erprobung des Verhältnisses von System, Alltag und menschlicher Wärme.',
    'Der Straßenverkäufer ist ein Generator erster Eindrücke einer Stadt. Er verwandelt offenen Raum von einer Abstraktion in ein Feld, in dem Bewohner sich bewegen, verweilen und austauschen können. Feste Stände stiften Identität durch Zeit und Ort; mobile Stände überleben in den Zwischenräumen von Gesetz und Raum. In solchen Details wird öffentlicher Raum konkret.',
    'Die Ausstellung kann den umgebauten Kinderwagen, Tee als Gastfreundschaft, tauschbare taiwanische Objekte sowie eine Wand mit Aufzeichnungen von Tausch und Gespräch zeigen. Ebenso können Interaktionsnotizen, Videodokumentationen und Vergleiche der Regelungen gesammelt werden. Die Auswertung betrachtet nicht nur erfolgreiche Tauschvorgänge, sondern auch Verhandlungsdauer, wiederholte Begegnungen, kulturelle Wahrnehmung Taiwans und Veränderungen in der Haltung zu Straßenhandel und öffentlichem Raum.',
    'Tauschhandel bedeutet nicht, in die Vergangenheit zurückzukehren. Er verschiebt den Anker des Wertes vom Preis zur Beziehung. In den langsamen Momenten von Gruß, Tee und Austausch zeigt die Stadt ihren Puls: nicht nur Regeln, sondern menschliche Wärme; nicht nur Effizienz, sondern Warten. Genau diese Erfahrung möchte das Projekt mit dem Publikum teilen: Vertrauen innerhalb der Ordnung neu zu erfinden.'
  ],
  href: 'https://genius912.blogspot.com/2026/06/hallo-servus.html'
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

let html = readFileSync(file, 'utf8');
const oldBlock = new RegExp(`\\n\\s*${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}\\n?`, 'g');
html = html.replace(oldBlock, '\n');

const needle = 'const WRITINGS = [';
if (!html.includes(needle)) {
  throw new Error('Cannot find WRITINGS array in index.html');
}

const block = `\n  ${start}\n${JSON.stringify(hallo, null, 2).split('\n').map((line) => '  ' + line).join('\n')},\n  ${end}`;
html = html.replace(needle, `${needle}${block}`);

html = html.replace(
  "blogUrl: 'https://genius912.blogspot.com/2015/02/hallo-servus-2012.html',",
  "blogUrl: 'https://genius912.blogspot.com/2026/06/hallo-servus.html',"
);

writeFileSync(file, html, 'utf8');
console.log('Injected Hallo! Servus! latest article and updated project source URL');
