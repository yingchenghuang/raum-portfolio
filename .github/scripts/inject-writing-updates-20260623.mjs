import { readFileSync, writeFileSync } from 'node:fs';

const file = 'index.html';
const start = '/* RAUM_WRITING_UPDATES_20260623_START */';
const end = '/* RAUM_WRITING_UPDATES_20260623_END */';

const sources = [
  {
    id: 'w-blue-night-20260622',
    href: 'https://genius912.blogspot.com/2026/06/blog-post_22.html',
    year: '2026',
    month: '06',
    title: '土地．文化敘事（六）紐倫堡藍夜藝術節',
  },
  {
    id: 'w-writing-start-201702',
    href: 'https://genius912.blogspot.com/2017/02/blog-post.html',
    year: '2017',
    month: '02',
    title: '起點',
  },
  {
    id: 'w-hallo-servus-2026',
    href: 'https://genius912.blogspot.com/2026/06/hallo-servus.html',
    year: '2026',
    month: '06',
    title: '土地．文化敘事（四）Hallo! Servus! 以物易物．街道的人情與城市秩序',
  },
  {
    id: 'w-subbus-european-action',
    href: 'https://genius912.blogspot.com/2026/06/subbus.html',
    year: '2026',
    month: '06',
    title: '土地．文化敘事（五）巴士做為藝術媒介 SUBBUS 歐洲行動策展計畫',
  },
];

const landNarrativeTitles = {
  'w-land-narrative-01': {
    zh: '土地．文化敘事（一）無人的市場，與自己的對話',
    en: 'Land and Cultural Narratives I: An Unattended Market, a Conversation with Oneself',
    de: 'Land und kulturelle Erzählungen I: Ein unbeaufsichtigter Markt und das Gespräch mit sich selbst',
  },
  'w-land-narrative-02': {
    zh: '土地．文化敘事（二）一座無魂城市的考古學',
    en: 'Land and Cultural Narratives II: Archaeology of a Soulless City',
    de: 'Land und kulturelle Erzählungen II: Archäologie einer seelenlosen Stadt',
  },
  'w-land-narrative-03': {
    zh: '土地．文化敘事（三）公共空間的美感經驗',
    en: 'Land and Cultural Narratives III: The Aesthetic Experience of Public Space',
    de: 'Land und kulturelle Erzählungen III: Die ästhetische Erfahrung im öffentlichen Raum',
  },
  'w-hallo-servus-2026': {
    zh: '土地．文化敘事（四）Hallo! Servus! 以物易物．街道的人情與城市秩序',
    en: 'Land and Cultural Narratives IV: Hallo! Servus! Barter, Street Humanity and Urban Order',
    de: 'Land und kulturelle Erzählungen IV: Hallo! Servus! Tauschhandel, Menschlichkeit auf der Straße und städtische Ordnung',
  },
  'w-subbus-european-action': {
    zh: '土地．文化敘事（五）巴士做為藝術媒介 SUBBUS 歐洲行動策展計畫',
    en: 'Land and Cultural Narratives V: The Bus as Artistic Medium - SUBBUS European Action Curatorial Project',
    de: 'Land und kulturelle Erzählungen V: Der Bus als künstlerisches Medium - SUBBUS Europäisches Aktions- und Kurationsprojekt',
  },
  'w-blue-night-20260622': {
    zh: '土地．文化敘事（六）紐倫堡藍夜藝術節',
    en: 'Land and Cultural Narratives VI: Nuremberg Blue Night Art Festival',
    de: 'Land und kulturelle Erzählungen VI: Die Blaue Nacht Nürnberg',
  },
};

function paragraphs(text) {
  return text
    .trim()
    .split(/\n{2,}/)
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

const articleTranslations = {
  'w-blue-night-20260622': {
    title_en: 'Land and Cultural Narratives VI: Nuremberg Blue Night Art Festival',
    title_de: 'Land und kulturelle Erzählungen VI: Die Blaue Nacht Nürnberg',
    note_en: 'Work: The Boundaries of Freedom (Die Grenzen der Freiheit). A public-art project presented during Nuremberg Blue Night, reflecting on freedom, boundaries, collective memory and the public body.',
    note_de: 'Werk: Die Grenzen der Freiheit. Ein Public-Art-Projekt während der Blauen Nacht Nürnberg über Freiheit, Grenzen, kollektive Erinnerung und den öffentlichen Körper.',
    essay_en: paragraphs(`
Nuremberg Blue Night Art Festival

Work: The Boundaries of Freedom (Die Grenzen der Freiheit)

Nuremberg Blue Night Art Festival 2015. Winner of the N-Ergie Audience Art Award.

At Die Blaue Nacht in Nuremberg, the work turned the historic courtyard into a temporary field of light and movement. Construction fences, lamps, shadows and the paths of viewers were arranged as a spatial question: where does freedom begin, and where does a boundary become visible?

1. The Courtyard at Midnight

The courtyard of the Old Town Hall was filled with temporary barriers. They did not simply block passage; they created a route. Viewers entered the work by walking through a controlled space, and their bodies became part of the installation.

Light marked the edges of the passage, while darkness preserved uncertainty. Between these two states, the viewer could sense how public space is produced by permissions, limits and the invisible rules of a city.

2. Boundaries and Freedom

Freedom is often imagined as an open condition, but in real social life it is always shaped by borders. A fence can protect, exclude, guide or threaten. The work did not treat the boundary as a single negative symbol. Instead, it asked the audience to experience how boundaries are constantly negotiated.

The title The Boundaries of Freedom points to this paradox. Freedom is not outside structure; it is tested inside structure. The body that moves through the work becomes aware of distance, obstruction, detour and choice.

3. Collective Memory and Urban History

Nuremberg carries a heavy historical memory. To make a public artwork in this city means facing the relation between image, power, gathering and civic space. The installation therefore used modest, temporary materials rather than monumental symbols.

The work allowed the audience to enter slowly. Through repeated movement, the courtyard became a place for remembering how public order, fear, desire and social imagination can all be inscribed in space.

4. Materials and Method

The construction fence was chosen because it is a common urban object. It appears when a city repairs itself, expands, restricts or reorganizes. In the work it was shifted from a practical object into an artistic medium.

Light gave the material a second life. The hard geometry of the fence became a field of shadows. Viewers walking through the space produced changing silhouettes, turning the installation into a live image of public participation.

5. Audience as Participant

The audience was not placed in front of the work but inside it. Walking, pausing, turning back and looking at others were all part of the experience. The work existed through these temporary decisions.

In this sense, the installation was not only an object but a social situation. Each participant tested the relationship between personal movement and shared rules.

6. Public Art as Spatial Thinking

Public art begins from an understanding of the whole environment. It asks how society, economy, culture, history, space and time are layered together. It is not only an artwork placed outdoors; it is a way of reading the conditions of a place.

The project tried to transform a temporary night festival into a field of reflection, allowing viewers to feel the hidden structure of public space through their own movement.

7. Light, Darkness and the Body

Light can guide, expose and protect. Darkness can conceal, delay and open imagination. Between light and darkness, the body becomes sensitive to distance and decision.

The work used this tension to create a quiet but direct experience: freedom is never abstract. It is felt by the body, step by step, inside the conditions of a place.

8. Conclusion

The Boundaries of Freedom was an attempt to make social structure visible through a simple spatial gesture. By walking through fences and light, viewers encountered the invisible lines that shape urban life.

The work asks not for a final answer, but for a renewed sensitivity: how do we live with boundaries, and how can freedom still be practiced within them?
`),
    essay_de: paragraphs(`
Die Blaue Nacht Nürnberg

Werk: Die Grenzen der Freiheit

Die Blaue Nacht Nürnberg 2015. Gewinner des N-Ergie-Publikumspreises.

Während der Blauen Nacht in Nürnberg verwandelte die Arbeit den historischen Innenhof in ein temporäres Feld aus Licht und Bewegung. Bauzäune, Lampen, Schatten und die Wege der Besucherinnen und Besucher wurden zu einer räumlichen Frage: Wo beginnt Freiheit, und wann wird eine Grenze sichtbar?

1. Der Innenhof um Mitternacht

Der Innenhof des Alten Rathauses war mit temporären Absperrungen gefüllt. Sie blockierten nicht nur den Weg, sondern formten eine Route. Das Publikum betrat die Arbeit, indem es durch einen kontrollierten Raum ging; der eigene Körper wurde Teil der Installation.

Das Licht markierte die Ränder des Weges, während die Dunkelheit eine gewisse Unsicherheit bewahrte. Zwischen diesen beiden Zuständen wurde spürbar, wie öffentlicher Raum durch Erlaubnisse, Begrenzungen und unsichtbare Regeln einer Stadt entsteht.

2. Grenzen und Freiheit

Freiheit wird oft als Offenheit vorgestellt, doch im gesellschaftlichen Leben ist sie immer durch Grenzen geformt. Ein Zaun kann schützen, ausschließen, leiten oder bedrohen. Die Arbeit behandelte die Grenze deshalb nicht nur als negatives Zeichen, sondern fragte, wie Grenzen ständig neu ausgehandelt werden.

Der Titel Die Grenzen der Freiheit verweist auf dieses Paradox. Freiheit steht nicht außerhalb von Struktur; sie wird innerhalb von Struktur geprüft. Wer sich durch die Arbeit bewegt, nimmt Abstand, Hindernis, Umweg und Entscheidung körperlich wahr.

3. Kollektive Erinnerung und Stadtgeschichte

Nürnberg trägt eine schwere historische Erinnerung. Eine öffentliche Arbeit in dieser Stadt muss sich deshalb mit dem Verhältnis von Bild, Macht, Versammlung und Stadtraum auseinandersetzen. Die Installation verwendete bewusst einfache und temporäre Materialien statt monumentaler Symbole.

Das Publikum konnte langsam eintreten. Durch wiederholte Bewegungen wurde der Innenhof zu einem Ort, an dem sichtbar wurde, wie öffentliche Ordnung, Angst, Begehren und gesellschaftliche Vorstellung in den Raum eingeschrieben sind.

4. Material und Methode

Der Bauzaun wurde gewählt, weil er ein alltägliches Objekt der Stadt ist. Er erscheint dort, wo eine Stadt repariert, erweitert, begrenzt oder neu organisiert wird. In der Arbeit wurde er vom praktischen Gegenstand zum künstlerischen Medium verschoben.

Das Licht gab dem Material ein zweites Leben. Die harte Geometrie des Zauns wurde zu einem Feld von Schatten. Die Besucherinnen und Besucher erzeugten im Gehen wechselnde Silhouetten und machten die Installation zu einem lebendigen Bild öffentlicher Teilnahme.

5. Das Publikum als Teilnehmende

Das Publikum stand nicht vor der Arbeit, sondern in ihr. Gehen, Anhalten, Zurückkehren und das Beobachten anderer wurden Teil der Erfahrung. Die Arbeit entstand durch diese vorübergehenden Entscheidungen.

In diesem Sinn war die Installation nicht nur ein Objekt, sondern eine soziale Situation. Jede Person prüfte das Verhältnis zwischen eigener Bewegung und gemeinsamen Regeln.

6. Public Art als räumliches Denken

Öffentliche Kunst beginnt mit einem Verständnis der gesamten Umgebung. Sie fragt, wie Gesellschaft, Ökonomie, Kultur, Geschichte, Raum und Zeit miteinander geschichtet sind. Sie ist nicht nur ein Kunstwerk im Außenraum, sondern eine Methode, die Bedingungen eines Ortes zu lesen.

Das Projekt verwandelte ein temporäres Nachtfestival in ein Feld der Reflexion und ließ die verborgene Struktur des öffentlichen Raums durch die eigene Bewegung erfahrbar werden.

7. Licht, Dunkelheit und Körper

Licht kann führen, enthüllen und schützen. Dunkelheit kann verbergen, verzögern und Imagination öffnen. Zwischen Licht und Dunkelheit wird der Körper empfindsam für Abstand und Entscheidung.

Die Arbeit nutzte diese Spannung für eine stille, aber direkte Erfahrung: Freiheit ist nie abstrakt. Sie wird Schritt für Schritt im Körper und innerhalb der Bedingungen eines Ortes gespürt.

8. Schluss

Die Grenzen der Freiheit war der Versuch, gesellschaftliche Struktur durch eine einfache räumliche Geste sichtbar zu machen. Beim Gehen durch Zäune und Licht begegnete das Publikum den unsichtbaren Linien, die städtisches Leben formen.

Die Arbeit sucht keine endgültige Antwort, sondern eine erneuerte Sensibilität: Wie leben wir mit Grenzen, und wie kann Freiheit innerhalb dieser Grenzen weiterhin praktiziert werden?
`),
    image_alt_en: 'Nuremberg Blue Night Art Festival',
    image_alt_de: 'Die Blaue Nacht Nürnberg',
    image_caption_en: 'Land and Cultural Narratives VI: Nuremberg Blue Night Art Festival',
    image_caption_de: 'Land und kulturelle Erzählungen VI: Die Blaue Nacht Nürnberg',
  },
  'w-writing-start-201702': {
    title_en: 'Starting Point',
    title_de: 'Ausgangspunkt',
    note_en: 'When I first decided to write about space, I did not yet have a clear outline of which spatial issues I wanted to address, nor did I have a strong feeling or a precise position.',
    note_de: 'Als ich begann, über Raum zu schreiben, hatte ich noch keine klare Vorstellung davon, welche räumlichen Fragen mich beschäftigten, und auch keine feste Haltung.',
    essay_en: paragraphs(`
Starting Point

When I first decided to write about space, I did not yet have a clear outline of which spatial issues I wanted to address, nor did I have a strong feeling or a precise position. The year 2014 became the starting point of this writing project: I wanted to find clues within earlier, disordered thoughts. After returning to Taiwan, I began sorting through those experiences and looking back at the stories that had unfolded on this land.

This article is a commemoration, and also an annotation to my own past. I walked through many cities and compared the slight similarities among them. During my years of study in Germany, moving between different cities, I could only be a temporary passerby. What kind of life annotations did those scenes leave for me? I felt a certain distance from the land of my own hometown, piecing together past memories from elsewhere. Returning to Taiwan, I began to ask what kind of interesting information or vision I might offer to this land.

Dialogue with Space

Looking back on those situations, I tried to compare things from my own point of view and from the viewpoint of others. Between crossed times and spaces, a stage of real and imagined stories appeared, into which I placed certain inner fantasies and expectations. The writing may begin from history, fragments of urban life, city facilities, spatial architecture, or from ordinary things that reveal a special meaning: habits of living, the personality of a place, public values and cultural forms. At the same time, enough documents and references are needed as support. I do not want to rely on academic or difficult language; instead, I want to organize themes and assemble memories to build the later body of writing. Some chapters may be linked to one another, some may be classified as urban studies, and some may stand as an imagined ideal vision.

Calvino's Invisible Cities is a book I return to again and again. In its fictional stories, the smallest details of a city open onto a vast urban vision. Ordinary matters of daily life can be personified, allowing a clear stage to form in the mind. To see the city from the perspective of people, and to see people from the perspective of the city: this is the connection between people, space and urban life. If people have personalities, can a city also be felt as having a strong personality? After people shape the city, the city also shapes people's character. In writing about small things, I hope to piece together the spirit of place and ask how fragments of historical imagery are related to one another.
`),
    essay_de: paragraphs(`
Ausgangspunkt

Als ich begann, über Raum zu schreiben, hatte ich noch keine klare Vorstellung davon, welche räumlichen Fragen mich beschäftigten, und auch keine feste Haltung. Das Jahr 2014 wurde zum Ausgangspunkt dieses Schreibprojekts: Ich wollte in meinen früheren, ungeordneten Gedanken nach Spuren suchen. Nach meiner Rückkehr nach Taiwan begann ich, diese Erfahrungen zu ordnen und die Geschichten dieses Landes neu zu betrachten.

Dieser Text ist eine Erinnerung und zugleich eine Anmerkung zu meiner eigenen Vergangenheit. Ich ging durch viele Städte und verglich ihre kleinen Ähnlichkeiten. Während meines Studiums in Deutschland war ich zwischen verschiedenen Städten unterwegs und blieb doch nur ein vorübergehender Gast. Welche Lebensnotizen haben diese Szenen in mir hinterlassen? Dem Land meiner eigenen Heimat fühlte ich mich in gewisser Weise fremd; in der Ferne setzte ich frühere Erinnerungen neu zusammen. Nach meiner Rückkehr nach Taiwan fragte ich mich, welche interessanten Hinweise oder Visionen ich diesem Land anbieten könnte.

Dialog mit dem Raum

Wenn ich an jene Situationen zurückdenke, vergleiche ich sie aus meiner eigenen Perspektive und aus der Perspektive anderer. Zwischen verschränkten Zeiten und Räumen entsteht eine Bühne aus realen und imaginären Geschichten, in die ich innere Fantasien und Erwartungen einfüge. Die Themen reichen von Geschichte, Fragmenten des städtischen Lebens, städtischen Einrichtungen und Architektur bis zu gewöhnlichen Dingen, in denen sich besondere Bedeutungen finden lassen: Lebensgewohnheiten, die Eigenart eines Raumes, öffentliche Werte und kulturelle Formen. Zugleich braucht es ausreichend Dokumente und Belege. Ich möchte nicht mit akademischen oder schwierigen Begriffen arbeiten, sondern durch thematische Ordnung und zusammengesetzte Erinnerungen den späteren Inhalt aufbauen. Manche Kapitel können miteinander verbunden sein, manche als Stadtforschung gelesen werden, andere als Vorstellung einer idealen Vision.

Calvinos Unsichtbare Städte ist ein Buch, zu dem ich immer wieder zurückkehre. In den fiktiven Geschichten zeigt sich aus den kleinsten Dingen einer Stadt eine zugleich feine und weite urbane Sicht. Alltägliche Kleinigkeiten lassen sich personifizieren und bilden im Kopf eine klare Bühne. Die Stadt aus der Perspektive des Menschen zu betrachten und den Menschen aus der Perspektive der Stadt zu sehen: darin liegt die Verbindung zwischen Mensch, Raum und Urbanität. Wenn Menschen eine Persönlichkeit haben, kann dann auch eine Stadt eine starke Persönlichkeit besitzen? Nachdem Menschen die Stadt formen, formt die Stadt wiederum den Charakter der Menschen. Beim Schreiben über kleine Dinge möchte ich den Geist des Ortes zusammensetzen und fragen, welche Beziehungen zwischen den Fragmenten historischer Bilder bestehen.
`),
    image_alt_en: 'Starting Point',
    image_alt_de: 'Ausgangspunkt',
    image_caption_en: 'Starting Point',
    image_caption_de: 'Ausgangspunkt',
  },
  'w-hallo-servus-2026': {
    title_en: 'Land and Cultural Narratives IV: Hallo! Servus! Barter, Street Humanity and Urban Order',
    title_de: 'Land und kulturelle Erzählungen IV: Hallo! Servus! Tauschhandel, Menschlichkeit auf der Straße und städtische Ordnung',
    note_en: 'Beginning with the everyday greeting "Hallo! Servus!", the project turns barter into a street-level method for observing how urban order, human warmth and public space meet.',
    note_de: 'Ausgehend von der alltäglichen Begrüßung "Hallo! Servus!" nutzt das Projekt Tauschhandel als Methode, um das Zusammenspiel von städtischer Ordnung, menschlicher Wärme und öffentlichem Raum zu beobachten.',
    essay_en: paragraphs(`
Hallo! Servus!

Barter, Street Humanity and Urban Order

1. Opening Urban Observation with a Greeting

It begins with the greeting "Hallo! Servus!" One everyday salutation can start an observation: how a city is seen, touched and understood. What travelers remember first is often the street vendor. A brief conversation can exchange a great deal of local information. The small scene formed by vendors, passersby and space is one of the sharpest entry points into urban vitality.

Proposition: In different systems and cultures, how does street trade shape the rhythm of a city and its social relations? Can barter reset the way we imagine value and trust?

2. Research Background and Comparative Observation: Taiwan, Johannesburg and Germany

Taiwan's street vendors are known for mobility and flexibility, replacing storefronts with handcarts, small trucks or scooters. Regulations and inspections persist, yet low rent and high flexibility respond to real needs of daily life; a casual greeting quickly narrows the distance of exchange.

In Johannesburg, many street vendors are migrant workers from other African countries, making a living on sidewalks and plazas for long hours. They trade labor for basic subsistence and reveal the economic resilience of groups at the urban margins.

In Germany, street vendors are constrained by business hours and spatial regulations. They are usually fixed, compliant and less mobile, with a clear sense of order. When shops close on weekends, a gap in service opens for street vendors.

Together the three places form a spectrum: from Taiwan's high mobility and weak legality to Germany's high order and low mobility; Johannesburg stands outside the spectrum, marking the survival strategies of mobile populations. These differences reflect the layers produced by systems, economies and cultures of public space.

3. Why Mobility? A Forced Choice and an Echo of Urban Need

When the economy is weak, many people turn to small mobile businesses, keeping rent and fixed costs as low as possible. Even when they face inspection and fines, they still choose to go out onto the street. Handcarts, trucks and scooters become substitutes for storefronts, closer to the street, closer to people, and better able to catch fragmented market demand.

Curatorial position: mobile vending is never a single issue. It is a negotiation among urban governance, tax fairness, public health, traffic safety and the right to survive. Its existence is an echo of real urban need.

4. Barter and Values: Unequal Exchange and Psychological Value

Barter is used here as a methodology. It does not require equivalence. Exchange is built on mutual need and trust. Value is never determined only by price; it also includes memory, cultural meaning and the relationship itself.

Trust as ground. Money is an efficient tool of transaction, but it is not the only option. When financial trust is shaken, as during a financial crisis, barter becomes a way of life that can be reconsidered.

Digital extension. Various exchange platforms online show that non-monetary value is being summoned again within new social infrastructures.

Curatorial interpretation: we neither romanticize barter nor deny money. What we do is restore "exchange" to the formation and negotiation of social relations. Here, value can be spoken, shared and jointly defined.

5. Methodology of Action: Contact, Dialogue, Exchange and Feedback in Public Space

I use a mobile stall as the vehicle of action, entering streets and pedestrian flows through five steps.

Contact. Begin with an everyday greeting to lower the threshold of conversation.

Dialogue. The stall displays everyday objects, foods, books and cultural items from Taiwan, letting each object speak.

Exchange. Barter without fixed prices, inviting the other person to offer an object, or a promise, in return.

Hospitality. Taiwanese fengcha, the offering of tea, is used as a gesture of welcome to soften strangeness.

Feedback. Responses and observation notes are collected around two core questions: "Do you know where Taiwan is?" and "How do you view an economy of exchange?"

The viewer's role is transformed: from someone being observed into a participant, co-author and member of a community of value.

6. Vehicle and Visual Language: Modified Pram, Walking Rhythm and Hakka Floral Cloth

Why a pram? In European cities, strolling with a pram is an ordinary scene. It is approachable, slow and easy to stop, giving the performer a natural cover between active and passive presence while creating moments for encounter. Its visual identity is strong.

Why not a bicycle? A bicycle does the opposite. It suggests faster passage and a stronger sense of purpose, making conversation harder to begin and people harder to keep.

Material and culture. The body of the pram is covered with Hakka floral cloth, wrapping a Western industrial object in traditional patterns. Eastern imagery and Western everyday object meet in an immediate intercultural visual tension, drawing people closer. It also carries both mobility and transport, echoing the nature of mobile vending.

7. Why Germany? Gaps within Order, Encounters at Walking Speed

German cities have complete public-space systems and a walking-based rhythm, providing the conditions for slow exchange. Weekend shop closures create gaps in service. Temporary street selling occupies a legal gray zone here, so the project positions itself as an action test. It is not for profit, but an artistic probe into the relations among system, everyday life and human warmth.

8. Rereading the City and Public Space: Seeing System and Belonging through Vendors

Vendors are often the first impression through which we understand a city. They turn open space from an abstraction into a place where residents can move, pause and exchange freely.

Fixed vendors build identity through time and location; mobile vendors survive in the gaps of law and space, with less stable income.

Whether in developing or developed countries, public space is the product of social processes. Regulations, class and cultural imagination are all made concrete through details such as whether one may set up a stall and where one may stop.

Calvino reminds us that objects on a stall often shine for the sake of something else: elegance, power, learning, luxury. Their value lies not in themselves but in everything they symbolize. This is precisely the translation of value that the project asks viewers to experience physically.

9. Exhibition Presentation and Archive

Site: the modified pram installation, tea for hospitality, Taiwanese objects available for exchange, and a wall recording transactions and conversations.

Archive: interaction notes, including lists of exchanges, fragments of stories and audience quotations; image documentation of routes, stopping points and conversations; comparative notes on street-vending regulations in Taiwan, Johannesburg and Germany.

10. Expected Impact and Evaluation

Cultural understanding: whether the audience's recognition of and interest in Taiwanese culture increases, measured through questionnaires and feedback cards.

Trust experiment: the success rate of exchanges without fixed prices, the duration of negotiation and the proportion of repeated interactions.

Publicness discussion: whether viewers' views on vendors and public-space management change, and whether they offer constructive suggestions for local systems.

Aesthetic outcome: using the design language of pram, floral cloth and street to awaken a perception of human warmth within order.

11. Conclusion: Turn Off the Price, Let Relationships Speak

Barter is not a return to the past. It shifts the anchor of value from price to relationship. In the slow moments of greeting, serving tea and exchanging, the city reveals its heartbeat. It has not only rules but human warmth, not only efficiency but waiting. This is what we want to experience with the audience: reinventing trust within order.
`),
    essay_de: paragraphs(`
Hallo! Servus!

Tauschhandel, Menschlichkeit auf der Straße und städtische Ordnung

1. Stadtbeobachtung mit einer Begrüßung eröffnen

Es beginnt mit der Begrüßung "Hallo! Servus!" Ein alltäglicher Gruß kann eine Beobachtung auslösen: wie eine Stadt gesehen, berührt und verstanden wird. Woran sich Reisende oft zuerst erinnern, ist der Straßenverkauf. Ein kurzer Dialog kann viele lokale Informationen austauschen. Die kleine Szene aus Händlerinnen und Händlern, Passanten und Raum ist einer der schärfsten Zugänge zur Vitalität einer Stadt.

Fragestellung: Wie formt Straßenhandel in unterschiedlichen Systemen und Kulturen den Rhythmus einer Stadt und ihre sozialen Beziehungen? Kann Tauschhandel unsere Vorstellung von Wert und Vertrauen neu ordnen?

2. Forschungshintergrund und vergleichende Beobachtung: Taiwan, Johannesburg und Deutschland

Taiwans Straßenverkäuferinnen und Straßenverkäufer sind für Mobilität und Flexibilität bekannt. Handwagen, kleine Lastwagen oder Motorroller ersetzen das Ladenlokal. Vorschriften und Kontrollen bleiben bestehen, doch niedrige Kosten und hohe Beweglichkeit reagieren auf reale Bedürfnisse des Alltags; ein beiläufiger Gruß verkürzt sofort die Distanz des Austauschs.

In Johannesburg sind viele Straßenhändlerinnen und Straßenhändler Arbeitsmigrantinnen und Arbeitsmigranten aus anderen afrikanischen Ländern. Sie verdienen auf Gehwegen und Plätzen über lange Stunden ihren Lebensunterhalt. Ihre Arbeit zeigt die ökonomische Widerstandskraft von Gruppen am Rand der Stadt.

In Deutschland wird Straßenverkauf durch Öffnungszeiten und räumliche Regeln begrenzt. Er ist meist ortsgebunden, regelkonform und weniger mobil, mit einem deutlichen Sinn für Ordnung. Wenn Geschäfte am Wochenende geschlossen sind, entsteht eine Versorgungslücke, in der Straßenverkauf sichtbar werden kann.

Die drei Orte bilden zusammen ein Spektrum: von Taiwans hoher Mobilität und schwacher Legalität bis zu Deutschlands hoher Ordnung und geringer Mobilität; Johannesburg markiert außerhalb dieses Spektrums die Überlebensstrategien mobiler Bevölkerungen. Diese Unterschiede zeigen die Schichten, die Systeme, Ökonomien und Kulturen des öffentlichen Raums hervorbringen.

3. Warum Mobilität? Eine erzwungene Wahl und ein Echo städtischer Bedürfnisse

Wenn die Wirtschaft schwach ist, wenden sich viele Menschen kleinen mobilen Geschäften zu, um Miete und feste Kosten möglichst niedrig zu halten. Selbst bei Kontrollen und Strafen wählen sie weiterhin die Straße. Handwagen, Lastwagen und Motorroller werden zu Ersatzformen des Geschäfts, näher an der Straße, näher an den Menschen und besser geeignet, fragmentierte Nachfrage aufzufangen.

Kuratorische Position: Mobiler Verkauf ist nie ein Einzelproblem. Er ist eine Aushandlung zwischen Stadtverwaltung, Steuergerechtigkeit, öffentlicher Hygiene, Verkehrssicherheit und dem Recht auf Überleben. Seine Existenz ist ein Echo realer städtischer Bedürfnisse.

4. Tauschhandel und Werte: Ungleicher Austausch und psychologischer Wert

Tauschhandel wird hier als Methode verwendet. Er verlangt keine Gleichwertigkeit. Austausch entsteht aus gegenseitigem Bedarf und Vertrauen. Wert wird nicht nur durch Preis bestimmt; er umfasst Erinnerung, kulturelle Bedeutung und die Beziehung selbst.

Vertrauen als Grundlage. Geld ist ein effizientes Werkzeug des Handels, aber nicht die einzige Möglichkeit. Wenn finanzielles Vertrauen erschüttert ist, etwa in einer Finanzkrise, wird Tauschhandel wieder als Lebensweise denkbar.

Digitale Erweiterung. Verschiedene Online-Plattformen zeigen, dass nichtmonetärer Wert in neuen sozialen Infrastrukturen erneut aufgerufen wird.

Kuratorische Deutung: Wir romantisieren Tauschhandel nicht und lehnen Geld nicht ab. Wir führen den "Austausch" zurück in die Bildung und Verhandlung sozialer Beziehungen. Hier kann Wert ausgesprochen, geteilt und gemeinsam bestimmt werden.

5. Methodik der Aktion: Kontakt, Dialog, Austausch und Rückmeldung im öffentlichen Raum

Ich benutze einen mobilen Stand als Träger der Aktion und betrete Straßen und Fußgängerströme in fünf Schritten.

Kontakt. Mit einer alltäglichen Begrüßung wird die Schwelle zum Gespräch gesenkt.

Dialog. Der Stand zeigt Alltagsobjekte, Lebensmittel, Bücher und kulturelle Dinge aus Taiwan; jedes Objekt darf sprechen.

Austausch. Tausch ohne feste Preise lädt das Gegenüber ein, ein Objekt oder ein Versprechen zurückzugeben.

Gastfreundschaft. Taiwanisches Fengcha, das Anbieten von Tee, wird als Geste der Offenheit eingesetzt, um Fremdheit zu mildern.

Rückmeldung. Antworten und Beobachtungen werden zu zwei Kernfragen gesammelt: "Wissen Sie, wo Taiwan liegt?" und "Wie betrachten Sie eine Ökonomie des Austauschs?"

Die Rolle des Publikums verändert sich: von Beobachteten zu Teilnehmenden, Mitautorinnen und Mitautoren sowie Mitgliedern einer Gemeinschaft des Wertes.

6. Fahrzeug und visuelle Sprache: Umgebauter Kinderwagen, Gehrhythmus und Hakka-Blumenstoff

Warum ein Kinderwagen? In europäischen Städten ist das Spazieren mit einem Kinderwagen eine gewöhnliche Szene. Er wirkt zugänglich, langsam und leicht anzuhalten. Der Performer erhält dadurch eine natürliche Tarnung zwischen aktiver und passiver Präsenz, und Begegnungen können entstehen. Die visuelle Identität ist stark.

Warum kein Fahrrad? Ein Fahrrad erzeugt das Gegenteil. Es deutet auf schnellere Bewegung und stärkere Zielgerichtetheit hin; Gespräche beginnen schwerer und Menschen bleiben weniger leicht stehen.

Material und Kultur. Der Körper des Kinderwagens ist mit Hakka-Blumenstoff bedeckt und umhüllt ein westliches industrielles Objekt mit traditionellen Mustern. Östliche Bildsprache und westlicher Alltagsgegenstand treffen in einer unmittelbaren interkulturellen Spannung aufeinander und ziehen Menschen näher heran. Zugleich trägt er Mobilität und Transport in sich und spiegelt damit das Wesen des mobilen Verkaufs.

7. Warum Deutschland? Lücken innerhalb der Ordnung, Begegnungen im Gehtempo

Deutsche Städte besitzen vollständige Systeme des öffentlichen Raums und einen fußläufigen Rhythmus; sie bieten Bedingungen für langsamen Austausch. Die Schließung von Geschäften am Wochenende erzeugt Versorgungslücken. Temporärer Straßenverkauf bewegt sich hier in einer rechtlichen Grauzone, daher versteht sich das Projekt als Aktionstest. Es ist nicht gewinnorientiert, sondern eine künstlerische Untersuchung der Beziehungen zwischen System, Alltag und menschlicher Wärme.

8. Stadt und öffentlichen Raum neu lesen: System und Zugehörigkeit durch Verkäufer sehen

Verkäuferinnen und Verkäufer sind oft der erste Eindruck, durch den wir eine Stadt verstehen. Sie verwandeln offenen Raum von einer Abstraktion in einen Ort, an dem Bewohnerinnen und Bewohner sich bewegen, anhalten und austauschen können.

Ortsfeste Verkäuferinnen und Verkäufer bauen durch Zeit und Standort Identität auf; mobile Verkäuferinnen und Verkäufer überleben in den Lücken von Gesetz und Raum, mit weniger stabilem Einkommen.

Ob in Entwicklungs- oder Industrieländern: Öffentlicher Raum ist das Ergebnis sozialer Prozesse. Vorschriften, Klasse und kulturelle Vorstellung werden in Details konkret, etwa darin, ob man einen Stand aufbauen darf und wo man anhalten kann.

Calvino erinnert daran, dass Dinge auf einem Stand oft für etwas anderes leuchten: Eleganz, Macht, Gelehrsamkeit, Luxus. Ihr Wert liegt nicht nur in ihnen selbst, sondern in allem, was sie symbolisieren. Genau diese Übersetzung von Wert möchte das Projekt körperlich erfahrbar machen.

9. Ausstellung und Archiv

Ort: die Installation des umgebauten Kinderwagens, Tee als Gastfreundschaft, taiwanische Objekte für den Austausch und eine Wand zur Aufzeichnung von Tauschhandlungen und Gesprächen.

Archiv: Interaktionsnotizen mit Listen der getauschten Dinge, Erzählfragmenten und Zitaten des Publikums; fotografische Dokumentation von Routen, Haltepunkten und Gesprächen; vergleichende Notizen zu Regeln des Straßenverkaufs in Taiwan, Johannesburg und Deutschland.

10. Erwartete Wirkung und Auswertung

Kulturelles Verständnis: Ob die Wahrnehmung und das Interesse des Publikums an taiwanischer Kultur wachsen, gemessen durch Fragebögen und Rückmeldekarten.

Vertrauensversuch: Erfolgsquote von Tauschhandlungen ohne feste Preise, Dauer der Verhandlung und Anteil wiederholter Interaktionen.

Diskussion über Öffentlichkeit: Ob sich die Sicht des Publikums auf Straßenverkauf und Verwaltung öffentlicher Räume verändert und ob konstruktive Vorschläge für lokale Systeme entstehen.

Ästhetisches Ergebnis: Durch die Designsprache von Kinderwagen, Blumenstoff und Straße wird eine Wahrnehmung menschlicher Wärme innerhalb von Ordnung geweckt.

11. Schluss: Den Preis ausschalten, die Beziehungen sprechen lassen

Tauschhandel ist keine Rückkehr in die Vergangenheit. Er verschiebt den Anker des Wertes vom Preis zur Beziehung. In den langsamen Momenten von Begrüßung, Tee und Austausch zeigt die Stadt ihren Herzschlag. Sie besitzt nicht nur Regeln, sondern auch menschliche Wärme; nicht nur Effizienz, sondern auch Warten. Genau das möchten wir mit dem Publikum erfahren: Vertrauen innerhalb der Ordnung neu erfinden.
`),
    image_alt_en: 'Hallo! Servus! Barter, Street Humanity and Urban Order',
    image_alt_de: 'Hallo! Servus! Tauschhandel, Menschlichkeit auf der Straße und städtische Ordnung',
    image_caption_en: 'Land and Cultural Narratives IV: Hallo! Servus! Barter, Street Humanity and Urban Order',
    image_caption_de: 'Land und kulturelle Erzählungen IV: Hallo! Servus! Tauschhandel, Menschlichkeit auf der Straße und städtische Ordnung',
  },
};

function applyTranslation(article) {
  return {
    ...article,
    ...(articleTranslations[article.id] || {}),
  };
}

function removeMarkedBlock(html) {
  let output = html;
  while (output.includes(start)) {
    const startIndex = output.indexOf(start);
    const lineStart = output.lastIndexOf('\n', startIndex);
    const endIndex = output.indexOf(end, startIndex);
    if (endIndex === -1) break;
    const lineEnd = output.indexOf('\n', endIndex + end.length);
    const from = lineStart === -1 ? startIndex : lineStart;
    const to = lineEnd === -1 ? endIndex + end.length : lineEnd;
    output = output.slice(0, from) + '\n' + output.slice(to + 1);
  }
  return output;
}

function decodeHtml(value = '') {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => String.fromCodePoint(parseInt(num, 10)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function uniq(list) {
  return [...new Set(list.filter(Boolean))];
}

function extractPostBody(html) {
  const match = html.match(/<div[^>]+class=["'][^"']*post-body[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<div[^>]+class=["'][^"']*post-footer/i);
  return match ? match[1] : '';
}

function extractImages(body) {
  return uniq(
    [...body.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)]
      .map((match) => decodeHtml(match[1]))
      .filter((url) => !url.includes('blogger.com/img/icon'))
  );
}

function textFromBody(body) {
  let text = body
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/<\/(?:p|div|h\d|li)>/gi, '\n')
    .replace(/<[^>]+>/g, '');
  text = decodeHtml(text)
    .replace(/\r/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim();

  text = text
    .replace(/([。！？])([一二三四五六七八九十]、)/g, '$1\n$2')
    .replace(/(。)(SUBBUS｜Kuratorisches Projekt)/g, '$1\n$2')
    .replace(/([。！？])(Ausstellungszeit|展覽時間)/g, '$1\n$2')
    .replace(/([。！？])(\d+\.\s)/g, '$1\n$2');

  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !['分享', '取得連結', 'Facebook', 'Twitter', 'Pinterest', '電子郵件', '其他應用程式'].includes(line));
}

async function fetchArticle(source) {
  const response = await fetch(source.href, {
    headers: {
      'user-agent': 'Mozilla/5.0 RAUM portfolio updater',
      accept: 'text/html,application/xhtml+xml',
    },
  });
  if (!response.ok) throw new Error(`Fetch failed ${response.status}: ${source.href}`);

  const html = await response.text();
  const body = extractPostBody(html);
  const images = extractImages(body);
  const essay = textFromBody(body);
  const note = essay.find((line) => line.length > 30 && line !== source.title) || essay[1] || source.title;

  return applyTranslation({
    id: source.id,
    year: source.year,
    month: source.month,
    title_zh: source.title,
    title_en: source.title,
    title_de: source.title,
    note_zh: note,
    note_en: note,
    note_de: note,
    essay_zh: essay.length ? essay : [`請點選下方「閱讀原文」前往 Blogger 查看完整文章。`],
    essay_en: essay.length ? essay : [`Use the original-source link below to read the full post on Blogger.`],
    essay_de: essay.length ? essay : [`Über den Originallink unten kann der vollständige Beitrag auf Blogger gelesen werden.`],
    href: source.href,
    image: images[0] || '',
    images,
    image_alt_zh: source.title,
    image_alt_en: source.title,
    image_alt_de: source.title,
    image_caption_zh: source.title,
    image_caption_en: source.title,
    image_caption_de: source.title,
  });
}

function buildBlock(articles) {
  return `
${start}
const RAUM_WRITING_UPDATES_20260623 = ${JSON.stringify(articles, null, 2)};
const RAUM_LAND_NARRATIVE_TITLES = ${JSON.stringify(landNarrativeTitles, null, 2)};
const RAUM_WRITING_UPDATE_IDS = new Set(RAUM_WRITING_UPDATES_20260623.map((item) => item.id));
for (let index = WRITINGS.length - 1; index >= 0; index -= 1) {
  const writing = WRITINGS[index];
  if (
    Array.isArray(writing) ||
    RAUM_WRITING_UPDATE_IDS.has(writing.id) ||
    RAUM_WRITING_UPDATES_20260623.some((item) => item.href === writing.href) ||
    writing.href === 'https://genius912.blogspot.com/2015/07/bus-geschmacke.html'
  ) {
    WRITINGS.splice(index, 1);
  }
}
WRITINGS.unshift(...RAUM_WRITING_UPDATES_20260623);
WRITINGS.forEach((writing) => {
  const title = RAUM_LAND_NARRATIVE_TITLES[writing.id];
  if (!title) return;
  writing.title_zh = title.zh || writing.title_zh;
  writing.title_en = title.en || writing.title_en || writing.title_zh;
  writing.title_de = title.de || writing.title_de || writing.title_zh;
  writing.image_alt_zh = title.zh || writing.image_alt_zh || writing.title_zh;
  writing.image_alt_en = title.en || writing.image_alt_en || writing.title_en;
  writing.image_alt_de = title.de || writing.image_alt_de || writing.title_de;
  writing.image_caption_zh = title.zh || writing.image_caption_zh || writing.title_zh;
  writing.image_caption_en = title.en || writing.image_caption_en || writing.title_en;
  writing.image_caption_de = title.de || writing.image_caption_de || writing.title_de;
});
window.WRITINGS = WRITINGS;
${end}
`;
}

let html = removeMarkedBlock(readFileSync(file, 'utf8'));
const articleResults = await Promise.all(sources.map(async (source) => {
  try {
    return await fetchArticle(source);
  } catch (error) {
    console.warn(`Article update skipped: ${source.href} (${error.message})`);
    return null;
  }
}));
const articles = articleResults.filter(Boolean);
const block = buildBlock(articles);

if (html.includes('const LINKS = [')) {
  html = html.replace(/\nconst LINKS = \[/, `${block}\nconst LINKS = [`);
} else {
  throw new Error('Cannot find LINKS insertion point.');
}

writeFileSync(file, html, 'utf8');