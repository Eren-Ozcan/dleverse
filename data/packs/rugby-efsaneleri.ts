import type { PackConfig } from "../../engine/types";
import { rugbyEfsaneleriI18n } from "./i18n/rugby-efsaneleri";

/**
 * 40 kayıt: 1930'ların Colin Meads/Willie John McBride kuşağından 2010'larda
 * emekli olan Richie McCaw/Sergio Parisse kuşağına kadar 13 ülkeden rugby
 * union efsaneleri. Tüm mevkiler temsil ediliyor (aç/hooker'dan tam bek'e).
 * Görseller Wikimedia Commons'tan gerçek, serbest lisanslı fotoğraflar —
 * imageCredit yazar+lisans bilgisini taşır. 6 oyuncu (Willie John McBride,
 * John Jeffrey, John Eales, Michael Lynagh, Brian Lima, Os du Randt) için
 * kullanılabilir tekil kapak görseli bulunamadı; image/imageCredit kasıtlı
 * olarak boş bırakıldı. "caps" değerleri sadece MİLLİ TAKIM maçlarını sayar
 * (British & Irish Lions maçları hariç).
 */
const rugbyEfsaneleri: PackConfig = {
  id: "rugby-efsaneleri",
  title: "Rugby Efsaneleri",
  subtitle: "Günün rugbicisini bil",
  emoji: "🏉",
  theme: { primary: "#2E8B57", secondary: "#1B1B1F", background: "#0F0F12" },
  dailySaltVersion: 1,
  fields: [
    { key: "country", label: "Ülke", type: "text" },
    { key: "position", label: "Pozisyon", type: "text" },
    { key: "birthYear", label: "Doğum Yılı", type: "year" },
    { key: "caps", label: "Milli Maç Sayısı", type: "number" },
    { key: "status", label: "Durum", type: "text" },
  ],
  entities: [
    { id: "lomu", name: "Jonah Lomu", fields: { country: "Yeni Zelanda", position: "Kanat", birthYear: 1975, caps: 63, status: "Emekli" }, emojiClue: "🏉🇳🇿🚂💨", image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Jonah_Lomu_%28cropped%29.jpg", imageCredit: "Bjorn Bednarek from Brisbane, Australia, CC BY-SA 2.0, Wikimedia Commons" },
    { id: "meads", name: "Colin Meads", fields: { country: "Yeni Zelanda", position: "Kilit", birthYear: 1936, caps: 55, status: "Emekli" }, emojiClue: "🏉🇳🇿🌲🐑", image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Colin_Meads.jpg", imageCredit: "Crown Studios, Public domain, Wikimedia Commons" },
    { id: "fitzpatrick", name: "Sean Fitzpatrick", fields: { country: "Yeni Zelanda", position: "Hooker", birthYear: 1963, caps: 92, status: "Emekli" }, emojiClue: "🏉🇳🇿©️🎖️", image: "https://upload.wikimedia.org/wikipedia/commons/7/76/25th_Laureus_World_Sports_Awards_%E2%80%93_Fitzpatrick_-_240421_172516.jpg", imageCredit: "Barcex, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "mccaw", name: "Richie McCaw", fields: { country: "Yeni Zelanda", position: "Flanker", birthYear: 1980, caps: 148, status: "Emekli" }, emojiClue: "🏉🇳🇿🏆🏆", image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Richie_McCaw_ONZ_%28cropped%29.jpg", imageCredit: "New Zealand Government, Office of the Governor-General, CC BY 4.0, Wikimedia Commons" },
    { id: "carter", name: "Dan Carter", fields: { country: "Yeni Zelanda", position: "Açık Ayak", birthYear: 1982, caps: 112, status: "Emekli" }, emojiClue: "🏉🇳🇿🎯🔟", image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Dan_Carter_ONZM_%28cropped%29.jpg", imageCredit: "New Zealand Government, Office of the Governor-General, CC BY 4.0, Wikimedia Commons" },
    { id: "michaeljones", name: "Michael Jones", fields: { country: "Yeni Zelanda", position: "Flanker", birthYear: 1965, caps: 55, status: "Emekli" }, emojiClue: "🏉🇳🇿🙏⛪", image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Michael_Jones_September_2017.jpg", imageCredit: "Governor General of NZ, CC BY 4.0, Wikimedia Commons" },
    { id: "habana", name: "Bryan Habana", fields: { country: "Güney Afrika", position: "Kanat", birthYear: 1983, caps: 124, status: "Emekli" }, emojiClue: "🏉🇿🇦🐆💨", image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/25th_Laureus_World_Sports_Awards_-_Habana_-_240421_172738-2.jpg", imageCredit: "Barcex, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "pienaar", name: "Francois Pienaar", fields: { country: "Güney Afrika", position: "Flanker", birthYear: 1967, caps: 29, status: "Emekli" }, emojiClue: "🏉🇿🇦🏆🤝", image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Francois_Pienaar_2017.jpg", imageCredit: "Mabario, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "joost", name: "Joost van der Westhuizen", fields: { country: "Güney Afrika", position: "Skrum Yarısı", birthYear: 1971, caps: 89, status: "Emekli" }, emojiClue: "🏉🇿🇦9️⃣💚", image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Joost_RWC_1995.jpg", imageCredit: "Brent du Preez, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "durandt", name: "Os du Randt", fields: { country: "Güney Afrika", position: "Aç", birthYear: 1972, caps: 80, status: "Emekli" }, emojiClue: "🏉🇿🇦🐂💪" },
    { id: "matfield", name: "Victor Matfield", fields: { country: "Güney Afrika", position: "Kilit", birthYear: 1977, caps: 127, status: "Emekli" }, emojiClue: "🏉🇿🇦🦘✋", image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Victor_Matfield_%28cropped%29.jpg", imageCredit: "deonmaritz (flickr user), CC BY 2.0, Wikimedia Commons" },
    { id: "smit", name: "John Smit", fields: { country: "Güney Afrika", position: "Hooker", birthYear: 1978, caps: 111, status: "Emekli" }, emojiClue: "🏉🇿🇦©️🏆", image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/John_Smit.jpg", imageCredit: "Sahmejil, Public domain, Wikimedia Commons" },
    { id: "wilkinson", name: "Jonny Wilkinson", fields: { country: "İngiltere", position: "Açık Ayak", birthYear: 1979, caps: 91, status: "Emekli" }, emojiClue: "🏉🌹🦶🏆", image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Guinness_6_Nazioni_2026-_Italia_vs_Inghilterra-5_%28cropped%29.jpg", imageCredit: "Stefano Delfrate, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "martinjohnson", name: "Martin Johnson", fields: { country: "İngiltere", position: "Kilit", birthYear: 1970, caps: 84, status: "Emekli" }, emojiClue: "🏉🌹©️🏆", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Martin_Johnson_2015.JPG", imageCredit: "David Sedlecký, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "jasonrobinson", name: "Jason Robinson", fields: { country: "İngiltere", position: "Tam Bek", birthYear: 1974, caps: 51, status: "Emekli" }, emojiClue: "🏉🌹⚡👟", image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Jason_Robinson_2009.jpg", imageCredit: "University of Salford Press Office, CC BY 2.0, Wikimedia Commons" },
    { id: "dallaglio", name: "Lawrence Dallaglio", fields: { country: "İngiltere", position: "Numara 8", birthYear: 1972, caps: 85, status: "Emekli" }, emojiClue: "🏉🌹8️⃣💪", image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Lawrence_Dallaglio_2023.jpg", imageCredit: "stede64, CC BY-SA 2.0, Wikimedia Commons" },
    { id: "leonard", name: "Jason Leonard", fields: { country: "İngiltere", position: "Aç", birthYear: 1968, caps: 114, status: "Emekli" }, emojiClue: "🏉🌹🚌💯", image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Jason_Leonard_2018_cropped.jpg", imageCredit: "Paul W, retouched by Blackcat, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "garethedwards", name: "Gareth Edwards", fields: { country: "Galler", position: "Skrum Yarısı", birthYear: 1947, caps: 53, status: "Emekli" }, emojiClue: "🏉🐉9️⃣🐐", image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Gareth_Edwards_2009.jpg", imageCredit: "Prysiau, CC BY-SA 2.0, Wikimedia Commons" },
    { id: "barryjohn", name: "Barry John", fields: { country: "Galler", position: "Açık Ayak", birthYear: 1945, caps: 25, status: "Emekli" }, emojiClue: "🏉🐉👑✨", image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Barry_John.jpg", imageCredit: "Peter Broster, CC BY 2.0, Wikimedia Commons" },
    { id: "jprwilliams", name: "J. P. R. Williams", fields: { country: "Galler", position: "Tam Bek", birthYear: 1949, caps: 55, status: "Emekli" }, emojiClue: "🏉🐉🩺🦱", image: "https://upload.wikimedia.org/wikipedia/commons/7/77/JPR_Williams_crop.jpg", imageCredit: "JPR_Williams.jpg: https://www.flickr.com/photos/markhodgins/ markhodgins derivative work: SilkTork (talk), CC BY 2.0, Wikimedia Commons" },
    { id: "shanewilliams", name: "Shane Williams", fields: { country: "Galler", position: "Kanat", birthYear: 1977, caps: 87, status: "Emekli" }, emojiClue: "🏉🐉🤏💨", image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Shane_Williams.JPG", imageCredit: "Chris P Jobling, CC BY 2.0, Wikimedia Commons" },
    { id: "odriscoll", name: "Brian O'Driscoll", fields: { country: "İrlanda", position: "Santra", birthYear: 1979, caps: 133, status: "Emekli" }, emojiClue: "🏉☘️🎯👑", image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Brian_O%27Driscoll_2.jpg", imageCredit: "Paul Walsh from Dublin, Ireland, CC BY 2.0, Wikimedia Commons" },
    { id: "oconnell", name: "Paul O'Connell", fields: { country: "İrlanda", position: "Kilit", birthYear: 1979, caps: 108, status: "Emekli" }, emojiClue: "🏉☘️🗣️💪", image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Paul_O%27Connell_2015_RWC.jpg", imageCredit: "Warwick Gastinger, CC BY 2.0, Wikimedia Commons" },
    { id: "mcbride", name: "Willie John McBride", fields: { country: "İrlanda", position: "Kilit", birthYear: 1940, caps: 63, status: "Emekli" }, emojiClue: "🏉☘️🦁9️⃣" },
    { id: "keithwood", name: "Keith Wood", fields: { country: "İrlanda", position: "Hooker", birthYear: 1972, caps: 58, status: "Emekli" }, emojiClue: "🏉☘️🥔👨‍🦲", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Keith_Wood_%28cropped%29.jpg", imageCredit: "St Munchin's College from Limerick, Ireland, CC BY 2.0, Wikimedia Commons" },
    { id: "gavinhastings", name: "Gavin Hastings", fields: { country: "İskoçya", position: "Tam Bek", birthYear: 1962, caps: 61, status: "Emekli" }, emojiClue: "🏉🥃🎯🦁", image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Gavin_Hastings.jpg", imageCredit: "Grant Ritchie, CC BY-SA 3.0, Wikimedia Commons" },
    { id: "jeffrey", name: "John Jeffrey", fields: { country: "İskoçya", position: "Flanker", birthYear: 1959, caps: 40, status: "Emekli" }, emojiClue: "🏉🥃🦈🤍" },
    { id: "blanco", name: "Serge Blanco", fields: { country: "Fransa", position: "Tam Bek", birthYear: 1958, caps: 93, status: "Emekli" }, emojiClue: "🏉🇫🇷🌊🏄", image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Serge_Blanco_cropped.jpg", imageCredit: "Own work, CC BY-SA 2.0, Wikimedia Commons" },
    { id: "sella", name: "Philippe Sella", fields: { country: "Fransa", position: "Santra", birthYear: 1962, caps: 111, status: "Emekli" }, emojiClue: "🏉🇫🇷💯🏃", image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Philippe_Sella.jpg", imageCredit: "Pierre-Olivier Carles, CC BY-SA 2.0, Wikimedia Commons" },
    { id: "rives", name: "Jean-Pierre Rives", fields: { country: "Fransa", position: "Flanker", birthYear: 1952, caps: 59, status: "Emekli" }, emojiClue: "🏉🇫🇷🦁🩸", image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Jean-Pierre_Rives_%281981%29.jpg", imageCredit: "Panini, Public domain, Wikimedia Commons" },
    { id: "campese", name: "David Campese", fields: { country: "Avustralya", position: "Kanat", birthYear: 1962, caps: 101, status: "Emekli" }, emojiClue: "🏉🇦🇺🦢👣", image: "https://upload.wikimedia.org/wikipedia/commons/7/77/David_Campese_2020.jpg", imageCredit: "Australia embassy in Suva, CC BY 4.0, Wikimedia Commons" },
    { id: "eales", name: "John Eales", fields: { country: "Avustralya", position: "Kilit", birthYear: 1970, caps: 86, status: "Emekli" }, emojiClue: "🏉🇦🇺😇©️" },
    { id: "gregan", name: "George Gregan", fields: { country: "Avustralya", position: "Skrum Yarısı", birthYear: 1973, caps: 139, status: "Emekli" }, emojiClue: "🏉🇦🇺9️⃣🗣️", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Any_questions_for_ben_%286811310959%29_%28cropped%29.jpg", imageCredit: "Eva Rinaldi, CC BY-SA 2.0, Wikimedia Commons" },
    { id: "lynagh", name: "Michael Lynagh", fields: { country: "Avustralya", position: "Açık Ayak", birthYear: 1963, caps: 72, status: "Emekli" }, emojiClue: "🏉🇦🇺🔟🎯" },
    { id: "porta", name: "Hugo Porta", fields: { country: "Arjantin", position: "Açık Ayak", birthYear: 1951, caps: 58, status: "Emekli" }, emojiClue: "🏉🇦🇷🔟👑", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/25th_Laureus_World_Sports_Awards_-_Hugo_Porta_-_240421_163256.jpg", imageCredit: "Barcex, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "pichot", name: "Agustín Pichot", fields: { country: "Arjantin", position: "Skrum Yarısı", birthYear: 1974, caps: 71, status: "Emekli" }, emojiClue: "🏉🇦🇷9️⃣©️", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Agust%C3%ADn_Pichot_-_En_Casa_Rosada_-_08FEB07_-presidencia-govar.jpg", imageCredit: "Unknown authorUnknown author, CC BY 2.0, Wikimedia Commons" },
    { id: "serevi", name: "Waisale Serevi", fields: { country: "Fiji", position: "Açık Ayak", birthYear: 1968, caps: 39, status: "Emekli" }, emojiClue: "🏉🇫🇯7️⃣🪄", image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Waisale_Serevi_2014.jpg", imageCredit: "US Embassy Suva, Public domain, Wikimedia Commons" },
    { id: "lima", name: "Brian Lima", fields: { country: "Samoa", position: "Santra", birthYear: 1972, caps: 65, status: "Emekli" }, emojiClue: "🏉🇼🇸💥🦴" },
    { id: "parisse", name: "Sergio Parisse", fields: { country: "İtalya", position: "Numara 8", birthYear: 1983, caps: 142, status: "Emekli" }, emojiClue: "🏉🇮🇹8️⃣💯", image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Guinness_6_Nazioni_2026-_Italia_vs_Inghilterra-5_%28cropped_Parisse%29.jpg", imageCredit: "Stefano Delfrate, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "goromaru", name: "Ayumu Goromaru", fields: { country: "Japonya", position: "Tam Bek", birthYear: 1986, caps: 57, status: "Emekli" }, emojiClue: "🏉🇯🇵🙏🎯", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/A._Goromaru%2C_20141129.jpg", imageCredit: "埊, CC BY 4.0, Wikimedia Commons" },
  ],
  i18n: rugbyEfsaneleriI18n,
};

export default rugbyEfsaneleri;
