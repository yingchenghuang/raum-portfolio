import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_NEUES_MUSEUM_WRITING_20260712_START */';
const end = '/* RAUM_NEUES_MUSEUM_WRITING_20260712_END */';

const article = {
  "id": "w-neues-museum-nuernberg-20260712",
  "year": "2026",
  "month": "07",
  "title_zh": "城市・土地・文化敘事（十四） 我的精神糧倉：紐倫堡新博物館，與一座城市重新觀看自己的方式",
  "title_en": "City, Land and Cultural Narratives XIV: My Granary of the Spirit: Neues Museum Nürnberg and How a City Learns to See Itself Again",
  "title_de": "Stadt, Land und kulturelle Erzählungen XIV: Mein geistiger Speicher: Das Neue Museum Nürnberg und wie eine Stadt lernt, sich neu zu sehen",
  "note_zh": "第一次走進 Neues Museum Nürnberg，是因為藝術學院的入學考試來到紐倫堡。後來它成為我在德國求學期間最熟悉的文化場所。",
  "note_en": "I first entered Neues Museum Nürnberg because of an art academy entrance exam. Later it became the cultural place I knew best during my studies in Germany.",
  "note_de": "Zum ersten Mal betrat ich das Neue Museum Nürnberg wegen einer Aufnahmeprüfung an der Kunstakademie. Später wurde es der Kulturort, den ich während meines Studiums in Deutschland am besten kannte.",
  "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwdu2gXnjJGusUVlJSkhk7No_5VW0Hu3XoZ8F6l-gXXv0hDR1JMda8PbQgISN6PFhuzW-ESo1W08GFqB3IUecsZcNf6M9A2B9Ex-Sjca_Z6R5vYIx3CnEliL4FlBZ1sB9wZEcWdkylyj5PvSZoYB4cB6jXdJNaHiKChQFPS925sww_WHItT_12uYbfw-w/w640-h480/%E7%B4%90%E5%80%AB%E5%A0%A1%E6%96%B0%E5%8D%9A%E7%89%A9%E9%A4%A8-07.JPG",
  "images": [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwdu2gXnjJGusUVlJSkhk7No_5VW0Hu3XoZ8F6l-gXXv0hDR1JMda8PbQgISN6PFhuzW-ESo1W08GFqB3IUecsZcNf6M9A2B9Ex-Sjca_Z6R5vYIx3CnEliL4FlBZ1sB9wZEcWdkylyj5PvSZoYB4cB6jXdJNaHiKChQFPS925sww_WHItT_12uYbfw-w/w640-h480/%E7%B4%90%E5%80%AB%E5%A0%A1%E6%96%B0%E5%8D%9A%E7%89%A9%E9%A4%A8-07.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgShYDopPz9zEEWiVZhvGHHN_1egva7hFi7irs0LPwTabTEM_U7NeFU-L4wihpJcf8h-5t41u5OB435TuprvFjARkim01owAkkJTQNjmsILEQagfdf-o66928y12qCQZP_9M6e3YSYwR72iJqKcfWRSQtMneTSQyKsrMhkX484laWBL-wNF53lQrnM8fS0/w480-h640/%E7%B4%90%E5%80%AB%E5%A0%A1%E6%96%B0%E5%8D%9A%E7%89%A9%E9%A4%A8-06.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyg7nuY3ASN8yreUy4PGFuV6cjj0brafM0UQTcVYIN2gL7zgPxEkmhdQU8OMdPS7U-e5V4Pgyk_akFVUi2GRruzplsyqfxX0gv6RVVctMM8fyax_8-s3N-yf6LAKzZuhdwAoiPQttpLq5aM9Bx9sf2JoilhVVRGIZaKCZQn00OiM2pQNo17ByirR6Nuvs/w640-h480/%E7%B4%90%E5%80%AB%E5%A0%A1%E6%96%B0%E5%8D%9A%E7%89%A9%E9%A4%A8-02.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtrufHeSh3cPix5K1_T6LOKH2j6SwOINBLhdj5j3_p3v8hh62sDitDzAXcbGe6JFO7sOUdTQSEY9V1y6DBLWFVsioSoal2iqfisnd-bv6RC80_SHCJawrznGfKp7qcy5ut-sm5zfDo3ctw1ShCdp0A2xeg5I6TksFPWNAp88gEeNzJ4de-pjmdR89GsL4/w640-h264/%E7%B4%90%E5%80%AB%E5%A0%A1%E6%96%B0%E5%8D%9A%E7%89%A9%E9%A4%A8-01_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F%201.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijEaAP-1i47Xe8GZFVhJl0LzJah6xCrG72MOl1fmCp-0YajYg9d2CPzXLZcGkN2uoiSTMe3GB29DKBAC6GERoHOSFdAlKC_gOiptPWJseSDqju-U566JgQpNB0GxDwGS38kuvoEiAEXMc9Rw9DYSyhUo-4YdScxDudpDPT2etN7BTtZba0rXwSbfVrcLA/w640-h480/%E7%B4%90%E5%80%AB%E5%A0%A1%E6%96%B0%E5%8D%9A%E7%89%A9%E9%A4%A8-04.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjW61cHYKRn44P1GSPbbliWiSy-MYgPjNJViBksnV7zLMf2vbkXMZQVfb1u7yn4mNA8Robjhg2YY9N9SMX5P44rsJXQmxUCFfI5yPcK6JTkjDKQcOfpnlt4H9_xTYvHlwREUAcRugDzPTZ5dRPNywBXKrYYl1IgVTyDppRX21NfAhxcltZZ0j_xvpCnkT0/w640-h480/%E7%B4%90%E5%80%AB%E5%A0%A1%E6%96%B0%E5%8D%9A%E7%89%A9%E9%A4%A8-03.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDabM_FvTkwlY4yFwXw8ByHLSek8qIwiHX5XyyUtt3MyKOxAYH1C3JoQ2rNxkag81EA2vSIVAT0dt-Tti0mVLBlUjymTOAQ81tIDncPBYBgGuMN-gsJA9kRM1AEonxXLpZ09IPBbgA1oDDxcHG6bX6BWVI0Nzp-PjE6Tp5RnYRSUPiIr56BxucKs1pdCM/w640-h480/R0023812.JPG"
  ],
  "image_alt_zh": "紐倫堡新博物館原部落格圖片",
  "image_alt_en": "Original blog image of Neues Museum Nürnberg",
  "image_alt_de": "Originales Blogbild des Neuen Museums Nürnberg",
  "essay_zh": [
    "我的精神糧倉：紐倫堡新博物館，與一座城市重新觀看自己的方式",
    "星期日一歐元的邀請",
    "第一次走進 Neues Museum Nürnberg，是因為藝術學院的入學考試來到紐倫堡。那時我只是短暫停留，沒有想到這座立在 Klarissenplatz 上的玻璃建築，後來會成為我在德國求學期間最熟悉的文化場所。",
    "考試那幾天，假日的一歐元優待門票讓我印象深刻。後來成為藝術學院學生，入場免費，博物館從此變成一種日常。它像圖書館，像客廳，像一個可以反覆回去的房間。星期日下午，當整座城市的商店全部歇業，市民其實無處可去，博物館就在這個時刻打開大門，用一歐元邀請所有人進來。多年之後回想，我才看懂這個細節的重量。那是德國公共文化政策的具體表態，博物館被理解為城市生活的一部分，它承接的是市民的星期日，藝術在這裡放下節慶的姿態，成為日常。",
    "對我而言，最重要的空間甚至未必是展覽廳。是書店。那裡像一個思想入口，藝術、設計、建築、攝影、當代文化研究，透過書籍在架上彼此靠近。很多創作靈感並非在看見一件作品的瞬間產生，它們在長時間的閱讀、比較、懷疑之中慢慢成形。當年那些看似沒有目的的翻閱與停留，其實正在建立我自己的文化資料庫。今天回頭看，那些片刻構成了後來創作的方法。",
    "身份改變，觀看方式也改變",
    "為什麼多年後我需要重新理解這座博物館的歷史。因為當年的我是使用者，現在的我是創作者。",
    "學生時期我感受到的是，這裡有好的展覽，有舒服的空間，有創作刺激。玻璃帷幕很美，映照著中世紀城牆，也映照著我當時對未知的恐懼與對未來的心思。當局者迷是學習時的常態，如今回看，那些困惑其實有清晰的軌跡，連當年向美術館提出藝術企劃的 Subbus 計畫提案，都成了一段挺浪漫的過程。",
    "但今天我開始問另一組問題。為什麼這座博物館會存在。為什麼它選擇這個位置。為什麼它用透明玻璃面對城市。為什麼一座背負數百年歷史與沉重二十世紀記憶的城市，願意在老城牆邊接受一座如此當代的建築。",
    "答案必須回到土地。",
    "讀一塊土地的五個時間層",
    "Klarissenplatz 這個名字本身就是線索。這裡曾與中世紀的 Klarissenkloster，也就是聖克拉拉修道院的地緣相關。中世紀的紐倫堡，宗教機構是城市秩序的重要力量，土地承載的是信仰與精神生活。而這個街區緊貼 Frauentormauer 城牆，位在中世紀城市的內外交界。邊界是理解這塊基地身份的起點，它從一開始就站在城市的邊緣，負責區分內與外。",
    "二十世紀，戰爭徹底改變了紐倫堡。這座城市曾是納粹政權最重要的舞台之一，紐倫堡黨代會、紐倫堡法案、戰後的紐倫堡大審，讓城市的名字與二十世紀最黑暗的章節綁在一起。轟炸摧毀了老城九成以上的建築，戰後留下的空間斷裂，在靠近中央車站的這一帶格外明顯。這塊基地長期是城牆內的一處閒置地，一道城市縫隙，甚至一度被視為車站旁的雜亂角落。",
    "轉折發生在一九九〇年。巴伐利亞州政府決議在紐倫堡建立一座二十世紀藝術的州立博物館，這是慕尼黑之外第一座巴伐利亞州立美術館。一九九一年的全國競圖中，當時默默無名的柏林建築師 Volker Staab 擊敗了包括 Daniel Libeskind 在內的知名對手。一九九六年動工，二〇〇〇年四月十五日開幕。他的方案最關鍵的一步，正是在這片城市縫隙中創造出 Klarissenplatz 這個新廣場，讓一百公尺長、十五公尺高、微微內凹的玻璃立面，面對著六百年的砂岩城牆。",
    "所以這座博物館的誕生，本質上是一座城市在戰後半個世紀、經濟站穩之後，終於有餘裕回頭處理的課題。一座只依靠歷史遺產的城市，會變成保存過去的城市。一座完全切斷過去的城市，會失去根基。Neues Museum 站在中世紀老城、戰爭記憶、現代都市、當代藝術四個時間層之間，它的角色是重新連接。",
    "玻璃帷幕是一種文化態度",
    "學生時代看那面玻璃，我看到的是漂亮。今天重新看，我看到的是宣言。",
    "玻璃的意義超出了透明。它讓街上的人看見藝術，讓館內的人仍然感受城市。它反射城牆，反射街道，反射行人的移動，讓過去與未來在同一個表面上同時存在。夜晚它像巨大的櫥窗向廣場發光，博物館拒絕把自己關起來。建築評論者曾期待這個方案能提升整個街區，這個期待後來實現了，Klarissenplatz 成為老城牆邊的聚會場所，二〇一二年 Jeppe Hein 的水亭裝置進駐廣場，附近的雕塑園在二〇〇四年開放。廣場與博物館一起構成了城市客廳。",
    "這件事與我自己的創作方法在深處相通。藍曬是接觸顯影的技術，影像只在光與外物真實相遇的地方成形，自身的輪廓永遠由關係決定。這面玻璃做的是同一件事，它不描繪城市，它讓城市在自己身上顯影。公共藝術的核心也在這裡。把一件作品放進公共空間並不困難，真正困難的是讓作品成為人與地方建立關係的媒介。二〇一五年我在紐倫堡老市政廳中庭做《自由的界線》，用一百五十座工程圍籬與三百盞警示燈追問公共空間中自由的邊界，如今想來，那件作品的問題意識，其實早在無數次走過城牆與玻璃之間的路上就已經種下。防禦的牆與透明的牆在同一個廣場上對望，邊界可以被轉譯，從阻隔變成介面，這是這塊土地教我的第一課。",
    "我需要理解到多久以前",
    "作為創作者重新研究這座博物館，我給自己排了五層功課。",
    "第一層是二〇〇〇年以後，理解博物館如何運作，策展方向、收藏策略、公共政策，這是我的直接創作者視角。第二層是一九八〇到二〇〇〇年，理解德國為什麼在那個時刻需要新的當代藝術博物館，戰後世代如何建立新的文化身份。第三層是一九四五到一九八〇年，理解戰後紐倫堡如何面對自己的歷史，這是最重要的一層，沒有這段消化創傷的過程，就不會有後來的文化建設。第四層是十九世紀到一九四五年，理解工業化、城市擴張與納粹時期，看清城市創傷如何形成。第五層是中世紀與修道院時期，理解土地的原始精神，回答最根本的問題，為什麼這裡是這裡。",
    "五層看似是建築史的功課，其實是一套可以帶走的方法。場所精神、歷史地層、記憶轉譯，先讀土地，再談設計。我在台灣做參與式策展與公共藝術時，面對的是同構的問題。如何面對過去，如何保存記憶，如何讓新的發展與原有文化共存。紐倫堡選擇保存戰爭的傷痕，讓創傷成為城市教育的一部分。城市發展往往追求效率，但土地真正珍貴的部分，通常藏在無法被快速量化的經驗裡。一棵老樹、一條水圳、一間老工廠、一段地方故事，都可能是未來文化的根。",
    "精神糧倉",
    "我把這座博物館稱為我的精神糧倉，起初只是因為它餵養了一個學生的眼睛。現在我明白，糧倉這個詞還有第二層意思。糧倉儲存的是種子，種子要在別的土地上發芽。",
    "一個外來學生，在陌生的城市裡，透過一座公共文化建築建立了自己的世界觀。這座建築又是那座城市透過半個世紀的自我反省才長出來的答案。它讓我看見，一個地方無需消除過去才能迎接未來，真正成熟的文化，是讓不同的時間共同存在。修道院、城牆、戰爭、當代藝術、星期日午後的市民，在同一個廣場上產生新的關係。",
    "土地記憶是一種看不見的建築。我當年在玻璃前看見的自己的倒影，如今疊上了城牆的影子。這大概就是這篇文章想說的事，觀看是會累積的，而一座願意讓市民走進來的博物館，最終會走進市民往後的一生。"
  ],
  "essay_en": [
    "My Granary of the Spirit: Neues Museum Nürnberg and How a City Learns to See Itself Again",
    "A one-euro invitation on Sunday",
    "The first time I entered Neues Museum Nürnberg was because an art academy entrance exam brought me to Nuremberg. At that time I was only staying briefly. I did not imagine that this glass building standing on Klarissenplatz would later become the cultural place I knew best during my years studying in Germany.",
    "During those exam days, the one-euro holiday discount ticket left a strong impression on me. Later, after I became an art academy student, admission was free, and the museum became a form of everyday life. It was like a library, like a living room, like a room one could return to again and again. On Sunday afternoons, when every shop in the city was closed and citizens had almost nowhere to go, the museum opened its doors at precisely that moment and invited everyone in for one euro. Looking back years later, I finally understood the weight of that detail. It was a concrete statement of German public cultural policy: the museum was understood as part of urban life. It received the citizens’ Sunday. Art put down its festive posture here and became everyday life.",
    "For me, the most important space was not necessarily the exhibition hall. It was the bookstore. It was like an entrance into thought: art, design, architecture, photography and contemporary cultural studies came close to one another through books on the shelves. Many creative ideas do not arise in the instant of seeing a work. They slowly take shape through long periods of reading, comparison and doubt. Those seemingly purposeless moments of browsing and lingering were in fact building my own cultural database. Looking back today, those moments formed the method of my later practice.",
    "When identity changes, the way of seeing changes too",
    "Why do I need to understand the history of this museum again after many years? Because I was once a user, and now I am a creator.",
    "As a student, what I felt was that there were good exhibitions, comfortable spaces and creative stimulation. The glass curtain wall was beautiful. It reflected the medieval city wall, and it also reflected my fear of the unknown and my thoughts about the future at that time. Being unable to see clearly while inside a situation is normal during learning. Looking back now, those confusions actually had a clear trajectory. Even the Subbus project proposal I once submitted to the museum has become a rather romantic part of the process.",
    "But today I begin to ask another set of questions. Why does this museum exist? Why did it choose this location? Why does it face the city with transparent glass? Why would a city carrying several hundred years of history and the heavy memory of the twentieth century be willing to accept such a contemporary building beside its old city wall?",
    "The answer must return to the land.",
    "Reading the five time layers of a piece of land",
    "The name Klarissenplatz is itself a clue. This place was once related to the medieval Klarissenkloster, the convent of Saint Clare. In medieval Nuremberg, religious institutions were important forces of urban order, and land carried faith and spiritual life. This block lies close to the Frauentormauer city wall, at the boundary between the inside and outside of the medieval city. Boundary is the starting point for understanding the identity of this site. From the beginning it stood at the edge of the city, responsible for distinguishing inside from outside.",
    "In the twentieth century, war completely changed Nuremberg. This city had been one of the most important stages of the Nazi regime. The Nuremberg rallies, the Nuremberg Laws and the postwar Nuremberg trials tied the city’s name to the darkest chapters of the twentieth century. Bombing destroyed more than ninety percent of the old city’s buildings, and the spatial ruptures left after the war were especially visible in this area near the central station. For a long time, this site was an idle place inside the city wall, an urban seam, and at one point even regarded as a messy corner beside the station.",
    "The turning point came in 1990. The Bavarian state government decided to establish a state museum of twentieth-century art in Nuremberg, the first Bavarian state art museum outside Munich. In the 1991 national competition, the then little-known Berlin architect Volker Staab defeated well-known competitors including Daniel Libeskind. Construction began in 1996, and the museum opened on April 15, 2000. The most crucial step of his scheme was to create the new Klarissenplatz in this urban seam, allowing a one-hundred-meter-long, fifteen-meter-high and slightly concave glass facade to face a six-hundred-year-old sandstone city wall.",
    "The birth of this museum is therefore, in essence, a task that the city finally had the capacity to address half a century after the war, once its economy had stabilized. A city that relies only on historical heritage becomes a city that merely preserves the past. A city that completely cuts itself off from the past loses its foundation. Neues Museum stands among four time layers: the medieval old city, war memory, the modern city and contemporary art. Its role is to reconnect them.",
    "The glass curtain wall is a cultural attitude",
    "When I looked at that glass as a student, I saw beauty. Today, looking again, I see a declaration.",
    "The meaning of glass exceeds transparency. It lets people on the street see art, and lets people inside the museum still feel the city. It reflects the city wall, the street and the movement of passersby, allowing past and future to exist simultaneously on the same surface. At night it glows toward the square like a huge display window. The museum refuses to shut itself away. Architectural critics once expected this scheme to upgrade the whole neighborhood; that expectation was later fulfilled. Klarissenplatz became a gathering place beside the old city wall. In 2012 Jeppe Hein’s water pavilion entered the square, and the nearby sculpture garden opened in 2004. The square and the museum together formed an urban living room.",
    "This resonates deeply with my own creative method. Cyanotype is a technique of contact exposure: an image forms only where light truly meets external objects, and its contour is always determined by relationship. This glass facade does the same thing. It does not depict the city; it lets the city develop upon itself. The core of public art is also here. Placing a work in public space is not difficult. What is truly difficult is making the work become a medium through which people and place establish a relationship. In 2015 I made The Boundary of Freedom in the courtyard of Nuremberg’s old city hall, using 150 construction barriers and 300 warning lights to ask about the boundary of freedom in public space. Looking back now, the consciousness behind that work had already been planted during countless walks between the city wall and the glass. A defensive wall and a transparent wall face one another in the same square. Boundaries can be translated, from obstruction into interface. This was the first lesson this land taught me.",
    "How far back do I need to understand?",
    "As a creator studying this museum again, I assigned myself five layers of homework.",
    "The first layer is after 2000: understanding how the museum operates, its curatorial direction, collection strategy and public policy. This is my direct creator’s perspective. The second layer is from 1980 to 2000: understanding why Germany needed a new contemporary art museum at that moment, and how the postwar generation built a new cultural identity. The third layer is from 1945 to 1980: understanding how postwar Nuremberg faced its own history. This is the most important layer; without that process of digesting trauma, later cultural construction would not have existed. The fourth layer is from the nineteenth century to 1945: understanding industrialization, urban expansion and the Nazi period, and seeing clearly how urban trauma was formed. The fifth layer is the medieval and convent period: understanding the original spirit of the land and answering the most fundamental question: why is this place this place?",
    "These five layers seem like homework in architectural history, but they are actually a portable method. Genius loci, historical strata and the translation of memory: read the land first, then talk about design. When I work in participatory curation and public art in Taiwan, I face structurally similar questions. How do we face the past, preserve memory and allow new development to coexist with existing culture? Nuremberg chose to preserve the wounds of war and make trauma part of urban education. Urban development often pursues efficiency, but the truly precious part of land is usually hidden in experiences that cannot be quickly quantified. An old tree, an irrigation canal, an old factory, a local story: any of these may be the root of future culture.",
    "Granary of the spirit",
    "I call this museum my granary of the spirit. At first, it was simply because it fed the eyes of a student. Now I understand that the word granary has a second meaning. A granary stores seeds, and seeds must sprout on another land.",
    "A foreign student, in an unfamiliar city, built his worldview through a public cultural building. That building, in turn, was the answer grown by that city through half a century of self-reflection. It showed me that a place does not need to erase the past in order to welcome the future. Truly mature culture lets different times coexist. A convent, city walls, war, contemporary art and citizens on a Sunday afternoon create new relationships in the same square.",
    "Land memory is an invisible architecture. The reflection of myself that I saw in the glass years ago is now layered with the shadow of the city wall. This is probably what this essay wants to say: seeing accumulates, and a museum willing to let citizens enter will eventually enter the rest of their lives."
  ],
  "essay_de": [
    "Mein geistiger Speicher: Das Neue Museum Nürnberg und wie eine Stadt lernt, sich neu zu sehen",
    "Eine Einladung für einen Euro am Sonntag",
    "Zum ersten Mal betrat ich das Neue Museum Nürnberg, weil mich eine Aufnahmeprüfung an der Kunstakademie nach Nürnberg brachte. Damals blieb ich nur kurz dort. Ich ahnte nicht, dass dieses Glasgebäude am Klarissenplatz später der Kulturort werden würde, den ich während meines Studiums in Deutschland am besten kannte.",
    "In jenen Prüfungstagen blieb mir die ermäßigte Feiertagskarte für einen Euro stark in Erinnerung. Später, als ich Student an der Kunstakademie wurde, war der Eintritt frei, und das Museum wurde zu einer Art Alltag. Es war wie eine Bibliothek, wie ein Wohnzimmer, wie ein Raum, in den man immer wieder zurückkehren konnte. Am Sonntagnachmittag, wenn alle Geschäfte der Stadt geschlossen waren und die Bürger eigentlich kaum irgendwohin konnten, öffnete das Museum genau in diesem Moment seine Türen und lud alle für einen Euro ein. Erst Jahre später verstand ich das Gewicht dieses Details. Es war eine konkrete Aussage deutscher öffentlicher Kulturpolitik: Das Museum wurde als Teil des städtischen Lebens verstanden. Es nahm den Sonntag der Bürger auf. Kunst legte hier ihre festliche Haltung ab und wurde Alltag.",
    "Für mich war der wichtigste Raum nicht unbedingt der Ausstellungssaal. Es war der Buchladen. Er war wie ein Eingang ins Denken: Kunst, Design, Architektur, Fotografie und zeitgenössische Kulturforschung rückten durch Bücher in den Regalen zueinander. Viele kreative Impulse entstehen nicht im Augenblick, in dem man ein Werk sieht. Sie formen sich langsam durch langes Lesen, Vergleichen und Zweifeln. Jene scheinbar ziellosen Momente des Blätterns und Verweilens bauten eigentlich meine eigene kulturelle Datenbank auf. Heute rückblickend bildeten diese Augenblicke die Methode meiner späteren Arbeit.",
    "Wenn sich die Identität verändert, verändert sich auch das Sehen",
    "Warum muss ich die Geschichte dieses Museums nach vielen Jahren neu verstehen? Weil ich damals Nutzer war und heute Schaffender bin.",
    "Als Student spürte ich: Hier gibt es gute Ausstellungen, angenehme Räume und kreative Anregung. Die Glasfassade war schön. Sie spiegelte die mittelalterliche Stadtmauer und zugleich meine damalige Angst vor dem Unbekannten und meine Gedanken an die Zukunft. In einer Situation befangen zu sein, ist beim Lernen normal. Heute sehe ich, dass diese Verwirrungen eine klare Spur hatten. Selbst der Subbus-Projektvorschlag, den ich damals dem Museum vorlegte, wurde zu einem ziemlich romantischen Abschnitt dieses Prozesses.",
    "Heute aber beginne ich, eine andere Gruppe von Fragen zu stellen. Warum existiert dieses Museum? Warum wählte es diesen Ort? Warum begegnet es der Stadt mit transparentem Glas? Warum war eine Stadt, die mehrere hundert Jahre Geschichte und die schwere Erinnerung des zwanzigsten Jahrhunderts trägt, bereit, neben der alten Stadtmauer ein so zeitgenössisches Gebäude anzunehmen?",
    "Die Antwort muss zum Land zurückkehren.",
    "Die fünf Zeitschichten eines Stücks Land lesen",
    "Der Name Klarissenplatz ist selbst ein Hinweis. Dieser Ort stand einst in Beziehung zum mittelalterlichen Klarissenkloster, dem Kloster der heiligen Klara. Im mittelalterlichen Nürnberg waren religiöse Institutionen wichtige Kräfte der städtischen Ordnung, und Land trug Glauben und geistiges Leben. Dieses Viertel liegt dicht an der Frauentormauer, an der Grenze zwischen Innen und Außen der mittelalterlichen Stadt. Grenze ist der Ausgangspunkt, um die Identität dieses Ortes zu verstehen. Von Anfang an stand er am Rand der Stadt und unterschied Innen von Außen.",
    "Im zwanzigsten Jahrhundert veränderte der Krieg Nürnberg vollständig. Diese Stadt war eine der wichtigsten Bühnen des nationalsozialistischen Regimes. Die Reichsparteitage, die Nürnberger Gesetze und die Nürnberger Prozesse nach dem Krieg verbanden den Namen der Stadt mit den dunkelsten Kapiteln des zwanzigsten Jahrhunderts. Bombardierungen zerstörten mehr als neunzig Prozent der Altstadt. Die nach dem Krieg zurückgebliebenen räumlichen Brüche waren in dieser Gegend nahe dem Hauptbahnhof besonders deutlich. Lange Zeit war dieses Grundstück eine ungenutzte Stelle innerhalb der Stadtmauer, eine städtische Naht, zeitweise sogar eine unordentliche Ecke neben dem Bahnhof.",
    "Der Wendepunkt kam 1990. Die Bayerische Staatsregierung beschloss, in Nürnberg ein staatliches Museum für Kunst des zwanzigsten Jahrhunderts zu errichten, das erste staatliche Kunstmuseum Bayerns außerhalb Münchens. Im bundesweiten Wettbewerb 1991 setzte sich der damals noch wenig bekannte Berliner Architekt Volker Staab gegen bekannte Konkurrenten, darunter Daniel Libeskind, durch. 1996 begann der Bau, am 15. April 2000 wurde das Museum eröffnet. Der entscheidende Schritt seines Entwurfs bestand darin, in dieser städtischen Naht den neuen Klarissenplatz zu schaffen und eine hundert Meter lange, fünfzehn Meter hohe, leicht konkave Glasfassade einer sechshundert Jahre alten Sandstein-Stadtmauer gegenüberzustellen.",
    "Die Entstehung dieses Museums ist daher im Kern eine Aufgabe, die die Stadt ein halbes Jahrhundert nach dem Krieg, nachdem ihre Wirtschaft wieder stabil war, endlich bearbeiten konnte. Eine Stadt, die sich nur auf historisches Erbe stützt, wird zu einer Stadt, die bloß die Vergangenheit bewahrt. Eine Stadt, die die Vergangenheit vollständig abschneidet, verliert ihr Fundament. Das Neue Museum steht zwischen vier Zeitschichten: mittelalterlicher Altstadt, Kriegserinnerung, moderner Stadt und zeitgenössischer Kunst. Seine Aufgabe ist die Wiederverbindung.",
    "Die Glasfassade ist eine kulturelle Haltung",
    "Als Student sah ich beim Blick auf diese Glasfläche Schönheit. Heute sehe ich darin eine Erklärung.",
    "Die Bedeutung des Glases geht über Transparenz hinaus. Es lässt Menschen auf der Straße Kunst sehen und Menschen im Museum weiterhin die Stadt spüren. Es spiegelt die Stadtmauer, die Straße und die Bewegung der Passanten, sodass Vergangenheit und Zukunft auf derselben Oberfläche gleichzeitig existieren. Nachts leuchtet es wie ein großes Schaufenster zum Platz hin. Das Museum weigert sich, sich einzuschließen. Architekturkritiker erwarteten einst, dass dieser Entwurf das ganze Viertel aufwerten könne; diese Erwartung erfüllte sich später. Der Klarissenplatz wurde zu einem Treffpunkt an der alten Stadtmauer. 2012 kam Jeppe Heins Wasserpavillon auf den Platz, und der nahe Skulpturengarten wurde 2004 eröffnet. Platz und Museum bilden zusammen ein städtisches Wohnzimmer.",
    "Dies steht in tiefer Verbindung zu meiner eigenen künstlerischen Methode. Cyanotypie ist eine Technik der Kontaktbelichtung: Ein Bild entsteht nur dort, wo Licht und äußere Dinge tatsächlich aufeinandertreffen, und seine Kontur wird immer durch Beziehung bestimmt. Diese Glasfassade tut dasselbe. Sie stellt die Stadt nicht dar; sie lässt die Stadt auf sich selbst erscheinen. Auch der Kern öffentlicher Kunst liegt hier. Ein Werk in den öffentlichen Raum zu stellen ist nicht schwierig. Wirklich schwierig ist, ein Werk zu einem Medium werden zu lassen, durch das Menschen und Ort eine Beziehung aufbauen. 2015 realisierte ich im Innenhof des alten Nürnberger Rathauses Die Grenze der Freiheit und stellte mit 150 Bauzäunen und 300 Warnleuchten die Frage nach der Grenze von Freiheit im öffentlichen Raum. Heute denke ich, dass das Problembewusstsein dieser Arbeit bereits auf den unzähligen Wegen zwischen Stadtmauer und Glas gesät wurde. Eine defensive Mauer und eine transparente Mauer blicken sich auf demselben Platz an. Grenzen können übersetzt werden, von der Blockade zur Schnittstelle. Das war die erste Lektion, die mir dieses Land gab.",
    "Wie weit zurück muss ich verstehen?",
    "Als Schaffender, der dieses Museum neu untersucht, gab ich mir fünf Schichten als Aufgabe.",
    "Die erste Schicht ist die Zeit nach 2000: verstehen, wie das Museum funktioniert, seine kuratorische Richtung, Sammlungspolitik und öffentliche Kulturpolitik. Das ist meine direkte Perspektive als Schaffender. Die zweite Schicht reicht von 1980 bis 2000: verstehen, warum Deutschland in diesem Moment ein neues Museum für zeitgenössische Kunst brauchte und wie die Nachkriegsgeneration eine neue kulturelle Identität aufbaute. Die dritte Schicht reicht von 1945 bis 1980: verstehen, wie das Nachkriegs-Nürnberg seiner eigenen Geschichte begegnete. Das ist die wichtigste Schicht; ohne diesen Prozess, Trauma zu verdauen, hätte es die spätere kulturelle Konstruktion nicht gegeben. Die vierte Schicht reicht vom neunzehnten Jahrhundert bis 1945: Industrialisierung, Stadterweiterung und NS-Zeit verstehen und klar sehen, wie städtische Wunden entstanden. Die fünfte Schicht ist die mittelalterliche und klösterliche Zeit: den ursprünglichen Geist des Landes verstehen und die grundlegendste Frage beantworten, warum dieser Ort dieser Ort ist.",
    "Diese fünf Schichten wirken wie eine Aufgabe der Architekturgeschichte, sind aber eigentlich eine Methode, die man mitnehmen kann. Genius loci, historische Schichten und Übersetzung von Erinnerung: zuerst das Land lesen, dann über Gestaltung sprechen. Wenn ich in Taiwan partizipative Kuration und öffentliche Kunst mache, begegne ich strukturell ähnlichen Fragen. Wie gehen wir mit der Vergangenheit um, wie bewahren wir Erinnerung, wie lassen wir neue Entwicklung mit bestehender Kultur koexistieren? Nürnberg entschied sich, die Wunden des Krieges zu bewahren und Trauma zu einem Teil städtischer Bildung zu machen. Stadtentwicklung strebt oft nach Effizienz, doch der wirklich wertvolle Teil des Landes liegt meist in Erfahrungen verborgen, die sich nicht schnell quantifizieren lassen. Ein alter Baum, ein Bewässerungskanal, eine alte Fabrik, eine lokale Geschichte: All das kann die Wurzel zukünftiger Kultur sein.",
    "Geistiger Speicher",
    "Ich nenne dieses Museum meinen geistigen Speicher. Anfangs nur, weil es die Augen eines Studenten ernährte. Jetzt verstehe ich, dass das Wort Speicher eine zweite Bedeutung hat. Ein Speicher bewahrt Samen auf, und Samen müssen auf anderem Boden keimen.",
    "Ein ausländischer Student baute in einer fremden Stadt durch ein öffentliches Kulturgebäude seine Weltanschauung auf. Dieses Gebäude wiederum war die Antwort, die jene Stadt durch ein halbes Jahrhundert der Selbstreflexion hervorgebracht hatte. Es zeigte mir, dass ein Ort die Vergangenheit nicht auslöschen muss, um die Zukunft zu empfangen. Wirklich reife Kultur lässt verschiedene Zeiten miteinander existieren. Kloster, Stadtmauer, Krieg, zeitgenössische Kunst und Bürger an einem Sonntagnachmittag bilden auf demselben Platz neue Beziehungen.",
    "Landgedächtnis ist eine unsichtbare Architektur. Mein eigenes Spiegelbild, das ich damals vor dem Glas sah, ist heute mit dem Schatten der Stadtmauer überlagert. Wahrscheinlich will dieser Text genau das sagen: Sehen sammelt sich an, und ein Museum, das bereit ist, Bürger eintreten zu lassen, tritt am Ende in ihr späteres Leben ein."
  ],
  "href": "https://genius912.blogspot.com/2026/07/blog-post.html"
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
  const RAUM_NEUES_MUSEUM_WRITING = ${JSON.stringify(article, null, 2)};
  const existingIndex = WRITINGS.findIndex((writing) => (
    writing.id === RAUM_NEUES_MUSEUM_WRITING.id ||
    writing.href === RAUM_NEUES_MUSEUM_WRITING.href ||
    writing.title_zh === RAUM_NEUES_MUSEUM_WRITING.title_zh
  ));
  if (existingIndex >= 0) {
    WRITINGS.splice(existingIndex, 1);
  }
  WRITINGS.unshift(RAUM_NEUES_MUSEUM_WRITING);
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
console.log('Synced Neues Museum writing article.');
