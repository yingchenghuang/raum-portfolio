import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_CITY_TIME_WRITING_20260803_START */';
const end = '/* RAUM_CITY_TIME_WRITING_20260803_END */';

const article = {
  id: 'w-city-time-record-20260803',
  year: '2026',
  month: '08',
  title_zh: '城市・土地・文化敘事（十八） 城市時間紀錄計畫',
  title_en: 'City, Land and Cultural Narratives XVIII: Urban Time Recording Project',
  title_de: 'Stadt, Land und kulturelle Erzählungen XVIII: Projekt zur Aufzeichnung städtischer Zeit',
  note_zh: '回想起因 2014 年的作品，是對於時間的焦慮。我的膠卷與日晷，和這座運轉五百年的機械鐘相比，單薄、但誠實。',
  note_en: 'Looking back, the 2014 work began from anxiety about time. My film and sundial were slight compared with a mechanical clock that has run for five hundred years, but they were honest.',
  note_de: 'Rückblickend entstand die Arbeit von 2014 aus einer Angst vor der Zeit. Mein Film und meine Sonnenuhr waren gegenüber einer seit fünfhundert Jahren laufenden mechanischen Uhr schmal, aber ehrlich.',
  image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEqgp1DqUGKVnBujSdnrzVTFrZi5Vb3fKBtRMze2M1eCaYOMWoOLL23M-S6D9liEZGwu0TgLIRLKF0jXCE45Xe5pONtpcLm9uP1Z0TrNqpS2MB-ZZ2cfHVi67aAfZO8giayq7B5z1RYUyJ2X7kgyFRG2B6BEC58vfNJQhVKu74GVEacYb4-hDOLCPgM3U/s7087/die%20zeit%20Projekt%202013.jpg',
  images: [
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEqgp1DqUGKVnBujSdnrzVTFrZi5Vb3fKBtRMze2M1eCaYOMWoOLL23M-S6D9liEZGwu0TgLIRLKF0jXCE45Xe5pONtpcLm9uP1Z0TrNqpS2MB-ZZ2cfHVi67aAfZO8giayq7B5z1RYUyJ2X7kgyFRG2B6BEC58vfNJQhVKu74GVEacYb4-hDOLCPgM3U/s7087/die%20zeit%20Projekt%202013.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjArSnAxy7eSCPEjj8i01uD5RoG168UgBK8lZW1XiZZDvfFaCgC0ZsEFtXzzdbDU1ySSTl0z0W2GnY1Y2Z1e49cFEbg7DH4mairTg9G5QhjgNQ67CsKbOzgaC8SjY8z5NmNSx9dbStUJJFWacSenU1iymqApGEGDRzngRN_nJ2aBtCFJ-F335DJzbVgIb0/s1600/DSC09371.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGXM3I31rprQ8UmM9eCicu4OXVcAAhkexhHAzx7vAH004lqNef0gYO1dJR60K7VRl243iKL4KpDy66F91PClg4UBXqUzrn_NnFDJOitIzoBBMDDSbuoOPveU24UNtNjK2a8hINz-M-vqOQHP44k32nEshtDcJgFRbLcHOnn40mVmbmWgd-LXFtI3-Ve3M/s4896/14.16%20Nu%CC%88rnberg-3.JPG',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieSRyPlL-b3PmbE32eHd2hRRX10sdzF7Vh-NYABR6Bwpy-dUCT3VCFkp6sgYVjfVE0J-OtY3d73kb7LJnSwC_1y-eYcFI1_cqLHLZaG3yff3-u3nGQ8PYALnw1ytzjLerOZ2pu6FmXkbs/s1600/DSC08653-4.jpg'
  ],
  image_alt_zh: '城市時間紀錄計畫原部落格圖片',
  image_alt_en: 'Original blog image of the Urban Time Recording Project',
  image_alt_de: 'Originales Blogbild des Projekts zur Aufzeichnung städtischer Zeit',
  essay_zh: [
    '城市時間紀錄計畫',
    '回想起因2014年的作品，是對於時間的焦慮。我有自己的時間課題，城市有百年、千年的歷史課題。有相關性嗎？也許沒有，但這座城市處處提醒我時間在流逝。',
    '中世紀的人會需要時間感嗎？老城區處處都是時間的提醒，日晷、時鐘、電子鐘隨處可見。可見德國人對於時間從古就很重視吧。但不同時代的時間交疊在同一條街上，渾沌的情緒會延續或是瞬間消散我無從得知。',
    'Zeit zeigen',
    '那一年藝術學院年展,我做了《城市時間計畫》。是膠卷、是日晷、是當下。教室的空間有個天窗隨時間推移，光會經過我的作品，城市的路徑是從車站走到凱薩堡的照片與錄像。是用街道採集用單一視角看待城市的瞬間。今天回頭看這課題有些單薄，或許說藝術是為了解決當下的焦慮，那是一場治療之旅。',
    '有趣的線索一：',
    '紐倫堡美泉上的托勒密星體觀測者雕像。觀星是最古老的計時方式，城市把它鑄在噴泉上。',
    '然後是時間、日晷、紐倫堡時制。這座城市曾經有自己的時間，Nürnberger Uhr，當地人叫它大鐘，文獻最早可考於1374年。每個小時等長,晝與夜卻分開計數，各自從第一小時數起。夏至前後，白晝十六小時，正午落在第八小時;冬至前後，白晝八小時，正午落在第四小時。一年十六個換算日，寫在曆書裡屆時全城的鐘一起撥動一小時。報時的也從來都是人。四座塔樓上的守望者，聖塞巴德教堂先敲，聖羅倫茲教堂應答，兩座塔彼此相望。外地人看不懂，城市只好在1436年於聖凱薩琳教堂另設一座通用時制的鐘，附上換算表;1611年選帝侯會議來到紐倫堡，又一口氣添購三座。1806年，城市併入巴伐利亞失去獨立這套時制也跟著終結。',
    '線索二',
    '帝國的神話或者說幽靈，至今仍是城市的表演者。我想，十二點市集廣場上聖母教堂鐘聲響起，人們期待的是一場遊戲般的表演，至於是否提醒了時間反倒是其次。',
    '中午表演的,是「小人舞鐘」。這座機械藝術鐘稱為Männleinlaufen，位於聖母教堂西側正立面上方，1506至1509年間製作完成。它每天中午十二時運作。',
    '表演順序具有明確的戲劇結構。首先，兩名長號吹奏者啟動。接著鼓手與吹笛者開始動作，其他報時人物加入。序曲結束後，門扇打開七位選帝侯乘著圓形轉盤，依序從坐在中央王座上的查理四世面前經過。選帝侯總共繞行三圈。每位選帝侯通過時皇帝手中的權杖規律抬起與落下，象徵接受臣服與回禮。兩側敲鐘人持續鳴鐘，使整個過程成為聲音、動作與權力秩序結合的機械劇場。',
    '它每天都在重演一個帝國憲政神話：皇帝坐在中心，七位有權選出皇帝的人圍繞他運行。皇帝需要選帝侯的承認，選帝侯也透過皇帝獲得合法性。中心與周邊彼此依存，這就是神聖羅馬帝國的權力結構。',
    '這使小人舞鐘成為一件跨越不同時間層的作品。1509年的造型、1904年的機械改造、戰時的拆卸保存、1950年代的重建、後來的電子同步技術，全都疊合在同一件城市機器裡。',
    '從建築史看，聖母教堂是法蘭肯地區（Franken）哥德式廳堂教堂的重要早期案例。從政治史看，它是查理四世將紐倫堡塑造成帝國城市的空間工具。從鐘錶史看，小人舞鐘是歐洲保存最久、至今每日運作的公共機械人偶劇場之一。從藝術史看，它保存了杜勒之前的紐倫堡繪畫、雕塑與工藝傳統。從記憶政治看，它迫使我們同時看見帝國文明的輝煌，以及1349年猶太社群被殺害與驅逐的歷史。教堂就立在當年被拆毀的猶太會堂舊址上。',
    '聖母教堂真正的主題，是「權力如何透過時間與空間，讓自己看起來永恆」。 皇帝早已消失，選帝侯制度早已終結，《金璽詔書》也失去效力。可是每天中午機器仍讓他們重新運行四分鐘。這正是藝術最強大的形式之一：它將抽象制度轉化為可觀看、可聆聽、可重複的城市儀式。',
    '這儀式感也吸引著世界各地的旅人來看一眼。時間對於旅人、城市生活者、我這樣外來短暫停留的人意義各不相同。我的膠卷與日晷，和這座運轉五百年的機械鐘相比，單薄、但誠實。',
    '焦慮散去展覽拆下，城市的鐘明天中午照樣響。'
  ],
  essay_en: [
    'Urban Time Recording Project',
    'Looking back, the 2014 work began from anxiety about time. I have my own problem of time, while a city has historical problems measured in hundreds or thousands of years. Are they related? Perhaps not, yet this city reminded me everywhere that time was passing.',
    'Did people in the Middle Ages need a sense of time? The old town is full of reminders of time: sundials, clocks and electronic clocks are everywhere. It seems Germans have valued time since ancient times. But when the times of different eras overlap on the same street, I cannot know whether chaotic emotion continues or disappears in an instant.',
    'Zeit zeigen',
    'That year, for the annual exhibition at the art academy, I made Urban Time Project. It was film, it was a sundial, it was the present moment. The classroom had a skylight, and as time passed, light moved across my work. The city route was made of photographs and video walking from the station to the Kaiserburg. It collected the street and looked at moments of the city from a single perspective. Looking back today, the subject feels somewhat thin. Perhaps art was made to resolve the anxiety of that moment. It was a therapeutic journey.',
    'Interesting clue one:',
    'The statue of Ptolemy, the observer of celestial bodies, on Nuremberg Beautiful Fountain. Stargazing is one of the oldest ways of measuring time, and the city cast it onto a fountain.',
    'Then there is time, the sundial and the Nuremberg time system. This city once had its own time: the Nürnberger Uhr, locally called the Great Clock, with documentary evidence as early as 1374. Every hour was equal in length, but day and night were counted separately, each beginning from the first hour. Around the summer solstice, daylight had sixteen hours and noon fell at the eighth hour; around the winter solstice, daylight had eight hours and noon fell at the fourth hour. Sixteen conversion days each year were written into calendars, and on those days the clocks of the whole city were moved by one hour together. Time was always announced by people. Watchmen on four towers performed the signals: St. Sebald rang first, St. Lorenz answered, and the two towers faced one another. Outsiders could not understand it, so in 1436 the city installed another clock with a common time system at St. Catherine Church, along with a conversion table. When the electoral congress came to Nuremberg in 1611, three more clocks were purchased at once. In 1806, when the city was incorporated into Bavaria and lost its independence, this time system also came to an end.',
    'Clue two',
    'The myth of empire, or perhaps its ghost, remains a performer in the city. I think that when the bells of the Frauenkirche ring at noon in the market square, what people expect is a game-like performance; whether it reminds them of time is secondary.',
    'The noon performance is the Little Men Running Clock. This mechanical art clock, called Männleinlaufen, is located above the west facade of the Frauenkirche and was completed between 1506 and 1509. It operates every day at twelve noon.',
    'The sequence of the performance has a clear dramatic structure. First, two trombone players begin. Then the drummer and flutist move, and other time-announcing figures join. After the overture, the doors open and seven prince-electors ride a circular turntable, passing one by one before Charles IV, seated on the central throne. The electors circle three times. Whenever each elector passes, the scepter in the emperor hand rises and falls regularly, symbolizing the acceptance of submission and the return of greeting. Bell-ringers on both sides continue to ring, making the whole process a mechanical theater combining sound, movement and the order of power.',
    'Every day it reenacts a constitutional myth of empire: the emperor sits at the center, and the seven people with the right to elect the emperor revolve around him. The emperor needs the recognition of the electors, and the electors gain legitimacy through the emperor. Center and periphery depend on one another. This is the power structure of the Holy Roman Empire.',
    'This makes the Männleinlaufen a work spanning different layers of time. The form of 1509, the mechanical alteration of 1904, wartime dismantling and preservation, reconstruction in the 1950s, and later electronic synchronization technology are all superimposed within the same urban machine.',
    'From architectural history, the Frauenkirche is an important early example of a Gothic hall church in Franconia. From political history, it was a spatial tool through which Charles IV shaped Nuremberg into an imperial city. From clock history, the Männleinlaufen is one of the longest-preserved public mechanical figure theaters in Europe that still operates daily. From art history, it preserves Nuremberg painting, sculpture and craft traditions before Dürer. From memory politics, it forces us to see both the brilliance of imperial civilization and the history of the Jewish community murdered and expelled in 1349. The church stands on the site of the synagogue that was destroyed that year.',
    'The true theme of the Frauenkirche is how power makes itself appear eternal through time and space. The emperor has long disappeared, the system of prince-electors has long ended, and the Golden Bull has also lost its force. Yet every noon the machine still lets them run again for four minutes. This is one of the most powerful forms of art: it transforms an abstract institution into a visible, audible and repeatable urban ritual.',
    'This ritual also attracts travelers from around the world to take a look. Time means different things to travelers, city dwellers and temporary outsiders like me. Compared with this mechanical clock that has operated for five hundred years, my film and sundial are slight, but honest.',
    'The anxiety disperses, the exhibition is dismantled, and the city clock will ring again tomorrow at noon.'
  ],
  essay_de: [
    'Projekt zur Aufzeichnung städtischer Zeit',
    'Rückblickend entstand die Arbeit von 2014 aus einer Angst vor der Zeit. Ich habe meine eigene Zeitfrage, während eine Stadt historische Fragen von Jahrhunderten oder Jahrtausenden trägt. Gibt es da einen Zusammenhang? Vielleicht nicht, aber diese Stadt erinnerte mich überall daran, dass Zeit vergeht.',
    'Brauchten Menschen im Mittelalter ein Zeitgefühl? In der Altstadt ist Zeit überall sichtbar: Sonnenuhren, Uhren und elektronische Anzeigen begegnen einem ständig. Offenbar legten Deutsche schon früh großen Wert auf Zeit. Doch wenn Zeiten verschiedener Epochen auf derselben Straße übereinanderliegen, weiß ich nicht, ob chaotische Gefühle weiterwirken oder im Augenblick verschwinden.',
    'Zeit zeigen',
    'In jenem Jahr machte ich für die Jahresausstellung der Kunstakademie das Urban Time Project. Es war Film, es war Sonnenuhr, es war Gegenwart. Der Klassenraum hatte ein Oberlicht; mit dem Lauf der Zeit wanderte Licht über meine Arbeit. Der Weg durch die Stadt bestand aus Fotografien und Videos vom Bahnhof bis zur Kaiserburg. Es war ein Sammeln der Straße und ein Blick auf Momente der Stadt aus einer einzigen Perspektive. Heute erscheint mir dieses Thema etwas dünn. Vielleicht war Kunst damals dazu da, die Angst des Augenblicks zu lösen. Es war eine therapeutische Reise.',
    'Interessante Spur eins:',
    'Die Figur des Ptolemäus, des Beobachters der Himmelskörper, am Nürnberger Schönen Brunnen. Sternbeobachtung ist eine der ältesten Arten der Zeitmessung, und die Stadt hat sie in einen Brunnen gegossen.',
    'Dann gibt es Zeit, Sonnenuhr und die Nürnberger Uhr. Diese Stadt hatte einst ihre eigene Zeit: die Nürnberger Uhr, von den Einheimischen die große Uhr genannt, urkundlich bereits 1374 belegt. Jede Stunde war gleich lang, doch Tag und Nacht wurden getrennt gezählt, jeweils beginnend mit der ersten Stunde. Um die Sommersonnenwende hatte der Tag sechzehn Stunden und der Mittag lag in der achten Stunde; um die Wintersonnenwende hatte der Tag acht Stunden und der Mittag lag in der vierten Stunde. Sechzehn Umrechnungstage im Jahr standen in den Kalendern; dann wurden die Uhren der ganzen Stadt gemeinsam um eine Stunde verstellt. Die Zeit wurde auch immer von Menschen verkündet. Wächter auf vier Türmen gaben die Zeichen: St. Sebald schlug zuerst, St. Lorenz antwortete, die beiden Türme sahen einander an. Auswärtige verstanden dieses System nicht, deshalb richtete die Stadt 1436 an der Katharinenkirche eine weitere Uhr mit allgemeiner Zeitrechnung und Umrechnungstafel ein. Als 1611 der Kurfürstentag nach Nürnberg kam, wurden auf einmal drei weitere Uhren angeschafft. 1806, als die Stadt in Bayern eingegliedert wurde und ihre Unabhängigkeit verlor, endete auch dieses Zeitsystem.',
    'Spur zwei',
    'Der Mythos des Reiches, oder vielleicht sein Geist, bleibt bis heute ein Darsteller der Stadt. Ich glaube, wenn mittags auf dem Marktplatz die Glocken der Frauenkirche erklingen, erwarten die Menschen vor allem eine spielartige Aufführung; ob sie an Zeit erinnert, ist fast zweitrangig.',
    'Die Mittagsaufführung ist das Männleinlaufen. Diese mechanische Kunstuhr befindet sich oberhalb der westlichen Hauptfassade der Frauenkirche und wurde zwischen 1506 und 1509 fertiggestellt. Sie läuft täglich um zwölf Uhr mittags.',
    'Die Reihenfolge der Aufführung besitzt eine klare dramatische Struktur. Zuerst beginnen zwei Posaunenbläser. Dann bewegen sich Trommler und Pfeifer, weitere Figuren der Zeitansage kommen hinzu. Nach der Ouvertüre öffnen sich die Türen, und sieben Kurfürsten fahren auf einer runden Drehscheibe nacheinander vor Karl IV. vorbei, der auf dem zentralen Thron sitzt. Die Kurfürsten umrunden ihn insgesamt dreimal. Wenn jeder Kurfürst vorbeikommt, hebt und senkt sich das Zepter in der Hand des Kaisers regelmäßig, als Zeichen der Annahme von Unterwerfung und Gegengruß. Die Glockenschläger auf beiden Seiten läuten weiter und machen den Vorgang zu einem mechanischen Theater aus Klang, Bewegung und Machtordnung.',
    'Täglich wiederholt es einen verfassungsmythologischen Mythos des Reiches: Der Kaiser sitzt im Zentrum, und die sieben Personen mit dem Recht, den Kaiser zu wählen, kreisen um ihn. Der Kaiser braucht die Anerkennung der Kurfürsten, und die Kurfürsten erhalten ihre Legitimität durch den Kaiser. Zentrum und Peripherie sind voneinander abhängig. Das ist die Machtstruktur des Heiligen Römischen Reiches.',
    'So wird das Männleinlaufen zu einem Werk, das verschiedene Zeitschichten überschreitet. Die Gestalt von 1509, der mechanische Umbau von 1904, die Demontage und Sicherung während des Krieges, der Wiederaufbau der 1950er Jahre und spätere elektronische Synchrontechnik überlagern sich in derselben städtischen Maschine.',
    'Aus architekturgeschichtlicher Sicht ist die Frauenkirche ein wichtiges frühes Beispiel einer gotischen Hallenkirche in Franken. Politisch war sie ein räumliches Werkzeug, mit dem Karl IV. Nürnberg zur Reichsstadt formte. Aus uhrengeschichtlicher Sicht ist das Männleinlaufen eines der am längsten erhaltenen öffentlichen mechanischen Figurentheater Europas, das bis heute täglich läuft. Aus kunsthistorischer Sicht bewahrt es Nürnberger Malerei, Skulptur und Handwerkstraditionen vor Dürer. Aus erinnerungspolitischer Sicht zwingt es uns, zugleich den Glanz imperialer Zivilisation und die Geschichte der Ermordung und Vertreibung der jüdischen Gemeinde im Jahr 1349 zu sehen. Die Kirche steht auf dem Gelände der damals zerstörten Synagoge.',
    'Das eigentliche Thema der Frauenkirche ist, wie Macht durch Zeit und Raum so erscheinen kann, als sei sie ewig. Der Kaiser ist längst verschwunden, das Kurfürstensystem längst beendet, und die Goldene Bulle hat ihre Wirkung verloren. Doch jeden Mittag lässt die Maschine sie vier Minuten lang erneut laufen. Genau darin liegt eine der stärksten Formen der Kunst: Sie verwandelt abstrakte Ordnung in ein sichtbares, hörbares und wiederholbares städtisches Ritual.',
    'Dieses Ritual zieht auch Reisende aus aller Welt an, die es einmal sehen wollen. Zeit bedeutet für Reisende, Stadtbewohner und kurzfristige Fremde wie mich jeweils etwas anderes. Verglichen mit dieser seit fünfhundert Jahren laufenden mechanischen Uhr sind mein Film und meine Sonnenuhr schmal, aber ehrlich.',
    'Die Angst verfliegt, die Ausstellung wird abgebaut, und die Uhr der Stadt wird morgen Mittag wieder schlagen.'
  ],
  href: 'https://genius912.blogspot.com/2026/08/blog-post_03.html'
};

function removeMarkedBlock(html) {
  const startIndex = html.indexOf(start);
  if (startIndex === -1) return html;
  const endIndex = html.indexOf(end, startIndex);
  if (endIndex === -1) return html;
  return html.slice(0, startIndex) + html.slice(endIndex + end.length);
}

let html = removeMarkedBlock(readFileSync(file, 'utf8'));
const block = `\n${start}\n{\n  const RAUM_CITY_TIME_WRITING = ${JSON.stringify(article, null, 2)};\n  const existingIndex = WRITINGS.findIndex((writing) => (\n    writing.id === RAUM_CITY_TIME_WRITING.id ||\n    writing.href === RAUM_CITY_TIME_WRITING.href ||\n    writing.title_zh === RAUM_CITY_TIME_WRITING.title_zh\n  ));\n  if (existingIndex >= 0) {\n    WRITINGS.splice(existingIndex, 1);\n  }\n  WRITINGS.unshift(RAUM_CITY_TIME_WRITING);\n  window.WRITINGS = WRITINGS;\n}\n${end}\n`;

const anchor = 'const LINKS = [';
if (!html.includes(anchor)) {
  throw new Error('Cannot find LINKS insertion point.');
}
html = html.replace(anchor, `${block}\n${anchor}`);
writeFileSync(file, html, 'utf8');
console.log('Synced city time writing article.');
