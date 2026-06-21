import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_LAND_NARRATIVE_PATCH_START */';
const end = '/* RAUM_LAND_NARRATIVE_PATCH_END */';

const writings = [
  {
    id: 'w-land-narrative-01',
    year: '2026', month: '06',
    title_zh: '無人的市場，與自己的對話',
    title_en: 'An Unattended Market, a Conversation with Oneself',
    title_de: 'Ein unbeaufsichtigter Markt und das Gespräch mit sich selbst',
    note_zh: '從德國鄉間的無人農產亭談起：信任、良知與制度之間，真正被測量的是一個人如何面對自己。',
    note_en: 'Beginning with unattended farm stands in rural Germany: between trust, conscience and systems, what is truly measured is how one faces oneself.',
    note_de: 'Ausgehend von unbeaufsichtigten Hofständen in Deutschland: Zwischen Vertrauen, Gewissen und Systemen wird vor allem gemessen, wie ein Mensch sich selbst begegnet.',
    essay_zh: [
      '人與土地之間有一種信任。你播種，它就生長；你照料，它就回報。土地從不過問你是誰。這種信任久了，會從人與土地之間，溢到人與人之間。',
      '公路旁偶爾會看見一座無人看守的農產亭。新鮮的瓜果擺在棚架上，標著價，旁邊一只投幣盒。第一次經過的人多半會愣一下：為什麼沒有人看守。這個愣神的瞬間，正是一切的起點。',
      '在德國的鄉間，這樣的無人銷售隨處可見。當天現摘的農作擺上簡單的架位，每一樣標好價格，一只木盒或鐵箱收錢。沒有店員，沒有監視，沒有人提醒你該付多少。人們把這叫做良心市場。要理解它為什麼能成立，得回頭去看德國的品德教育，看這個民族如何維持如此高度的自治。',
      '最耐人尋味的是找零。架上無人，盒裡的零錢未必湊得齊。當你手上只有一張大鈔，當你挑的南瓜大小不一、價格全憑喜好，這時你會多付，還是少付。你心裡認定的合理價位，又是多少。這一刻沒有人和你交易，你是在跟自己對話，也是在跟這片土地的神祇交換意念。紐倫堡萬聖節前的南瓜田正是如此，一顆南瓜值多少，最終由站在它面前的那個人說了算。',
      '把這件事放大，就是搭車該不該買票的問題。城市的地鐵與輕軌沒有閘機，車上擺一台售票機，買不買隨你。於是要問，真的不會有人逃票嗎。答案是有的。德國逃票的人並不少，他們有個專稱叫黑乘客，柏林的地鐵裡甚至掛過「每六個人就有一個逃票者」的標語。',
      '那麼，信任的基礎是不是就此崩解。先別急著感傷。從經濟成本的角度看，這套系統的邏輯一點也不浪漫。閘機的缺席與信任無關，德鐵算的是另一筆帳。在每一個站台架設閘機、長年雇人維護的開銷，遠高於逃票的損失；再養一支不必穿制服的查票隊伍，配上一張六十歐元的罰單，虧空也就補得差不多。所謂的信任，在帳本上是一道成本最優解。學期票印在學生證上，老人有優惠年票，多數德國人有車有單車，真正能逃、想逃的其實是少數。容許你不買票，是因為防你買票太貴。',
      '浪漫被拆穿了，更深的問題卻剛浮現。經濟理性能解釋制度為什麼容許信任，解釋不了站在投幣盒前的那個人，為什麼選擇誠實。制度算的是群體的成本，個人面對的是自己的良知。良心市場真正的份量，不靠它證明人性本善。它的價值在另一處。每一枚硬幣落進盒裡，都是一次主體性的演練。',
      '法律管的是行為，良心管的是意念。罰款劃出一條底線，越界就得付代價；奉獻指向一道上限，那是沒有人看著時你仍願意給出的東西。一個社會的成熟，先靠生活教育把守規矩養成習慣，再靠法律把底線兜住。良心市場，恰好站在這兩者交會的地方。',
      '於是回到土地。信任不會因為有人逃票而崩解，因為信任這件事，問的從來都是自己。這也是土地教人的第一課。你怎麼對待它，它不會當場拆穿你，時間會。站在無人的攤位前那一念之差的多投或少投，和你埋下一粒種子時的誠意，原是同一件事。'
    ],
    essay_en: [
      'There is a kind of trust between people and land. You sow, and it grows; you tend, and it answers. The land never asks who you are. Over time, this trust can spill over from the relation between people and soil into the relation between people themselves.',
      'At the roadside one sometimes sees a small unattended farm stand. Fresh fruit and vegetables are placed on shelves, prices marked, with a coin box beside them. Most first-time passersby pause for a second: why is no one watching? That moment of hesitation is where everything begins.',
      'In rural Germany, this kind of self-service sale is common. Produce harvested that day is set out on simple racks; each item is labelled, and a wooden box or metal tin receives the money. There is no clerk, no surveillance, no one to remind you what you owe. People call it an honesty market. To understand why it works, one has to look back toward civic education and the ways a society sustains a high degree of self-governance.',
      'The most revealing moment is change. When no one is there and the box cannot make exact change, when you hold only a larger bill, when the pumpkins differ in size and the price is partly a matter of preference: will you pay more, or less? What do you believe is reasonable? In that instant no one is trading with you. You are speaking with yourself, and perhaps also with the spirits of the land. In the pumpkin fields around Nuremberg before Halloween, a pumpkin is finally worth what the person standing before it decides it is worth.',
      'Enlarge the question and it becomes the question of whether one buys a ticket on public transport. In many cities there are no ticket gates; a machine stands in the carriage or on the platform, and whether you buy is up to you. So do people really never evade fares? Of course they do. Germany has plenty of fare dodgers, Schwarzfahrer, and Berlin once displayed a slogan saying that one in six passengers was riding without a ticket.',
      'Does that mean the foundation of trust has collapsed? Not so quickly. From the perspective of economic cost, the system is not romantic at all. The absence of gates has less to do with trust than with accounting. Installing and maintaining gates at every station costs more than the losses from fare evasion; a plain-clothes inspection team and a sixty-euro fine can cover much of the gap. What we call trust is, in the ledger, an optimized cost structure. Student passes are printed on student IDs, seniors buy discounted annual tickets, many Germans own cars or bicycles; those who can and want to evade are a smaller group than the myth suggests. You are allowed not to buy immediately because forcing everyone to buy is too expensive.',
      'Once the romance is dismantled, the deeper question appears. Economic reason can explain why a system permits trust, but not why the person standing before the coin box chooses honesty. The system calculates collective cost; the individual faces conscience. The real weight of an honesty market does not lie in proving that human nature is good. It lies elsewhere. Every coin dropped into the box is a small rehearsal of subjectivity.',
      'Law governs behavior; conscience governs intention. A fine draws the lower limit: cross it, and you pay. Offering points toward an upper limit: what you are still willing to give when no one is watching. A mature society first uses everyday education to turn rules into habits, then relies on law to hold the bottom line. The honesty market stands precisely where these two forces meet.',
      'So we return to the land. Trust does not collapse because someone evades a fare, because trust has always been a question addressed to oneself. This is also the first lesson the land teaches. How you treat it may not be exposed immediately; time will answer. The slight difference between paying a little more or a little less at an unattended stand, and the sincerity with which you plant a seed, are in the end the same thing.'
    ],
    essay_de: [
      'Zwischen Mensch und Land gibt es eine Art Vertrauen. Man sät, und es wächst; man pflegt, und es antwortet. Das Land fragt nie, wer man ist. Wenn dieses Vertrauen lange genug besteht, kann es aus der Beziehung zwischen Mensch und Boden in die Beziehung zwischen Menschen übergehen.',
      'Am Straßenrand sieht man manchmal einen kleinen, unbeaufsichtigten Hofstand. Frisches Obst und Gemüse liegen auf einfachen Gestellen, die Preise sind angeschrieben, daneben steht eine Kasse. Wer zum ersten Mal vorbeikommt, hält meist kurz inne: Warum passt hier niemand auf? Genau in diesem Moment des Innehaltens beginnt alles.',
      'In ländlichen Gegenden Deutschlands sind solche Formen des Selbstverkaufs alltäglich. Was am selben Tag geerntet wurde, liegt auf einfachen Regalen; jedes Stück hat seinen Preis, eine Holzkiste oder Metallbox sammelt das Geld. Kein Verkäufer, keine Überwachung, niemand erinnert einen daran, wie viel zu zahlen ist. Man nennt das einen Vertrauensstand oder einen Markt der Ehrlichkeit. Um zu verstehen, warum er funktioniert, muss man auf die moralische und bürgerliche Erziehung blicken, durch die eine Gesellschaft ein hohes Maß an Selbstverwaltung trägt.',
      'Am aufschlussreichsten ist der Moment des Wechselgeldes. Wenn niemand da ist und in der Kasse nicht genug Münzen liegen, wenn man nur einen größeren Schein hat, wenn die Kürbisse unterschiedlich groß sind und der Preis auch vom eigenen Ermessen abhängt: Zahlt man mehr oder weniger? Was hält man selbst für angemessen? In diesem Augenblick handelt niemand mit einem. Man spricht mit sich selbst, vielleicht auch mit den Gottheiten dieses Landes. In den Kürbisfeldern um Nürnberg vor Halloween ist ein Kürbis am Ende so viel wert, wie der Mensch, der vor ihm steht, ihm zuspricht.',
      'Vergrößert man diese Frage, wird sie zur Frage, ob man im öffentlichen Verkehr eine Fahrkarte kauft. U-Bahn und Straßenbahn haben oft keine Schranken; ein Automat steht auf dem Bahnsteig oder im Wagen, kaufen muss man selbst. Bedeutet das, dass niemand schwarzfährt? Natürlich nicht. Schwarzfahrer gibt es auch in Deutschland, und in Berlin hing einmal der Satz, jeder sechste Fahrgast fahre ohne Ticket.',
      'Bricht damit die Grundlage des Vertrauens zusammen? Nicht so schnell. Aus ökonomischer Sicht ist die Logik dieses Systems kaum romantisch. Das Fehlen von Schranken hat weniger mit Vertrauen zu tun als mit einer Rechnung. An jedem Bahnhof Schranken zu bauen und dauerhaft zu warten, kostet mehr als der Verlust durch Schwarzfahren; eine Kontrolleinheit ohne Uniform und ein Bußgeld von sechzig Euro gleichen vieles aus. Was Vertrauen heißt, ist im Kassenbuch eine optimale Kostenlösung. Semestertickets stehen auf Studierendenausweisen, ältere Menschen haben vergünstigte Jahreskarten, viele besitzen Auto oder Fahrrad; wer tatsächlich schwarzfahren kann und will, bleibt eine begrenzte Gruppe. Man darf scheinbar frei entscheiden, weil die vollständige Kontrolle zu teuer wäre.',
      'Ist die Romantik entzaubert, taucht erst die tiefere Frage auf. Ökonomische Vernunft erklärt, warum ein System Vertrauen zulässt; sie erklärt nicht, warum der Mensch vor der Kasse ehrlich bleibt. Das System berechnet die Kosten der Gruppe, der Einzelne begegnet seinem Gewissen. Das eigentliche Gewicht des Ehrlichkeitsmarktes liegt nicht darin, die Güte des Menschen zu beweisen. Es liegt an anderer Stelle. Jede Münze, die in die Kasse fällt, ist eine kleine Übung der Subjektivität.',
      'Das Recht regelt das Verhalten, das Gewissen die Absicht. Die Strafe zieht eine untere Grenze: Wer sie überschreitet, zahlt. Die freiwillige Gabe zeigt nach oben: auf das, was man noch zu geben bereit ist, wenn niemand hinsieht. Eine reife Gesellschaft macht Regeln zunächst durch Alltagserziehung zur Gewohnheit und sichert die untere Grenze anschließend durch das Recht. Der Ehrlichkeitsmarkt steht genau an dieser Schnittstelle.',
      'So kehren wir zum Land zurück. Vertrauen zerbricht nicht, weil jemand schwarzfährt, denn Vertrauen fragt immer zuerst nach einem selbst. Das ist auch die erste Lektion des Landes. Wie man es behandelt, verrät es nicht sofort; die Zeit wird antworten. Der kleine Unterschied zwischen etwas mehr oder etwas weniger Geld an einem unbeaufsichtigten Stand und der Aufrichtigkeit, mit der man einen Samen in die Erde legt, ist letztlich ein und dieselbe Sache.'
    ],
    href: ''
  },
  {
    id: 'w-land-narrative-02',
    year: '2026', month: '06',
    title_zh: '一座無魂城市的考古學',
    title_en: 'Archaeology of a Soulless City',
    title_de: 'Archäologie einer seelenlosen Stadt',
    note_zh: '都市更新、房地產、農地與地窖中的陪葬品：一座城市失去靈魂之後，留下的是欲望、殘片與地下的記憶。',
    note_en: 'Urban renewal, real estate, farmland and burial objects in a cellar: when a city loses its soul, what remains are desire, fragments and subterranean memory.',
    note_de: 'Stadterneuerung, Immobilien, Ackerland und Grabbeigaben im Keller: Verliert eine Stadt ihre Seele, bleiben Begierde, Fragmente und unterirdische Erinnerung zurück.',
    essay_zh: [
      '都市更新與房地產開發像一個沒有終點的循環。城市不斷被建造，卻越來越不像有人真正生活其中。理想城市並不存在。它也許只能被想像在天空，而它在現實中的殘骸，則像陪葬品一樣被安放在地窖裡。',
      '《大富翁》是一種資本市場的虛擬模型。現實中的城市也像這場遊戲，由土地、投資、佔有、獵捕與被獵捕組成。因此，我在作品中象徵性地買下一座城市，用來回應社會地位、財產制度與階級不平等。',
      '旅行者是城市觀察者。他帶著對歐洲文化的浪漫想像穿越不同城市，並在各種時代、建築樣式與歷史層疊中，形成一座拼貼城市。這座城市像一本生活字典，記錄人的移動、記憶與慾望。家是安身之處，也可能成為一種被困住的狀態。',
      '對我而言，買房是一種遙遠的幻想。在這段旅程中，我試圖透過互動遊戲建立自己的記憶。這個遊戲以城市為棋盤，以房屋為棋子，讓觀者在看似輕鬆的參與中，感受到居住、資本與失落之間的拉扯。',
      '我收集都市更新過程中被拆除的建築廢棄物，將不同區域的建材搗碎，轉化為創作材料。在盧森堡的美術館經驗中，我重新思考歷史建築再利用的可能性，也對照台灣在古蹟修復與空間再生上的困難。我在舊城牆上進行一場修補表演，讓站在壕溝上的觀者共同面對古蹟保存、再利用與觀看位置的問題。',
      '在 Friedrichshafen 湖區，人們想像並建構自己的度假村，如同外國房地產投資者，在一塊被想像為理想的度假地上興建房屋。然而這些房子呈現出無人照管、逐漸風化與毀壞的狀態，暗示所有居住夢想都建立在一個並不穩固的基礎上。',
      '在都市更新之下，農業用地逐漸被建築佔領。房地產炒作使年輕人購屋成為遙不可及的夢。城市表面持續擴張，內部卻失去生活的重量，最終形成一座沒有靈魂的城市。',
      '不清楚的建築樣式，顯示城市失去自身的文化辨識度。地窖的開啟如同一座考古現場的發掘。東方風水神秘學中，方位、色彩與物件被重新安置；陶罐中保存著小麥種子，像是對土地記憶的封存。也許理想的房子最後像一件陪葬品，安靜長眠。人終究什麼都帶不走，只留下城市的殘片、欲望的模型，以及被壓在地下的靈魂。'
    ],
    essay_en: [
      'Urban renewal and real-estate development form an endless loop. The city keeps being built, yet it increasingly feels as though no one truly lives inside it. The ideal city does not exist. Perhaps it can only be imagined in the sky, while its material remains are placed in a cellar like burial objects.',
      'Monopoly is a virtual model of the capital market. The real city resembles this game as well: a system of land, investment, possession, hunting and being hunted. In the work, I therefore symbolically purchase a city in response to social status, property systems and class inequality.',
      'The traveler becomes an observer of cities. Carrying a romantic imagination of European culture, he passes through different cities and gathers eras, architectural styles and historical layers into a collage-city. This city becomes a dictionary of living, recording movement, memory and desire. Home is a place of shelter, but it can also become a condition of confinement.',
      'For me, buying a house remains a distant fantasy. On this journey I attempt to build my own memory through an interactive game. The city becomes the board and houses become the pieces, allowing viewers, through an apparently light form of participation, to feel the tension among dwelling, capital and loss.',
      'I collect construction waste from buildings demolished during urban renewal, crush materials from different districts and transform them into artistic matter. In Luxembourg, the experience of the museum led me to reconsider the possibility of reusing historic architecture, while also reflecting on the difficulties of restoration and spatial regeneration in Taiwan. I carried out a repair performance on an old city wall, so that viewers standing along the moat confronted questions of preservation, reuse and the position from which history is seen.',
      'In the lake region of Friedrichshafen, people imagine and construct their own holiday resorts, like foreign real-estate investors building houses on an idealized vacation site. Yet these houses appear unattended, weathered and damaged, suggesting that every dream of dwelling rests on an unstable foundation.',
      'Under urban renewal, agricultural land is gradually occupied by buildings. Real-estate speculation makes home ownership an unreachable dream for young people. The city expands on the surface, while inside it loses the weight of life, eventually becoming a city without a soul.',
      'Ambiguous architectural styles reveal the loss of cultural self-recognition. The opening of a cellar appears like the excavation of an archaeological site. Within it, eastern Feng Shui mysticism, directions, colors and objects are rearranged; wheat seeds preserved in ceramic jars become a sealing of land memory. Perhaps the ideal house finally resembles a burial object, quietly asleep. In the end, one can take nothing away, leaving only fragments of the city, models of desire and a soul pressed underground.'
    ],
    essay_de: [
      'Stadterneuerung und Immobilienentwicklung bilden einen endlosen Kreislauf. Es wird immer weiter gebaut, doch die Stadt wirkt zunehmend unbewohnt. Die ideale Stadt existiert nicht. Vielleicht liegt sie nur noch im Himmel, während ihre materiellen Überreste als Grabbeigaben in einem Keller ruhen.',
      'Monopoly ist ein virtuelles Modell des Kapitalmarktes. Tatsächlich ähneln unsere Städte diesem Spiel: einem System aus Besitz, Spekulation, Jagd und Beute. Deshalb kaufe ich in dieser Arbeit symbolisch eine Stadt, als kritische Untersuchung von sozialem Status, Eigentum und sozialer Ungleichheit.',
      'Der Reisende wird zum Stadtbeobachter. Er trägt eine romantische Vorstellung der europäischen Kultur in sich. Die Collage-Stadt führt durch verschiedene Zeiten, Architekturen und historische Schichten; sie wird zu einem Wörterbuch des Lebens. Zuhause bedeutet Geborgenheit, kann aber auch Einschließung sein.',
      'Für mich bleibt der Kauf eines Hauses eine entfernte Fantasie. Auf dieser Reise baue ich mir ein Gedächtnis auf, durch ein interaktives Spiel, in dem Beobachtung, Erinnerung und Kritik miteinander verbunden werden.',
      'Aus abgerissenen Gebäuden der Stadterneuerung sammle ich Baumaterialien aus verschiedenen Stadtteilen. Ich zerkleinere sie und verwandle sie in künstlerisches Material. In Luxemburg reflektierte ich darüber, warum die Wiederverwendung historischer Architektur in Taiwan so schwer realisierbar scheint. Auf der alten Stadtmauer führte ich eine Reparatur-Performance durch. Die Zuschauerinnen und Zuschauer standen am Graben und wurden Teil einer Betrachtung über Restaurierung, Erhaltung und Wiederverwendung historischer Orte.',
      'In Friedrichshafen entwerfen Menschen ihre eigenen Ferienresorts. Sie agieren wie ausländische Immobilieninvestoren, die auf einem idealisierten Urlaubsort ihr eigenes Haus errichten. Doch die Häuser wirken verlassen, verwittert und beschädigt. Alles steht auf einem unsicheren Fundament.',
      'Landwirtschaftliche Flächen werden im Prozess der Stadterneuerung zunehmend von Gebäuden besetzt. Immobilienspekulation macht den Erwerb eines Hauses für junge Menschen zu einem unerreichbaren Traum. Am Ende entsteht eine Stadt ohne Seele.',
      'Uneindeutige Baustile zeigen den Verlust kultureller Selbstvergewisserung. Ein geöffneter Keller erscheint wie eine archäologische Fundstelle. In ihm begegnen sich östliche Feng-Shui-Vorstellungen, Farbordnungen verschiedener Himmelsrichtungen und Gefäße mit Weizensamen. Vielleicht gleicht das ideale Haus am Ende einer Grabbeigabe: Es wird sorgsam aufbewahrt, bleibt jedoch im Dunkeln zurück. Auch wir können am Ende nichts mitnehmen.'
    ],
    href: 'https://genius912.blogspot.com/2026/06/archaologie-einer-seelenlosen-stadt.html'
  },
  {
    id: 'w-land-narrative-03',
    year: '2026', month: '06',
    title_zh: '公共空間的美感經驗',
    title_en: 'The Aesthetic Experience of Public Space',
    title_de: 'Die ästhetische Erfahrung im öffentlichen Raum',
    note_zh: '公共藝術不是一件被放進空間的作品，而是一種生活場域、共享經驗與環境創造力的持續經營。',
    note_en: 'Public art is not simply an object placed in space, but an ongoing cultivation of lived environment, shared experience and environmental imagination.',
    note_de: 'Kunst im öffentlichen Raum ist nicht bloß ein Objekt im Raum, sondern die dauerhafte Pflege von Lebenswelt, geteilter Erfahrung und schöpferischem Umfeld.',
    essay_zh: [
      '公共藝術的起點，是對區域環境的整體理解。它要在社會、經濟、文化、歷史、空間與時間這些層面之間來回思考，並將它們整合成一個完整的視野。它面對的是人文地景，是居民的共同記憶與生命經驗，是人們對場域與地方所累積的情感。',
      '正因如此，公共藝術不只是一件放置於空間中的藝術品。它牽涉公共的社會性，牽涉公共服務，也牽涉一段引導公眾參與的過程。它關心生活場域，關心空間的本質，關心公眾日常的視覺經驗。從一件作品到一種公眾意識，從設置點的價值到整體環境的未來發展，藝術進入空間的本質，始終是主體與客體之間的互動，以及地方文化厚度的累積。',
      '對居民而言，美麗也許就藏在繁雜街景裡的一次偶然遇見。隨手用手機拍下，又匆匆離去。是誰造就了這樣的場景，又是如何吸引了民眾的目光？',
      '市容之美，從來不只是公部門在公共空間的造景美化。它來自人與環境之間長期累積的默契，一種彼此共享的美感連結。都市的美感經驗，絕非少數公共藝術作品就能達成。',
      '每個人都有自己的生活領域。在日常移動的經驗裡，有多少事物讓我們覺得愉悅而美麗？還是我們總是低頭看著手機螢幕，在虛幻的世界裡遨遊，反倒覺得踏實些？',
      '美感經驗，關乎一片不可忽視的心靈視野。當環境的粗糙被縱容或默許，居民的回應不會只是無奈的申訴。視覺需要鍛鍊。一盆造景，可能是用心的點綴，也可能只是空間的佔據。我們究竟在美化環境，還是在美化心靈？這個世界，沒有所謂理所當然的美麗。',
      '一件美麗的事物，從來不是憑空而來。即便只是一盆造景，背後也需要多少心思與時間的付出，才能換來眼前的樣貌。公共藝術對空間的干預，正是這份付出的延伸。藝術創作者所打開的，是一個社會的向度，一種詩意的營造。它透過符碼進行溝通，也藉此傳播議題。',
      '若對社會脈絡的理解只停留在浮面的樣板樣式，文化觀光與社區景點便容易流於形式，公仔文化也成為另一種型態的裝飾品。藝術如何真正介入空間，取決於它對生活觀點與文化價值的理解有多深。',
      '情感所建構的環境，無法用單一的設施或裝置完成。它需要的是一個可以被經營、能夠持續的環境，一種環境創造力的思維。這才是公共藝術文化行銷真正的起點。'
    ],
    essay_en: [
      'The starting point of public art is a holistic understanding of the regional environment. It must move among social, economic, cultural, historical, spatial and temporal layers, integrating them into a wider field of vision. What it faces is a human landscape: the shared memory and lived experience of residents, and the feelings accumulated toward a site and place.',
      'For this reason, public art is more than an artwork placed in space. It concerns the social nature of the public, the provision of public service, and a process that guides people toward participation. It cares for the lived environment, for the essence of space, and for the everyday visual experience of the public. From a single work to public consciousness, from the value of the site to the future development of the whole environment, the essence of art entering space remains the interaction between subject and object, and the accumulation of a place’s cultural depth.',
      'For residents, beauty may be hidden in an accidental encounter within a busy streetscape: a quick photo on a phone, then a hurried departure. Who created such a scene, and how did it draw the public gaze?',
      'The beauty of the cityscape has never been merely the beautification of public space by public agencies. It comes from a long-formed tacit understanding between people and environment, a shared aesthetic connection. The aesthetic experience of the city can never be achieved by a small number of public artworks alone.',
      'Everyone has their own sphere of daily life. In the experience of moving through our everyday routes, how many things do we find pleasing and beautiful? Or do we always lower our eyes to the phone screen, roaming through a virtual world that somehow feels more secure?',
      'Aesthetic experience concerns an inner horizon that cannot be ignored. When the roughness of an environment is tolerated or silently permitted, the response of residents will not be merely helpless complaint. Vision must be trained. A potted arrangement may be a careful accent, or it may simply occupy space. Are we beautifying the environment, or beautifying the mind? In this world, there is no such thing as beauty that can be taken for granted.',
      'A beautiful thing never comes from nowhere. Even a modest plant arrangement requires thought and time before it becomes what we see. The intervention of public art in space is an extension of that devotion. What artists open is a social dimension, a poetic construction. Through signs they communicate, and through that communication they carry issues forward.',
      'If the understanding of social context remains only at the level of surface templates, cultural tourism and community attractions easily become formal gestures, while mascot culture turns into another mode of decoration. Whether art can truly intervene in space depends on how deeply it understands ways of living and cultural value.',
      'An environment built through feeling cannot be completed by a single facility or installation. It requires an environment that can be cultivated and sustained, a way of thinking rooted in environmental creativity. This is the true starting point of cultural marketing for public art.'
    ],
    essay_de: [
      'Der Ausgangspunkt der Kunst im öffentlichen Raum liegt im ganzheitlichen Verständnis des regionalen Umfelds. Sie muss zwischen den Ebenen des Sozialen, Ökonomischen, Kulturellen, Historischen, Räumlichen und Zeitlichen hin und her denken und sie zu einer umfassenden Sichtweise zusammenführen. Ihr Gegenüber ist die Kulturlandschaft, das gemeinsame Gedächtnis und die Lebenserfahrung der Bewohner, jene Gefühle, die sich gegenüber Schauplätzen und Orten angesammelt haben.',
      'Eben deshalb ist Kunst im öffentlichen Raum mehr als ein im Raum platziertes Kunstwerk. Sie berührt das soziale Wesen des Öffentlichen, sie berührt den Dienst an der Öffentlichkeit, und sie berührt einen Prozess, der die Öffentlichkeit zur Teilhabe führt. Es geht ihr um die Lebenswelt, um das Wesen des Raumes, um die alltägliche visuelle Erfahrung der Öffentlichkeit. Vom einzelnen Werk zum öffentlichen Bewusstsein, vom Wert des Standorts zur zukünftigen Entwicklung des gesamten Umfelds: Wenn Kunst in den Raum eintritt, bleibt ihr Wesen stets das Wechselspiel zwischen Subjekt und Objekt sowie das Anwachsen der kulturellen Dichte eines Ortes.',
      'Für die Bewohner verbirgt sich das Schöne vielleicht in einer zufälligen Begegnung inmitten des dichten Straßenbildes. Rasch mit dem Handy festgehalten, und schon eilt man weiter. Wer hat diese Szene geschaffen, und wie hat sie den Blick der Menschen auf sich gezogen?',
      'Die Schönheit des Stadtbildes war noch nie bloß die gestalterische Verschönerung des öffentlichen Raums durch die Behörden. Sie entsteht aus dem über lange Zeit gewachsenen, stillschweigenden Einverständnis zwischen Mensch und Umgebung, aus einer gemeinsam geteilten ästhetischen Verbindung. Die ästhetische Erfahrung der Stadt lässt sich niemals durch einige wenige Werke der Kunst im öffentlichen Raum erreichen.',
      'Jeder Mensch hat seinen eigenen Lebensbereich. Wie viele Dinge in der Erfahrung der täglichen Wege empfinden wir als angenehm und schön? Oder senken wir den Blick doch immerzu auf den Bildschirm des Handys und treiben durch eine Scheinwelt, in der wir uns paradoxerweise geborgener fühlen?',
      'Die ästhetische Erfahrung betrifft einen inneren Horizont, der sich nicht übersehen lässt. Wo die Rohheit der Umgebung geduldet oder stillschweigend hingenommen wird, erschöpft sich die Antwort der Bewohner nicht in einer hilflosen Beschwerde. Das Sehen will geschult sein. Ein Pflanzenarrangement kann ein mit Bedacht gesetzter Akzent sein oder bloß eine Besetzung des Raumes. Verschönern wir die Umgebung oder verschönern wir das Gemüt? Es gibt auf dieser Welt keine Schönheit, die sich von selbst versteht.',
      'Etwas Schönes entsteht niemals aus dem Nichts. Selbst ein bloßes Pflanzenarrangement verlangt nach viel Gedanken und Zeit, ehe es die Gestalt annimmt, die vor uns liegt. Der Eingriff der Kunst in den öffentlichen Raum ist die Verlängerung eben dieser Hingabe. Was die Kunstschaffenden eröffnen, ist eine gesellschaftliche Dimension, eine poetische Gestaltung. Sie verständigt sich über Zeichen und trägt damit ihre Anliegen weiter.',
      'Bleibt das Verständnis des gesellschaftlichen Zusammenhangs an der Oberfläche schablonenhafter Muster, so geraten Kulturtourismus und Quartiersattraktionen leicht zur bloßen Form, und die Maskottchenkultur wird zu einer weiteren Spielart des Dekorativen. Wie weit die Kunst wirklich in den Raum eingreift, hängt davon ab, wie tief ihr Verständnis von Lebensperspektive und kulturellem Wert reicht.',
      'Ein Umfeld, das aus Gefühlen gebaut ist, lässt sich nicht durch eine einzelne Einrichtung oder Installation herstellen. Es verlangt nach einem Umfeld, das sich pflegen lässt und Bestand hat, nach einer Denkweise schöpferischer Gestaltung des Umfelds. Genau hier liegt der wahre Ausgangspunkt des kulturellen Marketings der Kunst im öffentlichen Raum.'
    ],
    href: 'https://genius912.blogspot.com/2026/06/blog-post_20.html'
  }
];

let html = readFileSync(file, 'utf8');
const oldBlock = new RegExp(`\\n\\s*${start.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${end.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\n?`, 'g');
html = html.replace(oldBlock, '\n');
const needle = 'const WRITINGS = [';
if (!html.includes(needle)) {
  throw new Error('Cannot find WRITINGS array in index.html');
}
const block = `\n  ${start}\n${JSON.stringify(writings, null, 2).split('\n').map((line) => '  ' + line).join('\n')},\n  ${end}`;
html = html.replace(needle, `${needle}${block}`);
writeFileSync(file, html, 'utf8');
console.log(`Injected ${writings.length} latest writing articles into index.html`);
