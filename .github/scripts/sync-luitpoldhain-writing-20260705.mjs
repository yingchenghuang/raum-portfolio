import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_LUITPOLDHAIN_WRITING_20260705_START */';
const end = '/* RAUM_LUITPOLDHAIN_WRITING_20260705_END */';

const article = {
  "id": "w-luitpoldhain-20260705",
  "year": "2026",
  "month": "07",
  "title_zh": "城市・土地・文化敘事（十三）    草地之下的兩次世界：紐倫堡 Luitpoldhain 的記憶與重生",
  "title_en": "City, Land and Cultural Narratives XIII: Two Worlds Beneath the Grass: Memory and Rebirth of Nuremberg’s Luitpoldhain",
  "title_de": "Stadt, Land und kulturelle Erzählungen XIII: Zwei Welten unter dem Gras: Erinnerung und Wiedergeburt des Nürnberger Luitpoldhain",
  "note_zh": "紐倫堡 Luitpoldhain 的記憶、權力，與一場夏夜慶典。Luitpoldhain 是一塊被時間改寫過三次的土地。",
  "note_en": "Memory, power and a summer-night celebration at Nuremberg’s Luitpoldhain: a piece of land rewritten by time three times.",
  "note_de": "Erinnerung, Macht und ein Sommernachtsfest im Nürnberger Luitpoldhain: ein Stück Land, das von der Zeit dreimal umgeschrieben wurde.",
  "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLa9g52RWKBIgBH-oqlzGuM_5eVJNi6pRHI026FIlkZ9LQQ5Xs8wZJyYMch-o3QjUzgR4eVKfUC8S2ombMLBvmHrQpFHjuvsdawlCk1eY8cTBsaBuvtZ1XZxkGNSrpLSRwNS4UD_GOgetFz9jXdbpzLV2ZzeBcKH5H7S6lBsuHBw-UQUIWFCq0YQMtDVg/w640-h96/%E7%B4%90%E5%80%AB%E5%A0%A1%20Luitpoldhain-03.JPG",
  "images": [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLa9g52RWKBIgBH-oqlzGuM_5eVJNi6pRHI026FIlkZ9LQQ5Xs8wZJyYMch-o3QjUzgR4eVKfUC8S2ombMLBvmHrQpFHjuvsdawlCk1eY8cTBsaBuvtZ1XZxkGNSrpLSRwNS4UD_GOgetFz9jXdbpzLV2ZzeBcKH5H7S6lBsuHBw-UQUIWFCq0YQMtDVg/w640-h96/%E7%B4%90%E5%80%AB%E5%A0%A1%20Luitpoldhain-03.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAGbpzHVGpPfUofO0coq4Z2eGnAZrHwJWvZbmeeDTYRh6m57AKYSWZuRLU06fNgCJ0I1E0W1vcXKfTzZmYhXx_Kky_rsqJu9ygNrLqzI3eHlGjmu3KLpWRKweQOkDD7_rwxc2s6o4TMZ7vreZhqyTqWcP2XYHHn2okQKKgt3BUYb6N1Lhwq1GmcOdQmPI/w640-h376/%E7%B4%90%E5%80%AB%E5%A0%A1%20Luitpoldhain-01.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiLuEumNUYi4qHf4lkKm8RJRI6dsI02wOTDwLnpjIFfuFuYjFtm_1orF2mKmxaGhqRbJYmYHeCypRDoshzgRANqJa2_7XcKstqLbKklN_za3fw4bGSd25QhIB7aoWqTPyi3sT4MNxAgRpx3JatTlN0sV36oXlvhmpIL2JpRxpRSixnWp9DS98b2JkEWn0/w640-h352/%E7%B4%90%E5%80%AB%E5%A0%A1%20Luitpoldhain-06.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_F_IZ1Xgi4e4udyhDhakRgsa7ZGL2ColjFvKjOF_iqvhVPauJE2eFDIEnsuACweOz2mCK949p8xrxST5jcrhN2m9-hdY-s6xKoSQIt5pjrQZTI-MsXR8CMyM20d0hWi54x1ARpRtU9Z3ZsOipsu5Kdxc2XINbwzhwlvyGZOJiej1CqGeCvfZa2miAIqE/w360-h640/%E7%B4%90%E5%80%AB%E5%A0%A1%20Luitpoldhain-02.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3phFZy6c2eOkuvMcQ80XR4egluDgd3f9blGgYZVLwy1uVwAm5LcnHF5HrYZKGewcsPFeIhoDp8l_ya0gIRF4ZU1TSMOjEoheBYXV94Dov88v_ibkOEVh-LAqO9OcmUO40Cuwq2nz9niH2wXlILbhuXE7NO2eiNhaoQO5wibph2nnNU2bfL2-dL1Qlawg/w640-h480/%E7%B4%90%E5%80%AB%E5%A0%A1%20Luitpoldhain-04.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4S93dBDDIUH0Ag73dhvb1VswuDjHIc4dGS1zDvFw-ndaMt1eNHvjGXJZjZjfknyGRoK07neSQ3zWgj1iDYmHIEtFKcmEvmnRCf3Oa8t4eLw-0akccVs5XZR_aCQw77XORf5A33ttOfzxMI3cdXY728yzdISiQKlggzwxfJ1x5Tyfv7Z8vI1hEgAbFCQI/w640-h480/%E7%B4%90%E5%80%AB%E5%A0%A1%20Luitpoldhain-05.JPG"
  ],
  "image_alt_zh": "紐倫堡 Luitpoldhain 原部落格圖片",
  "image_alt_en": "Original blog image of Nuremberg’s Luitpoldhain",
  "image_alt_de": "Originales Blogbild des Nürnberger Luitpoldhain",
  "essay_zh": [
    "草地之下的兩次世界：紐倫堡 Luitpoldhain 的記憶與重生",
    "紐倫堡 Luitpoldhain 的記憶、權力，與一場夏夜慶典。Luitpoldhain 是一塊被時間改寫過三次的土地。第一次是自然，第二次是權力，第三次是日常生活。這三層沒有彼此抹去，它們同時存在，彼此稀釋。你在七月的夜晚走進這片草地，坐下來聽音樂，身體其實正踩在三個時代的疊層上。這件事本身，就是一種非常溫柔、也非常徹底的城市設計",
    "七月的紐倫堡南端，Dutzendteich 湖區的時間會變慢。樹影被拉長，草地上鋪開白色的野餐布，大人拖著冰桶和啤酒穿過林蔭道。樂團還沒開始，這座城市已經進入一種特殊狀態。它是一種被重複了二十多年的共同呼吸。",
    "一、草地還只是草地的時候",
    "二十世紀初，這片區域只是紐倫堡郊外的濕地與森林。那時的德國城市學還沒有被戰爭定義，城市設計仍然相信「開放性」這個詞。一九〇六年，巴伐利亞百年展覽在此舉行，公園、展館、湖泊步道與動物園被串成一條柔軟的城市邊界。",
    "這裡屬於邊緣，屬於休閒，屬於散步。一個典型的歐洲現代早期公園系統正在成形，它允許人在自然與城市之間移動，不需要任何儀式性的理由。那時的草地，承載的只有草地本身。",
    "二、當草地變成命令的舞台",
    "一九三三年之後，一切改變。紐倫堡被納入納粹黨的政治表演系統，Luitpoldhain 被改造成 Luitpoldarena。名字的更動，本身就是空間語法的重寫。",
    "草地被改成群眾集合場。樹木被清除以打開視線，道路被拉成軸線，地形被壓平或加高，看台被建立起來。所有設計服務同一個目的，讓人群在同一時間面向同一方向。在這裡，個體的消失被寫進了設計，成為它的目標。",
    "當年十幾萬人的集會在此進行。人群被抽離日常生活，被編排成視覺單位。旗幟、火炬、隊列與聲音被組織成一種空間劇場。在納粹建築師 Speer 的語言裡，這是「國家意志的建築化」。草地第一次變成命令。",
    "三、戰後：讓草地重新長回來",
    "一九四五年之後，紐倫堡做了一個重要決定。他們保留了這段空間，同時一層層卸下它的權力。大部分儀式建築被拆除，地形與部分遺構被留下。真正難以處理的，向來是記憶。",
    "戰後的策略，去儀式化，去中心化，再自然化。草地被重新種回，林地恢復，道路變回步道，視線重新自由。這是一種很德國的態度。它面對歷史，同時不讓歷史繼續支配空間。Luitpoldhain 再一次成為公園，只是這一次的公園，已經不同於最初。",
    "四、用生活覆蓋歷史",
    "城市的轉型，他們沒有用紀念碑去封存歷史，他們用生活。二〇〇〇年，紐倫堡建城九百五十週年，市政府啟動 Klassik Open Air。一場完全免費的古典音樂會，被放進這片草地。沒有門票，沒有座位編號，沒有 VIP 區，只有草地、音樂與夜晚。人們帶著野餐籃走進曾經被規訓過的空間，坐下來聽交響樂。",
    "這件事在城市學上非常精準。古典音樂原本屬於劇院與階級文化，在這裡被放回地面。人不需要正裝，不需要極致的安靜，孩子可以跑，酒可以喝，食物可以分享。這種低門檻的高文化，是歐洲城市策略裡相當成熟的公共設計。它的核心是重新分配文化的使用權。當交響樂在草地上響起，曾經用來集中群眾的地方，變成讓群眾自由分散的地方。",
    "還有那枚 Vogel Pin。市民捐出少量金額，換得一枚每年不同設計的鳥徽章。這個小動作有兩層意思，表層是支持音樂會，深層是參與城市文化的維持。市民從觀眾變成共同維護者，文化成為市民一起撐起來的系統。這是一種低調而穩定的民主結構。",
    "五、野餐、身體，與一個人的草地",
    "把鏡頭拉回地面，你會看到一個矛盾的畫面。有人喝啤酒，有人靜靜聽馬勒，有人躺著，有人站著，遠方樂團正在演奏，風穿過樹林。而這片空間曾經要求所有人站直，面向同一個方向。現在，它讓所有方向同時存在。這種反轉不會被大聲說出來，它只是一直在發生。",
    "那幾年的夏天，這場野餐音樂會成了城市生活的一個節點。它是歷史，也是每年被期待的日子。你會提早去佔位子，會想著今天帶什麼好料，會和身邊的朋友交換食物，會偷偷比較誰帶來的更厲害。這些都需要經驗。萬人聚集、古典音樂、草地上的夜晚，是一種難以忘記的視覺印象。",
    "只是這片草地的能量，有一個前提。當你孤身一人，那股能量會大過你，你無法駕馭。萬人的歡慶會把一個人的孤獨放大。你在人群裡，同時不在人群裡。這是異鄉的某種真相。",
    "六、記憶從離開才開始",
    "聚散最終是緣分。能在異鄉好好歡慶一場，那短短幾個小時漾開的漣漪，會變成往後一輩子的功課。",
    "奇怪的是，人在現場時未必真的在回味。當你離開草地，記憶才開始生長。往後那些網路直播的音樂會，畫面都在，聲音都在，情感的共鳴卻不見了。那片草地的意義，只交給親身在場的身體。它無法被轉播，無法被壓縮成訊號。",
    "音樂結束，人群慢慢離開。你會突然明白一件事。這片草地沒有被遺忘，它只是被重新使用了。歷史沒有消失，它只是被生活稀釋了。"
  ],
  "essay_en": [
    "Two Worlds Beneath the Grass: Memory and Rebirth of Nuremberg’s Luitpoldhain",
    "Memory, power and a summer-night celebration at Nuremberg’s Luitpoldhain. Luitpoldhain is a piece of land rewritten by time three times. The first was nature, the second was power, and the third was everyday life. These three layers have not erased one another. They exist at the same time and dilute one another. When you walk into this grassland on a July evening and sit down to listen to music, your body is actually stepping on the strata of three eras. This in itself is a very gentle and also very thorough form of urban design.",
    "In July, time slows down on the southern edge of Nuremberg around the Dutzendteich lake district. Tree shadows stretch longer, white picnic blankets open across the grass, and adults drag coolers and beer through the shaded paths. Before the orchestra begins, the city has already entered a special state. It is a collective breathing that has been repeated for more than twenty years.",
    "I. When the grass was still only grass",
    "At the beginning of the twentieth century, this area was only wetland and forest outside Nuremberg. German urbanism had not yet been defined by war, and urban design still believed in the word openness. In 1906, the Bavarian Jubilee Exhibition was held here, linking parks, exhibition halls, lakeside paths and the zoo into a soft urban edge.",
    "This place belonged to the margins, to leisure, to walking. A typical early modern European park system was taking shape, allowing people to move between nature and the city without any ceremonial reason. At that time, the grass carried only the grass itself.",
    "II. When grass became a stage of command",
    "After 1933, everything changed. Nuremberg was absorbed into the Nazi Party’s system of political performance, and Luitpoldhain was transformed into Luitpoldarena. The change of name was itself a rewriting of spatial grammar.",
    "The grass was turned into a mass assembly ground. Trees were cleared to open sightlines, roads were stretched into axes, the terrain was flattened or raised, and stands were built. Every design served one purpose: to make crowds face the same direction at the same time. Here, the disappearance of the individual was written into the design and became its goal.",
    "Rallies of more than a hundred thousand people took place here. Crowds were removed from everyday life and arranged as visual units. Flags, torches, formations and sound were organized into a spatial theater. In the language of Nazi architect Speer, this was the architecturization of national will. The grass became command for the first time.",
    "III. After the war: letting the grass grow back",
    "After 1945, Nuremberg made an important decision. The city preserved this stretch of space while stripping away its power layer by layer. Most ceremonial structures were demolished, while the terrain and some remains were left behind. What is truly difficult to handle has always been memory.",
    "The postwar strategy was de-ritualization, decentralization and re-naturalization. Grass was planted back, woodland recovered, roads became paths again, and sightlines regained freedom. This is a very German attitude. It faces history while refusing to let history continue to dominate space. Luitpoldhain became a park once more, but this park was no longer the same as the first one.",
    "IV. Covering history with life",
    "In the city’s transformation, they did not seal history inside a monument. They used life. In 2000, for Nuremberg’s 950th anniversary, the city launched Klassik Open Air. A completely free classical concert was placed on this grassland. No tickets, no numbered seats, no VIP zone: only grass, music and night. People carried picnic baskets into a space that had once been disciplined, sat down and listened to symphonic music.",
    "In urban terms, this is extremely precise. Classical music originally belonged to theaters and class culture; here it is returned to the ground. People do not need formal dress or absolute silence. Children can run, beer can be drunk, food can be shared. This low-threshold high culture is a mature form of public design in European urban strategy. Its core is the redistribution of the right to use culture. When symphonic music sounds across the grass, a place once used to concentrate crowds becomes a place where crowds can freely disperse.",
    "And then there is the Vogel Pin. Citizens donate a small amount and receive a bird badge with a different design every year. This small act has two meanings: on the surface, supporting the concert; more deeply, participating in the maintenance of urban culture. Citizens move from audience members to co-maintainers, and culture becomes a system held up together by the city’s people. It is a quiet and stable democratic structure.",
    "V. Picnic, body and one person’s grassland",
    "Bring the camera back to the ground and you see a contradictory scene. Some people drink beer, some quietly listen to Mahler, some lie down, some stand, the orchestra plays in the distance, and wind passes through the woods. Yet this same space once required everyone to stand straight and face the same direction. Now it lets all directions exist at once. This reversal is not spoken loudly; it simply keeps happening.",
    "During those summers, this picnic concert became a node of urban life. It was history, and also a day expected every year. You would arrive early to claim a place, think about what good food to bring, exchange food with friends nearby, and secretly compare who had brought something more impressive. All of this requires experience. Tens of thousands gathering, classical music, a night on the grass: it is a visual impression difficult to forget.",
    "But the energy of this grassland has one condition. When you are alone, that energy becomes larger than you and you cannot master it. The celebration of tens of thousands magnifies one person’s loneliness. You are in the crowd and not in the crowd at the same time. This is a certain truth of being in a foreign place.",
    "VI. Memory begins only after leaving",
    "Gathering and parting are ultimately a matter of fate. To celebrate well once in a foreign place, the ripples opened by those few short hours can become homework for the rest of one’s life.",
    "Strangely, when people are on site they may not truly be savoring it. Memory begins to grow only after you leave the grass. In later online broadcasts of the concerts, the image is there and the sound is there, but the emotional resonance is gone. The meaning of that grassland belongs only to the body that was physically present. It cannot be broadcast, and it cannot be compressed into a signal.",
    "When the music ends, the crowd slowly leaves. You suddenly understand one thing: this grassland has not been forgotten. It has simply been used again. History has not disappeared. It has only been diluted by life."
  ],
  "essay_de": [
    "Zwei Welten unter dem Gras: Erinnerung und Wiedergeburt des Nürnberger Luitpoldhain",
    "Erinnerung, Macht und ein Sommernachtsfest im Nürnberger Luitpoldhain. Der Luitpoldhain ist ein Stück Land, das von der Zeit dreimal umgeschrieben wurde. Das erste Mal war Natur, das zweite Mal Macht, das dritte Mal Alltag. Diese drei Schichten haben einander nicht ausgelöscht. Sie existieren gleichzeitig und verdünnen einander. Wenn man an einem Juliabend diese Wiese betritt und sich hinsetzt, um Musik zu hören, steht der Körper eigentlich auf den Schichten dreier Zeiten. Gerade das ist eine sehr sanfte und zugleich sehr gründliche Form von Stadtgestaltung.",
    "Im Juli verlangsamt sich die Zeit am südlichen Rand Nürnbergs, im Gebiet um den Dutzendteich. Die Schatten der Bäume werden länger, weiße Picknickdecken breiten sich auf dem Gras aus, Erwachsene ziehen Kühlboxen und Bier durch die Alleen. Noch bevor das Orchester beginnt, ist die Stadt bereits in einen besonderen Zustand eingetreten. Es ist ein gemeinsames Atmen, das seit mehr als zwanzig Jahren wiederholt wird.",
    "I. Als das Gras noch nur Gras war",
    "Zu Beginn des zwanzigsten Jahrhunderts war dieses Gebiet nur Feuchtland und Wald außerhalb Nürnbergs. Die deutsche Stadtlehre war noch nicht vom Krieg definiert, und Stadtgestaltung glaubte noch an das Wort Offenheit. 1906 fand hier die Bayerische Jubiläumsausstellung statt; Parks, Ausstellungshallen, Wege am See und der Tiergarten wurden zu einem weichen Stadtrand verbunden.",
    "Dieser Ort gehörte zum Rand, zur Erholung, zum Spaziergang. Ein typisches frühmodernes europäisches Parksystem nahm Gestalt an. Es erlaubte Menschen, sich zwischen Natur und Stadt zu bewegen, ohne einen rituellen Grund zu brauchen. Damals trug das Gras nur sich selbst.",
    "II. Als Gras zur Bühne des Befehls wurde",
    "Nach 1933 änderte sich alles. Nürnberg wurde in das politische Aufführungssystem der NSDAP aufgenommen, und der Luitpoldhain wurde zur Luitpoldarena umgebaut. Schon die Namensänderung war eine Umschreibung der räumlichen Grammatik.",
    "Die Wiese wurde zu einem Massenaufmarschplatz. Bäume wurden entfernt, um Sichtachsen zu öffnen, Wege wurden zu Achsen gestreckt, das Gelände wurde abgeflacht oder erhöht, Tribünen wurden gebaut. Alle Gestaltung diente einem Zweck: Menschenmengen zur gleichen Zeit in dieselbe Richtung blicken zu lassen. Hier wurde das Verschwinden des Individuums in den Entwurf eingeschrieben und zu seinem Ziel.",
    "Damals fanden hier Versammlungen von mehr als hunderttausend Menschen statt. Die Menge wurde aus dem Alltag herausgelöst und als visuelle Einheit arrangiert. Fahnen, Fackeln, Reihen und Klang wurden zu einem räumlichen Theater organisiert. In der Sprache des NS-Architekten Speer war dies die Architektonisierung des Staatswillens. Das Gras wurde zum ersten Mal Befehl.",
    "III. Nach dem Krieg: das Gras wieder wachsen lassen",
    "Nach 1945 traf Nürnberg eine wichtige Entscheidung. Die Stadt bewahrte diesen Raum und nahm ihm zugleich Schicht für Schicht seine Macht. Die meisten rituellen Bauten wurden abgetragen, Geländeform und einzelne Reste blieben erhalten. Wirklich schwer zu behandeln ist immer die Erinnerung.",
    "Die Nachkriegsstrategie bestand aus Ent-Ritualisierung, Dezentralisierung und Wieder-Verwilderung. Gras wurde neu eingesät, Wald kehrte zurück, Straßen wurden wieder zu Wegen, Sichtachsen wurden wieder frei. Das ist eine sehr deutsche Haltung: Geschichte anzusehen und zugleich nicht zuzulassen, dass Geschichte den Raum weiter beherrscht. Der Luitpoldhain wurde wieder Park, nur war dieser Park nicht mehr derselbe wie am Anfang.",
    "IV. Geschichte mit Leben überdecken",
    "Bei dieser städtischen Verwandlung wurde Geschichte nicht in einem Denkmal versiegelt. Man benutzte Leben. Im Jahr 2000, zum 950-jährigen Stadtjubiläum Nürnbergs, startete die Stadt Klassik Open Air. Ein völlig kostenloses klassisches Konzert wurde in diese Wiese gesetzt. Keine Eintrittskarten, keine nummerierten Plätze, keine VIP-Zone, nur Gras, Musik und Nacht. Menschen trugen Picknickkörbe in einen einst disziplinierten Raum, setzten sich hin und hörten Sinfonien.",
    "Stadtwissenschaftlich ist das sehr präzise. Klassische Musik gehörte ursprünglich zum Theater und zur Klassenkultur; hier wird sie auf den Boden zurückgebracht. Man braucht keine Abendkleidung und keine absolute Stille. Kinder dürfen laufen, Bier darf getrunken werden, Essen darf geteilt werden. Diese niedrigschwellige Hochkultur ist eine reife Form öffentlichen Designs in europäischen Stadtstrategien. Ihr Kern ist die Neuverteilung des Nutzungsrechts an Kultur. Wenn Sinfonien auf der Wiese erklingen, wird ein Ort, der einst zur Konzentration der Massen diente, zu einem Ort, an dem sich Menschen frei verteilen können.",
    "Dazu kommt der Vogel Pin. Bürger spenden einen kleinen Betrag und erhalten eine Vogel-Anstecknadel, die jedes Jahr anders gestaltet ist. Diese kleine Handlung hat zwei Ebenen: Oberflächlich unterstützt sie das Konzert, tiefer betrachtet beteiligt sie die Bürger an der Erhaltung städtischer Kultur. Aus Zuschauern werden Mit-Erhalter, Kultur wird zu einem System, das die Stadtbevölkerung gemeinsam trägt. Das ist eine leise und stabile demokratische Struktur.",
    "V. Picknick, Körper und die Wiese eines Einzelnen",
    "Rückt man die Kamera wieder auf den Boden, sieht man ein widersprüchliches Bild. Manche trinken Bier, manche hören still Mahler, manche liegen, manche stehen, in der Ferne spielt das Orchester, und der Wind fährt durch die Bäume. Genau dieser Raum verlangte einst von allen, gerade zu stehen und in dieselbe Richtung zu blicken. Jetzt lässt er alle Richtungen gleichzeitig existieren. Diese Umkehrung wird nicht laut ausgesprochen; sie geschieht einfach weiter.",
    "In jenen Sommern wurde dieses Picknickkonzert zu einem Knotenpunkt städtischen Lebens. Es war Geschichte und zugleich ein jedes Jahr erwarteter Tag. Man ging früh hin, um einen Platz zu sichern, überlegte, welches gute Essen man mitbringt, tauschte mit Freunden in der Nähe und verglich heimlich, wer etwas Besseres mitgebracht hatte. All das braucht Erfahrung. Zehntausende Menschen, klassische Musik und eine Nacht auf dem Gras ergeben einen visuellen Eindruck, den man schwer vergisst.",
    "Doch die Energie dieser Wiese hat eine Voraussetzung. Wenn man allein ist, wird diese Energie größer als man selbst; man kann sie nicht beherrschen. Die Feier von Zehntausenden vergrößert die Einsamkeit eines Einzelnen. Man ist in der Menge und zugleich nicht in der Menge. Das ist eine bestimmte Wahrheit der Fremde.",
    "VI. Erinnerung beginnt erst beim Weggehen",
    "Zusammenkommen und Auseinandergehen sind am Ende Schicksal. Einmal in der Fremde gut zu feiern: Die Wellen, die sich in diesen wenigen Stunden öffnen, können zur Aufgabe für ein ganzes späteres Leben werden.",
    "Seltsamerweise kostet man den Moment vor Ort nicht unbedingt wirklich aus. Erst wenn man die Wiese verlässt, beginnt Erinnerung zu wachsen. Bei späteren Livestreams dieser Konzerte sind Bild und Klang vorhanden, aber die emotionale Resonanz ist verschwunden. Die Bedeutung dieser Wiese gehört nur dem Körper, der tatsächlich dort war. Sie lässt sich nicht übertragen und nicht zu einem Signal komprimieren.",
    "Wenn die Musik endet, gehen die Menschen langsam weg. Plötzlich versteht man etwas: Diese Wiese wurde nicht vergessen. Sie wurde nur neu benutzt. Geschichte ist nicht verschwunden. Sie wurde nur vom Leben verdünnt."
  ],
  "href": "https://genius912.blogspot.com/2026/07/luitpoldhain.html"
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
  const RAUM_LUITPOLDHAIN_WRITING = ${JSON.stringify(article, null, 2)};
  const existingIndex = WRITINGS.findIndex((writing) => (
    writing.id === RAUM_LUITPOLDHAIN_WRITING.id ||
    writing.href === RAUM_LUITPOLDHAIN_WRITING.href ||
    writing.title_zh === RAUM_LUITPOLDHAIN_WRITING.title_zh
  ));
  if (existingIndex >= 0) {
    WRITINGS.splice(existingIndex, 1);
  }
  WRITINGS.unshift(RAUM_LUITPOLDHAIN_WRITING);
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
console.log('Synced Luitpoldhain writing article.');
