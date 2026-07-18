import type { PackConfig } from "../../engine/types";

const nbaEfsaneler: PackConfig = {
  id: "nba-efsaneler",
  title: "NBA Efsaneleri",
  subtitle: "Günün basketbolcusunu bil",
  emoji: "🏀",
  theme: { primary: "#C9082A", secondary: "#17408B", background: "#0F0F12" },
  dailySaltVersion: 1,
  fields: [
    { key: "team", label: "En Çok Anıldığı Takım", type: "text" },
    { key: "position", label: "Pozisyon", type: "text" },
    { key: "nationality", label: "Uyruk", type: "text" },
    { key: "birthYear", label: "Doğum Yılı", type: "year" },
    { key: "championships", label: "Şampiyonluk Sayısı", type: "number" },
  ],
  entities: [
    { id: "jordan", name: "Michael Jordan", fields: { team: "Chicago Bulls", position: "Şutör Gard", nationality: "ABD", birthYear: 1963, championships: 6 } },
    { id: "kobe", name: "Kobe Bryant", fields: { team: "LA Lakers", position: "Şutör Gard", nationality: "ABD", birthYear: 1978, championships: 5 } },
    { id: "lebron", name: "LeBron James", fields: { team: "LA Lakers", position: "Forvet", nationality: "ABD", birthYear: 1984, championships: 4 } },
    { id: "magic", name: "Magic Johnson", fields: { team: "LA Lakers", position: "Oyun Kurucu", nationality: "ABD", birthYear: 1959, championships: 5 } },
    { id: "bird", name: "Larry Bird", fields: { team: "Boston Celtics", position: "Forvet", nationality: "ABD", birthYear: 1956, championships: 3 } },
    { id: "shaq", name: "Shaquille O'Neal", aliases: ["Shaq"], fields: { team: "LA Lakers", position: "Pivot", nationality: "ABD", birthYear: 1972, championships: 4 } },
    { id: "duncan", name: "Tim Duncan", fields: { team: "San Antonio Spurs", position: "Pivot", nationality: "ABD Virjin Adaları", birthYear: 1976, championships: 5 } },
    { id: "kareem", name: "Kareem Abdul-Jabbar", fields: { team: "LA Lakers", position: "Pivot", nationality: "ABD", birthYear: 1947, championships: 6 } },
    { id: "wilt", name: "Wilt Chamberlain", fields: { team: "Philadelphia 76ers", position: "Pivot", nationality: "ABD", birthYear: 1936, championships: 2 } },
    { id: "russell", name: "Bill Russell", fields: { team: "Boston Celtics", position: "Pivot", nationality: "ABD", birthYear: 1934, championships: 11 } },
    { id: "hakeem", name: "Hakeem Olajuwon", fields: { team: "Houston Rockets", position: "Pivot", nationality: "Nijerya", birthYear: 1963, championships: 2 } },
    { id: "iverson", name: "Allen Iverson", fields: { team: "Philadelphia 76ers", position: "Oyun Kurucu", nationality: "ABD", birthYear: 1975, championships: 0 } },
    { id: "dirk", name: "Dirk Nowitzki", fields: { team: "Dallas Mavericks", position: "Forvet", nationality: "Almanya", birthYear: 1978, championships: 1 } },
    { id: "durant", name: "Kevin Durant", fields: { team: "Golden State Warriors", position: "Forvet", nationality: "ABD", birthYear: 1988, championships: 2 } },
    { id: "curry", name: "Stephen Curry", fields: { team: "Golden State Warriors", position: "Oyun Kurucu", nationality: "ABD", birthYear: 1988, championships: 4 } },
    { id: "vince", name: "Vince Carter", fields: { team: "Toronto Raptors", position: "Şutör Gard", nationality: "ABD", birthYear: 1977, championships: 0 } },
  ],
};

export default nbaEfsaneler;
