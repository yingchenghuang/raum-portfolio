import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_DRESDEN_WRITING_20260802_START */';
const end = '/* RAUM_DRESDEN_WRITING_20260802_END */';

const article = {
  id: 'w-dresden-20260802',
  year: '2026',
  month: '08',
  title_zh: '城市・土地・文化敘事（十七） 第一站　Dresden：一座城市與我的心靈重建',
  title_en: 'City, Land and Cultural Narratives XVII: First Stop, Dresden: A City and the Reconstruction of My Inner Life',
  title_de: 'Stadt, Land und kulturelle Erzählungen XVII: Erste Station Dresden: Eine Stadt und der Wiederaufbau meines Inneren',
  note_zh: '遺憾可以重建，抵達一座還在施工的城市。Dresden 沒有成為我的歸宿，卻成為生命裡的一座精神地基。',
  note_en: 'Regret can be rebuilt: arriving in a city still under construction. Dresden did not become my home, but it became a spiritual foundation in my life.',
  note_de: 'Bedauern kann wiederaufgebaut werden: Ankunft in einer Stadt, die noch gebaut wurde. Dresden wurde nicht meine Heimat, aber ein geistiges Fundament meines Lebens.',
  image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPFMjSzYt0BFt9MXvGh8bmnZsdgOQqJ8PLtsmKatFJOfyDYQ4SQ5RicR3WcZMy7ZL4zpStqwou_DItFbO1iSas6Pa5-UykWcw7jU2sp2OysEcKzJWrB1X6tbPji3RMTYloQPI55v-tI4A455wEeqY8zqBcjLRJpIRcCuTIjODC-GN5ufAAEABhHZurQXA/s3648/R0076467.JPG',
  images: [
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPFMjSzYt0BFt9MXvGh8bmnZsdgOQqJ8PLtsmKatFJOfyDYQ4SQ5RicR3WcZMy7ZL4zpStqwou_DItFbO1iSas6Pa5-UykWcw7jU2sp2OysEcKzJWrB1X6tbPji3RMTYloQPI55v-tI4A455wEeqY8zqBcjLRJpIRcCuTIjODC-GN5ufAAEABhHZurQXA/s3648/R0076467.JPG',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-W7r0mPRK1-lUN0tJoinmQpnxLosEq2flVe8lTTvDi_BXrRhVonHYZ9n6a5ue5bmjolb-MXy5wvY8Dp-vpTriOslawbvHn2f6XxNFGmCxZSW21sjI6g4Qtzhl9bx4lRryt7hHQk9Pw-U0Acj6dga5pD_FcJkPvMqn1xbE3MHKTM_4X5Bnq8PjoemkenY/s3648/R0066297.JPG',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-ydTAgTt_sBmC4opySsqWtPP3uz3S6gnk6je6IMA3RARz3oBK6wJVq6hMfPl0qaKCQQewRU7Crmx0ugZY74ixOwu5gbB0uAcVJzZcKJasjbHdA5RmRYioojY7NokeYPSNpiQPzdA702MO2-0yE5qe2Rn23ZWyN7lB6c910AIFdcQA0Lw-t5wFZqRY19E/s3648/R0025677.JPG',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieSRyPlL-b3PmbE32eHd2hRRX10sdzF7Vh-NYABR6Bwpy-dUCT3VCFkp6sgYVjfVE0J-OtY3d73kb7LJnSwC_1y-eYcFI1_cqLHLZaG3yff3-u3nGQ8PYALnw1ytzjLerOZ2pu6FmXkbs/s1600/DSC08653-4.jpg'
  ],
  image_alt_zh: 'Dresden 與 Frauenkirche 原部落格圖片',
  image_alt_en: 'Original blog image of Dresden and Frauenkirche',
  image_alt_de: 'Originales Blogbild von Dresden und der Frauenkirche',
  essay_zh: [
    '遺憾可以重建，抵達一座還在施工的城市。',
    '2008年，我抵達 Dresden。',
    '那時 Frauenkirche 重新落成才三年。環繞教堂的 Neumarkt 仍在施工，街廓、立面與廣場正一塊一塊被補回去。那幾年的城市規劃文件寫下，教堂與廣場的重建讓 Dresden 重新回到世界的視線裡。',
    '它是一座還在與自己的歷史談判的城市。廣場上的每一塊石頭都還在決定自己該站回哪個位置。',
    '我在那裡展開了自己的另一場談判。生命沒有重新選擇的如果。在某個副本人生裡，或許存在一條從 Dresden 繼續延伸的支線。我留下來，學會語言，進入學校，在易北河畔建立生活，把第一站活成終點。',
    '現實中的我走上另一條路。Dresden 是我以為的起點，也差一點成為我想像中的終點。為了抵達那裡，我在踏上那塊土地之前已經準備了很久。準備本身已經改變了我。 它讓我離開原來的生活，抵達一座陌生城市，也讓我第一次在沒有熟悉座標的情況下，判斷自己究竟想成為誰。那些準備沒有因為我最後離開而作廢。',
    '人總要相信自己的直覺。一座城市能不能與自己契合，住上幾天，身體會比理智更早知道。',
    'Dresden 很美。巴洛克建築沿著易北河展開，圓頂、宮殿、石牆與橋梁組成一幅幾乎過於完整的歐洲風景。',
    '我知道這裡很美。我也逐漸察覺，這裡可能不是我應該長期停留的地方。兩個判斷可以同時成立。美不等於歸屬，感動也不保證能夠在此生活。一個地方可以給你深刻的經驗，卻無法提供你真正需要的人生條件。困難的地方在於，當時的我還不知道自己真正需要什麼。',
    '被留下來的廢墟',
    '1945年2月13日，Dresden 遭遇轟炸。Frauenkirche 撐過最初的轟炸與大火，兩天後因高溫造成的結構損害倒塌。1966年，教堂廢墟被正式指定為戰爭受難者的紀念地。1980年代，它成為東德民間和平運動聚集與點燭的場所。那堆瓦礫在城市中央留了將近半個世紀。',
    'Dresden 沒有立刻把傷口蓋起來。它先讓廢墟存在，讓石頭承受時間，讓幾個世代的人經過、凝視、爭論，把各自的政治立場投射上去。1989年，民間重建倡議成形。1990年2月13日，市民發表〈來自 Dresden 的呼籲〉，向全世界募集資源。1993年，人們開始清理、辨識、編號與保存瓦礫。1994年，第一塊重建基石安放。2005年10月30日，Frauenkirche 重新祝聖開放。',
    '重建的第一步是辨認。',
    '辨認哪些東西已經失去，哪些仍然可以使用，哪些碎片雖然燒黑，依然具有承受重量的能力。',
    '今天的 Frauenkirche 約有百分之四十五的結構使用歷史石材，外牆重新安放了 7,110 塊舊石。新的砂岩是明亮的米黃色，經歷戰火的石頭帶著深黑。兩種顏色一起留在立面上，建築的歷史因此仍然清晰可讀。',
    '它沒有把傷痕磨成一致的表面。黑色的石塊被留下來，成為新建築的一部分。多年以後我才明白，這也是記憶可以採取的形式。我們不需要把發生過的一切漂白，也不需要永遠住在廢墟裡。真正的修復，是找出那些仍能承重的碎片，把它們放回生命的結構之中。',
    '似曾相識',
    '剛抵達時，我帶著一張地圖在城市裡探險。那是一種似曾相識的感覺，彷彿我曾經來過。',
    '也許那只是夢境的牽引。也許我想回去的，是一個不屬於現存記憶的遙遠他鄉。人有時會把尚未完成的渴望投射到一座陌生城市，當街道、光線與建築恰好符合內心的想像，我們就誤以為自己找到了命定之地。',
    '城市終究不會替人完成命運。它只能提供空間、事件與偶遇。能不能在那裡活下去，仍然由語言、關係、經濟、身分與心理狀態共同決定。因緣與條件俱足，日常才會慢慢長出美好。條件尚未成熟的時候，即使風景完全符合想像，生活也會持續漂浮。那段日子確實有美好的部分，只是沒有按照我寫好的劇本發展。',
    '我曾經為此感到挫敗。現在我願意換一種讀法。在當時擁有的資訊、能力與心理條件下，我已經作出能夠作出的選擇。要求過去的自己擁有今天的判斷力，本身就是一種不公平。',
    '渾濁的上半場',
    '回憶總是喜憂參半。我的 Dresden 記憶裡，遺憾比喜悅更多。上半場的風景充滿期待，後來逐漸長出恐懼、無助與失敗感。我抵達了長久嚮往的城市，發現那裡沒有我要的東西。這是那段時間最尖銳的處境。更接近真相的說法是，我曾經把尚未成形的人生投射到它身上，而任何城市都無法替一個人回答他應該如何生活。',
    '當時的我不想面對這件事。記憶像一條挾帶泥漿的急流。未知的滾石不斷落下，水始終渾濁，我看不清自己經歷了什麼，也無法判斷究竟是哪一步走錯。只有時間能讓泥沙沉澱。多年以後，水面才逐漸清澈。我開始能夠直視那些若隱若現的軌跡，承認自己曾經害怕，也承認那段旅程沒有成為我期待的人生。離開有時候是對直覺的服從。',
    '午後的管風琴',
    '語言班下課後，我常常回到老城區，走進教堂裡聽管風琴。我記得的是空間裡的聲音。低頻從地板與座椅傳進身體，高音往圓頂上升。午後的光線穿過高窗，落在弧形廊道、淡色牆面與深淺交錯的石頭上。聲音在建築裡來回折返，像有人替我說不出口的情緒找到了一個足夠巨大的容器。',
    '我坐在那裡，暫時不用決定未來。',
    '那可能是我在 Dresden 真正得到的東西。 一段無法被功利衡量的時間。一種讓身體與空間共同呼吸的經驗。一個人在異鄉裡，短暫感受到被某種龐大而安靜的事物接住。那座教堂經歷過摧毀、廢棄與重建。我坐在它重新形成的穹頂下，還不知道自己的內部也需要經歷一次相似的過程。',
    '城市如何敘述自己',
    '2008年的 Dresden，仍在重新整理自己的歷史敘事。同一年，市政府委託的歷史學者團隊公布研究結果，把1945年轟炸的死亡人數估計在 18,000 至 25,000 人之間，修正數十年來被戰爭宣傳、政治立場與集體創傷不斷放大的數字。一座城市的重建，因此也發生在數字、語言與記憶之中。',
    '城市必須決定保留哪些遺跡，重建哪些立面，如何描述自己的受難，以及如何面對自己在更大歷史裡的責任。保存記憶與沉溺於受害者身分之間始終存在張力，恢復歷史景觀與製造懷舊幻象之間，也只隔著一道很細的界線。',
    'Frauenkirche 的力量正來自這個矛盾。它是一座精確重建的巴洛克教堂，同時是一座由舊石與新石共同構成的當代紀念物。它讓城市重新獲得天際線，也讓毀滅的痕跡繼續留在最顯眼的位置。',
    '有力量的重建，不會讓人忘記廢墟曾經存在。',
    '把遺憾放回人生',
    '多年後回看，Dresden 沒有成為我的歸宿。它成為我生命裡的一座精神地基。那些照片、地圖、街道與午後的音樂，是當時的我替未來保存下來的材料。我一直感謝自己收藏了這些紀錄。它們曾經帶著太多情緒，讓我不敢打開。時間過去之後，它們慢慢變成一份療傷的禮物。回憶給了我最大的包容與擁抱。它沒有改變當年發生的事，卻改變了我與那些事之間的關係。',
    '生命沒有重新選擇的如果，人卻擁有重新詮釋的力量。',
    '我無法回到2008年，替那時的自己作出更成熟的判斷。我可以在今天承認，他在有限的條件裡已經盡力。他帶著冒險的心情出發，拿著一張地圖走進陌生城市，也在察覺不適合的時候，承受了離開的代價。',
    '第一站 Dresden。我曾經以為那裡會是開始，也會是終點。現在我知道，它是生命中的一座臨時鷹架。在我還無法建造自己之前，它先讓我看見一座城市如何面對斷裂，如何辨認瓦礫，如何讓燒黑的石頭重新承受重量。Dresden 把舊石放回城市的牆上。我終於也能把遺憾放回自己的人生。它們不再只是一片廢墟。它們是我今天得以站立的部分。'
  ],
  essay_en: [
    'Regret can be rebuilt: arriving in a city still under construction.',
    'In 2008, I arrived in Dresden.',
    'At that time, the Frauenkirche had been reconsecrated for only three years. The Neumarkt surrounding the church was still under construction; blocks, facades and the square were being restored piece by piece. Urban planning documents from those years wrote that the rebuilding of the church and square brought Dresden back into the gaze of the world.',
    'It was a city still negotiating with its own history. Every stone in the square was still deciding where it should stand again.',
    'There, I began another negotiation of my own. Life offers no if for choosing again. In some alternate version of life, perhaps there was a branch that continued from Dresden. I stayed, learned the language, entered school, built a life beside the Elbe, and turned the first stop into the destination.',
    'In reality, I took another path. Dresden was the beginning I imagined, and almost became the ending I imagined. To arrive there, I had already prepared for a long time before stepping onto that land. The preparation itself had changed me. It made me leave my original life, arrive in a strange city, and for the first time judge who I wanted to become without familiar coordinates. Those preparations were not invalidated simply because I eventually left.',
    'One must believe in intuition. Whether a city fits oneself, the body knows earlier than reason after only a few days of living there.',
    'Dresden is beautiful. Baroque architecture unfolds along the Elbe; domes, palaces, stone walls and bridges form an almost too complete European landscape.',
    'I knew it was beautiful. I also gradually sensed that it might not be the place where I should remain for long. Both judgments can be true at the same time. Beauty is not belonging, and being moved does not guarantee that one can live there. A place can give deep experience but still fail to provide the conditions one truly needs for life. The difficulty was that I did not yet know what I truly needed.',
    'The ruin that was left behind',
    'On February 13, 1945, Dresden was bombed. The Frauenkirche survived the first bombing and fire, but collapsed two days later because of structural damage caused by extreme heat. In 1966, the church ruins were officially designated as a memorial to the victims of war. In the 1980s, they became a gathering and candle-lighting place for the East German peace movement. That pile of rubble remained in the city center for almost half a century.',
    'Dresden did not immediately cover its wound. It first allowed the ruin to exist, let the stones bear time, let several generations pass by, look, argue and project their political positions onto it. In 1989, the citizens initiative for reconstruction took shape. On February 13, 1990, citizens issued the Appeal from Dresden and raised resources from around the world. In 1993, people began clearing, identifying, numbering and preserving the rubble. In 1994, the first foundation stone of reconstruction was laid. On October 30, 2005, the Frauenkirche was reconsecrated and opened.',
    'The first step of reconstruction is recognition.',
    'Recognizing what has been lost, what can still be used, and which fragments, though blackened, still have the capacity to bear weight.',
    'Today, about forty-five percent of the Frauenkirche structure uses historical stone, and 7,110 old stones were reinstalled in the exterior walls. The new sandstone is bright beige-yellow, while the stones that survived the fire are deep black. The two colors remain together on the facade, so the history of the building is still clearly legible.',
    'It did not polish its wounds into one uniform surface. The black stones were kept and became part of the new building. Years later, I understood that this too is a form memory can take. We do not need to bleach everything that happened, nor do we need to live forever in ruins. True repair is to find the fragments that can still bear weight and place them back into the structure of life.',
    'Deja vu',
    'When I first arrived, I carried a map and explored the city. It was a feeling of deja vu, as if I had been there before.',
    'Perhaps it was only the pull of a dream. Perhaps what I wanted to return to was a distant elsewhere that did not belong to existing memory. People sometimes project unfinished longing onto a strange city. When streets, light and buildings happen to fit the imagination inside us, we mistake it for a destined place.',
    'A city will not complete a person destiny. It can only provide space, events and encounters. Whether one can live there is still decided by language, relationships, economy, identity and psychological condition together. Only when causes and conditions are sufficient can daily life slowly grow beautiful. When conditions are not yet mature, even if the scenery fully matches the imagination, life continues to float. Those days did have beautiful parts, but they did not develop according to the script I had written.',
    'I once felt defeated by this. Now I am willing to read it differently. With the information, ability and psychological condition I had at that time, I had already made the choices I was able to make. Demanding that my past self possess the judgment of today is itself unfair.',
    'A muddy first half',
    'Memory is always mixed with joy and sorrow. In my Dresden memory, regret is greater than happiness. The first half of the scenery was full of expectation, and later fear, helplessness and a sense of failure gradually grew. I arrived in a city I had longed for, only to discover that it did not contain what I needed. That was the sharpest condition of that period. Closer to the truth is this: I had projected an unformed life onto it, and no city can answer for a person how that person should live.',
    'At that time I did not want to face this. Memory was like a rapid current carrying mud. Unknown rolling stones kept falling; the water stayed turbid. I could not see what I had experienced, nor judge which step had gone wrong. Only time can let sediment settle. Years later, the water gradually became clear. I began to face those faint tracks, admitting that I had been afraid and that the journey had not become the life I expected. Leaving is sometimes obedience to intuition.',
    'The afternoon organ',
    'After language class, I often returned to the old town and walked into the church to listen to the organ. What I remember is the sound in the space. Low frequencies entered the body through the floor and seats; high notes rose toward the dome. Afternoon light passed through tall windows and fell on curved corridors, pale walls and stones alternating between dark and light. Sound folded back and forth inside the building, as if someone had found a large enough vessel for emotions I could not speak.',
    'I sat there, temporarily not needing to decide the future.',
    'That may be what I truly received in Dresden: a time that cannot be measured by utility, an experience in which body and space breathed together, a moment in a foreign place when one felt briefly held by something vast and quiet. That church had undergone destruction, abandonment and reconstruction. I sat beneath its newly formed dome, not yet knowing that my own interior would also need to undergo a similar process.',
    'How a city narrates itself',
    'Dresden in 2008 was still reorganizing its historical narrative. In the same year, a team of historians commissioned by the city government published research estimating the death toll of the 1945 bombing at 18,000 to 25,000, correcting numbers that had been enlarged for decades by wartime propaganda, political positions and collective trauma. A city reconstruction therefore also happens within numbers, language and memory.',
    'A city must decide which remains to preserve, which facades to rebuild, how to describe its suffering, and how to face its responsibility in a larger history. There is always tension between preserving memory and sinking into victimhood; only a thin line separates restoring historical landscape from manufacturing nostalgic illusion.',
    'The power of the Frauenkirche comes precisely from this contradiction. It is a precisely reconstructed Baroque church and at the same time a contemporary memorial made of old and new stones together. It allows the city to regain its skyline while keeping the traces of destruction in the most visible place.',
    'Powerful reconstruction does not make people forget that ruins once existed.',
    'Putting regret back into life',
    'Looking back years later, Dresden did not become my home. It became a spiritual foundation in my life. Those photographs, maps, streets and afternoon music were materials that my former self preserved for the future. I have always been grateful that I kept these records. They once carried too much emotion, making me afraid to open them. After time passed, they slowly became a gift of healing. Memory gave me its greatest tolerance and embrace. It did not change what happened then, but it changed the relationship between me and those events.',
    'Life has no if for choosing again, but people have the power to reinterpret.',
    'I cannot return to 2008 and make a more mature judgment for the person I was then. Today I can acknowledge that, within limited conditions, he had already done his best. He set out with a spirit of adventure, entered a strange city with a map, and when he sensed that it was not suitable, he also bore the cost of leaving.',
    'First stop, Dresden. I once thought it would be the beginning and the end. Now I know it was a temporary scaffold in my life. Before I could build myself, it first let me see how a city faces rupture, recognizes rubble and lets blackened stones bear weight again. Dresden put old stones back onto the walls of the city. I can finally put regret back into my own life. They are no longer only ruins. They are the parts on which I am able to stand today.'
  ],
  essay_de: [
    'Bedauern kann wiederaufgebaut werden: Ankunft in einer Stadt, die noch gebaut wurde.',
    'Im Jahr 2008 kam ich in Dresden an.',
    'Damals war die Frauenkirche erst seit drei Jahren wieder eingeweiht. Der Neumarkt um die Kirche war noch im Bau; Stadtblöcke, Fassaden und der Platz wurden Stück für Stück zurückgebracht. Stadtplanerische Dokumente jener Jahre hielten fest, dass der Wiederaufbau von Kirche und Platz Dresden wieder in den Blick der Welt rückte.',
    'Es war eine Stadt, die noch mit ihrer eigenen Geschichte verhandelte. Jeder Stein auf dem Platz entschied noch, an welche Stelle er zurückkehren sollte.',
    'Dort begann auch ich eine andere Verhandlung. Das Leben bietet kein Wenn, mit dem man noch einmal wählen kann. In einer parallelen Version meines Lebens hätte vielleicht ein Zweig von Dresden aus weitergeführt. Ich wäre geblieben, hätte die Sprache gelernt, wäre in eine Schule gegangen, hätte an der Elbe ein Leben aufgebaut und die erste Station zum Ziel gemacht.',
    'In Wirklichkeit nahm ich einen anderen Weg. Dresden war der Anfang, den ich mir vorgestellt hatte, und beinahe auch das Ende meiner Vorstellung. Um dorthin zu gelangen, hatte ich mich lange vorbereitet, bevor ich dieses Land betrat. Die Vorbereitung selbst hatte mich bereits verändert. Sie ließ mich mein früheres Leben verlassen, in einer fremden Stadt ankommen und zum ersten Mal ohne vertraute Koordinaten entscheiden, wer ich werden wollte. Diese Vorbereitungen wurden nicht ungültig, nur weil ich am Ende ging.',
    'Man muss der eigenen Intuition glauben. Ob eine Stadt zu einem passt, weiß der Körper nach wenigen Tagen früher als der Verstand.',
    'Dresden ist schön. Barocke Architektur entfaltet sich entlang der Elbe; Kuppeln, Paläste, Steinmauern und Brücken bilden eine fast zu vollständige europäische Landschaft.',
    'Ich wusste, dass es schön war. Zugleich spürte ich allmählich, dass es vielleicht nicht der Ort war, an dem ich lange bleiben sollte. Beide Urteile können gleichzeitig wahr sein. Schönheit bedeutet nicht Zugehörigkeit, und Berührung garantiert nicht, dass man dort leben kann. Ein Ort kann tiefe Erfahrungen schenken und doch nicht die Lebensbedingungen bieten, die man wirklich braucht. Die Schwierigkeit war, dass ich damals noch nicht wusste, was ich wirklich brauchte.',
    'Die zurückgelassene Ruine',
    'Am 13. Februar 1945 wurde Dresden bombardiert. Die Frauenkirche überstand den ersten Angriff und das Feuer, stürzte aber zwei Tage später wegen der durch extreme Hitze verursachten Strukturschäden ein. 1966 wurde die Kirchenruine offiziell als Gedenkstätte für die Opfer des Krieges ausgewiesen. In den 1980er Jahren wurde sie zu einem Ort der Versammlung und des Kerzenanzündens für die ostdeutsche Friedensbewegung. Dieser Trümmerhaufen blieb fast ein halbes Jahrhundert im Zentrum der Stadt.',
    'Dresden deckte die Wunde nicht sofort zu. Die Stadt ließ die Ruine zuerst existieren, ließ die Steine Zeit tragen, ließ mehrere Generationen vorbeigehen, schauen, streiten und ihre politischen Haltungen darauf projizieren. 1989 formierte sich die bürgerschaftliche Initiative zum Wiederaufbau. Am 13. Februar 1990 veröffentlichten Bürger den Ruf aus Dresden und sammelten weltweit Mittel. 1993 begann man, die Trümmer zu räumen, zu erkennen, zu nummerieren und zu bewahren. 1994 wurde der erste Grundstein des Wiederaufbaus gelegt. Am 30. Oktober 2005 wurde die Frauenkirche wieder geweiht und geöffnet.',
    'Der erste Schritt des Wiederaufbaus ist das Erkennen.',
    'Erkennen, was verloren ist, was noch benutzt werden kann und welche Fragmente, obwohl sie schwarz verbrannt sind, weiterhin Gewicht tragen können.',
    'Heute bestehen etwa fünfundvierzig Prozent der Struktur der Frauenkirche aus historischem Stein; 7.110 alte Steine wurden wieder in die Außenwand eingefügt. Der neue Sandstein ist hell beige-gelb, die vom Feuer gezeichneten Steine sind tiefschwarz. Beide Farben bleiben gemeinsam auf der Fassade, sodass die Geschichte des Gebäudes klar lesbar bleibt.',
    'Die Kirche hat ihre Wunden nicht zu einer einheitlichen Oberfläche poliert. Die schwarzen Steine wurden belassen und wurden Teil des neuen Gebäudes. Erst Jahre später verstand ich, dass auch dies eine Form von Erinnerung sein kann. Wir müssen nicht alles, was geschehen ist, bleichen, und wir müssen auch nicht für immer in der Ruine wohnen. Wirkliche Reparatur bedeutet, jene Fragmente zu finden, die noch Gewicht tragen können, und sie in die Struktur des Lebens zurückzusetzen.',
    'Déjà-vu',
    'Bei meiner Ankunft erkundete ich die Stadt mit einer Karte. Es war ein Gefühl des Wiedererkennens, als wäre ich schon einmal dort gewesen.',
    'Vielleicht war es nur die Anziehung eines Traums. Vielleicht wollte ich an einen fernen anderen Ort zurück, der keiner bestehenden Erinnerung gehörte. Manchmal projiziert der Mensch unerfüllte Sehnsucht auf eine fremde Stadt. Wenn Straßen, Licht und Gebäude zufällig der inneren Vorstellung entsprechen, halten wir sie irrtümlich für einen vorherbestimmten Ort.',
    'Eine Stadt vollendet am Ende kein menschliches Schicksal. Sie kann nur Raum, Ereignisse und Begegnungen anbieten. Ob man dort leben kann, entscheiden Sprache, Beziehungen, Ökonomie, Identität und psychischer Zustand gemeinsam. Erst wenn Ursachen und Bedingungen zusammenkommen, kann der Alltag langsam schön werden. Sind die Bedingungen noch nicht reif, bleibt das Leben auch dann schwebend, wenn die Landschaft der Vorstellung vollkommen entspricht. Jene Tage hatten tatsächlich schöne Teile, nur entwickelten sie sich nicht nach dem Drehbuch, das ich geschrieben hatte.',
    'Ich war darüber einmal frustriert. Heute bin ich bereit, es anders zu lesen. Mit den Informationen, Fähigkeiten und seelischen Bedingungen, die ich damals hatte, hatte ich bereits die Entscheidungen getroffen, die ich treffen konnte. Vom früheren Selbst die Urteilskraft von heute zu verlangen, ist an sich ungerecht.',
    'Eine trübe erste Halbzeit',
    'Erinnerung ist immer aus Freude und Trauer gemischt. In meiner Dresdner Erinnerung ist das Bedauern größer als die Freude. Die Landschaft der ersten Halbzeit war voller Erwartung; später wuchsen Angst, Hilflosigkeit und ein Gefühl des Scheiterns. Ich erreichte die Stadt, nach der ich mich lange gesehnt hatte, und stellte fest, dass sie nicht enthielt, was ich brauchte. Das war die schärfste Lage jener Zeit. Näher an der Wahrheit ist: Ich hatte ein noch ungeformtes Leben auf sie projiziert, und keine Stadt kann für einen Menschen beantworten, wie er leben soll.',
    'Damals wollte ich mich dem nicht stellen. Die Erinnerung war wie ein reißender Strom voller Schlamm. Unbekannte Steine rollten ständig herab, das Wasser blieb trüb. Ich konnte nicht erkennen, was ich erlebt hatte, und nicht beurteilen, welcher Schritt falsch war. Nur Zeit kann Sediment sinken lassen. Jahre später wurde die Oberfläche langsam klar. Ich begann, jene schwachen Spuren anzusehen, zuzugeben, dass ich Angst gehabt hatte, und zuzugeben, dass diese Reise nicht das Leben wurde, das ich erwartet hatte. Weggehen ist manchmal Gehorsam gegenüber der Intuition.',
    'Die Orgel am Nachmittag',
    'Nach dem Sprachkurs kehrte ich oft in die Altstadt zurück und ging in die Kirche, um Orgelmusik zu hören. Woran ich mich erinnere, ist der Klang im Raum. Tiefe Frequenzen drangen durch Boden und Sitzbänke in den Körper, hohe Töne stiegen zur Kuppel auf. Nachmittagslicht fiel durch hohe Fenster auf gebogene Galerien, helle Wände und hell-dunkel wechselnde Steine. Der Klang warf sich in der Architektur hin und her, als hätte jemand für meine unaussprechlichen Gefühle ein ausreichend großes Gefäß gefunden.',
    'Ich saß dort und musste vorübergehend nicht über die Zukunft entscheiden.',
    'Das war vielleicht das, was ich in Dresden wirklich erhielt: eine Zeit, die sich nicht nach Nutzen messen lässt, eine Erfahrung, in der Körper und Raum gemeinsam atmeten, ein Moment in der Fremde, in dem man sich kurz von etwas Großem und Stillen gehalten fühlte. Diese Kirche hatte Zerstörung, Aufgabe und Wiederaufbau durchlaufen. Ich saß unter ihrer neu geformten Kuppel und wusste noch nicht, dass auch mein Inneres einen ähnlichen Prozess brauchen würde.',
    'Wie eine Stadt sich selbst erzählt',
    'Dresden ordnete 2008 seine historische Erzählung noch immer neu. Im selben Jahr veröffentlichte ein von der Stadt beauftragtes Historikerteam Forschungsergebnisse, die die Zahl der Todesopfer der Bombardierung von 1945 auf 18.000 bis 25.000 schätzten und damit Zahlen korrigierten, die jahrzehntelang durch Kriegspropaganda, politische Positionen und kollektives Trauma vergrößert worden waren. Der Wiederaufbau einer Stadt findet daher auch in Zahlen, Sprache und Erinnerung statt.',
    'Eine Stadt muss entscheiden, welche Reste sie bewahrt, welche Fassaden sie wiederaufbaut, wie sie ihr Leiden beschreibt und wie sie ihrer Verantwortung in einer größeren Geschichte begegnet. Zwischen Erinnerung bewahren und im Opferstatus versinken besteht immer Spannung; auch zwischen Wiederherstellung historischer Landschaft und Herstellung nostalgischer Illusion liegt nur eine sehr dünne Linie.',
    'Die Kraft der Frauenkirche entsteht genau aus diesem Widerspruch. Sie ist eine präzise rekonstruierte Barockkirche und zugleich ein zeitgenössisches Denkmal aus alten und neuen Steinen. Sie gibt der Stadt ihre Silhouette zurück und lässt die Spuren der Zerstörung weiterhin an der sichtbarsten Stelle stehen.',
    'Kraftvoller Wiederaufbau lässt Menschen nicht vergessen, dass die Ruine einst existierte.',
    'Das Bedauern ins Leben zurücklegen',
    'Jahre später zurückblickend wurde Dresden nicht meine Heimat. Es wurde ein geistiges Fundament meines Lebens. Diese Fotos, Karten, Straßen und Nachmittagsmusik waren Materialien, die mein damaliges Ich für die Zukunft aufbewahrte. Ich bin mir dankbar, dass ich diese Aufzeichnungen gesammelt habe. Sie trugen einst zu viele Gefühle, sodass ich mich nicht traute, sie zu öffnen. Mit der Zeit wurden sie langsam zu einem Geschenk der Heilung. Erinnerung gab mir ihre größte Toleranz und Umarmung. Sie veränderte nicht, was damals geschah, aber sie veränderte meine Beziehung zu diesen Ereignissen.',
    'Das Leben hat kein Wenn für eine neue Wahl, aber der Mensch besitzt die Kraft, neu zu deuten.',
    'Ich kann nicht ins Jahr 2008 zurückkehren und für mein damaliges Selbst reifer entscheiden. Heute kann ich anerkennen, dass er unter begrenzten Bedingungen bereits sein Bestes getan hatte. Er brach mit Abenteuerlust auf, ging mit einer Karte in eine fremde Stadt und trug, als er merkte, dass sie nicht passte, auch den Preis des Weggehens.',
    'Erste Station Dresden. Ich dachte einst, dort würde Anfang und Ende liegen. Jetzt weiß ich, dass es ein vorübergehendes Gerüst in meinem Leben war. Bevor ich mich selbst bauen konnte, zeigte es mir, wie eine Stadt mit Bruch umgeht, wie sie Trümmer erkennt und wie sie verbrannte Steine wieder Gewicht tragen lässt. Dresden setzte alte Steine zurück in die Mauern der Stadt. Endlich kann auch ich das Bedauern in mein eigenes Leben zurücklegen. Es ist nicht mehr nur Ruine. Es ist der Teil, auf dem ich heute stehen kann.'
  ],
  href: 'https://genius912.blogspot.com/2026/08/dresden.html'
};

function removeMarkedBlock(html) {
  const startIndex = html.indexOf(start);
  if (startIndex === -1) return html;
  const endIndex = html.indexOf(end, startIndex);
  if (endIndex === -1) return html;
  return html.slice(0, startIndex) + html.slice(endIndex + end.length);
}

let html = removeMarkedBlock(readFileSync(file, 'utf8'));
const block = `\n${start}\n{\n  const RAUM_DRESDEN_WRITING = ${JSON.stringify(article, null, 2)};\n  const existingIndex = WRITINGS.findIndex((writing) => (\n    writing.id === RAUM_DRESDEN_WRITING.id ||\n    writing.href === RAUM_DRESDEN_WRITING.href ||\n    writing.title_zh === RAUM_DRESDEN_WRITING.title_zh\n  ));\n  if (existingIndex >= 0) {\n    WRITINGS.splice(existingIndex, 1);\n  }\n  WRITINGS.unshift(RAUM_DRESDEN_WRITING);\n  window.WRITINGS = WRITINGS;\n}\n${end}\n`;

const anchor = 'const LINKS = [';
if (!html.includes(anchor)) {
  throw new Error('Cannot find LINKS insertion point.');
}
html = html.replace(anchor, `${block}\n${anchor}`);
writeFileSync(file, html, 'utf8');
console.log('Synced Dresden writing article.');
