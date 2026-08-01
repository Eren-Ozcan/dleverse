# Fandom/Topic Candidates — Expanded Pool + Risk Assessment

> This document is not legal advice. It is an **estimate** based on general
> knowledge, on how long precedent "-dle" sites (Loldle, Pokedle, Naruto­dle
> etc.) have actually stayed up, and on the general logic of copyright/trademark
> law (parody/informational use vs. use of character artwork/logos). It must be
> reviewed by a lawyer before an actual release — especially the Medium and High
> risk categories. If a complaint arrives, the most likely outcome is generally
> **not a fine, but removal from the store / suspension of the developer account
> on repeat infringement**; damages lawsuits are rare for small-scale/ad-free
> projects.

Risk is determined along two axes: **(1)** the type of data — is it a real
person/public information (low) or fictional character artwork/quotes (high)?
**(2)** the rights holder's history of aggressiveness — is a large
studio/publisher actively monitoring?

## How many fields/questions should be used?

Research: LoLdle's Classic mode uses 8 categories (Position, Species, Gender,
Resource, Range, Region, Release Year, Attack Type); most versions of Pokédle
use 4-5 modes/categories (separate modes such as Classic/Silhouette/Cry/
Description, with Classic alone comparing ~5 stats). There is no fixed industry
rule, but **5 fields** is the most common "sweet spot" — it gives enough clues,
yet stays hard enough not to end the game on the first guess. In this project the
**default is 5 fields**, with flexibility between 4-6 depending on the nature of
the IP (e.g. 5 objective scientific fields for the Periodic Table, 3 for
Streamers due to data scarcity).

---

## 🟢 Low Risk — real person / public data, no character artwork needed

These 50 entries are numbered in data set production order. **Entries 1-10 were
built in this implementation with a full data set (50 records × 5 fields)** — the
selection criterion was not popularity alone, but **the topics with the lowest
risk of stating incorrect information across 50 records** (mostly historical/
retired figures or purely scientific data, not fast-decaying data such as current
transfers or follower counts). Entries 11-50 are waiting in the pool and can be
filled in later using the same pattern.

| # | Topic | Data Set | Note |
|---|---|---|---|
| 1 | Countries of the World | ✅ Built (50) | Geography, zero person-risk |
| 2 | NBA Legends | ✅ Built (50) | Weighted toward retired+legendary players, stats are public |
| 3 | Süper Lig Legends | ✅ Built (50) | "Club they are most associated with" — career-wide, not the current squad |
| 4 | Periodic Table Elements | ✅ Built (50) | No people, entirely objective scientific data |
| 5 | Historical World Leaders | ✅ Built (50) | Public historical knowledge, coarse fields (century/title) |
| 6 | Nobel Prize-Winning Scientists | ✅ Built (50) | Official/objective record (year, field, country) |
| 7 | Famous Painters | ✅ Built (50) | Most works are public domain, art history is public |
| 8 | Olympic Legends | ✅ Built (50) | Medal counts are official record |
| 9 | ATP/WTA Tennis Legends | ✅ Built (50) | Grand Slam counts are official record (must be updated for active players) |
| 10 | Famous Composers (Classical Music) | ✅ Built (50) | Entirely historical, no living people |
| 11 | Turkish Kick/Twitch Streamers | ✅ Built (50) | Real names/categories verified via web search; tenure ranges are rough estimates — must be re-verified one by one before expanding to 80 |
| 12 | Premier League Legends | ✅ Built (50) | Same pattern as Süper Lig: "club they are most associated with" |
| 13 | Formula 1 Drivers (all time) | ✅ Built (40) | With real Wikimedia Commons photos+credits; could be expanded to 80 |
| 14 | World Capitals (separate flag/population focus) | — | A variation on the Countries pack with a different field set |
| 15 | Famous Philosophers | ✅ Built (40) | Historical, public; bust/statue images used for the ancient period |
| 16 | Famous Inventors/Scientists (non-Nobel) | — | Public |
| 17 | Global Pop Stars (real people, bio) | — | Use a text bio instead of an image |
| 18 | Classic Rock Bands/Members | ✅ Built (50) | Based on formation year/genre, real Commons photo |
| 19 | World Chess Champions | ✅ Built (39) | Small but loyal audience, entirely public; Classical+FIDE+Women's titles together |
| 20 | Famous Chefs/Culinary World | ✅ Built (40) | Public figures; includes 2 Turkish chefs (Fatih Tutak, Mehmet Gürs) |
| 21 | Mountains/Peaks of the World | ✅ Built (39) | Pure geography, real Commons photo (see the 2026-07-24 update note) |
| 22 | Rivers of the World | ✅ Built (42) | Pure geography, real Commons photo |
| 23 | Nobel Prize-Winning Authors (Literature) | ✅ Built (40) | Separate from #6/#40, minimal overlap; includes Orhan Pamuk and Bob Dylan |
| 24 | Famous Explorers | ✅ Built (40) | Historical, public; real Commons portrait/engraving/statue |
| 25 | Empires of the World (historical) | ✅ Built (40) | Mix of geography+history, not people; no images (emoji-clue) |
| 26 | Boxing Legends | ✅ Built (40) | Public sports record, real Commons photo |
| 27 | Track & Field Legends (100m, marathon etc.) | ✅ Built (40) | Public record data, real Commons photo |
| 28 | Swimming Legends | ✅ Built (40) | Public record data, real Commons photo |
| 29 | Formula 1 Teams/History | ✅ Built (45) | Corporate data, not people; most logos excluded |
| 30 | Languages of the World | — | Pure linguistics trivia |
| 31 | Turkish Athletes (general, Olympic) | — | Public but requires research |
| 32 | Astronauts/Cosmonauts | ✅ Built (40) | Public, space history; broad variety themed on each country's "first astronaut" |
| 33 | Nobel Peace Prize Laureates | ✅ Built (58) | Built as a separate pack, real Commons photo |
| 34 | World Religions (conceptual trivia) | — | Concepts, not people |
| 35 | Famous Sculptors | ✅ Built (40) | Similar pattern to #7; statue/bust images used for the ancient period |
| 36 | Renaissance Artists (subset) | ✅ Built (40) | A more specific subset of #7; name overlap with #7 minimized |
| 37 | Natural Wonders of the World | ✅ Built (44) | Pure geography, real Commons photo |
| 38 | UNESCO World Heritage Sites | ✅ Built (40) | Pure geography/culture; cultural/architectural sites only, no overlap with #37 |
| 39 | Famous Architects | ✅ Built (40) | Public, work-based; architect portraits only, no photos of buildings/works |
| 40 | Classic Literature Authors (novels) | ✅ Built (40) | Novel-focused; only author portraits used, not book covers |
| 41 | World Currencies (trivia) | ✅ Built (40) | Economics trivia, not people; no images (emoji-clue) |
| 42 | Famous Journalists/Photojournalists | ✅ Built (40) | Public figures; event-based, neutral biographical information |
| 43 | Formula 1 Circuits | ✅ Built (39) | Corporate/geography, not people; no images (emoji-clue) |
| 44 | World Airlines (trivia) | ✅ Built (39) | Companies, not people; no images (emoji-clue) |
| 45 | Famous Entrepreneurs (tech, historical) | — | Public figures, must be selected carefully |
| 46 | Cricket Legends | ✅ Built (40) | Public sports record, real Commons photo; global but niche in Turkey |
| 47 | Rugby Legends | ✅ Built (40) | 13 countries, retired legends; Commons photo + credit pattern; niche in Turkey |
| 48 | Volleyball Legends (strong in Turkey) | ✅ Built (40) | 12 countries, indoor + beach; Commons photo + credit pattern |
| 49 | Table Tennis Legends | — | Niche but public |
| 50 | Archery/Wrestling Legends (traditional Turkish sports) | — | Turkey-specific, low risk, low competition |

## 🟡 Medium Risk — touches a franchise but is mostly real people/text, no artwork

| # | Topic | Note |
|---|---|---|
| 51 | Turkish TV series actors (role/bio based) | ✅ Built (40) — Not character/scene imagery, only the actor's own Commons portrait + role metadata |
| 52 | Hollywood actors (filmography) | ✅ Built (40) — Same principle: actor portraits only, no scene/costume imagery |
| 53 | Directors (filmography trivia) | Text-heavy |
| 54 | Famous TV series (meta info: cast/year/genre) | Relatively safe if no scene imagery is used |
| 55 | Retro/classic video games (studio information) | Older, less closely monitored IPs |
| 56 | Documentary/nature series (Discovery, Nat Geo) | Format-based, factual |
| 57 | Grammy-winning albums | Low-to-medium if album covers are not used |
| 58 | Stand-up comedians (Turkish + global) | Use of quotes is a grey area |
| 59 | Turkish cinema actors (Yeşilçam era) | Historical, but studio rights may be tangled |
| 60 | Esports teams/players (person-based) | Tournaments are public but brands are sensitive |
| 61 | Podcasters (Turkish + global) | Relatively new, public but brand is a grey area |
| 62 | Fashion designers | Public figures, brand names may be sensitive |
| 63 | Famous photographers (artwork may be copyrighted) | Watch out for copyright in the works |
| 64 | TV hosts / game show hosts | Format may be copyrighted |
| 65 | Reality show contestants | Production company rights are a grey area |

## 🔴 High Risk — major studios, active trademark/copyright enforcement, character artwork/quotes required

| # | Topic | Note |
|---|---|---|
| 66 | One Piece | Crowded market (onepiecedle exists), Toei/Shueisha actively enforce |
| 67 | Naruto | Narutodle already exists — direct competition + IP risk |
| 68 | Pokémon | Nintendo/Game Freak are among the most aggressive enforcers in the world |
| 69 | Marvel Cinematic Universe | Disney — very aggressive |
| 70 | DC (Batman/Superman etc.) | WBD — aggressive |
| 71 | Star Wars | Disney — very aggressive |
| 72 | Harry Potter | Warner Bros — aggressive |
| 73 | Disney animated characters | The most aggressive rights holder |
| 74 | Dragon Ball | Toei/Bird Studio — active |
| 75 | Attack on Titan | Kodansha — medium-high |
| 76 | Demon Slayer | Aniplex — popular, active |
| 77 | My Hero Academia | Shueisha — active |
| 78 | Game of Thrones | HBO/WBD — aggressive |
| 79 | Breaking Bad | AMC — medium-high |
| 80 | Stranger Things | Netflix — active brand enforcement |
| 81 | The Simpsons | Disney/Fox — very aggressive |
| 82 | Rick and Morty | WBD — aggressive |
| 83 | League of Legends | Loldle already exists + Riot actively enforces |
| 84 | Genshin Impact | miHoYo — active, global |
| 85 | Fortnite | Epic — active |
| 86 | Minecraft | Microsoft — moderately aggressive |
| 87 | Zelda / Nintendo universe | Nintendo — among the most aggressive enforcers |
| 88 | Friends | WBD — aggressive |
| 89 | The Office (US) | NBCUniversal — moderately aggressive |
| 90 | Squid Game | Netflix — very new, very aggressive brand protection |
| 91 | Death Note | Shueisha — active |
| 92 | Jujutsu Kaisen | Shueisha — active, very popular |
| 93 | Chainsaw Man | Shueisha — active |
| 94 | Bleach | Shueisha — active |
| 95 | Hunter x Hunter | Shueisha — active |
| 96 | One Punch Man | Shueisha/Madhouse — medium-high |
| 97 | Spy x Family | Shueisha — new, popular, active |
| 98 | Studio Ghibli films | Ghibli/Disney distribution — very aggressive |
| 99 | Pixar films | Disney — very aggressive |
| 100 | Toy Story / Disney-Pixar universe | Disney — very aggressive |
| 101 | Grand Theft Auto (GTA) | Rockstar/Take-Two — aggressive |
| 102 | Call of Duty | Activision — aggressive |
| 103 | The Witcher | CD Projekt / Netflix cross-IP — medium-high |
| 104 | Red Dead Redemption | Rockstar — aggressive |
| 105 | Superhero comics outside Marvel/DC | Varies, usually a large publisher |
| 106 | Sailor Moon | Toei — active |
| 107 | Yu-Gi-Oh! | Konami — active |
| 108 | Digimon | Bandai — medium-high |
| 109 | Sword Art Online | Aniplex — medium-high |
| 110 | Tokyo Ghoul | Shueisha/Kodansha — medium-high |
| 111 | Fullmetal Alchemist | Square Enix — medium-high |
| 112 | Kimetsu no Yaiba spin-offs | Aniplex — active (same IP as Demon Slayer) |
| 113 | Avatar: The Last Airbender | Nickelodeon/Paramount — medium-high |
| 114 | The Boys | Amazon — active |
| 115 | The Mandalorian | Disney — very aggressive (same IP as Star Wars) |
| 116 | Wednesday (Netflix series) | Netflix — new, aggressive |
| 117 | House of the Dragon | HBO/WBD — aggressive |
| 118 | The Last of Us | Sony/HBO — aggressive |
| 119 | Turkish series universe (Netflix originals) | Netflix — aggressive brand protection |
| 120 | Barbie (Mattel universe) | Mattel — very aggressive |

### 🔴 High Risk — continued

| # | Topic | Note |
|---|---|---|
| 121 | Assassin's Creed | Ubisoft — aggressive |
| 122 | FIFA/EA Sports FC (the brand, not the in-game characters) | EA — highly licence-sensitive |
| 123 | Roblox universe | Roblox Corp — moderately aggressive |
| 124 | Among Us | Innersloth — medium, small studio but active |
| 125 | Five Nights at Freddy's | Scott Cawthon/Blumhouse — medium-high |
| 126 | Rick Riordan universe (Percy Jackson) | Disney distribution — aggressive |
| 127 | Marvel Side Characters (X-Men, secondary Avengers roster) | Disney — very aggressive |
| 128 | Star Trek | Paramount — aggressive |
| 129 | Doctor Who | BBC — aggressive |
| 130 | Sherlock (BBC series) | BBC — medium-high |
| 131 | Peaky Blinders | BBC/Netflix — medium-high |
| 132 | La Casa de Papel (Money Heist) | Netflix — aggressive |
| 133 | Money Heist Korean adaptation etc. | Netflix — aggressive |
| 134 | Dark (Netflix series) | Netflix — aggressive |
| 135 | Peppa Pig | Hasbro — children's IP, very aggressive |
| 136 | Paw Patrol | Nickelodeon — children's IP, aggressive |
| 137 | SpongeBob SquarePants | Nickelodeon/Paramount — very aggressive |
| 138 | Hello Kitty / Sanrio universe | Sanrio — very aggressive |
| 139 | Super Mario universe | Nintendo — among the most aggressive enforcers |
| 140 | Animal Crossing | Nintendo — aggressive |
| 141 | Kirby | Nintendo — aggressive |
| 142 | Fire Emblem | Nintendo — moderately aggressive |
| 143 | Final Fantasy | Square Enix — aggressive |
| 144 | Kingdom Hearts | Square Enix/Disney crossover — very aggressive |
| 145 | Persona / Shin Megami Tensei | Atlus/Sega — medium-high |
| 146 | Elden Ring / FromSoftware universe | FromSoftware/Bandai Namco — medium-high |
| 147 | Dark Souls | FromSoftware — medium-high |
| 148 | Overwatch | Blizzard/Microsoft — aggressive |
| 149 | World of Warcraft | Blizzard — aggressive |
| 150 | Valorant | Riot — aggressive (same company as LoL) |

## 🟡 Medium Risk — continued

| # | Topic | Note |
|---|---|---|
| 151 | Turkish pop/rock bands (active, brand-sensitive names) | Careful if the stage name is a registered trademark |
| 152 | Famous YouTuber production formats (e.g. a specific series/segment name) | The format name may be a trademark |
| 153 | Sports commentators (Turkey) | Public but the link to the broadcaster is a grey area |
| 154 | Famous lyricists (with use of quotes/lyrics) | Quoting lyrics carries copyright risk |
| 155 | K-pop groups (real people, agency brands are sensitive) | Agency (HYBE, SM etc.) brand enforcement is medium-high |
| 156 | History of famous fashion brands (brand trivia) | Use of brand names is a grey area |
| 157 | Commercials / jingles (cultural trivia) | Brand + ad agency copyright is tangled |
| 158 | History of famous sports clubs (without using logos) | Club names are free, logo/kit imagery is risky |
| 159 | Famous stadiums/arenas | Structure/name rights are generally low risk, but sponsor name changes can be confusing |
| 160 | Specific concert tours (name/year trivia) | The tour name may be a trademark |

## 🟢 Low Risk — continued (to bring the pool up to ~200)

| # | Topic | Note |
|---|---|---|
| 161 | Islands of the World (geography) | ✅ Built (44) — Pure geography, real Commons photo |
| 162 | Deserts of the World | ✅ Built (43) — Pure geography, real Commons photo |
| 163 | Lakes of the World | ✅ Built (46) — Pure geography, real Commons photo |
| 164 | Famous Mathematicians | Public, historical |
| 165 | Famous Philosophers (Eastern philosophy) | An expanded version of #15 |
| 166 | Nobel Prize in Economics Laureates | Same pattern as #6/#33, separate field |
| 167 | Historical Wars of the World (conceptual trivia, not people) | Event-based, no person-risk |
| 168 | Ancient Civilizations | ✅ Built (44) — No overlap with Empires (#25), no images (emoji-clue) |
| 169 | World Cuisines (country-based food trivia) | Cultural knowledge, not people/brands |
| 170 | Famous Libraries/Museums | Institutional trivia |
| 171 | Planets and Space Objects | ✅ Built (42) — Scientific, no person-risk, real NASA/ESA photos |
| 172 | World Time Zones / Meridians | Pure geography/science |
| 173 | Famous Seafarers/Explorers (expanded #24) | Historical |
| 174 | World Rail Lines/Stations (trivia) | Infrastructure trivia |
| 175 | Formula 1 Championship Years (year-based, independent of people) | Corporate/statistical |
| 176 | World Cup Champions (country-based, not people) | Official tournament record |
| 177 | Wimbledon/Grand Slam Championship History (year-based) | Official tournament record |
| 178 | Major Scientific Discoveries Without a Nobel (event-based) | Event/discovery trivia |
| 179 | History of World Currencies (pre-Euro etc.) | Economics trivia |
| 180 | Famous Library/Archive Collections | Institutional trivia |
| 181 | Provinces of Turkey (city trivia: population/region/licence plate) | Local geography, zero risk |
| 182 | Turkey's Natural Beauties | Local geography |
| 183 | World Architectural Styles (period-based) | Conceptual, not people |
| 184 | Famous Science Fiction Authors (author bio, without work titles) | Authors are public, work titles may carry separate copyright risk |
| 185 | Famous Poets | Historical, public |
| 186 | World Independence Dates (country-based) | History trivia |
| 187 | Element Symbols / Chemical Compounds (expanded #4) | Scientific |
| 188 | World Time Zone Records (earliest/latest sunset etc.) | Geography trivia |
| 189 | Famous Women Scientists (special focus) | May overlap with #6/#16, a separate representation-focused collection |
| 190 | History of World Sports Organizations (founding trivia for FIFA, IOC etc.) | Institutional history |
| 191 | Volleyball/Basketball National Team History (Turkey) | Public sports record |
| 192 | World Dams/Bridges (engineering trivia) | Infrastructure trivia |
| 193 | History of Famous Publishing Houses | Corporate trivia |
| 194 | World Film Festivals (Cannes, Venice etc. — award-based, not film titles) | Organizational trivia |
| 195 | Famous Orchestras and Operas (institution-based) | Institutional, related to #10 |
| 196 | World Space Agencies (NASA, ESA etc.) | Institutional trivia |
| 197 | Famous Lighthouses/Historic Structures | Geography/history trivia |
| 198 | World Record Holders (Guinness, non-sports) | Public record data |
| 199 | Famous Calligraphy Masters (Turkish-Islamic art) | Historical, public |
| 200 | History of World's Fairs (Expo) | Organizational trivia |
| 201 | CS2 Legends (esports players) | ✅ Built (40) — Real people, public esports record; Valve character/weapon imagery WAS NOT USED |

---

## 🚫 Not done in this implementation

**No data set was built** for the high risk group (66-120) — it was only
documented.

## 2026-07-24 update — real images + expansion

The strategy changed by user decision: packs now use **real Wikimedia Commons
photos + author/licence credits** instead of emoji clues (see `engine/types.ts`
→ `Entity.image`/`imageCredit`, `scripts/fetch-wiki-image.js`). This does not
change the "no character artwork" principle stated at the top of the document
(there is still no fictional character/logo artwork), but it knowingly accepts
the additional risk that photos of real people bring (particularly "personality
rights"). A new **Audio Mode** (`expo-audio`) was also added, optional per pack.

Eight new packs were built in this round: Formula 1 Drivers (#13), Rivers of the
World (#22), Track & Field Legends (#27), Swimming Legends (#28), Nobel Peace
Prize Laureates (#33), Turkish TV series actors (#51), Hollywood actors (#52),
plus one extra pack not on the list: **Mountains of the World** (`daglar`, 39
records, pure geography — contains no people, low risk). The move into the
medium risk group (#51-52) was deliberate: both packs use ONLY the actor's own
Commons portrait, with no scene/costume/production imagery.

## 2026-07-29 update — 4 new packs

Four new packs were built in this round: Premier League Legends (#12, 50 records,
the same "club they are most associated with" pattern as Süper Lig), Classic Rock
Bands/Members (#18, 50 records, real Commons band photos), Formula 1 Teams/History
(#29, 45 records, corporate/team data — the `image` field was deliberately left
empty for most teams carrying logos, with only a few having a logo-free car/track
photo) and Natural Wonders of the World (#37, 44 records, pure geography). Full
5-language (en/de/fr/es/pt) translation files were added under
`data/packs/i18n/` for all 4 packs and they were registered in
`data/packs/index.ts`. Also, #21 (Mountains of the World) had been built earlier
but not marked in this table, an oversight — now corrected.

## 2026-07-29 update #2 — Boxing Legends (#26)

Image + credit information was fetched in bulk for 40 boxers through real
Wikimedia API calls using `scripts/fetch-wiki-image.js` (no hallucination risk).
No usable lead image could be found for 2 boxers (Pernell Whitaker, Ricardo
López), so image/imageCredit were left empty. Full 5-language translation files
were added and it was registered in `data/packs/index.ts`.

## 2026-07-29 update #3 — World Chess Champions (#19)

39 records: 18 Classical world champions (from Steinitz to Gukesh), 4 champions
from the FIDE-split period (excluding Karpov/Anand, who are already on the
Classical list) and 17 Women's World Champions — all distinguished by the
`titleType` field. Images were again fetched in bulk with `fetch-wiki-image.js`;
for Susan Polgar the lead image returned by the API belonged to a different
player (Anna Muzychuk), this mismatch was caught and image/imageCredit were left
empty. Full 5-language translation was added and it was registered in index.ts.

## 2026-07-29 update #4 — Famous Explorers (#24)

40 records: sea/land/polar explorers from the 15th to the 20th century (from
Columbus to Thor Heyerdahl). Images were again fetched in bulk with
`fetch-wiki-image.js` — period paintings/engravings for the earlier explorers,
and for a few (Zheng He, Leif Erikson) photos of monuments/statues were used
(pre-photography era). Full 5-language translation was added and it was
registered in index.ts.

## 2026-07-29 update #5 — Astronauts/Cosmonauts (#32)

40 records: from Gagarin to the 2021 Blue Origin flight, with broad nationality
diversity themed on each country's "first astronaut" (16 different countries).
Images were fetched in bulk with `fetch-wiki-image.js` (mostly NASA-sourced,
public domain). No usable image was found for Abdul Ahad Mohmand, so it was left
empty. Full 5-language translation was added and it was registered in index.ts.

## 2026-07-29 update #6 — Famous Architects (#39)

40 records: from the Renaissance (Brunelleschi, Bramante) to today's star
architects (Zaha Hadid, Bjarke Ingels). Deliberately, ONLY the architect's own
portrait was used — no photos of buildings/works, because "freedom of panorama"
(the copyright status of photographing works in public spaces) varies by country
and this additional risk was avoided. As no portrait could be found for Mimar
Sinan, his signature was used. No image could be found for 2 architects, so they
were left empty. Full 5-language translation was added and it was registered in
index.ts.

## 2026-07-29 update #7 — Famous Sculptors (#35)

40 records: from ancient Greece (Phidias, Praxiteles) to today's conceptual
artists (Damien Hirst, Antony Gormley). For the ancient period, statues/busts
depicted in that period or later ones were used instead of photographs. Some
names such as Michelangelo and Bernini intentionally overlap with the Painters/
Architects packs (these people made history in both disciplines). No image could
be found for Duane Hanson, so it was left empty. Full 5-language translation was
added and it was registered in index.ts.

## 2026-07-29 update #8 — Famous Philosophers (#15)

40 records: from ancient Greece/Rome (Socrates, Marcus Aurelius) to 20th-century
thinkers (Foucault, Arendt); non-Western diversity was also added with Confucius/
Laozi (China) and Ibn Sina/Ibn Rushd (Islamic Golden Age). For the ancient period,
bust/statue images were used instead of photographs; as no historical portrait
could be found for Laozi, his name was represented in Chinese characters. Full
5-language translation was added and it was registered in index.ts.

## 2026-07-29 update #9 — Classic Literature Authors (#40)

40 records: novel-focused classic authors from Cervantes (16th c.) to Toni
Morrison (20th/21st c.); broad representation from Russian, French, English,
American and Latin American literature. The "famousWork" field contains only the
TITLE of the work (text), no cover imagery or text from the work was used. Full
5-language translation was added and it was registered in index.ts.

## 2026-07-29 update #10 — Famous Chefs (#20)

40 records: from the founders of French Grande Cuisine (Carême, Escoffier, and
Vatel from the 17th c.) to today's TV chefs (Gordon Ramsay, Jamie Oliver);
includes 2 Turkish chefs (Fatih Tutak, Mehmet Gürs). The "role" field
distinguishes Restaurant Chef/TV Chef/Historical Chef. No image could be found
for Nigel Slater, so it was left empty. Full 5-language translation was added and
it was registered in index.ts.

## 2026-07-29 update #11 — Famous Journalists (#42)

40 records: from war correspondents (Robert Capa, Martha Gellhorn) to TV anchors
(Walter Cronkite, Anderson Cooper) and photojournalists (Nick Ut, Steve McCurry).
Names who lost their lives on assignment, such as Jamal Khashoggi and Marie
Colvin, were included purely for neutral biographical/historical record. No image
could be found for Marie Colvin, so it was left empty. Full 5-language translation
was added and it was registered in index.ts.

## 2026-07-29 update #12 — Empires of the World (#25)

40 records: empires/dynasties from six continents, from Rome to the Ottomans,
from the Aztecs/Inca to Mali/Songhai, from the Han/Tang/Qing to the Khmer/
Majapahit. As it contains no people, no images are needed — the same pattern as
the Countries of the World pack (emoji clues only). Full 5-language translation
was added and it was registered in index.ts.

## 2026-07-29 update #13 — Nobel Prize-Winning Authors (#23)

40 records: Nobel Prize in Literature laureates from Tagore (1913) to Ishiguro
(2017). Names overlapping with #40 (Classic Literature Authors) — Faulkner,
Hemingway, Camus, Marquez, Morrison, Vargas Llosa — were deliberately left out;
only Sartre (famous for declining the prize) is shared. Orhan Pamuk (2006) and
Bob Dylan (2016, as a lyricist) were included. Full 5-language translation was
added and it was registered in index.ts.

## 2026-07-29 update #14 — Renaissance Artists (#36)

40 records: from the Proto-Renaissance (Giotto, Cimabue) to the Northern
Renaissance (Van Eyck, Dürer, Bosch). The 5 names already present in the #7
(Famous Painters) pack (Leonardo da Vinci, Michelangelo, Raphael, Botticelli,
Titian) and Donatello/Verrocchio from the Sculptors pack were deliberately left
out — near-zero overlap. Most images are the artist's own self-portrait. Full
5-language translation was added and it was registered in index.ts.

## 2026-07-29 update #15 — UNESCO World Heritage Sites (#38)

40 records: cultural/architectural UNESCO sites from Petra to Göbeklitepe, from
Machu Picchu to the Vatican. Deliberately zero overlap with #37 (Natural Wonders
of the World) — natural sites were not included in this pack. Sites with a
politically contested status (e.g. Jerusalem) were deliberately left out. No
image could be found for Persepolis, so it was left empty. Full 5-language
translation was added and it was registered in index.ts.

## 2026-07-29 update #16 — World Currencies (#41)

40 records: the world's major currencies, from 6 continents. As it contains no
people, no images are needed — the same pattern as the Countries of the World/
Empires packs (emoji clues only). Full 5-language translation was added and it
was registered in index.ts.

## 2026-07-29 update #17 — Formula 1 Circuits (#43)

39 records: from the founding 1950 championship circuits such as Monza/
Silverstone to the newest ones such as Las Vegas (2023) and Lusail (2021).
"firstGrandPrixYear" is based only on the first Grand Prix that counted toward
the WORLD CHAMPIONSHIP (non-championship races excluded). As this is corporate/
geographical data, no images of people are needed — the emoji-clue pattern. Full
5-language translation was added and it was registered in index.ts.

## 2026-07-29 update #18 — World Airlines (#44)

39 records, a mix of scheduled/low-cost carriers from 6 continents. "foundedYear"
is the founding date of the company's CURRENT legal entity (predecessor companies
excluded). As this is corporate data, no images of people are needed — the
emoji-clue pattern. Full 5-language translation was added and it was registered
in index.ts.

## 2026-07-29 update #19 — Cricket Legends (#46)

40 records: ~140 years of cricket history, from W. G. Grace (1848) and Jack Hobbs
(1882) to Virat Kohli and Kane Williamson; representation from 9 cricketing
nations (India, Pakistan, Australia, England, West Indies, South Africa, Sri
Lanka, New Zealand, Bangladesh). Images were fetched in bulk with
`fetch-wiki-image.js`. Two data notes: no usable lead image could be found on
Wikimedia for Malcolm Marshall, so image/imageCredit were left empty; Shakib Al
Hasan's image was taken from the Bengali Wikipedia page because there was no lead
image on the English Wikipedia. Full 5-language translation was added and it was
registered in index.ts.

## 2026-07-29 update #20 — Volleyball Legends (#48)

40 records: indoor and beach volleyball legends from 12 countries (Turkey 7,
Brazil 7, USA 6, Italy 5, Russia 3, Serbia 3, Poland 2, Cuba 2, China 2, South
Korea, France, Netherlands), from Mireya Luis and Karch Kiraly to Tijana Bošković
and Zhu Ting. Given the Turkish interest, the national team generation (Neslihan
Demir, Gözde Kırdar, Eda Erdem, Naz Aydemir etc.) was kept broad. Images were
fetched in bulk with `fetch-wiki-image.js`. Data notes: no usable lead image
could be found in any language for Steve Timmons, so image/imageCredit were left
empty; the images for Giba, Gözde Kırdar, Fofão, Ivan Zaytsev, Ekaterina Gamova
and Earvin Ngapeth could not be found on the English Wikipedia and were taken
respectively from the Portuguese, a retried English, Portuguese, an alternative
English title, Russian and French pages. "hittingHand" is rarely documented data
in volleyball — only verifiable left-handers were marked as left. Full 5-language
translation was added and it was registered in index.ts.

## 2026-07-29 update #21 — Rugby Legends (#47)

40 records: rugby union legends from 13 countries, from the 1930s generation
(Colin Meads, Willie John McBride) to names who retired in the 2010s (Richie
McCaw, Sergio Parisse, Ayumu Goromaru) — New Zealand 6, South Africa 6, England 5,
Wales 4, Ireland 4, Australia 4, France 3, Scotland 2, Argentina 2, and one each
from Fiji, Samoa, Italy and Japan. No active players, all retired (career
statistics are closed data). All ten positions are represented. Images were
fetched in bulk with `fetch-wiki-image.js`; there was no lead image on the English
Wikipedia for Gareth Edwards, so it was taken from the French page. Data notes: no
usable individual portrait could be found for 6 players, so image/imageCredit were
left empty (Willie John McBride, John Jeffrey, John Eales, Michael Lynagh, Brian
Lima and Os du Randt — for the last one the API returned a group photo of
Springbok forwards, so it was deliberately not used). "caps" values count only
national team matches, excluding British & Irish Lions matches. Turkish rugby
position terminology is not standardized (the sport is niche in Turkey) — labels
such as "Açık Ayak", "Skrum Yarısı", "Aç", "Kilit", "Santra" and "Tam Bek" were
used consistently but should be verified by someone who knows rugby before
release; "Hooker", "Flanker" and "Numara 8" were left in their English/
international form. Full 5-language translation was added and it was registered
in index.ts.

## 2026-07-29 update #22 — Planets and Space Objects (#171)

42 records: 8 planets (Mercury–Neptune), 17 moons (the Moon, Phobos, Deimos, the
four Galilean moons, Titan/Enceladus/Mimas/Rhea/Iapetus, Titania/Oberon/Miranda,
Triton, Charon), 5 dwarf planets (Pluto, Ceres, Eris, Haumea, Makemake), 7
asteroids (Vesta, Pallas, Hygiea, Eros, Bennu, Ryugu, Psyche), 2 trans-Neptunian
objects (Sedna, Quaoar) and 3 comets (Halley, Hale-Bopp, 67P/Churyumov-
Gerasimenko). A pure astronomy pack containing no people — both IP and
personality rights risk are zero. Images were fetched in bulk with
`fetch-wiki-image.js`; all 42 records have an image, none are restrictively
licensed and the vast majority are NASA/ESA-sourced public domain. For Mimas,
Sedna and Quaoar there was no lead image on the English Wikipedia pages, so they
were taken from the Spanish pages.

Data notes: for moons, the "Distance from the Sun (AU)" field is the mean
distance from the Sun of the planet they belong to — a deliberate simplification
that keeps in-game comparison meaningful. For comets, the same field shows the
perihelion distance; had the orbital semi-major axis been used, Hale-Bopp (~186
AU) would have broken the scale. The "Has an Atmosphere" value for comets is
"Yes", because a coma counts as a temporary atmosphere. Diameter values are
mean/approximate — for markedly irregular bodies such as Haumea, the mean
diameter was taken. Io's and Triton's thin but real atmospheres are marked "Yes",
while bodies with only a very tenuous exosphere such as Europa/Ganymede/Enceladus
are marked "No". Because the diameter range spans from 0.49 km (Bennu) to 139,820
km (Jupiter), a `near` tolerance of 1000 km was chosen. Full 5-language
translation was added (with `nameByLocale` filled in where there is a meaningful
difference in planet/moon names) and it was registered in index.ts.

## 2026-07-29 update #23 — Islands of the World (#161)

44 records: real islands from six continents, from Greenland (the world's largest
island) to small but famous islands such as Capri. For islands divided between
more than one country (Borneo, New Guinea, Ireland, Hispaniola, Tierra del
Fuego), sovereignty was briefly given jointly. Images were fetched in bulk with
`fetch-wiki-image.js` (mostly NASA/ESA satellite imagery, public domain). Full
5-language translation was added and it was registered in index.ts.

## 2026-07-29 update #24 — Deserts of the World (#162)

43 records: a mix of hot/cold deserts from six continents, from the Sahara (the
world's largest hot desert) to the polar deserts (Antarctic, Arctic). No suitable
image could be found on Commons for the Wahiba Sands, so that record was left
without an image. Images were fetched in bulk with `fetch-wiki-image.js` (mostly
NASA satellite imagery, public domain). Full 5-language translation was added and
it was registered in index.ts.

## 2026-07-29 update #25 — Lakes of the World (#163)

46 records: a mix of freshwater/salt lakes from six continents, from the Caspian
Sea (the world's largest lake) to Lake Van. Because the surface area of some
lakes shows seasonal/long-term variability (Chad, Aral, Urmia and the Great Salt
Lake are shrinking; Eyre and Tonle Sap vary seasonally), current average values
were used. Images were fetched in bulk with `fetch-wiki-image.js` (mostly
NASA/ESA satellite imagery, public domain). Full 5-language translation was added
and it was registered in index.ts.

## 2026-07-29 update #26 — Ancient Civilizations (#168)

44 records: pre-classical/ancient civilizations from six continents, from Sumer
(3rd millennium BC, the invention of writing) to the Nazca culture (1st-7th
century AD). Assyria, Babylon, Achaemenid Persia, Macedon, the Aztecs, the Inca
and the Han/Tang/Qing, already present in the Empires pack (#25), were
deliberately left out; near-zero overlap. As it contains no people, the same
pattern as Empires was used — no images, emoji clues only. Full 5-language
translation was added and it was registered in index.ts.

## 2026-07-29 update #27 — CS2 Legends (#201, newly added to the pool)

40 records: real, public Counter-Strike (CS:GO/CS2) professional players — from
legends such as s1mple, ZywOo, NiKo, device, GeT_RiGhT/f0rest to current stars
such as donk/m0NESY, from 14 countries. Deliberate design decision: Valve's
in-game character/weapon skin imagery WAS NOT USED — instead, real player photos
published under a free licence by tournament organizers (ESL/DreamHack/BLAST/
PGL/VaKarM) were used via Wikimedia Commons (the same principle as the Streamers
pack). No suitable image could be found for electronic, sh1ro and KSCERATO, so
those 3 records were left without an image. Full 5-language translation was
added, it was registered in index.ts, and it was added to the list as #201 (the
pool grew from 200 to 201).

## Recommendation — next steps

- The rest of the **low risk pool between 11-50** (#14-17, #19-21, #23-26,
  #30-32, #34-36, #38-50) can be filled in with the same pattern (real Commons
  photos + verified data).
- The **Streamers pack** (#11) was built with 50 records verified via web search
  (2026-07-20). If it is to be expanded to 80, the remaining candidates should
  not be added without verifying the "tenure" and "category" fields one by one —
  this category is the fastest-decaying type of data.
- The rest of the **medium risk** group (#53-65) can be expanded with the same
  principle (person portraits only, no production/scene imagery).
