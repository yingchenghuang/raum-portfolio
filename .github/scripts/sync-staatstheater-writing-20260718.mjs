import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_STAATSTHEATER_WRITING_20260718_START */';
const end = '/* RAUM_STAATSTHEATER_WRITING_20260718_END */';

const article = {
  "id": "w-staatstheater-nuernberg-20260718",
  "year": "2026",
  "month": "07",
  "title_zh": "城市・土地・文化敘事（十五） 紐倫堡國家劇院：場域記憶與時間並置",
  "title_en": "City, Land and Cultural Narratives XV: Staatstheater Nürnberg: Site Memory and the Juxtaposition of Time",
  "title_de": "Stadt, Land und kulturelle Erzählungen XV: Staatstheater Nürnberg: Ortserinnerung und die Überlagerung der Zeit",
  "note_zh": "記憶是否可考據，有時候是跳躍，有時候是混雜。紐倫堡歌劇院在記憶的節點上，是重要的一本帳。",
  "note_en": "Memory is sometimes discontinuous and sometimes mixed. In the nodes of memory, the Nuremberg Opera House remains an important ledger.",
  "note_de": "Erinnerung ist manchmal sprunghaft und manchmal vermischt. In den Knotenpunkten der Erinnerung bleibt das Nürnberger Opernhaus ein wichtiges Konto.",
  "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsNzfkd4PHsMb8W1LBxHYLDFbyGQlr_r4FreTjV7-opGplinM2dXINjQlShERN9SVJk8UA5RPvruz32GbSBIn4SKdbeYYj4j6bTtdq7Urur0RtIzkJN7Q-JTmm3-mHwZo5VMoOWe9Yokf3wS5Q-GKucgvBEffzAh7AMsk9x1MvHL-ZGc7aqM9FfcYcm1k/w640-h480/DSC08924.JPG",
  "images": [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsNzfkd4PHsMb8W1LBxHYLDFbyGQlr_r4FreTjV7-opGplinM2dXINjQlShERN9SVJk8UA5RPvruz32GbSBIn4SKdbeYYj4j6bTtdq7Urur0RtIzkJN7Q-JTmm3-mHwZo5VMoOWe9Yokf3wS5Q-GKucgvBEffzAh7AMsk9x1MvHL-ZGc7aqM9FfcYcm1k/w640-h480/DSC08924.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjUIKooeMcXyLJpr6vBhH4te3Dj9OI3XPImQnY1U_mjcPD8skyE7wqWPlHzp-UQZXBNmtv7ja2hg_P9CDhIHWgOfWJ3n5LESHmAqmNLFplz2gxYovEY5aSFt2lJF6A5G-EZSiBh_O1MMnYdbQW8Lh0HkGULBaHsGjiqC-Zl77fMx6MB8UfDLwzqgzUN0k/w640-h480/DSC08927.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyj7SIiL5vyZXYB20MfT2qPA6UwHW9kDqwOOUPZkkin5slCFrqKkIcOYCp-R98IeHhUaEX_jYgfsUCDbn8zqvsscBcZYMQd2HNOycb8NygkxfhTy72DFOmwGvmsxsv1WtuCO6zaBI8msxdoDqM4Z1fmFc4uut4gXcni_2wTDzTz5pbZUiZO3CBOrUdMXY/w640-h480/11.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmgAO6fG-t7p_ByZO6M95skXIVielNp70a24R8wWOdW4WIEVIw-HRgQE7ypEu2jGe2VFKs34m42bZ-SeOsSEahYEpQj8yTjYGPjZOY1KC0N1IFtM0IIzBMhgGxYtAM_GceILNvGemQBYGCSEakLSUMeqi9uPrHyIW47-_VrFxvXEXJYDnR8FT_obbDAwg/w426-h640/13.jpg"
  ],
  "image_alt_zh": "紐倫堡國家劇院原部落格圖片",
  "image_alt_en": "Original blog image of Staatstheater Nürnberg",
  "image_alt_de": "Originales Blogbild des Staatstheaters Nürnberg",
  "essay_zh": [
    "紐倫堡國家劇院：場域記憶與時間並置",
    "記憶是否可考據，有時候是跳躍，有時候是混雜。紐倫堡歌劇院從來都算不上我常去的場域，但在記憶的節點上，它是重要的一本帳。有些地方你去過很多次卻記不得什麼，有些地方只去過幾次，卻在多年後仍然能召喚出身體的感覺。歌劇院屬於後者。而我後來才明白，那些感覺並非偶然，它們都有歷史的來歷。",
    "一、魔笛之夜，坐進一座階級的剖面",
    "Staatstheater Nürnberg紐倫堡國家劇院我在那裡看過一場現代版的《魔笛》。什麼時候去的、為什麼想去、和誰去的，這些細節如今都模糊了，留下來的反而是身體的記憶：難得盛裝出席，坐在觀眾席裡，聽著德語演唱的歌劇。德語本身就已經夠複雜了，唱成歌劇更是一種折磨。如果沒有舞台旁的字幕輔助，我大概真的不知道演到哪裡。",
    "當時只覺得隆重。從前廳、樓梯到座位，整個動線都在告訴你，這裡的觀看是一件被安排好的事。多年後這份隆重是一九〇五年就寫進建築裡的。那年紐倫堡剛從手工業城市轉型為工業城市，急著用一座歐洲造價最高等級的劇院證明自己是現代大城。啟用時的觀眾廳有四層樓座，不同階級走不同的入口與樓梯：富裕觀眾踩著地毯進池座，工人階級從分離的出入口上到鋪木地板的高樓層。**劇院透過樓梯、地毯、視線與高度，把城市的階級制度轉化成可以被身體感受到的空間秩序。**我那晚感受到的儀式感，其實是一套百年前的社會編碼，還在對每一個走進來的人生效。",
    "一九三五年，納粹政權要求建築師 Paul Schultze-Naumburg 在半年內徹底改造室內，把原本色彩繁複的新藝術空間換成冷峻的新古典語彙，中央包廂改成「元首包廂」，供希特勒在帝國黨代會期間觀看華格納。改造拆除了具反射作用的拱頂與裝飾，壓低了樂池上方的天花板，聲音的擴散與共鳴從此受損。**極權控制空間時，總是先消除複雜性、差異與感官自由，再以秩序、軸線和權威感取代。**連聲音都是受害者。當我坐在觀眾席裡努力捕捉德語唱詞的那個晚上，某種程度上，也在承受一九三五年留下的後果。",
    "坐在那裡的我，其實同時坐在好幾個時代之上：一九〇五年的市民野心、一九三五年的權力美學、戰後美軍把它當娛樂場所的那幾年、五〇年代交還市政府後的民主重建。一場歌劇的時間裡，疊著一百多年的帳。",
    "二、藍夜提案，在城市的規則邊緣劃線",
    "另一段記憶更靠近工作。有一年，劇場經理找我們班合作，為紐倫堡的藍夜藝術節（Die Blaue Nacht）提案。我把裝置的界線一開始設在劇場旁邊的道路上，緊鄰音樂學院。劇場方面似乎很喜歡這個構想，但因為涉及交通法規，還是諮詢了市政府。答案很現實：基於消防通道的安全，道路無法完全封閉來設置藝術裝置。最後協調的結果，是由政府方去展示。",
    "讀了這個場域的歷史，才發現我劃線的那條路，本身就是城市權力反覆書寫過的地方。歌劇院所在的環城道路，是舊城防禦工事拆除後留下的邊界，建築被刻意安放在歷史城市與現代擴張之間，充當新舊之城的文化門面。市政府當年甚至要求建築師 Heinrich Seeling 這位熟悉舞台技術與消防規範的現代專家，替劇院穿上十六世紀「老紐倫堡」的砂岩外衣，以歷史的外表包裹現代的機器。而到了一九三〇年代，劇院前的這條路更被納入納粹領袖抵達、遊行與觀劇的展示路線，華麗立面成了「帝國黨代會之城」的影像背景。",
    "所以當市政府以消防通道為由婉拒封路時，我碰到的其實是同一件事的當代版本：**這條路從來都在承載慶典、交通、安全與權力的多重規則，藝術只是暫時借道。**你以為你在設計一件作品，實際上你在測試一座城市允許什麼發生。差別在於，百年前是政權決定這條路展示什麼，如今是法規、行政與協商決定。這個轉變本身，就是德國戰後民主最具體的空間形式。",
    "這件事是一個機緣。回頭看，都像是冥冥中有所安排。它把公共空間的協商邏輯留在了我做公共藝術的身體裡，多年後我在台灣面對競圖、法規與行政體系時，仍是憶起那條消防通事件的過程教會我許多事。",
    "三、記憶的帳本",
    "我常想，為什麼一座只去過幾次的建築，會在記憶裡佔據這麼重的份量。答案也許是：它是少數讓我同時以觀眾與創作者兩種身份進入的場域。看魔笛時，我被建築的秩序安放，坐進一套百年的階級編碼與納粹改寫過的聲學裡；做藍夜提案時，我試著在建築的邊緣重新劃線，撞上了這座城市層層疊疊的規則。一次是被空間塑造，一次是嘗試塑造空間。",
    "以空間藝術家的角度看，紐倫堡國家劇院是一座時間並置型建築。帝國時代的野心、極權的改造、佔領與重建、當代的文化再生，同時存在於同一場域，而且每一層都還在對身體生效。真正高明的整建策略，應該讓這些衝突可以被看見、被行走、被討論，而非用一次漂亮的翻修把歷史磨平。",
    "記憶也一樣，如今都成了帳本上的條目。它們未必可考據，但正因為歷史穿過了它們，一座他鄉的歌劇院最後成為我自己的場域。"
  ],
  "essay_en": [
    "Staatstheater Nürnberg: Site Memory and the Juxtaposition of Time",
    "Whether memory can be verified is another question. Sometimes it jumps; sometimes it is mixed. The Nuremberg Opera House was never a place I visited often, but within the nodes of memory it remains an important ledger. Some places you visit many times and remember almost nothing. Some places you visit only a few times, yet years later they can still summon the feeling of the body. The opera house belongs to the latter. Only later did I understand that those feelings were not accidental. They all had historical origins.",
    "I. A Night of The Magic Flute: Sitting Inside a Section of Class",
    "At Staatstheater Nürnberg, the Nuremberg State Theatre, I once watched a modern version of The Magic Flute. When I went, why I wanted to go, and who I went with have all become blurred. What remains instead is bodily memory: dressing formally for once, sitting in the auditorium, listening to opera sung in German. German itself was already complicated enough; sung as opera, it became a kind of torment. Without subtitles beside the stage, I probably would not have known where the story was.",
    "At the time, I only felt that it was solemn. From the foyer and staircases to the seats, the entire circulation told you that viewing here was something carefully arranged. Years later I understood that this solemnity had already been written into the building in 1905. That year Nuremberg had just transformed from a craft city into an industrial city, eager to prove itself a modern metropolis through one of Europe’s most expensive theatres. When it opened, the auditorium had four tiers of seating, and different classes used different entrances and staircases: wealthy spectators walked on carpet into the stalls, while workers entered through separate doors and climbed to upper levels with wooden floors. **Through staircases, carpets, sightlines and height, the theatre transformed the city’s class system into a spatial order that could be felt by the body.** The sense of ceremony I felt that night was in fact a century-old social code still acting on everyone who entered.",
    "In 1935, the Nazi regime ordered architect Paul Schultze-Naumburg to completely remodel the interior within half a year, replacing the richly colored Art Nouveau space with a cold neoclassical vocabulary. The central box was converted into the Führer’s box for Hitler to watch Wagner during the Reich Party Rally. The renovation removed reflective vaults and ornamentation and lowered the ceiling above the orchestra pit, damaging the diffusion and resonance of sound from then on. **When totalitarian power controls space, it always first eliminates complexity, difference and sensory freedom, then replaces them with order, axis and authority.** Even sound became a victim. When I sat in the auditorium that night, trying hard to catch the German lyrics, I was, in a certain sense, also bearing the consequences left by 1935.",
    "Sitting there, I was in fact sitting on several eras at once: the civic ambition of 1905, the aesthetics of power in 1935, the years when the American army used it as an entertainment venue after the war, and the democratic reconstruction after it was returned to the city government in the 1950s. Within the duration of one opera lay more than a hundred years of accounts.",
    "II. The Blue Night Proposal: Drawing a Line at the Edge of Urban Rules",
    "Another memory is closer to work. One year, the theatre manager invited our class to collaborate on a proposal for Nuremberg’s Blue Night art festival, Die Blaue Nacht. I initially placed the boundary of the installation on the road beside the theatre, next to the music academy. The theatre side seemed to like the idea, but because traffic regulations were involved, they still consulted the city government. The answer was practical: for fire-lane safety, the road could not be fully closed for an art installation. The final coordinated result was that the government side would present it.",
    "After reading the history of this site, I realized that the road where I had drawn that line was itself a place repeatedly written by urban power. The ring road where the opera house stands was the boundary left after the old city fortifications were demolished. The building was deliberately positioned between the historic city and modern expansion, acting as the cultural facade between old and new Nuremberg. The city government even required architect Heinrich Seeling, a modern expert familiar with stage technology and fire regulations, to dress the theatre in the sandstone exterior of sixteenth-century “old Nuremberg,” wrapping a modern machine in a historical appearance. By the 1930s, the road in front of the theatre had also been incorporated into the display route for Nazi leaders’ arrivals, parades and theatre visits. The ornate facade became an image backdrop for the “City of the Reich Party Rallies.”",
    "So when the city government declined to close the road on the grounds of fire-lane access, what I encountered was actually a contemporary version of the same thing: **this road has always carried multiple rules of festival, traffic, safety and power; art only borrows the route temporarily.** You think you are designing a work, but in fact you are testing what a city allows to happen. The difference is that a century ago a regime decided what this road would display; today, regulations, administration and negotiation decide. This transformation itself is the most concrete spatial form of German postwar democracy.",
    "This incident was a kind of occasion. Looking back, it feels as if something had been arranged by fate. It left the logic of public-space negotiation inside the body with which I make public art. Years later, when facing competitions, regulations and administrative systems in Taiwan, I still remember that fire-lane incident and how much the process taught me.",
    "III. The Ledger of Memory",
    "I often wonder why a building I visited only a few times occupies such weight in memory. Perhaps the answer is that it is one of the few places I entered both as an audience member and as a creator. When I watched The Magic Flute, I was placed by the order of the building, sitting inside a century-old class code and acoustics rewritten by the Nazis. When I made the Blue Night proposal, I tried to redraw a line at the edge of the building and collided with the layers of rules accumulated by the city. Once I was shaped by space; once I tried to shape space.",
    "From the perspective of a spatial artist, Staatstheater Nürnberg is a building of temporal juxtaposition. The ambitions of the imperial era, totalitarian reconstruction, occupation and rebuilding, and contemporary cultural renewal all exist in the same site, and every layer is still acting on the body. A truly skillful renovation strategy should allow these conflicts to be seen, walked through and discussed, rather than smoothing history flat with one beautiful refurbishment.",
    "Memory is the same. Now it has become entries in a ledger. They may not always be verifiable, but precisely because history has passed through them, an opera house in another country eventually became my own site."
  ],
  "essay_de": [
    "Staatstheater Nürnberg: Ortserinnerung und die Überlagerung der Zeit",
    "Ob Erinnerung belegbar ist, ist eine andere Frage. Manchmal springt sie, manchmal ist sie vermischt. Das Nürnberger Opernhaus war nie ein Ort, den ich häufig besuchte, doch an den Knotenpunkten der Erinnerung ist es ein wichtiges Konto. Manche Orte besucht man oft und erinnert sich kaum an etwas. Andere besucht man nur wenige Male, und doch können sie Jahre später noch ein körperliches Gefühl hervorrufen. Das Opernhaus gehört zur zweiten Art. Erst später verstand ich, dass diese Gefühle nicht zufällig waren. Sie hatten alle historische Herkunft.",
    "I. Eine Nacht mit der Zauberflöte: In einem Querschnitt der Klassen sitzen",
    "Im Staatstheater Nürnberg sah ich einmal eine moderne Fassung der Zauberflöte. Wann ich dort war, warum ich hingehen wollte und mit wem ich dort war, ist heute verschwommen. Geblieben ist vielmehr die Erinnerung des Körpers: sich ausnahmsweise festlich zu kleiden, im Zuschauerraum zu sitzen und einer auf Deutsch gesungenen Oper zuzuhören. Deutsch war an sich schon kompliziert genug; als Oper gesungen wurde es zu einer Art Qual. Ohne Übertitel neben der Bühne hätte ich vermutlich kaum gewusst, an welcher Stelle die Handlung war.",
    "Damals empfand ich es einfach als feierlich. Vom Foyer über die Treppen bis zu den Sitzen sagte einem die gesamte Bewegung durch das Haus, dass Sehen hier eine arrangierte Handlung war. Jahre später verstand ich, dass diese Feierlichkeit bereits 1905 in die Architektur eingeschrieben wurde. In jenem Jahr hatte sich Nürnberg gerade von einer Handwerkerstadt zu einer Industriestadt gewandelt und wollte mit einem der teuersten Theater Europas beweisen, eine moderne Großstadt zu sein. Bei der Eröffnung hatte der Zuschauerraum vier Ränge, und unterschiedliche Klassen benutzten unterschiedliche Eingänge und Treppen: Wohlhabende Zuschauer gingen über Teppiche ins Parkett, während Arbeiter durch getrennte Eingänge zu den oberen Rängen mit Holzböden gelangten. **Durch Treppen, Teppiche, Blickachsen und Höhe verwandelte das Theater die Klassenordnung der Stadt in eine räumliche Ordnung, die der Körper spüren konnte.** Das Zeremonielle, das ich an jenem Abend empfand, war eigentlich ein über hundert Jahre alter sozialer Code, der auf jeden, der eintrat, weiterwirkte.",
    "1935 verlangte das NS-Regime vom Architekten Paul Schultze-Naumburg, den Innenraum innerhalb eines halben Jahres vollständig umzugestalten. Der farblich komplexe Jugendstilraum wurde durch eine kühle neoklassizistische Sprache ersetzt. Die Mittelloge wurde zur Führerloge umgebaut, damit Hitler während der Reichsparteitage Wagner sehen konnte. Der Umbau entfernte reflektierende Gewölbe und Ornamente und senkte die Decke über dem Orchestergraben ab; seitdem waren Streuung und Resonanz des Klangs beschädigt. **Wenn totalitäre Macht Raum kontrolliert, beseitigt sie immer zuerst Komplexität, Differenz und sinnliche Freiheit und ersetzt sie dann durch Ordnung, Achse und Autorität.** Selbst der Klang wurde zum Opfer. Als ich an jenem Abend im Zuschauerraum saß und versuchte, die deutschen Gesangstexte zu erfassen, trug ich in gewissem Sinn auch die Folgen von 1935.",
    "Dort sitzend saß ich eigentlich zugleich auf mehreren Zeiten: auf dem bürgerlichen Ehrgeiz von 1905, auf der Machtästhetik von 1935, auf den Jahren nach dem Krieg, in denen die amerikanische Armee das Haus als Unterhaltungsstätte nutzte, und auf dem demokratischen Wiederaufbau nach der Rückgabe an die Stadt in den fünfziger Jahren. In der Zeit einer einzigen Oper lagen mehr als hundert Jahre Rechnungen übereinander.",
    "II. Der Blaue-Nacht-Vorschlag: Eine Linie am Rand städtischer Regeln ziehen",
    "Eine andere Erinnerung liegt näher an der Arbeit. In einem Jahr bat der Theatermanager unsere Klasse um eine Zusammenarbeit für die Blaue Nacht in Nürnberg. Die Grenze meiner Installation setzte ich zunächst auf die Straße neben dem Theater, direkt bei der Musikhochschule. Das Theater schien die Idee zu mögen, konsultierte wegen der Verkehrsregeln aber trotzdem die Stadtverwaltung. Die Antwort war nüchtern: Aus Gründen der Sicherheit des Feuerwehrwegs konnte die Straße nicht vollständig für eine Kunstinstallation gesperrt werden. Am Ende der Abstimmung wurde die Präsentation von der städtischen Seite übernommen.",
    "Als ich die Geschichte dieses Ortes las, merkte ich, dass die Straße, auf der ich diese Linie zog, selbst ein Ort war, den städtische Macht immer wieder beschrieben hatte. Die Ringstraße, an der das Opernhaus steht, ist die Grenze, die nach dem Abbruch der alten Stadtbefestigung blieb. Das Gebäude wurde bewusst zwischen historischer Stadt und moderner Erweiterung platziert und diente als kulturelle Fassade zwischen altem und neuem Nürnberg. Die Stadt verlangte sogar vom Architekten Heinrich Seeling, einem modernen Experten für Bühnentechnik und Brandschutz, das Theater mit einer Sandsteinhülle des sechzehnten Jahrhunderts, einem Bild des „alten Nürnberg“, zu versehen und damit eine moderne Maschine in ein historisches Äußeres zu kleiden. In den 1930er Jahren wurde die Straße vor dem Theater zudem in die Inszenierungsroute für Ankunft, Aufmärsche und Theaterbesuche nationalsozialistischer Führer einbezogen. Die prachtvolle Fassade wurde zum Bildhintergrund der „Stadt der Reichsparteitage“.",
    "Als die Stadtverwaltung die Straßensperrung mit dem Hinweis auf den Feuerwehrweg ablehnte, traf ich daher eigentlich auf eine gegenwärtige Version derselben Sache: **Diese Straße trägt seit jeher die mehrfachen Regeln von Fest, Verkehr, Sicherheit und Macht; Kunst leiht sich den Weg nur vorübergehend.** Man glaubt, ein Werk zu entwerfen, tatsächlich aber testet man, was eine Stadt geschehen lässt. Der Unterschied ist, dass vor hundert Jahren ein Regime entschied, was diese Straße zeigen sollte; heute entscheiden Regeln, Verwaltung und Aushandlung. Dieser Wandel selbst ist die konkreteste räumliche Form der deutschen Nachkriegsdemokratie.",
    "Diese Sache war eine Gelegenheit. Rückblickend wirkt alles, als sei es irgendwie arrangiert gewesen. Sie ließ die Logik der Aushandlung öffentlichen Raums in dem Körper zurück, mit dem ich öffentliche Kunst mache. Jahre später, wenn ich in Taiwan Wettbewerben, Vorschriften und Verwaltungssystemen begegne, erinnere ich mich noch immer an den Vorgang um diesen Feuerwehrweg und daran, wie viel er mich gelehrt hat.",
    "III. Das Konto der Erinnerung",
    "Ich frage mich oft, warum ein Gebäude, das ich nur wenige Male besucht habe, in der Erinnerung ein solches Gewicht besitzt. Vielleicht lautet die Antwort: Es ist einer der wenigen Orte, die ich zugleich als Zuschauer und als Schaffender betreten habe. Beim Besuch der Zauberflöte wurde ich von der Ordnung der Architektur platziert und saß in einem hundert Jahre alten Klassencode und in einer von den Nationalsozialisten umgeschriebenen Akustik. Beim Entwurf für die Blaue Nacht versuchte ich, am Rand des Gebäudes eine Linie neu zu ziehen, und stieß auf die vielschichtigen Regeln dieser Stadt. Einmal wurde ich vom Raum geformt, einmal versuchte ich, Raum zu formen.",
    "Aus der Perspektive eines Raumkünstlers ist das Staatstheater Nürnberg ein Gebäude der zeitlichen Überlagerung. Der Ehrgeiz der Kaiserzeit, der totalitäre Umbau, Besatzung und Wiederaufbau sowie die heutige kulturelle Erneuerung existieren zugleich an demselben Ort, und jede Schicht wirkt noch immer auf den Körper. Eine wirklich kluge Sanierungsstrategie sollte diese Konflikte sichtbar, begehbar und diskutierbar machen, statt Geschichte durch eine schöne Renovierung glattzuschleifen.",
    "Mit Erinnerung ist es ebenso. Heute sind sie zu Einträgen in einem Konto geworden. Sie sind nicht immer belegbar, aber gerade weil Geschichte durch sie hindurchgegangen ist, wurde ein Opernhaus in der Fremde schließlich zu meinem eigenen Ort."
  ],
  "href": "https://genius912.blogspot.com/2026/07/blog-post_18.html"
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
  const RAUM_STAATSTHEATER_WRITING = ${JSON.stringify(article, null, 2)};
  const existingIndex = WRITINGS.findIndex((writing) => (
    writing.id === RAUM_STAATSTHEATER_WRITING.id ||
    writing.href === RAUM_STAATSTHEATER_WRITING.href ||
    writing.title_zh === RAUM_STAATSTHEATER_WRITING.title_zh
  ));
  if (existingIndex >= 0) {
    WRITINGS.splice(existingIndex, 1);
  }
  WRITINGS.unshift(RAUM_STAATSTHEATER_WRITING);
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
console.log('Synced Staatstheater writing article.');
