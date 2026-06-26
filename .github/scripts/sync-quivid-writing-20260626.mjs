import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_QUIVID_WRITING_20260626_START */';
const end = '/* RAUM_QUIVID_WRITING_20260626_END */';

const article = {
  id: 'w-quivid-second-architecture-20260626',
  year: '2026',
  month: '06',
  title_zh: '城市・土地・文化敘事（九）城市的第二建築：QUIVID 如何把慕尼黑的公共工程轉化為日常記憶',
  title_en: 'City, Land and Cultural Narratives IX: The City’s Second Architecture: How QUIVID Turns Munich’s Public Works into Everyday Memory',
  title_de: 'Stadt, Land und kulturelle Erzählungen IX: Die zweite Architektur der Stadt: Wie QUIVID Münchens öffentliche Bauprojekte in Alltagsgedächtnis verwandelt',
  note_zh: '公共藝術作為城市記憶的維修系統。QUIVID 可以理解成慕尼黑市政府把「公共藝術」制度化的一套城市裝置系統。',
  note_en: 'Public art as a maintenance system for urban memory. QUIVID can be understood as Munich’s institutionalized urban installation system for public art.',
  note_de: 'Kunst im öffentlichen Raum als Wartungssystem des städtischen Gedächtnisses. QUIVID lässt sich als institutionalisierte städtische Struktur Münchens für öffentliche Kunst verstehen.',
  image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggC7ff2ioBAnGjhCKL3uhRRb5bHIbVoSoTo3zPREuYovbWH23ETD3F-zKxxX2Vdkxk1GT-uSY5VmLLeG93UTeCYo0XgK4ojY-jbWVovTnqx9FIpF6pm8zGt7a-YOCbbad3SY4jBfmHoiLYToMuhpJ_fawupx-oxMciTxjbLNa-0G1wso1mtNUXDja5yF8/w640-h480/R0022729.JPG',
  images: [
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggC7ff2ioBAnGjhCKL3uhRRb5bHIbVoSoTo3zPREuYovbWH23ETD3F-zKxxX2Vdkxk1GT-uSY5VmLLeG93UTeCYo0XgK4ojY-jbWVovTnqx9FIpF6pm8zGt7a-YOCbbad3SY4jBfmHoiLYToMuhpJ_fawupx-oxMciTxjbLNa-0G1wso1mtNUXDja5yF8/w640-h480/R0022729.JPG',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieSRyPlL-b3PmbE32eHd2hRRX10sdzF7Vh-NYABR6Bwpy-dUCT3VCFkp6sgYVjfVE0J-OtY3d73kb7LJnSwC_1y-eYcFI1_cqLHLZaG3yff3-u3nGQ8PYALnw1ytzjLerOZ2pu6FmXkbs/s1600/DSC08653-4.jpg'
  ],
  image_alt_zh: 'QUIVID 文章原部落格圖片',
  image_alt_en: 'Original blog image for the QUIVID article',
  image_alt_de: 'Originales Blogbild zum QUIVID-Artikel',
  essay_zh: [
    '城市・土地・文化敘事（九）城市的第二建築：QUIVID 如何把慕尼黑的公共工程轉化為日常記憶',
    '公共藝術作為城市記憶的維修系統',
    '1. QUIVID 是什麼',
    'QUIVID 可以理解成慕尼黑市政府把「公共藝術」制度化的一套城市裝置系統。它的關鍵價值在於：藝術不等到建築完工才補上去，而是在市政建設、學校、廣場、地鐵、綠地、公共設施的規劃中，提前被納入審議、預算、委託、競圖與實作流程。',
    'QUIVID 是慕尼黑市的「Kunst am Bau」計畫，英文常譯為 Art in Architecture Program，中文可譯為「建築中的藝術」或「公共建設藝術計畫」。官方說明指出，慕尼黑每一項市政建設都會支持當代藝術的實現，依照規範，最高可將建設成本的 2% 編列給藝術；委託單位是慕尼黑市建設部門 Baureferat，並由 1985 年成立的「建築與公共空間藝術委員會」提供專業諮詢。',
    '「QUIVID」這個名字是在 2001 年由柏林藝術家與文字創作者 Adib Fricke 設計，字根讓人聯想到拉丁文 qui，也就是「誰」，以及 videre，也就是「看見」。這個命名很聰明，因為它把公共藝術的核心問題放在觀看者身上：誰在看？誰被看見？城市允許什麼被看見？',
    '2. 它和一般公共藝術審議最大的差異',
    'QUIVID 的強項是「前置性」。許多地方的公共藝術像是建築完成後的加購配件，最後變成一件漂亮但孤立的雕塑。QUIVID 的制度邏輯比較接近城市策展：在市政建築、幼兒園、學校、行政建築、文化建築、道路、廣場、隧道、綠地、地鐵站，甚至市政排水工程中，都可能導入藝術家的參與。',
    '這代表藝術家面對的不是單一物件，而是使用者、基地歷史、建築語彙、行走動線、教育功能、公共安全、維護成本與城市記憶。簡單說，QUIVID 訓練藝術家像城市診斷師，不只問「我想做什麼」，還要問「這個地方為什麼需要這件作品」。',
    '3. 公共藝術審議委員會怎麼運作',
    'QUIVID 背後的重要機制是「Kommission für Kunst am Bau und im öffentlichen Raum」，也就是「建築與公共空間藝術委員會」。官方 QUIVID 頁面說明，委員會由市議會任命，任期六年，負責向市議會與行政部門提供藝術措施的專業建議。',
    '這個委員會不是純藝術圈閉門評選。它包含市議員、相關區委會主席、建築師、獨立建築或景觀專家，並且以藝術專家為多數。現任主席為 Prof. Dr. Bernhart Schwenk。',
    '這個組成很關鍵，因為它讓審議同時碰到政治責任、在地社區、建築整合與藝術品質。',
    'QUIVID 團隊本身則負責委員會事務與專案協調，包括藝術家選擇、競圖流程、實作協調、完工後文件化、開幕、展覽、活動與 newsletter。這裡可以看到它不是單純評審會，而是一個長期運作的公共藝術辦公室。',
    '4. 預算制度：它為什麼能長期有效',
    '慕尼黑QUIVID 官方「最高可達建築成本 2%」用於藝術；Public Art München 則說慕尼黑市每年將建設成本的 1.5% 投入藝術，其中一半流向 QUIVID，另一半用於臨時性公共藝術計畫。一個是建築專案內的藝術比例，一個是城市年度公共藝術資源分配。',
    '穩定預算比一次性補助更能養出公共藝術品質。沒有穩定預算，藝術家永遠在臨時救火；有制度預算，藝術可以進入設計流程、維護流程與教育流程。城市不是靠靈感變好，是靠預算表變好，這句話殘酷但很準。',
    '5. QUIVID 與 Public Art München 的分工',
    '慕尼黑公共藝術大致有兩條線。QUIVID 由建設部門管理，偏向市政建築與公共建設中的永久性或建築整合型藝術。Public Art München 則由文化部門管理，偏向臨時性、實驗性、展演性與當代議題導向的公共藝術。',
    'Public Art München 的另一半預算自 2009 年起由文化部門運作，並透過年度徵件、主題計畫、Solo、Festival、Memory 等形式推動。',
    '永久作品處理建築、城市基礎設施與長期維護；臨時作品處理當代議題、實驗方法與公共討論。兩者互補，城市才有深度與彈性。',
    '6. 檔案系統與公開透明',
    'QUIVID 有完整的數位檔案庫。官方記錄了慕尼黑全市 308 件作品與 273 位藝術家。',
    '公共藝術最常見的失敗不是作品一開始不好，而是十年後沒有人知道它為什麼存在、誰做的、怎麼維護、原本的公共意義是什麼。',
    'QUIVID 透過地圖、作品頁、Review 年刊、藝術導覽與兒童尋寶地圖，把公共藝術變成可學習的城市知識。',
    '7.代表案例解析',
    'Die große Reise｜偉大的旅行',
    '藝術家是 Franz Ackermann，作品完成於 2003年，位置在慕尼黑 Georg-Brauchle-Ring 地鐵站。',
    '作品形式是兩側月台牆面的巨大壁面裝置，每側約 120公尺長、7.5公尺高，材料為粉體烤漆不鏽鋼板與數位印刷不鏽鋼波浪板。',
    'Franz Ackermann 把地鐵站變成一個「全球旅行、都市慾望與地方記憶」交錯的巨大心理地圖。作品由大量彩色矩形板塊構成，像城市地圖、旅遊廣告、交通網絡與記憶碎片的混合體。裡面穿插了車站周邊影像，也加入 Berlin、New York、Sydney 等世界城市圖像，讓一個地方性的地鐵站突然接上全球都市想像。',
    '場域策略',
    '這座站位於 Moosach，因 U1 延伸線而被接入慕尼黑地鐵網，也靠近 Uptown Munich 高樓開發區與奧林匹克公園，因此原本就帶有「新開發、通勤、國際化、都市更新」的氣味。',
    'QUIVID指出，這個車站屬於新一代地鐵站，當代藝術在其中扮演關鍵角色。',
    '藝術家的核心語言',
    'Ackermann 以「Mental Maps 心理地圖」聞名。他不是畫客觀地圖，而是把旅行中的街道、建築、廣告、消費慾望、殖民記憶與個人感知混在一起。QUIVID也指出，他長期批判觀光、文化工業與全球資本如何塑造人的慾望。',
    '為什麼這件作品重要',
    '它沒有把公共藝術當作裝飾牆面，而是把交通空間變成一種「移動中的思考機器」。乘客每天通過，看見的不是單一紀念碑，而是一個快速切換的城市拼貼。',
    '它很聰明，因為地鐵本來就是移動、等待、轉乘、目的地焦慮的場所；作品直接把這種心理狀態放大。'
  ],
  essay_en: [
    'City, Land and Cultural Narratives IX: The City’s Second Architecture: How QUIVID Turns Munich’s Public Works into Everyday Memory',
    'Public art as a maintenance system for urban memory',
    '1. What QUIVID Is',
    'QUIVID can be understood as an urban installation system through which the City of Munich has institutionalized public art. Its key value lies in this: art is not added only after a building is finished, but is included in advance within the review, budgeting, commissioning, competition and realization processes of municipal construction, schools, squares, subway stations, green spaces and public facilities.',
    'QUIVID is the City of Munich’s Kunst am Bau program, commonly translated into English as Art in Architecture Program, and in Chinese as “art in architecture” or “public construction art program.” Official descriptions state that every municipal construction project in Munich supports the realization of contemporary art. According to the rules, up to 2% of construction costs can be allocated to art. The commissioning body is Munich’s building department, Baureferat, with professional consultation provided by the Commission for Art in Architecture and Public Space, founded in 1985.',
    'The name “QUIVID” was designed in 2001 by Berlin artist and text creator Adib Fricke. Its roots suggest the Latin qui, meaning “who,” and videre, meaning “to see.” The name is clever because it places the central question of public art on the viewer: Who is looking? Who is being seen? What does the city allow to be seen?',
    '2. The Biggest Difference from Ordinary Public Art Review',
    'QUIVID’s strength is its “advance positioning.” In many places, public art is like an add-on accessory after a building is completed, eventually becoming a beautiful but isolated sculpture. QUIVID’s institutional logic is closer to urban curation: artists may be brought into municipal buildings, kindergartens, schools, administrative buildings, cultural buildings, roads, squares, tunnels, green spaces, subway stations and even municipal drainage projects.',
    'This means artists are not facing a single object, but users, site history, architectural language, circulation routes, educational function, public safety, maintenance costs and urban memory. Simply put, QUIVID trains artists like urban diagnosticians. They do not only ask “what do I want to make,” but also “why does this place need this work?”',
    '3. How the Public Art Review Commission Works',
    'An important mechanism behind QUIVID is the Kommission für Kunst am Bau und im öffentlichen Raum, the Commission for Art in Architecture and Public Space. The official QUIVID page explains that the commission is appointed by the city council for a six-year term and provides professional advice on artistic measures to the city council and administration.',
    'This commission is not a closed selection process limited to the art world. It includes city council members, relevant district committee chairs, architects, independent architecture or landscape experts, and a majority of art experts. The current chair is Prof. Dr. Bernhart Schwenk.',
    'This composition is crucial because it brings political responsibility, local community, architectural integration and artistic quality into the same review process.',
    'The QUIVID team itself is responsible for commission affairs and project coordination, including artist selection, competition processes, realization coordination, post-completion documentation, openings, exhibitions, events and the newsletter. This shows that it is not simply a jury meeting, but a long-term public art office.',
    '4. The Budget System: Why It Can Work Long Term',
    'Munich QUIVID’s official rule allows “up to 2% of construction costs” to be used for art. Public Art München states that the City of Munich invests 1.5% of construction costs in art each year, half of which flows to QUIVID and the other half to temporary public art programs. One refers to the art percentage within building projects, while the other refers to the city’s annual allocation of public art resources.',
    'A stable budget can cultivate the quality of public art better than one-time grants. Without stable budgets, artists are always putting out fires temporarily; with institutional budgets, art can enter design, maintenance and education processes. A city does not become better through inspiration alone, but through budget tables. This sentence is harsh, but accurate.',
    '5. The Division of Labor between QUIVID and Public Art München',
    'Munich’s public art roughly follows two lines. QUIVID is managed by the building department and leans toward permanent or architecturally integrated art within municipal buildings and public construction. Public Art München is managed by the cultural department and leans toward temporary, experimental, performative and contemporary-issue-oriented public art.',
    'The other half of Public Art München’s budget has been operated by the cultural department since 2009, and is advanced through annual open calls, thematic programs, Solo, Festival, Memory and other formats.',
    'Permanent works deal with architecture, urban infrastructure and long-term maintenance; temporary works deal with contemporary issues, experimental methods and public discussion. The two complement each other, giving the city both depth and flexibility.',
    '6. Archive System and Public Transparency',
    'QUIVID has a complete digital archive. The official records document 308 works and 273 artists across Munich.',
    'The most common failure of public art is not that a work is bad at the beginning, but that ten years later no one knows why it exists, who made it, how it should be maintained, or what its original public meaning was.',
    'Through maps, work pages, Review annuals, art tours and children’s treasure-hunt maps, QUIVID turns public art into urban knowledge that can be learned.',
    '7. Case Study',
    'Die große Reise | The Great Journey',
    'The artist is Franz Ackermann. The work was completed in 2003 and is located at Georg-Brauchle-Ring subway station in Munich.',
    'The work takes the form of large wall installations on both platform walls, each side about 120 meters long and 7.5 meters high, using powder-coated stainless steel panels and digitally printed corrugated stainless steel sheets.',
    'Franz Ackermann turns the subway station into a huge mental map where global travel, urban desire and local memory intersect. The work consists of numerous colorful rectangular panels, like a mixture of city maps, travel advertisements, transport networks and fragments of memory. It includes images from the station’s surroundings, as well as images of world cities such as Berlin, New York and Sydney, suddenly connecting a local subway station to a global urban imagination.',
    'Site Strategy',
    'The station is located in Moosach. Because it was connected to the Munich subway network through the U1 extension, and because it is close to the Uptown Munich high-rise development and the Olympic Park, it already carries the atmosphere of new development, commuting, internationalization and urban renewal.',
    'QUIVID points out that this station belongs to a new generation of subway stations, where contemporary art plays a key role.',
    'The Artist’s Core Language',
    'Ackermann is known for his “Mental Maps.” He does not draw objective maps, but mixes streets, buildings, advertisements, consumer desires, colonial memories and personal perceptions from travel. QUIVID also notes that he has long criticized how tourism, the culture industry and global capital shape human desire.',
    'Why This Work Matters',
    'It does not treat public art as wall decoration. Instead, it turns a traffic space into a “thinking machine in motion.” Passengers pass through every day and encounter not a single monument, but a rapidly shifting urban collage.',
    'It is intelligent because the subway is already a place of movement, waiting, transfer and destination anxiety; the work directly amplifies that psychological state.'
  ],
  essay_de: [
    'Stadt, Land und kulturelle Erzählungen IX: Die zweite Architektur der Stadt: Wie QUIVID Münchens öffentliche Bauprojekte in Alltagsgedächtnis verwandelt',
    'Kunst im öffentlichen Raum als Wartungssystem des städtischen Gedächtnisses',
    '1. Was QUIVID ist',
    'QUIVID lässt sich als ein städtisches Installationssystem verstehen, mit dem die Stadt München öffentliche Kunst institutionalisiert hat. Sein zentraler Wert liegt darin, dass Kunst nicht erst nach der Fertigstellung eines Gebäudes ergänzt wird, sondern bereits früh in Prüfung, Budgetierung, Beauftragung, Wettbewerb und Umsetzung von kommunalen Bauten, Schulen, Plätzen, U-Bahnhöfen, Grünflächen und öffentlichen Einrichtungen einbezogen wird.',
    'QUIVID ist das Kunst-am-Bau-Programm der Stadt München, auf Englisch oft als Art in Architecture Program übersetzt, auf Chinesisch als “Kunst in der Architektur” oder “Kunstprogramm öffentlicher Bauprojekte”. Die offiziellen Informationen weisen darauf hin, dass jedes kommunale Bauprojekt in München die Realisierung zeitgenössischer Kunst unterstützt. Nach den Regeln können bis zu 2% der Baukosten für Kunst vorgesehen werden. Auftraggeber ist das Baureferat der Stadt München, fachlich beraten durch die 1985 gegründete Kommission für Kunst am Bau und im öffentlichen Raum.',
    'Der Name “QUIVID” wurde 2001 von dem Berliner Künstler und Textautor Adib Fricke entworfen. Seine Wortwurzeln erinnern an das lateinische qui, also “wer”, und videre, also “sehen”. Diese Benennung ist klug, weil sie die Kernfrage öffentlicher Kunst auf die Betrachtenden verlagert: Wer schaut? Wer wird gesehen? Was erlaubt die Stadt sichtbar zu werden?',
    '2. Der größte Unterschied zu gewöhnlichen öffentlichen Kunstverfahren',
    'Die Stärke von QUIVID liegt in der Vorverlagerung. An vielen Orten wirkt öffentliche Kunst wie ein Zusatzteil, das nach Fertigstellung eines Gebäudes gekauft wird und am Ende zu einer schönen, aber isolierten Skulptur wird. Die institutionelle Logik von QUIVID ähnelt eher urbaner Kuratierung: In kommunalen Gebäuden, Kindergärten, Schulen, Verwaltungsbauten, Kulturbauten, Straßen, Plätzen, Tunneln, Grünflächen, U-Bahnhöfen und sogar städtischen Entwässerungsprojekten kann die Beteiligung von Künstlerinnen und Künstlern eingeführt werden.',
    'Das bedeutet, dass Künstlerinnen und Künstler nicht einem einzelnen Objekt gegenüberstehen, sondern Nutzerinnen und Nutzern, Standortgeschichte, Architektursprache, Bewegungswegen, Bildungsfunktion, öffentlicher Sicherheit, Wartungskosten und städtischem Gedächtnis. Einfach gesagt: QUIVID trainiert Künstlerinnen und Künstler wie städtische Diagnostiker. Sie fragen nicht nur “was will ich machen”, sondern auch “warum braucht dieser Ort dieses Werk?”',
    '3. Wie die Kommission für öffentliche Kunst arbeitet',
    'Ein wichtiger Mechanismus hinter QUIVID ist die Kommission für Kunst am Bau und im öffentlichen Raum. Die offizielle QUIVID-Seite erklärt, dass die Kommission vom Stadtrat berufen wird, eine Amtszeit von sechs Jahren hat und Stadtrat und Verwaltung fachlich zu künstlerischen Maßnahmen berät.',
    'Diese Kommission ist kein geschlossenes Auswahlverfahren nur innerhalb der Kunstwelt. Sie umfasst Stadtratsmitglieder, Vorsitzende der zuständigen Bezirksausschüsse, Architektinnen und Architekten, unabhängige Fachleute aus Architektur oder Landschaftsarchitektur und eine Mehrheit von Kunstexpertinnen und Kunstexperten. Der aktuelle Vorsitzende ist Prof. Dr. Bernhart Schwenk.',
    'Diese Zusammensetzung ist entscheidend, weil sie politische Verantwortung, lokale Gemeinschaft, architektonische Integration und künstlerische Qualität zugleich in die Beratung bringt.',
    'Das QUIVID-Team selbst ist für Kommissionsangelegenheiten und Projektkoordination zuständig, darunter Auswahl von Künstlerinnen und Künstlern, Wettbewerbsverfahren, Umsetzungskoordination, Dokumentation nach Fertigstellung, Eröffnungen, Ausstellungen, Veranstaltungen und Newsletter. Daran sieht man, dass es nicht einfach eine Jurysitzung ist, sondern ein langfristig arbeitendes Büro für öffentliche Kunst.',
    '4. Das Budgetsystem: Warum es langfristig wirksam sein kann',
    'Offiziell können in München bei QUIVID bis zu 2% der Baukosten für Kunst eingesetzt werden. Public Art München erklärt, dass die Stadt München jährlich 1,5% der Baukosten in Kunst investiert, wobei die eine Hälfte an QUIVID und die andere Hälfte an temporäre Programme für Kunst im öffentlichen Raum geht. Das eine beschreibt den Kunstanteil innerhalb von Bauprojekten, das andere die jährliche städtische Verteilung öffentlicher Kunstressourcen.',
    'Ein stabiles Budget kann die Qualität öffentlicher Kunst besser entwickeln als einmalige Förderungen. Ohne stabile Budgets löschen Künstlerinnen und Künstler ständig kurzfristige Brände; mit institutionellen Budgets kann Kunst in Design-, Wartungs- und Bildungsprozesse eintreten. Eine Stadt wird nicht allein durch Inspiration besser, sondern durch Budgettabellen. Dieser Satz ist hart, aber genau.',
    '5. Die Aufgabenteilung zwischen QUIVID und Public Art München',
    'Die öffentliche Kunst in München folgt grob zwei Linien. QUIVID wird vom Baureferat verwaltet und konzentriert sich auf dauerhafte oder architektonisch integrierte Kunst in kommunalen Gebäuden und öffentlichen Bauprojekten. Public Art München wird vom Kulturreferat verwaltet und konzentriert sich auf temporäre, experimentelle, performative und an Gegenwartsthemen orientierte Kunst im öffentlichen Raum.',
    'Die andere Hälfte des Budgets von Public Art München wird seit 2009 vom Kulturreferat betrieben und durch jährliche Ausschreibungen, Themenprogramme, Solo, Festival, Memory und weitere Formate vorangetrieben.',
    'Dauerhafte Werke bearbeiten Architektur, städtische Infrastruktur und langfristige Wartung; temporäre Werke bearbeiten Gegenwartsthemen, experimentelle Methoden und öffentliche Diskussion. Beide ergänzen einander, damit die Stadt Tiefe und Flexibilität erhält.',
    '6. Archivsystem und öffentliche Transparenz',
    'QUIVID verfügt über ein vollständiges digitales Archiv. Die offiziellen Aufzeichnungen dokumentieren 308 Werke und 273 Künstlerinnen und Künstler in ganz München.',
    'Das häufigste Scheitern öffentlicher Kunst besteht nicht darin, dass ein Werk am Anfang schlecht ist, sondern darin, dass zehn Jahre später niemand mehr weiß, warum es existiert, wer es gemacht hat, wie es gepflegt werden soll oder was seine ursprüngliche öffentliche Bedeutung war.',
    'Durch Karten, Werkseiten, Review-Jahrbücher, Kunstführungen und Schatzkarten für Kinder verwandelt QUIVID öffentliche Kunst in städtisches Wissen, das gelernt werden kann.',
    '7. Fallanalyse',
    'Die große Reise',
    'Der Künstler ist Franz Ackermann. Das Werk wurde 2003 fertiggestellt und befindet sich im U-Bahnhof Georg-Brauchle-Ring in München.',
    'Die Arbeit besteht aus großen Wandinstallationen auf beiden Bahnsteigwänden. Jede Seite ist etwa 120 Meter lang und 7,5 Meter hoch. Verwendet wurden pulverbeschichtete Edelstahlplatten und digital bedruckte gewellte Edelstahlbleche.',
    'Franz Ackermann verwandelt den U-Bahnhof in eine riesige psychologische Karte, in der globale Reise, urbanes Begehren und lokale Erinnerung ineinandergreifen. Das Werk besteht aus zahlreichen farbigen rechteckigen Platten, wie eine Mischung aus Stadtplänen, Reiseanzeigen, Verkehrsnetzen und Erinnerungsfragmenten. Es enthält Bilder aus der Umgebung des Bahnhofs und ergänzt Bilder von Weltstädten wie Berlin, New York und Sydney, sodass ein lokaler U-Bahnhof plötzlich an eine globale urbane Vorstellung angeschlossen wird.',
    'Ortsstrategie',
    'Der Bahnhof liegt in Moosach. Durch die Verlängerung der U1 wurde er an das Münchner U-Bahn-Netz angeschlossen; zugleich liegt er in der Nähe des Hochhausprojekts Uptown Munich und des Olympiaparks. Dadurch trägt der Ort bereits den Geruch von Neuentwicklung, Pendeln, Internationalisierung und Stadterneuerung.',
    'QUIVID weist darauf hin, dass dieser Bahnhof zu einer neuen Generation von U-Bahnhöfen gehört, in der zeitgenössische Kunst eine Schlüsselrolle spielt.',
    'Die zentrale Sprache des Künstlers',
    'Ackermann ist für seine “Mental Maps” bekannt. Er zeichnet keine objektiven Karten, sondern mischt auf Reisen wahrgenommene Straßen, Gebäude, Werbung, Konsumbegehren, koloniale Erinnerungen und persönliche Wahrnehmung. QUIVID weist ebenfalls darauf hin, dass er seit Langem kritisiert, wie Tourismus, Kulturindustrie und globales Kapital menschliches Begehren formen.',
    'Warum dieses Werk wichtig ist',
    'Es behandelt öffentliche Kunst nicht als Wanddekoration, sondern verwandelt einen Verkehrsraum in eine “Denkmaschine in Bewegung”. Fahrgäste gehen täglich hindurch und sehen kein einzelnes Denkmal, sondern eine schnell wechselnde urbane Collage.',
    'Es ist klug, weil die U-Bahn ohnehin ein Ort von Bewegung, Warten, Umsteigen und Zielangst ist; das Werk vergrößert diesen psychologischen Zustand direkt.'
  ],
  href: 'https://genius912.blogspot.com/2026/06/quivid.html',
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
  const RAUM_QUIVID_WRITING = ${JSON.stringify(article, null, 2)};
  const existingIndex = WRITINGS.findIndex((writing) => (
    writing.id === RAUM_QUIVID_WRITING.id ||
    writing.href === RAUM_QUIVID_WRITING.href ||
    writing.title_zh === RAUM_QUIVID_WRITING.title_zh
  ));
  if (existingIndex >= 0) {
    WRITINGS.splice(existingIndex, 1);
  }
  WRITINGS.unshift(RAUM_QUIVID_WRITING);
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
console.log('Synced QUIVID writing article.');
