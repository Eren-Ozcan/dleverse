import type { PackConfig } from "../../engine/types";

/**
 * Yayıncı sahnesi hızlı değişiyor (platform, işbirlikleri vb.) — bu yüzden
 * alanlar kasıtlı olarak kaba/kategorik tutuldu (kesin takipçi sayısı,
 * güncel platform gibi çabuk eskiyen veriler kullanılmadı). Yayına almadan
 * önce güncel bilgiyle doğrulanmalı.
 */
const yayincilar: PackConfig = {
  id: "yayincilar",
  title: "Türkiye Yayıncıları",
  subtitle: "Günün içerik üreticisini bil",
  emoji: "🎥",
  theme: { primary: "#9147FF", secondary: "#1B1B1F", background: "#0F0F12" },
  dailySaltVersion: 1,
  fields: [
    { key: "category", label: "İçerik Kategorisi", type: "text" },
    { key: "startPlatform", label: "Kariyer Başlangıcı", type: "text" },
    { key: "tenure", label: "Kıdem", type: "text" },
  ],
  entities: [
    { id: "elraenn", name: "Elraenn", fields: { category: "Oyun", startPlatform: "YouTube", tenure: "Kıdemli (2015 öncesi)" } },
    { id: "jahrein", name: "Jahrein", fields: { category: "Anlatım", startPlatform: "YouTube", tenure: "Kıdemli (2015 öncesi)" } },
    { id: "pqueen", name: "Pqueen", fields: { category: "Oyun", startPlatform: "Twitch", tenure: "Orta (2016-2019)" } },
    { id: "unlost", name: "Unlost", fields: { category: "Oyun", startPlatform: "Twitch", tenure: "Orta (2016-2019)" } },
    { id: "wtcn", name: "WTCN", fields: { category: "Oyun", startPlatform: "Twitch", tenure: "Orta (2016-2019)" } },
    { id: "mithrain", name: "Mithrain", fields: { category: "Oyun", startPlatform: "Twitch", tenure: "Orta (2016-2019)" } },
    { id: "carlos", name: "CarloS", fields: { category: "Oyun", startPlatform: "Twitch", tenure: "Orta (2016-2019)" } },
    { id: "zeon", name: "Zeon", fields: { category: "Oyun", startPlatform: "Twitch", tenure: "Orta (2016-2019)" } },
  ],
};

export default yayincilar;
