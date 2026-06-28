import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_DOKU_ZENTRUM_WRITING_20260628_START */';
const end = '/* RAUM_DOKU_ZENTRUM_WRITING_20260628_END */';

const article = {
  "id": "w-doku-zentrum-nuremberg-20260628",
  "year": "2026",
  "month": "06",
  "title_zh": "城市・土地・文化敘事（十一）紐倫堡 Doku-Zentrum：一場城市尺度的歷史拆解",
  "title_en": "City, Land and Cultural Narratives XI: Nuremberg Doku-Zentrum: A Historical Dissection at Urban Scale",
  "title_de": "Stadt, Land und kulturelle Erzählungen XI: Nürnberg Doku-Zentrum: Eine historische Zerlegung im Maßstab der Stadt",
  "note_zh": "這個場域與城市尺度的歷史拆解。博物館只是它的外殼。它嵌在納粹未完成的 Kongresshalle 北翼裡，把一座用來製造集體迷狂的巨構，翻轉成教育、警告與民主反省的空間機器。",
  "note_en": "This site is a historical dissection at the scale of the city. The museum is only its shell: it turns an unfinished Nazi megastructure into a spatial machine for education, warning and democratic reflection.",
  "note_de": "Dieser Ort ist eine historische Zerlegung im Maßstab der Stadt. Das Museum ist nur seine Hülle: Es verwandelt eine unvollendete nationalsozialistische Großstruktur in eine Raummaschine für Bildung, Warnung und demokratische Reflexion.",
  "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNdMzFRjHvIxtWINYogGSfM7QCAlG2TVtpYVWHHyvHB1sIM1yWQzfI7vjHF7ut5AxwVNyfkBmp67BdbDSWYm7aO_q2sRFqLIFC_l0ML8A1E4FMALOnPaqciSb8tvQGQqccpDZcnwJaJWtD1mHUxldok6JfYrMBbuXfoZ0fYkF4Hl61cwMaPQkogGdATyE/w640-h596/Nu%CC%88rnberg_50000%E6%8B%B7%E8%B2%9D-01.png",
  "images": [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNdMzFRjHvIxtWINYogGSfM7QCAlG2TVtpYVWHHyvHB1sIM1yWQzfI7vjHF7ut5AxwVNyfkBmp67BdbDSWYm7aO_q2sRFqLIFC_l0ML8A1E4FMALOnPaqciSb8tvQGQqccpDZcnwJaJWtD1mHUxldok6JfYrMBbuXfoZ0fYkF4Hl61cwMaPQkogGdATyE/w640-h596/Nu%CC%88rnberg_50000%E6%8B%B7%E8%B2%9D-01.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb4EqrhNo35IZ3lAgK_0otfMwcknD10mNwsqdiaM08DSaVXzfGEmWenU4as9MpoTn5jHWgeyIvJCVMCy64iVtPpE0ZFIQ2rFhuGnbLnIQtSjKyx2Rhp4JZE5i4E0mPhFmIYoohG38EW0HQaKG05VE_FJsi_JeWGEwYVIhQd0Eyqa05j6feJuXP-cmvo88/w640-h406/entwurf-kopfbau.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLSf47bfxqZIeNOP58BkFzGqUh0FLbjThIbhLYZCfhv5EC_7I6um-qKV6lwzF3ISAptwNVVjarzOYt7dWGN_B__pafYfZq8mgU4XyqFZUIH6FcWmnRPfIHWbQKWs6ria5XMWzZe8qHRQSgDerjgV0woDH2owGKFOaF4Dgbw6uJ8ErO0BAq9CRo_ADj0Tc/w640-h490/who-was-gunther-domenig-the-unknown-deconstructivist_1.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtkJitUqLFa8TmHu1pYVCVPKBlQCJxnVcqciTh5uT2_9ZYiiKzcz-v5VDrHHuV8SUNYOJdEtYqPn_BIvRf7-BtW2vOu2lN3fiJnjOyxOymqT3oVNlPG2kNKtdgigvKK6NLUFwq34ikvAp8T_1MpQEWrJuOlIyzW7qg2UDabZd9zmnlL-cqLAI94t9HbkM/w640-h480/DSC08974.JPG"
  ],
  "image_alt_zh": "紐倫堡 Doku-Zentrum 原部落格圖片",
  "image_alt_en": "Original blog image of Nuremberg Doku-Zentrum",
  "image_alt_de": "Originales Blogbild des Nürnberger Doku-Zentrums",
  "essay_zh": [
    "城市・土地・文化敘事（十一）紐倫堡 Doku-Zentrum：一場城市尺度的歷史拆解",
    "紐倫堡 Doku-Zentrum：一場城市尺度的歷史拆解",
    "這個場域與城市尺度的歷史拆解。博物館只是它的外殼。它嵌在納粹未完成的 Kongresshalle 北翼裡，把一座用來製造集體迷狂的巨構，翻轉成教育、警告與民主反省的空間機器。",
    "一、歷史背景",
    "1933 到 1938 年，納粹在紐倫堡舉辦 Reichsparteitage，全國黨代會。紐倫堡被選中，背後是一套象徵操作。它是中世紀帝國城市，有帝國議會的記憶，凱薩堡坐落於此。納粹要把自己接成德意志歷史的繼承者，紐倫堡剛好提供現成的歷史外衣。新的永久展也直接指出，納粹利用紐倫堡的中世紀帝國城市形象，替自身的政治神話服務。",
    "整個 Reichsparteitagsgelände 是一座大型政治劇場。這些建築要的是震懾、規訓、建立共同體感，它們被編進宣傳與力量展示的系統裡。它的本質是一套心理技術，用尺度、軸線、隊伍、聲音、旗幟、燈光與媒體，把個人溶解進集體。",
    "這一點對公共論述是關鍵。公共空間能療癒人，也能催眠群眾。空間本身沒有道德，使用它的人才有。",
    "Kongresshalle 原本由 Ludwig Ruff 設計，後來由 Franz Ruff 接手。1935 年開工，計畫容納約 60,000 人，半圓形大廳配上雙入口，構成一座極端巨大的政治會堂。二戰爆發後它停在未完成的狀態。",
    "戰後這片場地先被美軍接管，後來由紐倫堡市政府接收。城市長期在拆除、忽視、實用化與保存之間搖擺，倉庫、展覽、賽車、音樂節、停車與臨時活動都曾進場。巴伐利亞文物保護法把這些建築列入保護，紐倫堡開始從遮掩轉向面對。1984 年 Zeppelin Grandstand 內出現早期展覽《Fascination and Terror》，2001 年 Documentation Center 在 Kongresshalle 北翼正式開幕，成為德國記憶政治的重要案例。",
    "二、Günther Domenig 的介入思維",
    "奧地利建築師 Günther Domenig，他在 1998 年的國際競圖勝出。這個設計要做兩件事，一是在舊建築裡放進博物館功能，二是讓建築和納粹的心態正面對峙。",
    "設計目標不只是在舊建築裡放進博物館功能，也要和納粹建築及其背後心態形成有意義的對峙。",
    "Domenig 的核心動作是切。他讓一條約 130 公尺的玻璃鋼構斜向通道穿過 Kongresshalle 北翼，官方叫它 glass Stake，一根楔子打進建築，永久破壞納粹那種強迫性的直角、對稱與軸線秩序。",
    "這個設計很狠，也很準。納粹建築追求正面性、軸線性、紀念碑性與不可質疑的秩序，Domenig 反過來用斜線、透明、懸挑、切開與暴露結構。他拒絕兩條容易的路，一條是給舊建築披上歷史風格的外衣，一條是用新建築把它整個吞掉。他讓厚牆、空洞、未完成的體量與陰暗全部留在現場，人走過時直接撞見。建築本身就是展品。",
    "把 Domenig 的設計理解成反紀念碑。雕像缺席，黑盒子缺席，它用空間的衝突逼出判斷力。人走進去，身體會被兩股力量撕扯。一邊是納粹的巨大、沉重、垂直與命令，另一邊是民主時代的切入、透明、懷疑與觀看。這是高級的記憶建築。它不替人下結論，卻不准任何人睡著。",
    "三、跟凱薩堡的軸線關係",
    "這是整個場域最關鍵的城市設計問題。Große Straße，那條大路，是 Albert Speer 為 Reichsparteitagsgelände 規劃的中央軸線。它寬 60 公尺，原計畫長 2 公里，1935 到 1939 年完成約 1.5 公里，鋪了 60,000 塊花崗岩板。關鍵在於 Speer 把這條軸線對準舊城的凱薩堡。一條路，把中世紀帝國議會之城的紐倫堡，和納粹黨代會之城的紐倫堡，縫在一起。",
    "這條軸線的作用遠超過視覺，它是一條歷史挪用的軸線。納粹用城市幾何，把自己接到神聖羅馬帝國、帝國議會與德意志榮耀的想像上。它要用一條路告訴群眾，第三帝國是古老帝國的延續。這是政治宣傳的老手法，借古代權威替當代暴力鍍金。老城被拿去當祖宗背書，凱薩堡被迫上場，當政治道具。",
    "Domenig 的斜向玻璃鋼構，就是在反擊這套軸線邏輯，它本身是一條反軸線。納粹用長直軸線建立秩序與神話，Domenig 用斜切把那個秩序打斷。納粹要人順著隊伍走進共同體的幻覺，Domenig 要人偏離、觀看、懷疑、回頭去讀建築。它和凱薩堡軸線最深的關係就在這裡，一個製造歷史的連續性，一個切斷歷史的神話。",
    "要看懂這個案子，抓三個核心變量。",
    "第一，權力如何使用軸線。Große Straße 對準凱薩堡，用幾何製造歷史合法性。",
    "第二，記憶建築如何反制權力。Domenig 用斜線、穿刺、透明與暴露來批判，把權力建築變成被審問的對象。雕像與裝飾在他的方案裡完全缺席。",
    "第三，兩種空間邏輯的對決。納粹要連續，要把第三帝國接上千年帝國的血脈，Domenig 要中斷，在這條血脈上劃一刀。凱薩堡軸線是納粹把自己接上帝國神話的政治直線。Domenig 的斜向玻璃鋼構，是民主社會插進這條神話線的一把解剖刀。"
  ],
  "essay_en": [
    "City, Land and Cultural Narratives XI: Nuremberg Doku-Zentrum: A Historical Dissection at Urban Scale",
    "Nuremberg Doku-Zentrum: A Historical Dissection at Urban Scale",
    "This site is a historical dissection at the scale of the city. The museum is only its shell. It is embedded in the north wing of the unfinished Nazi Kongresshalle, turning a megastructure once intended to produce collective frenzy into a spatial machine for education, warning and democratic reflection.",
    "I. Historical Background",
    "From 1933 to 1938, the Nazis held the Reichsparteitage, the national party rallies, in Nuremberg. Nuremberg was chosen through a symbolic operation. It was a medieval imperial city, carrying memories of imperial assemblies, with the Kaiserburg located there. The Nazis wanted to present themselves as heirs to German history, and Nuremberg offered a ready-made historical garment. The new permanent exhibition also states directly that the Nazis used Nuremberg’s image as a medieval imperial city to serve their own political myth.",
    "The entire Reichsparteitagsgelände was a large political theater. These buildings sought shock, discipline and a sense of community; they were woven into a system of propaganda and displays of power. At its core it was a psychological technique, using scale, axes, lines of people, sound, flags, light and media to dissolve the individual into the collective.",
    "This is crucial for public discourse. Public space can heal people, but it can also hypnotize the masses. Space itself has no morality; the people who use it do.",
    "The Kongresshalle was originally designed by Ludwig Ruff and later taken over by Franz Ruff. Construction began in 1935. It was planned to hold about 60,000 people, with a semicircular hall and twin entrances forming an extremely vast political assembly hall. After the outbreak of the Second World War, it remained unfinished.",
    "After the war, the site was first taken over by the U.S. Army and later by the City of Nuremberg. For a long time the city wavered between demolition, neglect, practical reuse and preservation. Warehouses, exhibitions, racing, music festivals, parking and temporary events all entered the site. After the Bavarian Monument Protection Act placed these buildings under protection, Nuremberg began to move from concealment toward confrontation. In 1984 an early exhibition, Fascination and Terror, appeared inside the Zeppelin Grandstand. In 2001 the Documentation Center officially opened in the north wing of the Kongresshalle, becoming an important case in Germany’s politics of memory.",
    "II. Günther Domenig’s Thinking of Intervention",
    "Austrian architect Günther Domenig won the international competition in 1998. The design had to do two things: place museum functions inside the old building, and make the architecture confront the Nazi mindset directly.",
    "The design goal was not only to place museum functions inside an old building, but also to form a meaningful confrontation with Nazi architecture and the mentality behind it.",
    "Domenig’s core action was to cut. He ran an approximately 130-meter glass-and-steel diagonal passage through the north wing of the Kongresshalle. Officially called the glass Stake, it is a wedge driven into the building, permanently damaging the forced right angles, symmetry and axial order of Nazi architecture.",
    "The design is severe, and precise. Nazi architecture pursued frontality, axiality, monumentality and an unquestionable order. Domenig answered with diagonals, transparency, cantilevering, cutting and exposed structure. He rejected two easy paths: one would dress the old building in historical style, the other would swallow it whole with a new building. He left the thick walls, voids, unfinished mass and darkness on site, so that people encounter them directly as they pass through. The building itself becomes the exhibit.",
    "Domenig’s design can be understood as an anti-monument. Statues are absent. Black boxes are absent. It uses spatial conflict to force judgment. When people enter, their bodies are pulled by two forces: on one side, Nazi gigantism, heaviness, verticality and command; on the other, the democratic era’s incision, transparency, doubt and viewing. This is sophisticated memory architecture. It does not draw conclusions for people, but it does not allow anyone to fall asleep.",
    "III. Its Axial Relationship with the Kaiserburg",
    "This is the most crucial urban-design question of the entire site. Große Straße, the great road, was the central axis planned by Albert Speer for the Reichsparteitagsgelände. It was 60 meters wide, originally planned to be 2 kilometers long, and about 1.5 kilometers were completed between 1935 and 1939, paved with 60,000 granite slabs. The key is that Speer aligned this axis with the Kaiserburg in the old city. A single road stitched together Nuremberg as a city of medieval imperial assemblies and Nuremberg as a city of Nazi party rallies.",
    "The function of this axis goes far beyond vision; it is an axis of historical appropriation. Through urban geometry, the Nazis connected themselves to the Holy Roman Empire, imperial assemblies and the imagination of German glory. It was meant to tell the masses that the Third Reich was the continuation of an ancient empire. This is an old technique of political propaganda: borrowing ancient authority to gild contemporary violence. The old city was made to endorse them as an ancestor, and the Kaiserburg was forced onto the stage as a political prop.",
    "Domenig’s diagonal glass-and-steel structure directly counterattacks this axial logic. It is itself a counter-axis. The Nazis used a long straight axis to establish order and myth; Domenig used a diagonal cut to break that order. The Nazis wanted people to follow the line of the procession into the illusion of community. Domenig wanted people to deviate, look, doubt and turn back to read the architecture. Its deepest relationship with the Kaiserburg axis lies here: one produces historical continuity, the other cuts off historical myth.",
    "To understand this case, grasp three core variables.",
    "First, how power uses axes. Große Straße points to the Kaiserburg, using geometry to manufacture historical legitimacy.",
    "Second, how memory architecture counters power. Domenig uses diagonals, piercing, transparency and exposure as critique, turning the architecture of power into an object under interrogation. Statues and decoration are completely absent from his proposal.",
    "Third, the confrontation between two spatial logics. The Nazis wanted continuity, to connect the Third Reich to the bloodline of a thousand-year empire. Domenig wanted interruption, to cut into that bloodline. The Kaiserburg axis was the political straight line through which the Nazis connected themselves to imperial myth. Domenig’s diagonal glass-and-steel structure is the scalpel that a democratic society inserts into that mythical line."
  ],
  "essay_de": [
    "Stadt, Land und kulturelle Erzählungen XI: Nürnberg Doku-Zentrum: Eine historische Zerlegung im Maßstab der Stadt",
    "Nürnberg Doku-Zentrum: Eine historische Zerlegung im Maßstab der Stadt",
    "Dieser Ort ist eine historische Zerlegung im Maßstab der Stadt. Das Museum ist nur seine Hülle. Es ist in den Nordflügel der unvollendeten nationalsozialistischen Kongresshalle eingebettet und verwandelt eine Großstruktur, die einst kollektiven Rausch erzeugen sollte, in eine Raummaschine für Bildung, Warnung und demokratische Reflexion.",
    "I. Historischer Hintergrund",
    "Von 1933 bis 1938 veranstalteten die Nationalsozialisten in Nürnberg die Reichsparteitage. Dass Nürnberg gewählt wurde, beruhte auf einer symbolischen Operation. Es war eine mittelalterliche Reichsstadt mit der Erinnerung an Reichstage, und die Kaiserburg befindet sich dort. Die Nationalsozialisten wollten sich als Erben deutscher Geschichte darstellen; Nürnberg bot dafür ein fertiges historisches Gewand. Auch die neue Dauerausstellung weist direkt darauf hin, dass die Nationalsozialisten Nürnbergs Bild als mittelalterliche Reichsstadt für ihren politischen Mythos nutzten.",
    "Das gesamte Reichsparteitagsgelände war ein großes politisches Theater. Diese Bauten zielten auf Einschüchterung, Disziplinierung und Gemeinschaftsgefühl; sie wurden in ein System von Propaganda und Machtdemonstration eingebunden. In seinem Wesen war es eine psychologische Technik, die mit Maßstab, Achsen, Aufmärschen, Klang, Fahnen, Licht und Medien das Individuum im Kollektiv auflösen sollte.",
    "Dieser Punkt ist für den öffentlichen Diskurs entscheidend. Öffentlicher Raum kann Menschen heilen, aber er kann Massen auch hypnotisieren. Raum selbst hat keine Moral; die Menschen, die ihn benutzen, haben sie.",
    "Die Kongresshalle wurde ursprünglich von Ludwig Ruff entworfen und später von Franz Ruff weitergeführt. Der Bau begann 1935. Geplant war eine Kapazität von etwa 60.000 Menschen, mit einer halbrunden Halle und zwei Eingängen, die eine extrem große politische Versammlungshalle bilden sollten. Nach Ausbruch des Zweiten Weltkriegs blieb sie unvollendet.",
    "Nach dem Krieg wurde das Gelände zunächst von der US-Armee übernommen und später von der Stadt Nürnberg. Lange schwankte die Stadt zwischen Abriss, Ignorieren, praktischer Nutzung und Erhaltung. Lager, Ausstellungen, Rennen, Musikfestivals, Parken und temporäre Veranstaltungen fanden dort statt. Durch das Bayerische Denkmalschutzgesetz wurden diese Bauten unter Schutz gestellt, und Nürnberg begann, sich vom Verbergen zum Konfrontieren zu bewegen. 1984 entstand in der Zeppelintribüne die frühe Ausstellung Faszination und Gewalt. 2001 eröffnete das Dokumentationszentrum im Nordflügel der Kongresshalle offiziell und wurde zu einem wichtigen Beispiel deutscher Erinnerungspolitik.",
    "II. Günther Domenigs Denken des Eingriffs",
    "Der österreichische Architekt Günther Domenig gewann 1998 den internationalen Wettbewerb. Der Entwurf musste zwei Dinge leisten: Museumsfunktionen in den Altbau einfügen und die Architektur frontal mit der nationalsozialistischen Haltung konfrontieren.",
    "Das Ziel des Entwurfs war nicht nur, Museumsfunktionen in ein altes Gebäude einzusetzen, sondern auch eine bedeutungsvolle Konfrontation mit nationalsozialistischer Architektur und der dahinterliegenden Mentalität herzustellen.",
    "Domenigs zentrale Handlung ist der Schnitt. Er führt einen etwa 130 Meter langen diagonalen Glas-Stahl-Gang durch den Nordflügel der Kongresshalle. Offiziell wird er glass Stake genannt: ein Keil, der in das Gebäude getrieben wird und die erzwungenen rechten Winkel, die Symmetrie und die Achsenordnung der nationalsozialistischen Architektur dauerhaft beschädigt.",
    "Dieser Entwurf ist hart und zugleich präzise. Nationalsozialistische Architektur strebte Frontalität, Axialität, Monumentalität und eine nicht hinterfragbare Ordnung an. Domenig antwortet mit Diagonalen, Transparenz, Auskragung, Aufschneiden und freigelegter Struktur. Er verweigert zwei einfache Wege: dem Altbau ein historisierendes Gewand überzuwerfen oder ihn durch einen Neubau vollständig zu verschlingen. Er lässt dicke Mauern, Hohlräume, unvollendete Masse und Dunkelheit vor Ort, sodass Menschen ihnen beim Durchgehen direkt begegnen. Das Gebäude selbst wird zum Exponat.",
    "Domenigs Entwurf lässt sich als Anti-Monument verstehen. Statuen fehlen. Schwarze Kästen fehlen. Er zwingt durch räumlichen Konflikt Urteilskraft hervor. Wer hineingeht, dessen Körper wird von zwei Kräften zerrissen: auf der einen Seite die Größe, Schwere, Vertikalität und der Befehl des Nationalsozialismus; auf der anderen Seite der Einschnitt, die Transparenz, der Zweifel und das Sehen der demokratischen Zeit. Das ist eine anspruchsvolle Erinnerungsarchitektur. Sie zieht keine Schlussfolgerungen für die Menschen, aber sie erlaubt niemandem einzuschlafen.",
    "III. Die Achsenbeziehung zur Kaiserburg",
    "Dies ist die entscheidendste städtebauliche Frage des gesamten Ortes. Die Große Straße war die von Albert Speer für das Reichsparteitagsgelände geplante Zentralachse. Sie ist 60 Meter breit, ursprünglich auf 2 Kilometer Länge angelegt, und zwischen 1935 und 1939 wurden etwa 1,5 Kilometer mit 60.000 Granitplatten fertiggestellt. Entscheidend ist, dass Speer diese Achse auf die Kaiserburg in der Altstadt ausrichtete. Eine Straße nähte Nürnberg als Stadt der mittelalterlichen Reichstage und Nürnberg als Stadt der nationalsozialistischen Parteitage zusammen.",
    "Die Wirkung dieser Achse geht weit über das Visuelle hinaus; sie ist eine Achse historischer Aneignung. Mit städtischer Geometrie verbanden die Nationalsozialisten sich mit dem Heiligen Römischen Reich, den Reichstagen und der Vorstellung deutscher Größe. Eine Straße sollte den Massen sagen, dass das Dritte Reich die Fortsetzung eines alten Reiches sei. Das ist eine alte Technik politischer Propaganda: antike Autorität zu leihen, um gegenwärtige Gewalt zu vergolden. Die Altstadt wurde als Ahnenbeglaubigung benutzt, die Kaiserburg musste als politisches Requisit auftreten.",
    "Domenigs diagonale Glas-Stahl-Konstruktion greift diese Achsenlogik direkt an. Sie ist selbst eine Gegenachse. Die Nationalsozialisten benutzten eine lange gerade Achse, um Ordnung und Mythos herzustellen; Domenig benutzt einen diagonalen Schnitt, um diese Ordnung zu brechen. Die Nationalsozialisten wollten, dass Menschen der Reihe folgen und in die Illusion der Gemeinschaft eintreten. Domenig will, dass Menschen abweichen, schauen, zweifeln und zurückkehren, um die Architektur zu lesen. Die tiefste Beziehung zur Kaiserburg-Achse liegt genau hier: Die eine erzeugt historische Kontinuität, die andere schneidet den historischen Mythos ab.",
    "Um dieses Projekt zu verstehen, muss man drei zentrale Variablen erfassen.",
    "Erstens: wie Macht Achsen benutzt. Die Große Straße richtet sich auf die Kaiserburg und stellt mit Geometrie historische Legitimität her.",
    "Zweitens: wie Erinnerungsarchitektur Macht kontert. Domenig benutzt Diagonale, Durchstoßung, Transparenz und Freilegung als Kritik und macht die Architektur der Macht selbst zum Gegenstand der Befragung. Statuen und Dekoration fehlen in seinem Entwurf vollständig.",
    "Drittens: der Zusammenstoß zweier räumlicher Logiken. Die Nationalsozialisten wollten Kontinuität, sie wollten das Dritte Reich an die Blutlinie eines tausendjährigen Reiches anschließen. Domenig wollte Unterbrechung, einen Schnitt in diese Blutlinie. Die Kaiserburg-Achse ist die politische Gerade, mit der die Nationalsozialisten sich an den Reichsmythos anschlossen. Domenigs diagonale Glas-Stahl-Konstruktion ist das Skalpell, das eine demokratische Gesellschaft in diese mythische Linie einführt."
  ],
  "href": "https://genius912.blogspot.com/2026/06/doku-zentrum.html"
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
  const RAUM_DOKU_ZENTRUM_WRITING = ${JSON.stringify(article, null, 2)};
  const existingIndex = WRITINGS.findIndex((writing) => (
    writing.id === RAUM_DOKU_ZENTRUM_WRITING.id ||
    writing.href === RAUM_DOKU_ZENTRUM_WRITING.href ||
    writing.title_zh === RAUM_DOKU_ZENTRUM_WRITING.title_zh
  ));
  if (existingIndex >= 0) {
    WRITINGS.splice(existingIndex, 1);
  }
  WRITINGS.unshift(RAUM_DOKU_ZENTRUM_WRITING);
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
console.log('Synced Doku-Zentrum writing article.');
