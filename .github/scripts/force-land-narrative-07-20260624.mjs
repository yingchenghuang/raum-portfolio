import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_FORCE_LAND_NARRATIVE_07_20260624_START */';
const end = '/* RAUM_FORCE_LAND_NARRATIVE_07_20260624_END */';

const article = {
  "id": "w-land-narrative-07-body-city-measure",
  "year": "2026",
  "month": "06",
  "title_zh": "土地．文化敘事（七）身體作為城市丈量單位",
  "title_en": "Land and Cultural Narratives VII: The Body as a Unit for Measuring the City",
  "title_de": "Land und kulturelle Erzählungen VII: Der Körper als Maßeinheit der Stadt",
  "note_zh": "建築被讀成社會關係的容器。被建造之物從來不只是物，它底下藏著一套關於秩序的政治。",
  "note_en": "Architecture is read as a vessel of social relations. What is built is never merely an object; beneath it lies a politics of order.",
  "note_de": "Architektur wird als Gefäß gesellschaftlicher Beziehungen gelesen. Das Gebaute ist nie bloß ein Objekt; darunter liegt eine Politik der Ordnung.",
  "essay_zh": [
    "身體作為城市丈量單位",
    "一、森林裡的列車",
    "我時常掉進記憶的迴圈。多數時候不太願意回望過往，那裡堆著太多挫折的體驗，越往深處凝視，深淵也回望著你。二〇一一年的夏天，我收到入學考通知，放下糾結很久的失敗主義，提著一個橘色的旅行背包飛往德國。行李很輕，心很重。",
    "有幸在2011年學校正準備慶祝建校三百五十週年參與其中的一份子。第一次搭那班穿越森林的輕軌列車，我心裡一直在想，這不是宮崎駿的場景嗎。林道蜿蜒，遮蔽的高度與尺度一層一層壓下來。路上遇見一隻爬行的蝸牛，前方是不知道通往哪裡的林徑。包浩斯風格的學校餐廳，厚重的金屬感。Pavilion 24，建築與都市規劃的教室。下午兩點，一張申論題攤在我面前。",
    "二、命題",
    "題目只有一句話。建築是通過被建造之物，對社會關係進行秩序化。請用你過去五年裡的一件作品，來說明你對這個命題的詮釋。命題者特別交代，他要看的，是最能說明你詮釋的那一件作品，哪怕你自認它是最差的一件。",
    "我原本以為要入學考試需要大量畫圖。整個下午，所有教授排成一列，一個接一個問。那個畫面我還記得，我究竟說了什麼，已經模糊。面試結束我問教授，什麼時候會知道結果。他回我，你不知道嗎，你已經錄取了。那一刻我站在教室門邊，心裡在顫抖。那段旅程裡像樣的勇氣，我至今還在問自己能否找回。",
    "三、一道我花了十五年後的回答",
    "當時我以為那只是一道入學門檻。後來才明白，它是我往後所有創作的源頭問題。建築被讀成社會關係的容器。一道牆、一條軸線、一個廣場，都在安排人與人如何相遇、如何錯身、誰被看見、誰被遮蔽。被建造之物從來不只是物。它底下藏著一套關於秩序的政治。這個命題給了我一雙眼睛，看見任何被造出來的形體，背後都站著一群人的關係。我後來每一件作品，都是在對這道題重新作答一次。",
    "四、每一件作品，都是一次作答",
    "二〇一五年的紐倫堡藍夜，我用一百五十座工程圍欄與三百盞警示燈，在舊市政廳的內庭築起一座可以移動的迷宮。圍欄是城市平時用來封鎖人、引導人的工具。我把它搬進權力的庭院，交還到市民手裡。一個人替自己推開一條路，同一個動作往往就擋住旁邊的人。自由的界線這個抽象命題，在那個內庭被翻譯成腳下每一步的選擇。這是被建造之物在秩序社會關係，差別只在於，這一次秩序的權力被下放到每一具身體。",
    "SUBBUS 那輛巡迴歐洲的巴士，把公共運輸的座位翻轉成早餐派對、會議室、行動展間。一個移動中的空間，重新談判公共與私密的界線。Hallo! Servus! 的嬰兒車推著台灣的物件走進德國街頭，用一聲問候與一次不標價的交換，去丈量街道買賣如何形塑都市的節奏。更早的《無魂城市》，我象徵性地買下一座城，用大富翁的棋盤回應房地產、階級與佔有。",
    "這些題材看似各走各的。把它們疊在一起，底下是同一道城市的命題。每一件作品都在問，被造出來的東西如何安排了人與人的關係，以及這份安排是否還能被重新協商。",
    "五、回到土地",
    "這正是都市研究真正關心的事。紐倫堡藝術學院所學的城市研究 Stadtforschung 教我的，是把公共空間裡那層隱形的治理推到台前，逼人用身體去碰它。卡爾維諾說過，用人的角度看城市，用城市的角度看人。人塑造了城市，城市也回頭塑造了人。帶著這雙眼睛回到台灣，回到台中，后里故鄉、清水海線，那道命題仍然跟著我。",
    "從一座土地公廟走到下一座，我遇見了另一種被建造之物。它們沒有建築師署名，沒有設計圖，靠著一代又一代人的添補慢慢長成，有時只是幾塊砌起的石頭，一個矮小的祠。它不屬於任何人，卻安排了所有人。它把農人綁向他的田，把漁人綁向他的潮汐，把整個聚落綁向共同的吉凶。",
    "巫鴻講過一個字，位。位是位置，也是一個東西被擺放、被指定的那層關係。土地公廟標定了一個位。我後來做的事，是去測量這些位，以一座廟為圓心，向四周的田地發散，逐里採集腳下的土壤。土，是被壓縮的時間。一抔土在光線下顯出橘紅或灰褐，那是這片地方累積了多久的生活史。藍曬把土地的光與物壓印在棉布上，這是記錄位的另一種方法。用地誌學中最小的那座土地公廟，就是那道命題在台灣最樸素的一次示範。",
    "六、為自己書寫",
    "紐倫堡那道我答得結結巴巴的申論題，用我當年生硬的德文，用我所回應的那道課題，其實一直沒有答完。那道題的答案，藏在我走過的每一座城，建構過的每一件作品，蹲下來讀的每一座座標上的廟宇，還有手裡那罐標好座標的泥土。",
    "生命每一個階段都需要結算與發表，這樣才看得清楚自己有沒有好好活過。Pavilion 24 那一排教授，和小祠裡的大地神祇，問的是同一個問題，我如何安頓自己與那個托住我的東西之間的關係。我答不出來的時候，土地一直在那裡。時間會慢慢顯影出，這片地方記得的事。"
  ],
  "essay_en": [
    "The Body as a Unit for Measuring the City",
    "1. The Train in the Forest",
    "I often fall into loops of memory. Most of the time I am reluctant to look back, because too many experiences of frustration are piled there. The deeper one looks into the abyss, the more the abyss looks back. In the summer of 2011, I received the notice for an entrance examination. I put down the defeatism I had struggled with for a long time and flew to Germany with an orange travel backpack. The luggage was light; the heart was heavy.",
    "I was fortunate to become part of the school in 2011, just as it was preparing to celebrate its 350th anniversary. The first time I took the light rail train through the forest, I kept thinking: is this not a Hayao Miyazaki scene? The forest road curved, and the height and scale of the canopy pressed down layer by layer. On the way I encountered a crawling snail, and ahead of it a forest path leading to somewhere unknown. The Bauhaus-style school cafeteria carried a heavy metallic feeling. Pavilion 24, the classroom for architecture and urban planning. At two in the afternoon, an essay question lay open in front of me.",
    "2. The Question",
    "There was only one sentence. Architecture orders social relations through what is built. Use one work from the past five years to explain your interpretation of this proposition. The examiner emphasized that he wanted the one work that could best explain my interpretation, even if I personally considered it my worst one.",
    "I had originally thought the entrance examination would require a great deal of drawing. Instead, for the entire afternoon, all the professors lined up and asked questions one after another. I still remember that scene, though what I actually said has become blurred. After the interview ended, I asked one professor when I would know the result. He replied: do you not know? You have already been admitted. At that moment I stood by the classroom door, trembling inside. I still ask myself whether I can recover the real courage I had on that journey.",
    "3. An Answer That Took Fifteen Years",
    "At the time I thought it was only an entrance threshold. Later I understood that it was the source question for all my work afterward. Architecture was read as a vessel of social relations. A wall, an axis, a square all arrange how people meet, how they pass one another, who is seen and who is concealed. What is built is never merely an object. Beneath it lies a politics of order. This proposition gave me a pair of eyes: I began to see that behind every constructed form stands a set of relationships among people. Every work I made afterward has been another attempt to answer that question.",
    "4. Every Work Is an Answer",
    "At Nuremberg Blue Night in 2015, I used 150 construction fences and 300 warning lights to build a movable labyrinth in the courtyard of the Old City Hall. Fences are tools the city normally uses to block and guide people. I moved them into the courtyard of authority and returned them to the hands of citizens. When one person pushed open a path for themselves, the same action often blocked the person beside them. The abstract question of the boundary of freedom was translated in that courtyard into every choice made underfoot. This too was built form ordering social relations; the difference was that, this time, the power to order was handed down to each body.",
    "The SUBBUS that travelled across Europe turned the seats of public transport into a breakfast party, a meeting room and a mobile exhibition space. A space in motion renegotiated the boundary between public and private. In Hallo! Servus!, a stroller pushed Taiwanese objects into German streets; through a greeting and an exchange without a price tag, it measured how street trade shapes the rhythm of the city. Earlier, in Soulless City, I symbolically bought a city and used a Monopoly board to respond to real estate, class and possession.",
    "These subjects appear to move in different directions. But when they are layered together, the same urban question lies beneath them. Every work asks how built things arrange relationships among people, and whether that arrangement can still be renegotiated.",
    "5. Returning to the Land",
    "This is precisely what urban research truly concerns. What Stadtforschung at the Academy of Fine Arts Nuremberg taught me was to bring the invisible governance within public space to the surface, forcing the body to touch it. Calvino once wrote of looking at the city from the perspective of human beings, and looking at human beings from the perspective of the city. People shape the city, and the city in turn shapes people. With these eyes I returned to Taiwan, to Taichung, to my hometown Houli and the coastal line of Qingshui. That same question followed me still.",
    "Walking from one Earth God temple to the next, I encountered another kind of built thing. They have no architect’s signature and no design drawings. They grow slowly through additions made by generation after generation. Sometimes they are only a few stacked stones, a small low shrine. They belong to no one, yet they arrange everyone. They bind the farmer to the field, the fisher to the tide, and the whole settlement to a shared fortune and misfortune.",
    "Wu Hung once spoke of the word wei: position, site, and the relational layer by which something is placed and designated. An Earth God temple marks such a position. What I later did was to measure these positions, taking a temple as the center and radiating out toward the surrounding fields, collecting soil underfoot from village to village. Soil is compressed time. A handful of earth turns orange-red or grey-brown under the light; it reveals how much life history this place has accumulated. Cyanotype presses the light and matter of the land onto cotton cloth; it is another way of recording position. The smallest Earth God temple in topographical study becomes the most humble demonstration of that question in Taiwan.",
    "6. Writing for Myself",
    "The essay question in Nuremberg that I answered haltingly, in the awkward German I had then, and in response to the problem placed before me, has in fact never been fully answered. Its answer is hidden in every city I have walked through, every work I have constructed, every temple coordinate I have crouched down to read, and the jar of soil in my hand labeled with its coordinates.",
    "Every stage of life needs a reckoning and a presentation, so that one can see clearly whether one has lived well. The row of professors in Pavilion 24 and the earth deity in the small shrine were asking the same question: how do I settle the relationship between myself and the thing that holds me up? When I could not answer, the land was always there. Time will slowly develop what this place remembers."
  ],
  "essay_de": [
    "Der Körper als Maßeinheit der Stadt",
    "1. Der Zug im Wald",
    "Ich falle oft in Schleifen der Erinnerung. Meistens möchte ich nicht zurückblicken, denn dort haben sich zu viele Erfahrungen des Scheiterns angesammelt. Je tiefer man in den Abgrund schaut, desto mehr blickt der Abgrund zurück. Im Sommer 2011 erhielt ich die Einladung zur Aufnahmeprüfung. Ich legte den Defätismus ab, mit dem ich lange gerungen hatte, und flog mit einem orangefarbenen Reiserucksack nach Deutschland. Das Gepäck war leicht, das Herz schwer.",
    "Ich hatte das Glück, 2011 Teil der Hochschule zu werden, gerade als sie sich auf die Feier ihres 350-jährigen Bestehens vorbereitete. Als ich zum ersten Mal mit der Stadtbahn durch den Wald fuhr, dachte ich immer wieder: Ist das nicht eine Szene von Hayao Miyazaki? Der Waldweg wand sich, und Höhe und Maßstab der Bäume drückten Schicht um Schicht herab. Unterwegs begegnete ich einer kriechenden Schnecke; vor ihr lag ein Waldpfad, der an einen unbekannten Ort führte. Die Mensa im Bauhaus-Stil hatte etwas Schweres, Metallisches. Pavilion 24, der Unterrichtsraum für Architektur und Stadtplanung. Um zwei Uhr nachmittags lag eine Essayfrage vor mir.",
    "2. Die Aufgabe",
    "Die Aufgabe bestand aus nur einem Satz. Architektur ordnet gesellschaftliche Beziehungen durch das Gebaute. Erläutern Sie Ihre Interpretation dieses Satzes anhand einer Arbeit aus den vergangenen fünf Jahren. Der Aufgabensteller betonte, er wolle genau jene Arbeit sehen, die meine Interpretation am besten erklären könne, selbst wenn ich sie selbst für meine schlechteste hielte.",
    "Ursprünglich hatte ich gedacht, für die Aufnahmeprüfung müsse man sehr viel zeichnen. Stattdessen standen den ganzen Nachmittag alle Professoren in einer Reihe und stellten einer nach dem anderen Fragen. An dieses Bild erinnere ich mich noch, doch was ich eigentlich sagte, ist verschwommen. Nach dem Gespräch fragte ich einen Professor, wann ich das Ergebnis erfahren würde. Er antwortete: Wissen Sie es denn nicht? Sie sind bereits aufgenommen. In diesem Moment stand ich an der Tür des Klassenzimmers und zitterte innerlich. Bis heute frage ich mich, ob ich den Mut jener Reise wiederfinden kann.",
    "3. Eine Antwort, die fünfzehn Jahre brauchte",
    "Damals dachte ich, es sei nur eine Eintrittsschwelle. Später verstand ich, dass es die Ursprungsfrage all meiner späteren Arbeiten war. Architektur wurde als Gefäß gesellschaftlicher Beziehungen gelesen. Eine Wand, eine Achse, ein Platz ordnen, wie Menschen einander begegnen, wie sie aneinander vorbeigehen, wer gesehen und wer verdeckt wird. Das Gebaute ist nie bloß ein Objekt. Darunter liegt eine Politik der Ordnung. Diese Aufgabe gab mir ein Augenpaar: Ich begann zu sehen, dass hinter jeder geschaffenen Form ein Gefüge menschlicher Beziehungen steht. Jede spätere Arbeit war für mich ein neuer Versuch, diese Frage zu beantworten.",
    "4. Jede Arbeit ist eine Antwort",
    "Bei der Blauen Nacht in Nürnberg im Jahr 2015 baute ich mit 150 Bauzäunen und 300 Warnleuchten im Innenhof des Alten Rathauses ein bewegliches Labyrinth. Zäune sind Werkzeuge, mit denen die Stadt normalerweise Menschen absperrt und lenkt. Ich brachte sie in den Hof der Macht und gab sie den Bürgerinnen und Bürgern zurück. Wenn jemand sich selbst einen Weg öffnete, versperrte dieselbe Bewegung oft der Person daneben den Weg. Die abstrakte Frage nach der Grenze der Freiheit wurde in diesem Hof in jede Entscheidung unter den Füßen übersetzt. Auch dies war ein Gebautes, das gesellschaftliche Beziehungen ordnete; der Unterschied lag darin, dass die Macht der Ordnung diesmal an jeden einzelnen Körper abgegeben wurde.",
    "Der SUBBUS, der durch Europa reiste, verwandelte die Sitze des öffentlichen Verkehrs in eine Frühstücksparty, einen Besprechungsraum und einen mobilen Ausstellungsraum. Ein Raum in Bewegung verhandelte die Grenze zwischen öffentlich und privat neu. Bei Hallo! Servus! schob ein Kinderwagen taiwanische Dinge in deutsche Straßen; durch einen Gruß und einen Tausch ohne Preisschild maß er, wie Straßenhandel den Rhythmus der Stadt formt. Noch früher kaufte ich in Soulless City symbolisch eine Stadt und antwortete mit einem Monopoly-Spielbrett auf Immobilien, Klasse und Besitz.",
    "Diese Themen scheinen zunächst in verschiedene Richtungen zu gehen. Legt man sie übereinander, liegt darunter dieselbe städtische Frage. Jede Arbeit fragt, wie gebaute Dinge Beziehungen zwischen Menschen anordnen und ob diese Anordnung erneut verhandelbar bleibt.",
    "5. Zurück zum Land",
    "Genau darum geht es in der Stadtforschung. Was mich die Stadtforschung an der Akademie der Bildenden Künste Nürnberg gelehrt hat, war, die unsichtbare Steuerung im öffentlichen Raum nach vorn zu holen und den Körper zu zwingen, sie zu berühren. Calvino schrieb davon, die Stadt aus der Perspektive des Menschen und den Menschen aus der Perspektive der Stadt zu betrachten. Menschen formen die Stadt, und die Stadt formt die Menschen zurück. Mit diesen Augen kehrte ich nach Taiwan zurück, nach Taichung, in meine Heimat Houli und an die Küstenlinie von Qingshui. Diese Frage begleitete mich weiterhin.",
    "Als ich von einem Tudigong-Tempel zum nächsten ging, begegnete ich einer anderen Art des Gebauten. Diese Tempel tragen keine Signatur eines Architekten und besitzen keine Entwurfszeichnungen. Sie wachsen langsam durch Ergänzungen von Generation zu Generation. Manchmal bestehen sie nur aus einigen aufgeschichteten Steinen, einem kleinen niedrigen Schrein. Sie gehören niemandem und ordnen doch alle. Sie binden den Bauern an sein Feld, den Fischer an seine Gezeiten und die ganze Siedlung an ein gemeinsames Glück und Unglück.",
    "Wu Hung hat einmal über das Wort wei gesprochen: Position, Ort, und jene Beziehungsschicht, durch die etwas platziert und bestimmt wird. Ein Tudigong-Tempel markiert eine solche Position. Was ich später tat, war, diese Positionen zu vermessen. Ich nahm einen Tempel als Mittelpunkt, ließ die Linien in die umliegenden Felder ausstrahlen und sammelte von Dorf zu Dorf Erde unter meinen Füßen. Erde ist komprimierte Zeit. Eine Handvoll Erde erscheint im Licht orange-rot oder graubraun; sie zeigt, wie viel Lebensgeschichte sich an diesem Ort angesammelt hat. Cyanotypie drückt Licht und Materie des Landes auf Baumwollstoff. Sie ist eine andere Methode, Position zu dokumentieren. Der kleinste Tudigong-Tempel in einer topografischen Untersuchung wird zur schlichtesten Demonstration jener Frage in Taiwan.",
    "6. Für mich selbst schreiben",
    "Die Essayfrage in Nürnberg, die ich stockend, in meinem damals unbeholfenen Deutsch und als Antwort auf jene Aufgabe beantwortete, ist eigentlich nie zu Ende beantwortet worden. Die Antwort liegt verborgen in jeder Stadt, durch die ich gegangen bin, in jedem Werk, das ich gebaut habe, in jedem Tempel auf einer Koordinate, vor dem ich mich hingehockt und den ich gelesen habe, und in dem Glas Erde in meiner Hand, das mit Koordinaten beschriftet ist.",
    "Jede Lebensphase braucht eine Abrechnung und eine Veröffentlichung, damit man klarer sehen kann, ob man gut gelebt hat. Die Reihe der Professoren in Pavilion 24 und die Gottheit der Erde im kleinen Schrein stellten dieselbe Frage: Wie ordne ich die Beziehung zwischen mir selbst und dem, was mich trägt? Wenn ich keine Antwort fand, war das Land immer dort. Die Zeit wird langsam sichtbar machen, woran sich dieser Ort erinnert."
  ],
  "href": "https://genius912.blogspot.com/2026/06/blog-post_24.html",
  "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEif6-4Sh9fqt5WHzBUQg2Ww6in_jrZ-p9f4zJVe25NKJ8W4amyCIVcxDlpBkmevuL9GvR8w8NTu8FGs4MzcWqFpfaMdvkgmJv-4BuzUVdM2hLRdlROpRBzEBj1UTwt0ZqclVrSLtJ_mlOxQm5jPZw-XD7kcjOd6-mxHfaAT2M4_ODsZiAIiDYpsY0y7IMg/w640-h128/Kunst%20Akdemie%20Nu%CC%88rnberg%20.jpg",
  "images": [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEif6-4Sh9fqt5WHzBUQg2Ww6in_jrZ-p9f4zJVe25NKJ8W4amyCIVcxDlpBkmevuL9GvR8w8NTu8FGs4MzcWqFpfaMdvkgmJv-4BuzUVdM2hLRdlROpRBzEBj1UTwt0ZqclVrSLtJ_mlOxQm5jPZw-XD7kcjOd6-mxHfaAT2M4_ODsZiAIiDYpsY0y7IMg/w640-h128/Kunst%20Akdemie%20Nu%CC%88rnberg%20.jpg"
  ],
  "image_alt_zh": "土地．文化敘事（七）身體作為城市丈量單位",
  "image_alt_en": "Land and Cultural Narratives VII: The Body as a Unit for Measuring the City",
  "image_alt_de": "Land und kulturelle Erzählungen VII: Der Körper als Maßeinheit der Stadt",
  "image_caption_zh": "土地．文化敘事（七）身體作為城市丈量單位",
  "image_caption_en": "Land and Cultural Narratives VII: The Body as a Unit for Measuring the City",
  "image_caption_de": "Land und kulturelle Erzählungen VII: Der Körper als Maßeinheit der Stadt"
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
  const RAUM_FORCE_LAND_NARRATIVE_07 = ${JSON.stringify(article, null, 2)};
  const existingIndex = WRITINGS.findIndex((writing) => (
    writing.id === RAUM_FORCE_LAND_NARRATIVE_07.id ||
    writing.href === RAUM_FORCE_LAND_NARRATIVE_07.href ||
    writing.title_zh === RAUM_FORCE_LAND_NARRATIVE_07.title_zh
  ));

  if (existingIndex >= 0) {
    const existing = WRITINGS[existingIndex];
    const existingZh = Array.isArray(existing.essay_zh) ? existing.essay_zh.join('\n') : '';
    const zhLooksOriginal = existingZh.includes('森林裡的列車') && existingZh.includes('為自己書寫');
    const merged = {
      ...existing,
      ...RAUM_FORCE_LAND_NARRATIVE_07,
      ...(zhLooksOriginal ? { essay_zh: existing.essay_zh } : {}),
      image: existing.image || RAUM_FORCE_LAND_NARRATIVE_07.image,
      images: Array.isArray(existing.images) && existing.images.length ? existing.images : RAUM_FORCE_LAND_NARRATIVE_07.images,
    };
    WRITINGS.splice(existingIndex, 1);
    WRITINGS.unshift(merged);
  } else {
    WRITINGS.unshift(RAUM_FORCE_LAND_NARRATIVE_07);
  }
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
console.log('Forced land narrative seven article with zh/en/de text.');
