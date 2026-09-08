import type { PackConfig } from "../../engine/types";
import { worldAirlinesI18n } from "./i18n/world-airlines";

/**
 * World airlines - not people, this is corporate/geography trivia (same
 * pattern as the Currencies pack: emoji clue, no real photos). "foundedYear"
 * is the company's own official founding date (e.g. 1953 for Lufthansa, when
 * today's company was founded; its 1926 predecessor was a separate legal
 * entity). "allianceOrType" shows current global alliance membership;
 * scheduled carriers outside an alliance are marked "Independent", and
 * non-aligned low-cost carriers "Low-cost".
 */
const worldAirlines: PackConfig = {
  id: "world-airlines",
  title: "Dünya Havayolları",
  subtitle: "Günün havayolunu bil",
  emoji: "✈️",
  theme: { primary: "#1E88E5", secondary: "#1B1B1F", background: "#0F0F12" },
  dailySaltVersion: 1,
  fields: [
    { key: "country", label: "Ülke", type: "text" },
    { key: "foundedYear", label: "Kuruluş Yılı", type: "year", near: 5 },
    { key: "allianceOrType", label: "İttifak/Tür", type: "text" },
    { key: "continent", label: "Kıta", type: "text" },
    { key: "hubAirport", label: "Ana Merkez Havalimanı", type: "text" },
  ],
  entities: [
    { id: "turkishairlines", name: "Türk Hava Yolları", aliases: ["THY", "Turkish Airlines"], fields: { country: "Türkiye", foundedYear: 1933, allianceOrType: "Star Alliance", continent: "Asya", hubAirport: "İstanbul Havalimanı" }, emojiClue: "✈️🇹🇷🌍🦢", nameByLocale: { en: "Turkish Airlines", de: "Turkish Airlines", fr: "Turkish Airlines", es: "Turkish Airlines", pt: "Turkish Airlines" } },
    { id: "pegasus", name: "Pegasus Hava Yolları", aliases: ["Pegasus"], fields: { country: "Türkiye", foundedYear: 1990, allianceOrType: "Düşük Maliyetli", continent: "Asya", hubAirport: "İstanbul Sabiha Gökçen Havalimanı" }, emojiClue: "✈️🇹🇷🐎💛", nameByLocale: { en: "Pegasus Airlines", de: "Pegasus Airlines", fr: "Pegasus Airlines", es: "Pegasus Airlines", pt: "Pegasus Airlines" } },
    { id: "lufthansa", name: "Lufthansa", fields: { country: "Almanya", foundedYear: 1953, allianceOrType: "Star Alliance", continent: "Avrupa", hubAirport: "Frankfurt Havalimanı" }, emojiClue: "✈️🇩🇪🐦💙" },
    { id: "airfrance", name: "Air France", fields: { country: "Fransa", foundedYear: 1933, allianceOrType: "SkyTeam", continent: "Avrupa", hubAirport: "Paris Charles de Gaulle Havalimanı" }, emojiClue: "✈️🇫🇷🐎🥐" },
    { id: "klm", name: "KLM", aliases: ["KLM Royal Dutch Airlines"], fields: { country: "Hollanda", foundedYear: 1919, allianceOrType: "SkyTeam", continent: "Avrupa", hubAirport: "Amsterdam Schiphol Havalimanı" }, emojiClue: "✈️🇳🇱👑🏠" },
    { id: "britishairways", name: "British Airways", fields: { country: "İngiltere", foundedYear: 1974, allianceOrType: "Oneworld", continent: "Avrupa", hubAirport: "Londra Heathrow Havalimanı" }, emojiClue: "✈️🇬🇧👑🎩" },
    { id: "iberia", name: "Iberia", fields: { country: "İspanya", foundedYear: 1927, allianceOrType: "Oneworld", continent: "Avrupa", hubAirport: "Madrid Barajas Havalimanı" }, emojiClue: "✈️🇪🇸🔴🟡" },
    { id: "swiss", name: "Swiss International Air Lines", aliases: ["Swiss"], fields: { country: "İsviçre", foundedYear: 2002, allianceOrType: "Star Alliance", continent: "Avrupa", hubAirport: "Zürih Havalimanı" }, emojiClue: "✈️🇨🇭⛰️➕" },
    { id: "finnair", name: "Finnair", fields: { country: "Finlandiya", foundedYear: 1923, allianceOrType: "Oneworld", continent: "Avrupa", hubAirport: "Helsinki-Vantaa Havalimanı" }, emojiClue: "✈️🇫🇮❄️💙" },
    { id: "tap", name: "TAP Air Portugal", aliases: ["TAP"], fields: { country: "Portekiz", foundedYear: 1945, allianceOrType: "Star Alliance", continent: "Avrupa", hubAirport: "Lizbon Havalimanı" }, emojiClue: "✈️🇵🇹🌊🟩" },
    { id: "lot", name: "LOT Polish Airlines", aliases: ["LOT"], fields: { country: "Polonya", foundedYear: 1929, allianceOrType: "Star Alliance", continent: "Avrupa", hubAirport: "Varşova Chopin Havalimanı" }, emojiClue: "✈️🇵🇱🕊️🎹" },
    { id: "ryanair", name: "Ryanair", fields: { country: "İrlanda", foundedYear: 1984, allianceOrType: "Düşük Maliyetli", continent: "Avrupa", hubAirport: "Dublin Havalimanı" }, emojiClue: "✈️🇮🇪💙💰" },
    { id: "easyjet", name: "easyJet", fields: { country: "İngiltere", foundedYear: 1995, allianceOrType: "Düşük Maliyetli", continent: "Avrupa", hubAirport: "Londra Luton Havalimanı" }, emojiClue: "✈️🇬🇧🟠💰" },
    { id: "virginatlantic", name: "Virgin Atlantic", fields: { country: "İngiltere", foundedYear: 1984, allianceOrType: "SkyTeam", continent: "Avrupa", hubAirport: "Londra Heathrow Havalimanı" }, emojiClue: "✈️🇬🇧❤️🎸" },
    { id: "emirates", name: "Emirates", fields: { country: "Birleşik Arap Emirlikleri", foundedYear: 1985, allianceOrType: "Bağımsız", continent: "Asya", hubAirport: "Dubai Uluslararası Havalimanı" }, emojiClue: "✈️🇦🇪🏙️🔴" },
    { id: "etihad", name: "Etihad Airways", fields: { country: "Birleşik Arap Emirlikleri", foundedYear: 2003, allianceOrType: "Bağımsız", continent: "Asya", hubAirport: "Zayed Uluslararası Havalimanı" }, emojiClue: "✈️🇦🇪🏜️🟤" },
    { id: "qatarairways", name: "Qatar Airways", fields: { country: "Katar", foundedYear: 1993, allianceOrType: "Oneworld", continent: "Asya", hubAirport: "Hamad Uluslararası Havalimanı" }, emojiClue: "✈️🇶🇦🦌🟣" },
    { id: "singaporeairlines", name: "Singapore Airlines", fields: { country: "Singapur", foundedYear: 1947, allianceOrType: "Star Alliance", continent: "Asya", hubAirport: "Singapur Changi Havalimanı" }, emojiClue: "✈️🇸🇬🦁🌺" },
    { id: "cathaypacific", name: "Cathay Pacific", fields: { country: "Hong Kong", foundedYear: 1946, allianceOrType: "Oneworld", continent: "Asya", hubAirport: "Hong Kong Uluslararası Havalimanı" }, emojiClue: "✈️🇭🇰🐉🟢" },
    { id: "japanairlines", name: "Japan Airlines", aliases: ["JAL"], fields: { country: "Japonya", foundedYear: 1951, allianceOrType: "Oneworld", continent: "Asya", hubAirport: "Tokyo Haneda Havalimanı" }, emojiClue: "✈️🇯🇵🦅🔴" },
    { id: "ana", name: "All Nippon Airways", aliases: ["ANA"], fields: { country: "Japonya", foundedYear: 1952, allianceOrType: "Star Alliance", continent: "Asya", hubAirport: "Tokyo Haneda Havalimanı" }, emojiClue: "✈️🇯🇵🔵🐢" },
    { id: "koreanair", name: "Korean Air", fields: { country: "Güney Kore", foundedYear: 1969, allianceOrType: "SkyTeam", continent: "Asya", hubAirport: "Seul Incheon Havalimanı" }, emojiClue: "✈️🇰🇷☯️🔵" },
    { id: "airchina", name: "Air China", fields: { country: "Çin", foundedYear: 1988, allianceOrType: "Star Alliance", continent: "Asya", hubAirport: "Pekin Başkent Havalimanı" }, emojiClue: "✈️🇨🇳🐉🔴" },
    { id: "thaiairways", name: "Thai Airways", fields: { country: "Tayland", foundedYear: 1960, allianceOrType: "Star Alliance", continent: "Asya", hubAirport: "Bangkok Suvarnabhumi Havalimanı" }, emojiClue: "✈️🇹🇭🐘🟣" },
    { id: "airindia", name: "Air India", fields: { country: "Hindistan", foundedYear: 1932, allianceOrType: "Star Alliance", continent: "Asya", hubAirport: "Delhi Indira Gandhi Havalimanı" }, emojiClue: "✈️🇮🇳🦢🔴" },
    { id: "delta", name: "Delta Air Lines", aliases: ["Delta"], fields: { country: "ABD", foundedYear: 1925, allianceOrType: "SkyTeam", continent: "Kuzey Amerika", hubAirport: "Atlanta Hartsfield-Jackson Havalimanı" }, emojiClue: "✈️🇺🇸🔺🔵" },
    { id: "americanairlines", name: "American Airlines", fields: { country: "ABD", foundedYear: 1930, allianceOrType: "Oneworld", continent: "Kuzey Amerika", hubAirport: "Dallas/Fort Worth Havalimanı" }, emojiClue: "✈️🇺🇸🦅🩶" },
    { id: "unitedairlines", name: "United Airlines", fields: { country: "ABD", foundedYear: 1926, allianceOrType: "Star Alliance", continent: "Kuzey Amerika", hubAirport: "Chicago O'Hare Havalimanı" }, emojiClue: "✈️🇺🇸🌐🔵" },
    { id: "southwest", name: "Southwest Airlines", fields: { country: "ABD", foundedYear: 1967, allianceOrType: "Düşük Maliyetli", continent: "Kuzey Amerika", hubAirport: "Dallas Love Field Havalimanı" }, emojiClue: "✈️🇺🇸❤️🥜" },
    { id: "aircanada", name: "Air Canada", fields: { country: "Kanada", foundedYear: 1937, allianceOrType: "Star Alliance", continent: "Kuzey Amerika", hubAirport: "Toronto Pearson Havalimanı" }, emojiClue: "✈️🇨🇦🍁🔴" },
    { id: "aeromexico", name: "Aeroméxico", fields: { country: "Meksika", foundedYear: 1934, allianceOrType: "SkyTeam", continent: "Kuzey Amerika", hubAirport: "Meksiko Benito Juárez Havalimanı" }, emojiClue: "✈️🇲🇽🦅🟦" },
    { id: "latam", name: "LATAM Airlines", aliases: ["LATAM", "LAN"], fields: { country: "Şili", foundedYear: 1929, allianceOrType: "Bağımsız", continent: "Güney Amerika", hubAirport: "Santiago Arturo Merino Benítez Havalimanı" }, emojiClue: "✈️🇨🇱⛰️🟣" },
    { id: "avianca", name: "Avianca", fields: { country: "Kolombiya", foundedYear: 1919, allianceOrType: "Star Alliance", continent: "Güney Amerika", hubAirport: "Bogotá El Dorado Havalimanı" }, emojiClue: "✈️🇨🇴☕🔴" },
    { id: "gol", name: "Gol Linhas Aéreas", aliases: ["Gol"], fields: { country: "Brezilya", foundedYear: 2000, allianceOrType: "Düşük Maliyetli", continent: "Güney Amerika", hubAirport: "São Paulo Guarulhos Havalimanı" }, emojiClue: "✈️🇧🇷⚽🟠" },
    { id: "ethiopian", name: "Ethiopian Airlines", fields: { country: "Etiyopya", foundedYear: 1945, allianceOrType: "Star Alliance", continent: "Afrika", hubAirport: "Addis Ababa Bole Havalimanı" }, emojiClue: "✈️🇪🇹🦁🟢" },
    { id: "egyptair", name: "EgyptAir", fields: { country: "Mısır", foundedYear: 1932, allianceOrType: "Star Alliance", continent: "Afrika", hubAirport: "Kahire Uluslararası Havalimanı" }, emojiClue: "✈️🇪🇬🦅🔺" },
    { id: "southafrican", name: "South African Airways", fields: { country: "Güney Afrika", foundedYear: 1934, allianceOrType: "Star Alliance", continent: "Afrika", hubAirport: "Johannesburg O. R. Tambo Havalimanı" }, emojiClue: "✈️🇿🇦🦅🌈" },
    { id: "royalairmaroc", name: "Royal Air Maroc", fields: { country: "Fas", foundedYear: 1957, allianceOrType: "Oneworld", continent: "Afrika", hubAirport: "Kazablanka Mohammed V Havalimanı" }, emojiClue: "✈️🇲🇦⭐🔴" },
    { id: "qantas", name: "Qantas", fields: { country: "Avustralya", foundedYear: 1920, allianceOrType: "Oneworld", continent: "Okyanusya", hubAirport: "Sidney Havalimanı" }, emojiClue: "✈️🇦🇺🦘🔴" },
    { id: "airnewzealand", name: "Air New Zealand", fields: { country: "Yeni Zelanda", foundedYear: 1940, allianceOrType: "Star Alliance", continent: "Okyanusya", hubAirport: "Auckland Havalimanı" }, emojiClue: "✈️🇳🇿🌿🖤" },
  ],
  i18n: worldAirlinesI18n,
};

export default worldAirlines;
