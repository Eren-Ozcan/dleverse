import type { PackConfig } from "../../engine/types";

/**
 * Kadro/transfer verileri sezona göre değişir — yayına almadan önce
 * güncel sezon verisiyle doğrulanmalı. Burada motoru kanıtlamak için
 * yakın zamanda Süper Lig'de oynamış tanınmış isimler kullanıldı.
 */
const superlig: PackConfig = {
  id: "superlig",
  title: "Süper Lig",
  subtitle: "Günün futbolcusunu bil",
  emoji: "⚽",
  theme: { primary: "#E30A17", secondary: "#1B1B1F", background: "#0F0F12" },
  dailySaltVersion: 1,
  fields: [
    { key: "club", label: "Takım", type: "text" },
    { key: "position", label: "Mevki", type: "text" },
    { key: "nationality", label: "Uyruk", type: "text" },
    { key: "birthYear", label: "Doğum Yılı", type: "year" },
    { key: "continent", label: "Kıta", type: "text" },
  ],
  entities: [
    { id: "icardi", name: "Mauro Icardi", fields: { club: "Galatasaray", position: "Forvet", nationality: "Arjantin", birthYear: 1993, continent: "Güney Amerika" } },
    { id: "osimhen", name: "Victor Osimhen", fields: { club: "Galatasaray", position: "Forvet", nationality: "Nijerya", birthYear: 1998, continent: "Afrika" } },
    { id: "barisalper", name: "Barış Alper Yılmaz", aliases: ["Barış Alper"], fields: { club: "Galatasaray", position: "Kanat", nationality: "Türkiye", birthYear: 1998, continent: "Avrupa" } },
    { id: "halildervisoglu", name: "Halil Dervişoğlu", fields: { club: "Galatasaray", position: "Forvet", nationality: "Türkiye", birthYear: 1999, continent: "Avrupa" } },
    { id: "yunusakgun", name: "Yunus Akgün", fields: { club: "Galatasaray", position: "Kanat", nationality: "Türkiye", birthYear: 2000, continent: "Avrupa" } },
    { id: "dzeko", name: "Edin Dzeko", fields: { club: "Fenerbahçe", position: "Forvet", nationality: "Bosna Hersek", birthYear: 1986, continent: "Avrupa" } },
    { id: "fred", name: "Fred", fields: { club: "Fenerbahçe", position: "Orta Saha", nationality: "Brezilya", birthYear: 1993, continent: "Güney Amerika" } },
    { id: "livakovic", name: "Dominik Livakovic", fields: { club: "Fenerbahçe", position: "Kaleci", nationality: "Hırvatistan", birthYear: 1995, continent: "Avrupa" } },
    { id: "irfancan", name: "İrfan Can Kahveci", fields: { club: "Fenerbahçe", position: "Orta Saha", nationality: "Türkiye", birthYear: 1995, continent: "Avrupa" } },
    { id: "cengizunder", name: "Cengiz Ünder", fields: { club: "Fenerbahçe", position: "Kanat", nationality: "Türkiye", birthYear: 1997, continent: "Avrupa" } },
    { id: "ghezzal", name: "Rachid Ghezzal", fields: { club: "Beşiktaş", position: "Kanat", nationality: "Cezayir", birthYear: 1992, continent: "Afrika" } },
    { id: "almusrati", name: "Al-Musrati", fields: { club: "Beşiktaş", position: "Orta Saha", nationality: "Libya", birthYear: 1996, continent: "Afrika" } },
    { id: "enner", name: "Enner Valencia", fields: { club: "Beşiktaş", position: "Forvet", nationality: "Ekvador", birthYear: 1989, continent: "Güney Amerika" } },
    { id: "trezeguet", name: "Trezeguet (Mahmoud Hassan)", aliases: ["Trezeguet"], fields: { club: "Trabzonspor", position: "Kanat", nationality: "Mısır", birthYear: 1994, continent: "Afrika" } },
    { id: "onuachu", name: "Paul Onuachu", fields: { club: "Trabzonspor", position: "Forvet", nationality: "Nijerya", birthYear: 1994, continent: "Afrika" } },
  ],
};

export default superlig;
