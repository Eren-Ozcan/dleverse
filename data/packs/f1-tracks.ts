import type { PackConfig } from "../../engine/types";
import { f1TracksI18n } from "./i18n/f1-tracks";

/**
 * Formula 1 pistleri — kişi değil, coğrafya/spor tesisi trivia'sı (Para
 * Birimleri/İmparatorluklar paketleriyle aynı desen: emoji-clue, gerçek
 * fotoğraf yok). "firstGrandPrixYear" alanı pistin ilk kez DÜNYA
 * ŞAMPİYONASI'na sayılan bir Grand Prix'ye ev sahipliği yaptığı yıldır
 * (şampiyonluk dışı yarışlar sayılmaz — ör. Interlagos 1972'de şampiyonluk
 * dışı bir yarış düzenledi ama ilk şampiyonluk yarışı 1973'tür; Red Bull
 * Ring için 1964 Zeltweg Havaalanı pisti AYRI bir tesis olduğundan 1970
 * Österreichring esas alınmıştır).
 */
const f1Tracks: PackConfig = {
  id: "f1-tracks",
  title: "Formula 1 Pistleri",
  subtitle: "Günün pistini bil",
  emoji: "🏎️",
  theme: { primary: "#E10600", secondary: "#1B1B1F", background: "#0F0F12" },
  dailySaltVersion: 1,
  fields: [
    { key: "country", label: "Ülke", type: "text" },
    { key: "firstGrandPrixYear", label: "İlk Grand Prix Yılı", type: "year", near: 5 },
    { key: "trackType", label: "Pist Türü", type: "text" },
    { key: "continent", label: "Kıta", type: "text" },
    { key: "nickname", label: "Öne Çıkan Özelliği", type: "text" },
  ],
  entities: [
    { id: "monza", name: "Monza", aliases: ["Autodromo Nazionale Monza"], fields: { country: "İtalya", firstGrandPrixYear: 1950, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "Hız Tapınağı" }, emojiClue: "🏎️🇮🇹⚡🌳" },
    { id: "silverstone", name: "Silverstone", fields: { country: "İngiltere", firstGrandPrixYear: 1950, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "F1'in Doğduğu Pist" }, emojiClue: "🏎️🇬🇧✈️🏁" },
    { id: "spa", name: "Spa-Francorchamps", fields: { country: "Belçika", firstGrandPrixYear: 1950, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "Eau Rouge Yokuşu" }, emojiClue: "🏎️🇧🇪🌲🌧️" },
    { id: "monako", name: "Monako", aliases: ["Circuit de Monaco", "Monte Carlo"], fields: { country: "Monako", firstGrandPrixYear: 1950, trackType: "Sokak Pisti", continent: "Avrupa", nickname: "Prensliğin Dar Sokakları" }, emojiClue: "🏎️🇲🇨🛥️👑", nameByLocale: { en: "Monaco", de: "Monaco", fr: "Monaco", es: "Mónaco", pt: "Mônaco" } },
    { id: "indianapolis", name: "Indianapolis Motor Speedway", aliases: ["Indianapolis"], fields: { country: "ABD", firstGrandPrixYear: 1950, trackType: "Kalıcı Pist", continent: "Kuzey Amerika", nickname: "Tuğla Bahçesi" }, emojiClue: "🏎️🇺🇸🧱🥛" },
    { id: "nurburgring", name: "Nürburgring", fields: { country: "Almanya", firstGrandPrixYear: 1951, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "Yeşil Cehennem" }, emojiClue: "🏎️🇩🇪🌲😈" },
    { id: "zandvoort", name: "Zandvoort", fields: { country: "Hollanda", firstGrandPrixYear: 1952, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "Banklı Kum Tepesi Pisti" }, emojiClue: "🏎️🇳🇱🏖️🍊" },
    { id: "buenosaires", name: "Buenos Aires Otodromu", aliases: ["Autódromo Oscar y Juan Gálvez", "Buenos Aires"], fields: { country: "Arjantin", firstGrandPrixYear: 1953, trackType: "Kalıcı Pist", continent: "Güney Amerika", nickname: "Fangio'nun Memleket Pisti" }, emojiClue: "🏎️🇦🇷🥩🏁", nameByLocale: { en: "Buenos Aires Autodrome", de: "Autodrom Buenos Aires", fr: "Autodrome de Buenos Aires", es: "Autódromo de Buenos Aires", pt: "Autódromo de Buenos Aires" } },
    { id: "watkinsglen", name: "Watkins Glen", fields: { country: "ABD", firstGrandPrixYear: 1961, trackType: "Kalıcı Pist", continent: "Kuzey Amerika", nickname: "Amerika'nın Klasik Pisti" }, emojiClue: "🏎️🇺🇸🍂🏁" },
    { id: "mexico", name: "Autódromo Hermanos Rodríguez", aliases: ["Meksiko"], fields: { country: "Meksika", firstGrandPrixYear: 1963, trackType: "Kalıcı Pist", continent: "Kuzey Amerika", nickname: "Stadyum İçinden Geçen Viraj" }, emojiClue: "🏎️🇲🇽🏟️🌵" },
    { id: "brandshatch", name: "Brands Hatch", fields: { country: "İngiltere", firstGrandPrixYear: 1964, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "Doğal Amfitiyatro" }, emojiClue: "🏎️🇬🇧⛰️🏁" },
    { id: "kyalami", name: "Kyalami", fields: { country: "Güney Afrika", firstGrandPrixYear: 1967, trackType: "Kalıcı Pist", continent: "Afrika", nickname: "Yüksek Rakım Pisti" }, emojiClue: "🏎️🇿🇦🦁⛰️" },
    { id: "redbullring", name: "Red Bull Ring", aliases: ["Österreichring", "A1-Ring"], fields: { country: "Avusturya", firstGrandPrixYear: 1970, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "Alp Tepelerinde Kısa Tur" }, emojiClue: "🏎️🇦🇹🐂⛰️" },
    { id: "hockenheim", name: "Hockenheimring", fields: { country: "Almanya", firstGrandPrixYear: 1970, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "Orman Düzlükleri ve Motodrom" }, emojiClue: "🏎️🇩🇪🌲🏟️" },
    { id: "paulricard", name: "Circuit Paul Ricard", aliases: ["Le Castellet"], fields: { country: "Fransa", firstGrandPrixYear: 1971, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "Mavi-Kırmızı Kaçış Alanları" }, emojiClue: "🏎️🇫🇷🟦🟥" },
    { id: "interlagos", name: "Interlagos", aliases: ["Autódromo José Carlos Pace"], fields: { country: "Brezilya", firstGrandPrixYear: 1973, trackType: "Kalıcı Pist", continent: "Güney Amerika", nickname: "Senna S'i" }, emojiClue: "🏎️🇧🇷🌧️💛" },
    { id: "longbeach", name: "Long Beach Sokak Pisti", aliases: ["Long Beach"], fields: { country: "ABD", firstGrandPrixYear: 1976, trackType: "Sokak Pisti", continent: "Kuzey Amerika", nickname: "Amerika'nın Monako'su" }, emojiClue: "🏎️🇺🇸🌴🌊", nameByLocale: { en: "Long Beach Street Circuit", de: "Stadtkurs Long Beach", fr: "Circuit urbain de Long Beach", es: "Circuito Urbano de Long Beach", pt: "Circuito Urbano de Long Beach" } },
    { id: "fuji", name: "Fuji Speedway", fields: { country: "Japonya", firstGrandPrixYear: 1976, trackType: "Kalıcı Pist", continent: "Asya", nickname: "Fuji Dağı Manzarası" }, emojiClue: "🏎️🇯🇵🗻🌫️" },
    { id: "montreal", name: "Circuit Gilles-Villeneuve", aliases: ["Montreal"], fields: { country: "Kanada", firstGrandPrixYear: 1978, trackType: "Yarı Sokak Pisti", continent: "Kuzey Amerika", nickname: "Şampiyonlar Duvarı" }, emojiClue: "🏎️🇨🇦🍁🧱" },
    { id: "imola", name: "Imola", aliases: ["Autodromo Enzo e Dino Ferrari"], fields: { country: "İtalya", firstGrandPrixYear: 1980, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "Tamburello Virajı" }, emojiClue: "🏎️🇮🇹🔴🕯️" },
    { id: "estoril", name: "Estoril", fields: { country: "Portekiz", firstGrandPrixYear: 1984, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "Senna'nın İlk Zaferi" }, emojiClue: "🏎️🇵🇹🌊🏆" },
    { id: "adelaide", name: "Adelaide Sokak Pisti", aliases: ["Adelaide"], fields: { country: "Avustralya", firstGrandPrixYear: 1985, trackType: "Sokak Pisti", continent: "Okyanusya", nickname: "Sezon Finali Klasiği" }, emojiClue: "🏎️🇦🇺🦘🏁", nameByLocale: { en: "Adelaide Street Circuit", de: "Stadtkurs Adelaide", fr: "Circuit urbain d'Adélaïde", es: "Circuito Urbano de Adelaida", pt: "Circuito Urbano de Adelaide" } },
    { id: "jerez", name: "Jerez", aliases: ["Circuito de Jerez"], fields: { country: "İspanya", firstGrandPrixYear: 1986, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "1997 Şampiyonluk Çarpışması" }, emojiClue: "🏎️🇪🇸🍷💥" },
    { id: "hungaroring", name: "Hungaroring", fields: { country: "Macaristan", firstGrandPrixYear: 1986, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "Duvarsız Monako" }, emojiClue: "🏎️🇭🇺🌡️🌀" },
    { id: "suzuka", name: "Suzuka", fields: { country: "Japonya", firstGrandPrixYear: 1987, trackType: "Kalıcı Pist", continent: "Asya", nickname: "Sekiz Şeklinde Düzen" }, emojiClue: "🏎️🇯🇵🎡8️⃣" },
    { id: "barcelona", name: "Circuit de Barcelona-Catalunya", aliases: ["Barcelona", "Montmeló"], fields: { country: "İspanya", firstGrandPrixYear: 1991, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "Test Pistlerinin Ölçütü" }, emojiClue: "🏎️🇪🇸📊☀️" },
    { id: "magnycours", name: "Magny-Cours", aliases: ["Circuit de Nevers Magny-Cours"], fields: { country: "Fransa", firstGrandPrixYear: 1991, trackType: "Kalıcı Pist", continent: "Avrupa", nickname: "Pürüzsüz Asfalt" }, emojiClue: "🏎️🇫🇷🛣️🐓" },
    { id: "albertpark", name: "Albert Park", aliases: ["Melbourne"], fields: { country: "Avustralya", firstGrandPrixYear: 1996, trackType: "Yarı Sokak Pisti", continent: "Okyanusya", nickname: "Göl Çevresindeki Park Pisti" }, emojiClue: "🏎️🇦🇺🌳🦢" },
    { id: "sepang", name: "Sepang", aliases: ["Sepang International Circuit"], fields: { country: "Malezya", firstGrandPrixYear: 1999, trackType: "Kalıcı Pist", continent: "Asya", nickname: "Tropik Sağanak Yarışları" }, emojiClue: "🏎️🇲🇾🌴⛈️" },
    { id: "bahreyn", name: "Bahreyn Uluslararası Pisti", aliases: ["Sakhir"], fields: { country: "Bahreyn", firstGrandPrixYear: 2004, trackType: "Kalıcı Pist", continent: "Asya", nickname: "Çölde Gece Yarışı" }, emojiClue: "🏎️🇧🇭🏜️🌙", nameByLocale: { en: "Bahrain International Circuit", de: "Bahrain International Circuit", fr: "Circuit international de Bahreïn", es: "Circuito Internacional de Baréin", pt: "Circuito Internacional do Bahrein" } },
    { id: "sanghay", name: "Şanghay Uluslararası Pisti", aliases: ["Shanghai"], fields: { country: "Çin", firstGrandPrixYear: 2004, trackType: "Kalıcı Pist", continent: "Asya", nickname: "Daralan Sarmal 1. Viraj" }, emojiClue: "🏎️🇨🇳🏙️🌀", nameByLocale: { en: "Shanghai International Circuit", de: "Shanghai International Circuit", fr: "Circuit international de Shanghai", es: "Circuito Internacional de Shanghái", pt: "Circuito Internacional de Xangai" } },
    { id: "istanbulpark", name: "İstanbul Park", fields: { country: "Türkiye", firstGrandPrixYear: 2005, trackType: "Kalıcı Pist", continent: "Asya", nickname: "Efsanevi 8. Viraj" }, emojiClue: "🏎️🇹🇷🌙↩️", nameByLocale: { en: "Istanbul Park", de: "Istanbul Park", fr: "Istanbul Park", es: "Istanbul Park", pt: "Istanbul Park" } },
    { id: "marinabay", name: "Marina Bay Sokak Pisti", aliases: ["Singapur"], fields: { country: "Singapur", firstGrandPrixYear: 2008, trackType: "Sokak Pisti", continent: "Asya", nickname: "F1'in İlk Gece Yarışı" }, emojiClue: "🏎️🇸🇬🌃💡", nameByLocale: { en: "Marina Bay Street Circuit", de: "Marina Bay Street Circuit", fr: "Circuit urbain de Marina Bay", es: "Circuito Urbano de Marina Bay", pt: "Circuito Urbano de Marina Bay" } },
    { id: "yasmarina", name: "Yas Marina", fields: { country: "Birleşik Arap Emirlikleri", firstGrandPrixYear: 2009, trackType: "Kalıcı Pist", continent: "Asya", nickname: "Gün Batımından Geceye Yarış" }, emojiClue: "🏎️🇦🇪🌅🛥️" },
    { id: "cota", name: "Circuit of the Americas", aliases: ["COTA", "Austin"], fields: { country: "ABD", firstGrandPrixYear: 2012, trackType: "Kalıcı Pist", continent: "Kuzey Amerika", nickname: "Dik Yokuşlu 1. Viraj" }, emojiClue: "🏎️🇺🇸🤠⛰️" },
    { id: "sochi", name: "Soçi Otodromu", aliases: ["Sochi Autodrom"], fields: { country: "Rusya", firstGrandPrixYear: 2014, trackType: "Yarı Sokak Pisti", continent: "Avrupa", nickname: "Olimpiyat Parkı Pisti" }, emojiClue: "🏎️🇷🇺🥇🌊", nameByLocale: { en: "Sochi Autodrom", de: "Sotschi Autodrom", fr: "Autodrome de Sotchi", es: "Autódromo de Sochi", pt: "Autódromo de Sochi" } },
    { id: "baku", name: "Bakü Şehir Pisti", aliases: ["Baku"], fields: { country: "Azerbaycan", firstGrandPrixYear: 2016, trackType: "Sokak Pisti", continent: "Asya", nickname: "Kale Duvarı Darboğazı" }, emojiClue: "🏎️🇦🇿🏰🔥", nameByLocale: { en: "Baku City Circuit", de: "Baku City Circuit", fr: "Circuit urbain de Bakou", es: "Circuito Urbano de Bakú", pt: "Circuito Urbano de Baku" } },
    { id: "jeddah", name: "Cidde Corniche Pisti", aliases: ["Jeddah"], fields: { country: "Suudi Arabistan", firstGrandPrixYear: 2021, trackType: "Sokak Pisti", continent: "Asya", nickname: "En Hızlı Sokak Pisti" }, emojiClue: "🏎️🇸🇦🌊💨", nameByLocale: { en: "Jeddah Corniche Circuit", de: "Jeddah Corniche Circuit", fr: "Circuit de la corniche de Djeddah", es: "Circuito Corniche de Yeda", pt: "Circuito da Corniche de Jidá" } },
    { id: "losail", name: "Lusail Uluslararası Pisti", aliases: ["Losail"], fields: { country: "Katar", firstGrandPrixYear: 2021, trackType: "Kalıcı Pist", continent: "Asya", nickname: "MotoGP Kökenli Çöl Pisti" }, emojiClue: "🏎️🇶🇦🏍️🏜️", nameByLocale: { en: "Lusail International Circuit", de: "Lusail International Circuit", fr: "Circuit international de Lusail", es: "Circuito Internacional de Lusail", pt: "Circuito Internacional de Lusail" } },
    { id: "lasvegas", name: "Las Vegas Strip Pisti", aliases: ["Las Vegas"], fields: { country: "ABD", firstGrandPrixYear: 2023, trackType: "Sokak Pisti", continent: "Kuzey Amerika", nickname: "Işıklı Strip Gece Turu" }, emojiClue: "🏎️🇺🇸🎰🌃", nameByLocale: { en: "Las Vegas Strip Circuit", de: "Las Vegas Strip Circuit", fr: "Circuit du Strip de Las Vegas", es: "Circuito del Strip de Las Vegas", pt: "Circuito do Strip de Las Vegas" } },
  ],
  i18n: f1TracksI18n,
};

export default f1Tracks;
