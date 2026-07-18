import type { PackConfig } from "../../engine/types";

const baskentler: PackConfig = {
  id: "baskentler",
  title: "Dünya Ülkeleri",
  subtitle: "Günün ülkesini bil",
  emoji: "🌍",
  theme: { primary: "#2E8B57", secondary: "#1B1B1F", background: "#0F0F12" },
  dailySaltVersion: 1,
  fields: [
    { key: "continent", label: "Kıta", type: "text" },
    { key: "capital", label: "Başkent", type: "text" },
    { key: "language", label: "Resmi Dil", type: "text" },
    { key: "currency", label: "Para Birimi", type: "text" },
  ],
  entities: [
    { id: "turkiye", name: "Türkiye", fields: { continent: "Avrasya", capital: "Ankara", language: "Türkçe", currency: "Türk Lirası" } },
    { id: "fransa", name: "Fransa", fields: { continent: "Avrupa", capital: "Paris", language: "Fransızca", currency: "Euro" } },
    { id: "japonya", name: "Japonya", fields: { continent: "Asya", capital: "Tokyo", language: "Japonca", currency: "Yen" } },
    { id: "abd", name: "ABD", aliases: ["Amerika", "Amerika Birleşik Devletleri"], fields: { continent: "Kuzey Amerika", capital: "Washington D.C.", language: "İngilizce", currency: "Dolar" } },
    { id: "ingiltere", name: "İngiltere", aliases: ["Birleşik Krallık"], fields: { continent: "Avrupa", capital: "Londra", language: "İngilizce", currency: "Sterlin" } },
    { id: "almanya", name: "Almanya", fields: { continent: "Avrupa", capital: "Berlin", language: "Almanca", currency: "Euro" } },
    { id: "italya", name: "İtalya", fields: { continent: "Avrupa", capital: "Roma", language: "İtalyanca", currency: "Euro" } },
    { id: "ispanya", name: "İspanya", fields: { continent: "Avrupa", capital: "Madrid", language: "İspanyolca", currency: "Euro" } },
    { id: "brezilya", name: "Brezilya", fields: { continent: "Güney Amerika", capital: "Brasília", language: "Portekizce", currency: "Real" } },
    { id: "arjantin", name: "Arjantin", fields: { continent: "Güney Amerika", capital: "Buenos Aires", language: "İspanyolca", currency: "Peso" } },
    { id: "misir", name: "Mısır", fields: { continent: "Afrika", capital: "Kahire", language: "Arapça", currency: "Mısır Lirası" } },
    { id: "guneyafrika", name: "Güney Afrika", fields: { continent: "Afrika", capital: "Pretoria", language: "İngilizce", currency: "Rand" } },
    { id: "hindistan", name: "Hindistan", fields: { continent: "Asya", capital: "Yeni Delhi", language: "Hintçe", currency: "Rupi" } },
    { id: "cin", name: "Çin", fields: { continent: "Asya", capital: "Pekin", language: "Çince", currency: "Yuan" } },
    { id: "rusya", name: "Rusya", fields: { continent: "Avrasya", capital: "Moskova", language: "Rusça", currency: "Ruble" } },
    { id: "kanada", name: "Kanada", fields: { continent: "Kuzey Amerika", capital: "Ottawa", language: "İngilizce", currency: "Dolar" } },
    { id: "avustralya", name: "Avustralya", fields: { continent: "Okyanusya", capital: "Canberra", language: "İngilizce", currency: "Dolar" } },
    { id: "meksika", name: "Meksika", fields: { continent: "Kuzey Amerika", capital: "Meksiko", language: "İspanyolca", currency: "Peso" } },
    { id: "guneykore", name: "Güney Kore", fields: { continent: "Asya", capital: "Seul", language: "Korece", currency: "Won" } },
    { id: "yunanistan", name: "Yunanistan", fields: { continent: "Avrupa", capital: "Atina", language: "Yunanca", currency: "Euro" } },
  ],
};

export default baskentler;
