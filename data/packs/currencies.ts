import type { PackConfig } from "../../engine/types";
import { currenciesI18n } from "./i18n/currencies";

/**
 * World currencies - not people, this is economics/geography trivia (same
 * pattern as the World Countries/Empires packs: emoji clue, no real photos).
 * The "century" field shows the period in which the currency's CURRENT form
 * was adopted/introduced (some currencies carry a much older name but their
 * modern form was adopted at a different date - e.g. the Turkish lira was
 * revalued in 2005).
 */
const currencies: PackConfig = {
  id: "currencies",
  title: "Dünya Para Birimleri",
  subtitle: "Günün para birimini bil",
  emoji: "💱",
  theme: { primary: "#2E7D32", secondary: "#1B1B1F", background: "#0F0F12" },
  dailySaltVersion: 1,
  fields: [
    { key: "country", label: "Ülke/Bölge", type: "text" },
    { key: "symbol", label: "Sembol", type: "text" },
    { key: "century", label: "Güncel Biçim Dönemi", type: "text" },
    { key: "continent", label: "Kıta", type: "text" },
    { key: "subunit", label: "Alt Birim", type: "text" },
  ],
  entities: [
    { id: "usd", name: "Amerikan Doları", fields: { country: "ABD", symbol: "$", century: "18. yüzyıl", continent: "Kuzey Amerika", subunit: "Cent" }, emojiClue: "💱🇺🇸💵🦅", nameByLocale: { en: "US Dollar", de: "US-Dollar", fr: "Dollar américain", es: "Dólar estadounidense", pt: "Dólar americano" } },
    { id: "eur", name: "Euro", fields: { country: "Avrupa Birliği", symbol: "€", century: "20./21. yüzyıl", continent: "Avrupa", subunit: "Cent" }, emojiClue: "💱🇪🇺💶⭐", nameByLocale: { en: "Euro", de: "Euro", fr: "Euro", es: "Euro", pt: "Euro" } },
    { id: "jpy", name: "Japon Yeni", fields: { country: "Japonya", symbol: "¥", century: "19. yüzyıl", continent: "Asya", subunit: "Sen" }, emojiClue: "💱🇯🇵💴🌸", nameByLocale: { en: "Japanese Yen", de: "Japanischer Yen", fr: "Yen japonais", es: "Yen japonés", pt: "Iene japonês" } },
    { id: "gbp", name: "İngiliz Sterlini", fields: { country: "İngiltere", symbol: "£", century: "8. yüzyıl", continent: "Avrupa", subunit: "Peni" }, emojiClue: "💱🇬🇧💷👑", nameByLocale: { en: "British Pound", de: "Britisches Pfund", fr: "Livre sterling", es: "Libra esterlina", pt: "Libra esterlina" } },
    { id: "chf", name: "İsviçre Frangı", fields: { country: "İsviçre", symbol: "Fr", century: "19. yüzyıl", continent: "Avrupa", subunit: "Rappen" }, emojiClue: "💱🇨🇭⛰️🏦", nameByLocale: { en: "Swiss Franc", de: "Schweizer Franken", fr: "Franc suisse", es: "Franco suizo", pt: "Franco suíço" } },
    { id: "cad", name: "Kanada Doları", fields: { country: "Kanada", symbol: "$", century: "19. yüzyıl", continent: "Kuzey Amerika", subunit: "Cent" }, emojiClue: "💱🇨🇦🍁💵", nameByLocale: { en: "Canadian Dollar", de: "Kanadischer Dollar", fr: "Dollar canadien", es: "Dólar canadiense", pt: "Dólar canadense" } },
    { id: "aud", name: "Avustralya Doları", fields: { country: "Avustralya", symbol: "$", century: "20. yüzyıl", continent: "Okyanusya", subunit: "Cent" }, emojiClue: "💱🇦🇺🦘💵", nameByLocale: { en: "Australian Dollar", de: "Australischer Dollar", fr: "Dollar australien", es: "Dólar australiano", pt: "Dólar australiano" } },
    { id: "cny", name: "Çin Yuanı", fields: { country: "Çin", symbol: "¥", century: "20. yüzyıl", continent: "Asya", subunit: "Fen" }, emojiClue: "💱🇨🇳🐉💴", nameByLocale: { en: "Chinese Yuan", de: "Chinesischer Yuan", fr: "Yuan chinois", es: "Yuan chino", pt: "Yuan chinês" } },
    { id: "inr", name: "Hindistan Rupisi", fields: { country: "Hindistan", symbol: "₹", century: "20. yüzyıl", continent: "Asya", subunit: "Paisa" }, emojiClue: "💱🇮🇳🕉️💸", nameByLocale: { en: "Indian Rupee", de: "Indische Rupie", fr: "Roupie indienne", es: "Rupia india", pt: "Rupia indiana" } },
    { id: "rub", name: "Rus Rublesi", fields: { country: "Rusya", symbol: "₽", century: "16. yüzyıl", continent: "Avrupa", subunit: "Kopek" }, emojiClue: "💱🇷🇺🐻💰", nameByLocale: { en: "Russian Ruble", de: "Russischer Rubel", fr: "Rouble russe", es: "Rublo ruso", pt: "Rublo russo" } },
    { id: "brl", name: "Brezilya Reali", fields: { country: "Brezilya", symbol: "R$", century: "20. yüzyıl", continent: "Güney Amerika", subunit: "Centavo" }, emojiClue: "💱🇧🇷🌴💵", nameByLocale: { en: "Brazilian Real", de: "Brasilianischer Real", fr: "Real brésilien", es: "Real brasileño", pt: "Real brasileiro" } },
    { id: "mxn", name: "Meksika Pesosu", fields: { country: "Meksika", symbol: "$", century: "20. yüzyıl", continent: "Kuzey Amerika", subunit: "Centavo" }, emojiClue: "💱🇲🇽🌵💵", nameByLocale: { en: "Mexican Peso", de: "Mexikanischer Peso", fr: "Peso mexicain", es: "Peso mexicano", pt: "Peso mexicano" } },
    { id: "krw", name: "Güney Kore Wonu", fields: { country: "Güney Kore", symbol: "₩", century: "20. yüzyıl", continent: "Asya", subunit: "Jeon" }, emojiClue: "💱🇰🇷🎎💴", nameByLocale: { en: "South Korean Won", de: "Südkoreanischer Won", fr: "Won sud-coréen", es: "Won surcoreano", pt: "Won sul-coreano" } },
    { id: "try", name: "Türk Lirası", fields: { country: "Türkiye", symbol: "₺", century: "21. yüzyıl", continent: "Asya", subunit: "Kuruş" }, emojiClue: "💱🇹🇷🌙💰", nameByLocale: { en: "Turkish Lira", de: "Türkische Lira", fr: "Livre turque", es: "Lira turca", pt: "Lira turca" } },
    { id: "sar", name: "Suudi Arabistan Riyali", fields: { country: "Suudi Arabistan", symbol: "﷼", century: "20. yüzyıl", continent: "Asya", subunit: "Halala" }, emojiClue: "💱🇸🇦🐪💰", nameByLocale: { en: "Saudi Riyal", de: "Saudi-Riyal", fr: "Riyal saoudien", es: "Riyal saudí", pt: "Riyal saudita" } },
    { id: "zar", name: "Güney Afrika Randı", fields: { country: "Güney Afrika", symbol: "R", century: "20. yüzyıl", continent: "Afrika", subunit: "Cent" }, emojiClue: "💱🇿🇦🦁💵", nameByLocale: { en: "South African Rand", de: "Südafrikanischer Rand", fr: "Rand sud-africain", es: "Rand sudafricano", pt: "Rand sul-africano" } },
    { id: "nok", name: "Norveç Kronu", fields: { country: "Norveç", symbol: "kr", century: "19. yüzyıl", continent: "Avrupa", subunit: "Øre" }, emojiClue: "💱🇳🇴🐟💰", nameByLocale: { en: "Norwegian Krone", de: "Norwegische Krone", fr: "Couronne norvégienne", es: "Corona noruega", pt: "Coroa norueguesa" } },
    { id: "sek", name: "İsveç Kronası", fields: { country: "İsveç", symbol: "kr", century: "19. yüzyıl", continent: "Avrupa", subunit: "Öre" }, emojiClue: "💱🇸🇪❄️💰", nameByLocale: { en: "Swedish Krona", de: "Schwedische Krone", fr: "Couronne suédoise", es: "Corona sueca", pt: "Coroa sueca" } },
    { id: "dkk", name: "Danimarka Kronu", fields: { country: "Danimarka", symbol: "kr", century: "19. yüzyıl", continent: "Avrupa", subunit: "Øre" }, emojiClue: "💱🇩🇰🧱💰", nameByLocale: { en: "Danish Krone", de: "Dänische Krone", fr: "Couronne danoise", es: "Corona danesa", pt: "Coroa dinamarquesa" } },
    { id: "pln", name: "Polonya Zlotisi", fields: { country: "Polonya", symbol: "zł", century: "20./21. yüzyıl", continent: "Avrupa", subunit: "Grosz" }, emojiClue: "💱🇵🇱🦅💰", nameByLocale: { en: "Polish Złoty", de: "Polnischer Złoty", fr: "Złoty polonais", es: "Złoty polaco", pt: "Zloty polonês" } },
    { id: "nzd", name: "Yeni Zelanda Doları", fields: { country: "Yeni Zelanda", symbol: "$", century: "20. yüzyıl", continent: "Okyanusya", subunit: "Cent" }, emojiClue: "💱🇳🇿🥝💵", nameByLocale: { en: "New Zealand Dollar", de: "Neuseeland-Dollar", fr: "Dollar néo-zélandais", es: "Dólar neozelandés", pt: "Dólar neozelandês" } },
    { id: "sgd", name: "Singapur Doları", fields: { country: "Singapur", symbol: "$", century: "20. yüzyıl", continent: "Asya", subunit: "Cent" }, emojiClue: "💱🇸🇬🦁💵", nameByLocale: { en: "Singapore Dollar", de: "Singapur-Dollar", fr: "Dollar de Singapour", es: "Dólar de Singapur", pt: "Dólar de Singapura" } },
    { id: "thb", name: "Tayland Bahtı", fields: { country: "Tayland", symbol: "฿", century: "19. yüzyıl", continent: "Asya", subunit: "Satang" }, emojiClue: "💱🇹🇭🐘💰", nameByLocale: { en: "Thai Baht", de: "Thailändischer Baht", fr: "Baht thaïlandais", es: "Baht tailandés", pt: "Baht tailandês" } },
    { id: "idr", name: "Endonezya Rupiahı", fields: { country: "Endonezya", symbol: "Rp", century: "20. yüzyıl", continent: "Asya", subunit: "Sen" }, emojiClue: "💱🇮🇩🌋💰", nameByLocale: { en: "Indonesian Rupiah", de: "Indonesische Rupiah", fr: "Roupie indonésienne", es: "Rupia indonesia", pt: "Rupia indonésia" } },
    { id: "myr", name: "Malezya Ringgiti", fields: { country: "Malezya", symbol: "RM", century: "20. yüzyıl", continent: "Asya", subunit: "Sen" }, emojiClue: "💱🇲🇾🐯💰", nameByLocale: { en: "Malaysian Ringgit", de: "Malaysischer Ringgit", fr: "Ringgit malaisien", es: "Ringgit malayo", pt: "Ringgit malaio" } },
    { id: "php", name: "Filipin Pesosu", fields: { country: "Filipinler", symbol: "₱", century: "19. yüzyıl", continent: "Asya", subunit: "Sentimo" }, emojiClue: "💱🇵🇭🏝️💵", nameByLocale: { en: "Philippine Peso", de: "Philippinischer Peso", fr: "Peso philippin", es: "Peso filipino", pt: "Peso filipino" } },
    { id: "vnd", name: "Vietnam Dongu", fields: { country: "Vietnam", symbol: "₫", century: "20. yüzyıl", continent: "Asya", subunit: "Xu" }, emojiClue: "💱🇻🇳🐉💰", nameByLocale: { en: "Vietnamese Dong", de: "Vietnamesischer Dong", fr: "Dong vietnamien", es: "Dong vietnamita", pt: "Dong vietnamita" } },
    { id: "egp", name: "Mısır Poundu", fields: { country: "Mısır", symbol: "£", century: "19. yüzyıl", continent: "Afrika", subunit: "Piastre" }, emojiClue: "💱🇪🇬🔺💰", nameByLocale: { en: "Egyptian Pound", de: "Ägyptisches Pfund", fr: "Livre égyptienne", es: "Libra egipcia", pt: "Libra egípcia" } },
    { id: "ngn", name: "Nijerya Nairası", fields: { country: "Nijerya", symbol: "₦", century: "20. yüzyıl", continent: "Afrika", subunit: "Kobo" }, emojiClue: "💱🇳🇬🛢️💰", nameByLocale: { en: "Nigerian Naira", de: "Nigerianischer Naira", fr: "Naira nigérian", es: "Naira nigeriano", pt: "Naira nigeriano" } },
    { id: "kes", name: "Kenya Şilini", fields: { country: "Kenya", symbol: "Sh", century: "20. yüzyıl", continent: "Afrika", subunit: "Cent" }, emojiClue: "💱🇰🇪🦒💰", nameByLocale: { en: "Kenyan Shilling", de: "Kenia-Schilling", fr: "Shilling kényan", es: "Chelín keniano", pt: "Xelim queniano" } },
    { id: "ils", name: "İsrail Şekeli", fields: { country: "İsrail", symbol: "₪", century: "20. yüzyıl", continent: "Asya", subunit: "Agora" }, emojiClue: "💱🇮🇱✡️💰", nameByLocale: { en: "Israeli Shekel", de: "Israelischer Schekel", fr: "Sheqel israélien", es: "Séquel israelí", pt: "Shekel israelense" } },
    { id: "aed", name: "BAE Dirhemi", fields: { country: "Birleşik Arap Emirlikleri", symbol: "د.إ", century: "20. yüzyıl", continent: "Asya", subunit: "Fils" }, emojiClue: "💱🇦🇪🏙️💰", nameByLocale: { en: "UAE Dirham", de: "VAE-Dirham", fr: "Dirham des ÉAU", es: "Dírham de EAU", pt: "Dirham dos EAU" } },
    { id: "ars", name: "Arjantin Pesosu", fields: { country: "Arjantin", symbol: "$", century: "20. yüzyıl", continent: "Güney Amerika", subunit: "Centavo" }, emojiClue: "💱🇦🇷🥩💵", nameByLocale: { en: "Argentine Peso", de: "Argentinischer Peso", fr: "Peso argentin", es: "Peso argentino", pt: "Peso argentino" } },
    { id: "clp", name: "Şili Pesosu", fields: { country: "Şili", symbol: "$", century: "20. yüzyıl", continent: "Güney Amerika", subunit: "Centavo" }, emojiClue: "💱🇨🇱⛰️💵", nameByLocale: { en: "Chilean Peso", de: "Chilenischer Peso", fr: "Peso chilien", es: "Peso chileno", pt: "Peso chileno" } },
    { id: "cop", name: "Kolombiya Pesosu", fields: { country: "Kolombiya", symbol: "$", century: "19. yüzyıl", continent: "Güney Amerika", subunit: "Centavo" }, emojiClue: "💱🇨🇴☕💵", nameByLocale: { en: "Colombian Peso", de: "Kolumbianischer Peso", fr: "Peso colombien", es: "Peso colombiano", pt: "Peso colombiano" } },
    { id: "pen", name: "Peru Solu", fields: { country: "Peru", symbol: "S/", century: "20. yüzyıl", continent: "Güney Amerika", subunit: "Céntimo" }, emojiClue: "💱🇵🇪🦙💰", nameByLocale: { en: "Peruvian Sol", de: "Peruanischer Sol", fr: "Sol péruvien", es: "Sol peruano", pt: "Sol peruano" } },
    { id: "uah", name: "Ukrayna Grivnası", fields: { country: "Ukrayna", symbol: "₴", century: "20. yüzyıl", continent: "Avrupa", subunit: "Kopiyka" }, emojiClue: "💱🇺🇦🌻💰", nameByLocale: { en: "Ukrainian Hryvnia", de: "Ukrainische Hrywnja", fr: "Hryvnia ukrainienne", es: "Grivna ucraniana", pt: "Hryvnia ucraniana" } },
    { id: "czk", name: "Çek Korunası", fields: { country: "Çekya", symbol: "Kč", century: "20. yüzyıl", continent: "Avrupa", subunit: "Haléř" }, emojiClue: "💱🇨🇿🏰💰", nameByLocale: { en: "Czech Koruna", de: "Tschechische Krone", fr: "Couronne tchèque", es: "Corona checa", pt: "Coroa checa" } },
    { id: "huf", name: "Macar Forinti", fields: { country: "Macaristan", symbol: "Ft", century: "20. yüzyıl", continent: "Avrupa", subunit: "Fillér" }, emojiClue: "💱🇭🇺🌶️💰", nameByLocale: { en: "Hungarian Forint", de: "Ungarischer Forint", fr: "Forint hongrois", es: "Forinto húngaro", pt: "Florim húngaro" } },
    { id: "isk", name: "İzlanda Kronu", fields: { country: "İzlanda", symbol: "kr", century: "19./20. yüzyıl", continent: "Avrupa", subunit: "Eyrir" }, emojiClue: "💱🇮🇸🌋💰", nameByLocale: { en: "Icelandic Króna", de: "Isländische Krone", fr: "Couronne islandaise", es: "Corona islandesa", pt: "Coroa islandesa" } },
  ],
  i18n: currenciesI18n,
};

export default currencies;
