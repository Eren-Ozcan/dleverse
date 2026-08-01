import type { PackConfig } from "../../engine/types";
import { f1TeamsI18n } from "./i18n/f1-teams";

/**
 * Kurumsal/takım verisi (pilot değil). "constructorsChampionships" SADECE
 * resmi Yapımcılar (Constructors') Şampiyonluğu sayılır — bu kupa ilk kez
 * 1958'de verildi, bu yüzden 1958 öncesi (Alfa Romeo, Maserati'nin erken
 * dönemi) şampiyonluklar 0 olarak işaretlendi (o dönemde sadece Pilotlar
 * Şampiyonası vardı). Sayılar WebSearch ile doğrulandı: McLaren 2024 VE 2025
 * Yapımcılar Şampiyonluğunu kazandı (toplam 10), Red Bull hâlâ 6'da duruyor.
 * Görseller SADECE gerçek araç/pist fotoğrafları — logo bulunan takımlar için
 * (çoğu) image alanı bilinçli olarak boş bırakıldı.
 */
const f1Teams: PackConfig = {
  id: "f1-teams",
  title: "Formula 1 Takımları",
  subtitle: "Günün takımını bil",
  emoji: "🏁",
  theme: { primary: "#FF6B00", secondary: "#1B1B1F", background: "#0F0F12" },
  dailySaltVersion: 1,
  fields: [
    { key: "country", label: "Ülke", type: "text" },
    { key: "foundedYear", label: "Kuruluş Yılı", type: "year", near: 5 },
    { key: "constructorsChampionships", label: "Yapımcılar Şampiyonluğu", type: "number", near: 1 },
    { key: "mostFamousDriver", label: "En Efsanevi Pilotu", type: "text" },
    { key: "status", label: "Durum", type: "text" },
  ],
  entities: [
    { id: "ferrari", name: "Ferrari", aliases: ["Scuderia Ferrari"], fields: { country: "İtalya", foundedYear: 1929, constructorsChampionships: 16, mostFamousDriver: "Michael Schumacher", status: "Aktif" }, emojiClue: "🏁🇮🇹🔴🐎" },
    { id: "mclaren", name: "McLaren", fields: { country: "İngiltere", foundedYear: 1963, constructorsChampionships: 10, mostFamousDriver: "Ayrton Senna", status: "Aktif" }, emojiClue: "🏁🇬🇧🟠" },
    { id: "williams", name: "Williams", aliases: ["Williams Racing", "Williams Grand Prix Engineering"], fields: { country: "İngiltere", foundedYear: 1977, constructorsChampionships: 9, mostFamousDriver: "Nigel Mansell", status: "Aktif" }, emojiClue: "🏁🇬🇧🔵", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Atlassian_Williams_F1_Team_logo.svg/960px-Atlassian_Williams_F1_Team_logo.svg.png", imageCredit: "" },
    { id: "mercedes", name: "Mercedes", aliases: ["Mercedes-AMG Petronas"], fields: { country: "Almanya", foundedYear: 1954, constructorsChampionships: 8, mostFamousDriver: "Lewis Hamilton", status: "Aktif" }, emojiClue: "🏁🇩🇪⚫" },
    { id: "redbull", name: "Red Bull Racing", fields: { country: "Avusturya", foundedYear: 2005, constructorsChampionships: 6, mostFamousDriver: "Max Verstappen", status: "Aktif" }, emojiClue: "🏁🇦🇹🐂" },
    { id: "lotus", name: "Team Lotus", fields: { country: "İngiltere", foundedYear: 1958, constructorsChampionships: 7, mostFamousDriver: "Jim Clark", status: "Kapandı" }, emojiClue: "🏁🇬🇧🍀", image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/TeamLotus.jpg", imageCredit: "IKnowLotus, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "brabham", name: "Brabham", fields: { country: "İngiltere", foundedYear: 1962, constructorsChampionships: 2, mostFamousDriver: "Nelson Piquet", status: "Kapandı" }, emojiClue: "🏁🇬🇧🔧" },
    { id: "renault", name: "Renault", aliases: ["Renault F1 Team"], fields: { country: "Fransa", foundedYear: 1977, constructorsChampionships: 2, mostFamousDriver: "Fernando Alonso", status: "Kapandı" }, emojiClue: "🏁🇫🇷🟡" },
    { id: "tyrrell", name: "Tyrrell", aliases: ["Tyrrell Racing"], fields: { country: "İngiltere", foundedYear: 1968, constructorsChampionships: 1, mostFamousDriver: "Jackie Stewart", status: "Kapandı" }, emojiClue: "🏁🇬🇧🔷" },
    { id: "brm", name: "BRM", aliases: ["British Racing Motors"], fields: { country: "İngiltere", foundedYear: 1945, constructorsChampionships: 1, mostFamousDriver: "Graham Hill", status: "Kapandı" }, emojiClue: "🏁🇬🇧🟢" },
    { id: "cooper", name: "Cooper", aliases: ["Cooper Car Company"], fields: { country: "İngiltere", foundedYear: 1946, constructorsChampionships: 2, mostFamousDriver: "Jack Brabham", status: "Kapandı" }, emojiClue: "🏁🇬🇧⚙️" },
    { id: "vanwall", name: "Vanwall", fields: { country: "İngiltere", foundedYear: 1954, constructorsChampionships: 1, mostFamousDriver: "Stirling Moss", status: "Kapandı" }, emojiClue: "🏁🇬🇧🟢1️⃣", image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Thinwall_special.jpg", imageCredit: "John Chapman (Pyrope), CC BY-SA 3.0, Wikimedia Commons" },
    { id: "benetton", name: "Benetton", aliases: ["Benetton Formula"], fields: { country: "İtalya", foundedYear: 1986, constructorsChampionships: 1, mostFamousDriver: "Michael Schumacher", status: "Kapandı" }, emojiClue: "🏁🇮🇹🌈" },
    { id: "matra", name: "Matra", aliases: ["Matra Sports"], fields: { country: "Fransa", foundedYear: 1965, constructorsChampionships: 1, mostFamousDriver: "Jackie Stewart", status: "Kapandı" }, emojiClue: "🏁🇫🇷🚀" },
    { id: "alpine", name: "Alpine", aliases: ["Alpine F1 Team"], fields: { country: "Fransa", foundedYear: 2021, constructorsChampionships: 0, mostFamousDriver: "Esteban Ocon", status: "Aktif" }, emojiClue: "🏁🇫🇷🔵🌸" },
    { id: "astonmartin", name: "Aston Martin", aliases: ["Aston Martin F1 Team"], fields: { country: "İngiltere", foundedYear: 2021, constructorsChampionships: 0, mostFamousDriver: "Fernando Alonso", status: "Aktif" }, emojiClue: "🏁🇬🇧🟢" },
    { id: "alfaromeo", name: "Alfa Romeo", fields: { country: "İtalya", foundedYear: 1950, constructorsChampionships: 0, mostFamousDriver: "Juan Manuel Fangio", status: "Kapandı" }, emojiClue: "🏁🇮🇹🔴✝️" },
    { id: "sauber", name: "Sauber", aliases: ["Sauber Motorsport"], fields: { country: "İsviçre", foundedYear: 1993, constructorsChampionships: 0, mostFamousDriver: "Kimi Räikkönen", status: "Aktif" }, emojiClue: "🏁🇨🇭🔴" },
    { id: "haas", name: "Haas", aliases: ["Haas F1 Team"], fields: { country: "ABD", foundedYear: 2016, constructorsChampionships: 0, mostFamousDriver: "Kevin Magnussen", status: "Aktif" }, emojiClue: "🏁🇺🇸⚪" },
    { id: "forceindia", name: "Force India", fields: { country: "Hindistan", foundedYear: 2008, constructorsChampionships: 0, mostFamousDriver: "Sergio Pérez", status: "Kapandı" }, emojiClue: "🏁🇮🇳🟠", image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Force_India_VJM07_in_Jerez_%28cropped%29.jpg", imageCredit: "Leo Hidalgo, CC BY 2.0, Wikimedia Commons" },
    { id: "racingpoint", name: "Racing Point", aliases: ["Racing Point F1 Team"], fields: { country: "İngiltere", foundedYear: 2018, constructorsChampionships: 0, mostFamousDriver: "Sergio Pérez", status: "Kapandı" }, emojiClue: "🏁🇬🇧🩷" },
    { id: "tororosso", name: "Toro Rosso", aliases: ["Scuderia Toro Rosso"], fields: { country: "İtalya", foundedYear: 2006, constructorsChampionships: 0, mostFamousDriver: "Sebastian Vettel", status: "Kapandı" }, emojiClue: "🏁🇮🇹🐂🔵" },
    { id: "alphatauri", name: "AlphaTauri", aliases: ["Scuderia AlphaTauri"], fields: { country: "İtalya", foundedYear: 2020, constructorsChampionships: 0, mostFamousDriver: "Pierre Gasly", status: "Kapandı" }, emojiClue: "🏁🇮🇹⚪🔵" },
    { id: "rb", name: "RB", aliases: ["Racing Bulls", "VCARB"], fields: { country: "İtalya", foundedYear: 2024, constructorsChampionships: 0, mostFamousDriver: "Yuki Tsunoda", status: "Aktif" }, emojiClue: "🏁🇮🇹🐂🔷" },
    { id: "jordan", name: "Jordan", aliases: ["Jordan Grand Prix"], fields: { country: "İrlanda", foundedYear: 1991, constructorsChampionships: 0, mostFamousDriver: "Michael Schumacher", status: "Kapandı" }, emojiClue: "🏁🇮🇪🟡" },
    { id: "minardi", name: "Minardi", fields: { country: "İtalya", foundedYear: 1985, constructorsChampionships: 0, mostFamousDriver: "Fernando Alonso", status: "Kapandı" }, emojiClue: "🏁🇮🇹⚫🟡" },
    { id: "arrows", name: "Arrows", aliases: ["Arrows Grand Prix International"], fields: { country: "İngiltere", foundedYear: 1977, constructorsChampionships: 0, mostFamousDriver: "Damon Hill", status: "Kapandı" }, emojiClue: "🏁🇬🇧🏹" },
    { id: "ligier", name: "Ligier", aliases: ["Equipe Ligier"], fields: { country: "Fransa", foundedYear: 1976, constructorsChampionships: 0, mostFamousDriver: "Jacques Laffite", status: "Kapandı" }, emojiClue: "🏁🇫🇷🔵⚪🔴" },
    { id: "prost", name: "Prost Grand Prix", fields: { country: "Fransa", foundedYear: 1997, constructorsChampionships: 0, mostFamousDriver: "Jean Alesi", status: "Kapandı" }, emojiClue: "🏁🇫🇷🔵" },
    { id: "jaguar", name: "Jaguar Racing", fields: { country: "İngiltere", foundedYear: 2000, constructorsChampionships: 0, mostFamousDriver: "Eddie Irvine", status: "Kapandı" }, emojiClue: "🏁🇬🇧🐆" },
    { id: "stewart", name: "Stewart Grand Prix", fields: { country: "İngiltere", foundedYear: 1997, constructorsChampionships: 0, mostFamousDriver: "Johnny Herbert", status: "Kapandı" }, emojiClue: "🏁🇬🇧⚪🟢" },
    { id: "honda", name: "Honda", aliases: ["Honda Racing F1"], fields: { country: "Japonya", foundedYear: 1964, constructorsChampionships: 0, mostFamousDriver: "John Surtees", status: "Kapandı" }, emojiClue: "🏁🇯🇵⚪🔴" },
    { id: "brawn", name: "Brawn GP", fields: { country: "İngiltere", foundedYear: 2009, constructorsChampionships: 1, mostFamousDriver: "Jenson Button", status: "Kapandı" }, emojiClue: "🏁🇬🇧🟡🔬" },
    { id: "bar", name: "BAR", aliases: ["British American Racing"], fields: { country: "İngiltere", foundedYear: 1999, constructorsChampionships: 0, mostFamousDriver: "Jacques Villeneuve", status: "Kapandı" }, emojiClue: "🏁🇬🇧🚬" },
    { id: "toyota", name: "Toyota", aliases: ["Toyota Racing"], fields: { country: "Japonya", foundedYear: 2002, constructorsChampionships: 0, mostFamousDriver: "Jarno Trulli", status: "Kapandı" }, emojiClue: "🏁🇯🇵🔴⚪" },
    { id: "superaguri", name: "Super Aguri", aliases: ["Super Aguri F1"], fields: { country: "Japonya", foundedYear: 2006, constructorsChampionships: 0, mostFamousDriver: "Takuma Sato", status: "Kapandı" }, emojiClue: "🏁🇯🇵🔴" },
    { id: "spyker", name: "Spyker", aliases: ["Spyker F1"], fields: { country: "Hollanda", foundedYear: 2006, constructorsChampionships: 0, mostFamousDriver: "Christijan Albers", status: "Kapandı" }, emojiClue: "🏁🇳🇱🟠" },
    { id: "midland", name: "Midland", aliases: ["MF1 Racing"], fields: { country: "Rusya", foundedYear: 2006, constructorsChampionships: 0, mostFamousDriver: "Tiago Monteiro", status: "Kapandı" }, emojiClue: "🏁🇷🇺⚪🔴" },
    { id: "caterham", name: "Caterham", aliases: ["Caterham F1"], fields: { country: "Malezya", foundedYear: 2012, constructorsChampionships: 0, mostFamousDriver: "Heikki Kovalainen", status: "Kapandı" }, emojiClue: "🏁🇲🇾🟢" },
    { id: "marussia", name: "Marussia", aliases: ["Marussia F1"], fields: { country: "Rusya", foundedYear: 2010, constructorsChampionships: 0, mostFamousDriver: "Jules Bianchi", status: "Kapandı" }, emojiClue: "🏁🇷🇺🔴⚫" },
    { id: "hrt", name: "HRT", aliases: ["Hispania Racing"], fields: { country: "İspanya", foundedYear: 2010, constructorsChampionships: 0, mostFamousDriver: "Narain Karthikeyan", status: "Kapandı" }, emojiClue: "🏁🇪🇸🟡🔴" },
    { id: "march", name: "March Engineering", fields: { country: "İngiltere", foundedYear: 1969, constructorsChampionships: 0, mostFamousDriver: "Ronnie Peterson", status: "Kapandı" }, emojiClue: "🏁🇬🇧⚙️" },
    { id: "shadow", name: "Shadow", aliases: ["Shadow Racing Cars"], fields: { country: "İngiltere", foundedYear: 1973, constructorsChampionships: 0, mostFamousDriver: "Alan Jones", status: "Kapandı" }, emojiClue: "🏁🇬🇧⚫", image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Shadow_MKI-1.jpg", imageCredit: "Frank Ullrich, CC BY-SA 3.0, Wikimedia Commons" },
    { id: "maserati", name: "Maserati", fields: { country: "İtalya", foundedYear: 1926, constructorsChampionships: 0, mostFamousDriver: "Juan Manuel Fangio", status: "Kapandı" }, emojiClue: "🏁🇮🇹🔱" },
    { id: "wolf", name: "Wolf Racing", aliases: ["Walter Wolf Racing"], fields: { country: "Kanada", foundedYear: 1976, constructorsChampionships: 0, mostFamousDriver: "Jody Scheckter", status: "Kapandı" }, emojiClue: "🏁🇨🇦🐺" },
  ],
  i18n: f1TeamsI18n,
};

export default f1Teams;
