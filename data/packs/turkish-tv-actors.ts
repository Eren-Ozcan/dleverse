import type { PackConfig } from "../../engine/types";
import { turkishTvActorsI18n } from "./i18n/turkish-tv-actors";

/**
 * MEDIUM RISK (see docs/ip-candidates.md #51): only the actor's own bio + the
 * NAME of the role/series they are best known for, as text. NO series stills,
 * character costumes or production artwork - only the actor's own
 * portrait/interview photographs from Wikimedia Commons (image + imageCredit).
 * For some actors no suitable portrait was found on Commons; those entities
 * were left without an image field (text only) - no invented URL was used, to
 * avoid any risk of hallucination. Birth years are consistent with public
 * sources (Wikipedia); periodic verification before shipping is recommended.
 */
const turkishTvActors: PackConfig = {
  id: "turkish-tv-actors",
  title: "Türk Dizi Oyuncuları",
  subtitle: "Günün oyuncusunu bil",
  emoji: "🎬",
  theme: { primary: "#E63946", secondary: "#1B1B1F", background: "#0F0F12" },
  dailySaltVersion: 1,
  fields: [
    { key: "birthYear", label: "Doğum Yılı", type: "year", near: 3 },
    { key: "gender", label: "Cinsiyet", type: "text" },
    { key: "mostKnownSeries", label: "En Bilindiği Dizi", type: "text" },
    { key: "debutDecade", label: "Kariyer Başlangıcı", type: "text" },
    { key: "genre", label: "Ağırlıklı Tür", type: "text" },
  ],
  entities: [
    { id: "kivanc", name: "Kıvanç Tatlıtuğ", emojiClue: "🎬🇹🇷😎🥈", fields: { birthYear: 1983, gender: "Erkek", mostKnownSeries: "Gümüş", debutDecade: "2000'ler", genre: "Dram" }, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Kivanc-viki%2C.jpg/960px-Kivanc-viki%2C.jpg", imageCredit: "Mavi jeans, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "burak_ozcivit", name: "Burak Özçivit", emojiClue: "🎬🇹🇷⚔️🐎", fields: { birthYear: 1984, gender: "Erkek", mostKnownSeries: "Diriliş: Ertuğrul", debutDecade: "2000'ler", genre: "Tarihi" }, image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Burak_%C3%96z%C3%A7ivit_2023.jpg", imageCredit: "Wikilife77, CC0, Wikimedia Commons" },
    { id: "beren_saat", name: "Beren Saat", emojiClue: "🎬🇹🇷😢👗", fields: { birthYear: 1984, gender: "Kadın", mostKnownSeries: "Fatmagül'ün Suçu Ne?", debutDecade: "2000'ler", genre: "Dram" }, image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Beren_Saat_2024_02_%28cropped%29.png", imageCredit: "Magazin Burada, CC BY 3.0, Wikimedia Commons" },
    { id: "engin_akyurek", name: "Engin Akyürek", emojiClue: "🎬🇹🇷💰❤️", fields: { birthYear: 1981, gender: "Erkek", mostKnownSeries: "Kara Para Aşk", debutDecade: "2000'ler", genre: "Dram" } },
    { id: "cagatay_ulusoy", name: "Çağatay Ulusoy", emojiClue: "🎬🇹🇷🌊✈️", fields: { birthYear: 1990, gender: "Erkek", mostKnownSeries: "Medcezir", debutDecade: "2010'lar", genre: "Dram" }, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Cagatay_ulusoy.jpg/960px-Cagatay_ulusoy.jpg", imageCredit: "LospollosRomania, CC BY-SA 2.0, Wikimedia Commons" },
    { id: "halit_ergenc", name: "Halit Ergenç", emojiClue: "🎬🇹🇷👑🗡️", fields: { birthYear: 1970, gender: "Erkek", mostKnownSeries: "Muhteşem Yüzyıl", debutDecade: "1990'lar", genre: "Tarihi" }, image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Halit_Ergen%C3%A7.jpg", imageCredit: "Halit_Ergenç_024.jpg: http://picasaweb.google.com/yakarspor derivative work: Mathuzalem, CC BY-SA 3.0, Wikimedia Commons" },
    { id: "neslihan_atagul", name: "Neslihan Atagül", emojiClue: "🎬🇹🇷💔🖤", fields: { birthYear: 1992, gender: "Kadın", mostKnownSeries: "Kara Sevda", debutDecade: "2010'lar", genre: "Dram" } },
    { id: "tuba_buyukustun", name: "Tuba Büyüküstün", emojiClue: "🎬🇹🇷🌹😔", fields: { birthYear: 1982, gender: "Kadın", mostKnownSeries: "Aşk-ı Memnu", debutDecade: "2000'ler", genre: "Dram" }, image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Tuba_B%C3%BCy%C3%BCk%C3%BCst%C3%BCn.jpg", imageCredit: "http://www.yaseminozbudun.com, GFDL, Wikimedia Commons" },
    { id: "meryem_uzerli", name: "Meryem Uzerli", emojiClue: "🎬🇹🇷👑🇩🇪", fields: { birthYear: 1983, gender: "Kadın", mostKnownSeries: "Muhteşem Yüzyıl", debutDecade: "2010'lar", genre: "Tarihi" } },
    { id: "cansu_dere", name: "Cansu Dere", emojiClue: "🎬🇹🇷👑💃", fields: { birthYear: 1980, gender: "Kadın", mostKnownSeries: "Muhteşem Yüzyıl", debutDecade: "2000'ler", genre: "Tarihi" }, image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Cansu_Dere-smiling.jpg", imageCredit: "Ali Vatansever, CC BY-SA 3.0, Wikimedia Commons" },
    { id: "serenay_sarikaya", name: "Serenay Sarıkaya", emojiClue: "🎬🇹🇷🌊👙", fields: { birthYear: 1991, gender: "Kadın", mostKnownSeries: "Medcezir", debutDecade: "2010'lar", genre: "Dram" }, image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Serenay_Sar%C4%B1kaya_2019.png", imageCredit: "Magazin Burada, CC BY 3.0, Wikimedia Commons" },
    { id: "kerem_bursin", name: "Kerem Bürsin", emojiClue: "🎬🇹🇷🐦🌅", fields: { birthYear: 1987, gender: "Erkek", mostKnownSeries: "Erkenci Kuş", debutDecade: "2010'lar", genre: "Komedi" }, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Festival_de_M%C3%A1laga_2024_-_Kerem_B%C3%BCrsin_%28cropped%29.jpg/960px-Festival_de_M%C3%A1laga_2024_-_Kerem_B%C3%BCrsin_%28cropped%29.jpg", imageCredit: "Pedro J Pacheco, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "hande_ercel", name: "Hande Erçel", emojiClue: "🎬🇹🇷🐦🌅", fields: { birthYear: 1993, gender: "Kadın", mostKnownSeries: "Erkenci Kuş", debutDecade: "2010'lar", genre: "Komedi" }, image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Hande_Er%C3%A7el.jpg", imageCredit: "Magazin Burada, CC BY 3.0, Wikimedia Commons" },
    { id: "burak_deniz", name: "Burak Deniz", emojiClue: "🎬🇹🇷🗣️❤️", fields: { birthYear: 1992, gender: "Erkek", mostKnownSeries: "Aşk Laftan Anlamaz", debutDecade: "2010'lar", genre: "Dram" } },
    { id: "demet_ozdemir", name: "Demet Özdemir", emojiClue: "🎬🇹🇷🐦🌅", fields: { birthYear: 1992, gender: "Kadın", mostKnownSeries: "Erkenci Kuş", debutDecade: "2010'lar", genre: "Komedi" }, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Demet_%C3%96zdemir_on_Tolgshow.jpg/960px-Demet_%C3%96zdemir_on_Tolgshow.jpg", imageCredit: "Tolga Çevik, CC BY 3.0, Wikimedia Commons" },
    { id: "can_yaman", name: "Can Yaman", emojiClue: "🎬🇹🇷🐦🌅", fields: { birthYear: 1989, gender: "Erkek", mostKnownSeries: "Erkenci Kuş", debutDecade: "2010'lar", genre: "Komedi" }, image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Can_Yaman_Margherita_di_Savoia_2023-04-27_%281%29.jpg", imageCredit: "Istituto Comprensivo Statale \"Giovanni XXIII - Pascoli\", Margherita di Savoia, CC BY 3.0 it, Wikimedia Commons" },
    { id: "ozan_guven", name: "Ozan Güven", emojiClue: "🎬🇹🇷🕵️🚬", fields: { birthYear: 1975, gender: "Erkek", mostKnownSeries: "Behzat Ç.", debutDecade: "2000'ler", genre: "Aksiyon" }, image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Arif_V_216_%C4%B0zmir_galas%C4%B1_%28cropped%29_Ozan_G%C3%BCven.jpg", imageCredit: "User:BSRF, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "nurgul_yesilcay", name: "Nurgül Yeşilçay", emojiClue: "🎬🇹🇷🕌🎗️", fields: { birthYear: 1976, gender: "Kadın", mostKnownSeries: "Elveda Rumeli", debutDecade: "1990'lar", genre: "Tarihi" }, image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nurg%C3%BCl_Ye%C5%9Fil%C3%A7ay.jpg", imageCredit: "Tims Prodüksiyon Film, CC BY 4.0, Wikimedia Commons" },
    { id: "berguzar_korel", name: "Bergüzar Korel", emojiClue: "🎬🇹🇷🎭😏", fields: { birthYear: 1982, gender: "Kadın", mostKnownSeries: "Ezel", debutDecade: "2000'ler", genre: "Dram" }, image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/94mq389luGnWLjcMIzWeJsLPGto.webp", imageCredit: "Cankee123123123, CC0, Wikimedia Commons" },
    { id: "baris_arduc", name: "Barış Arduç", emojiClue: "🎬🇹🇷🔫🐦", fields: { birthYear: 1987, gender: "Erkek", mostKnownSeries: "Poyraz Karayel", debutDecade: "2000'ler", genre: "Aksiyon" } },
    { id: "elcin_sangu", name: "Elçin Sangu", emojiClue: "🎬🇹🇷📚😂", fields: { birthYear: 1991, gender: "Kadın", mostKnownSeries: "Kiralık Aşk", debutDecade: "2010'lar", genre: "Komedi" }, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/El%C3%A7in_Sangu_2017_October_%286%29.jpg/960px-El%C3%A7in_Sangu_2017_October_%286%29.jpg", imageCredit: "Sakhalinio, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "fahriye_evcen", name: "Fahriye Evcen", emojiClue: "🎬🇹🇷🪖❤️", fields: { birthYear: 1986, gender: "Kadın", mostKnownSeries: "Vatanım Sensin", debutDecade: "2000'ler", genre: "Dram" }, image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Fahriye_Evcen_2017.png", imageCredit: "Georges Hobeika, CC BY 3.0, Wikimedia Commons" },
    { id: "murat_yildirim", name: "Murat Yıldırım", emojiClue: "🎬🇹🇷🚔👨‍👦", fields: { birthYear: 1979, gender: "Erkek", mostKnownSeries: "İçerde", debutDecade: "2000'ler", genre: "Aksiyon" }, image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Murat_Y%C4%B1ld%C4%B1r%C4%B1m_%28actor%29.jpg", imageCredit: "Sabri76, CC0, Wikimedia Commons" },
    { id: "songul_oden", name: "Songül Öden", emojiClue: "🎬🇹🇷🥈😢", fields: { birthYear: 1979, gender: "Kadın", mostKnownSeries: "Gümüş", debutDecade: "2000'ler", genre: "Dram" }, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Song%C3%BCl_%C3%96den.jpg/960px-Song%C3%BCl_%C3%96den.jpg", imageCredit: "daly3d abd, CC BY 2.0, Wikimedia Commons" },
    { id: "aras_bulut", name: "Aras Bulut İynemli", emojiClue: "🎬🇹🇷🕳️🔫", fields: { birthYear: 1991, gender: "Erkek", mostKnownSeries: "Çukur", debutDecade: "2010'lar", genre: "Aksiyon" }, image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Aras_Bulut_%C4%B0ynemli.jpg", imageCredit: "7. Koğuştaki Mucize, CC BY 3.0, Wikimedia Commons" },
    { id: "tolga_saritas", name: "Tolga Sarıtaş", emojiClue: "🎬🇹🇷🌸😔", fields: { birthYear: 1990, gender: "Erkek", mostKnownSeries: "Kırgın Çiçekler", debutDecade: "2010'lar", genre: "Dram" }, image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Tolga_Sar%C4%B1ta%C5%9F_PP.jpg", imageCredit: "Dodo1989, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "ibrahim_celikkol", name: "İbrahim Çelikkol", emojiClue: "🎬🇹🇷🧭💪", fields: { birthYear: 1982, gender: "Erkek", mostKnownSeries: "Kuzey Güney", debutDecade: "2000'ler", genre: "Dram" } },
    { id: "deniz_cakir", name: "Deniz Çakır", emojiClue: "🎬🇹🇷🧭😢", fields: { birthYear: 1980, gender: "Kadın", mostKnownSeries: "Kuzey Güney", debutDecade: "2000'ler", genre: "Dram" } },
    { id: "vahide_percin", name: "Vahide Perçin", emojiClue: "🎬🇹🇷🏆👵", fields: { birthYear: 1966, gender: "Kadın", mostKnownSeries: "Fatmagül'ün Suçu Ne?", debutDecade: "1980'ler", genre: "Dram" } },
    { id: "gokhan_alkan", name: "Gökhan Alkan", emojiClue: "🎬🇹🇷🪖🇹🇷", fields: { birthYear: 1985, gender: "Erkek", mostKnownSeries: "Vatanım Sensin", debutDecade: "2000'ler", genre: "Dram" } },
    { id: "serkan_cayoglu", name: "Serkan Çayoğlu", emojiClue: "🎬🇹🇷👰🕌", fields: { birthYear: 1990, gender: "Erkek", mostKnownSeries: "İstanbullu Gelin", debutDecade: "2010'lar", genre: "Dram" } },
    { id: "farah_zeynep", name: "Farah Zeynep Abdullah", emojiClue: "🎬🇹🇷📐🎓", fields: { birthYear: 1991, gender: "Kadın", mostKnownSeries: "Fi", debutDecade: "2010'lar", genre: "Dram" } },
    { id: "alina_boz", name: "Alina Boz", emojiClue: "🎬🇹🇷🚪🔑", fields: { birthYear: 1998, gender: "Kadın", mostKnownSeries: "Sen Çal Kapımı", debutDecade: "2010'lar", genre: "Komedi" }, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Alina_Boz_on_Tolgshow.jpg/960px-Alina_Boz_on_Tolgshow.jpg", imageCredit: "Tolga Çevik, CC BY 3.0, Wikimedia Commons" },
    { id: "afra_saracoglu", name: "Afra Saraçoğlu", emojiClue: "🎬🇹🇷📖👧", fields: { birthYear: 1998, gender: "Kadın", mostKnownSeries: "Bizim Hikaye", debutDecade: "2010'lar", genre: "Dram" }, image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Afra_Sara%C3%A7o%C4%9Flu_in_2019.png", imageCredit: "Magazin Burada, CC BY 3.0, Wikimedia Commons" },
    { id: "bugra_gulsoy", name: "Buğra Gülsoy", emojiClue: "🎬🇹🇷🐦📚", fields: { birthYear: 1979, gender: "Erkek", mostKnownSeries: "Çalıkuşu", debutDecade: "2000'ler", genre: "Dram" } },
    { id: "sinem_kobal", name: "Sinem Kobal", emojiClue: "🎬🇹🇷👩‍👧😢", fields: { birthYear: 1984, gender: "Kadın", mostKnownSeries: "Analar ve Anneler", debutDecade: "2000'ler", genre: "Dram" }, image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Sinem_Kobal.jpg", imageCredit: "LAU TV, CC BY 3.0, Wikimedia Commons" },
    { id: "onur_tuna", name: "Onur Tuna", emojiClue: "🎬🇹🇷🍃🎓", fields: { birthYear: 1976, gender: "Erkek", mostKnownSeries: "Kavak Yelleri", debutDecade: "2000'ler", genre: "Dram" } },
    { id: "damla_sonmez", name: "Damla Sönmez", emojiClue: "🎬🇹🇷🕯️🎞️", fields: { birthYear: 1988, gender: "Kadın", mostKnownSeries: "Masum", debutDecade: "2000'ler", genre: "Dram" }, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Damla_S%C3%B6nmez_04.jpg/960px-Damla_S%C3%B6nmez_04.jpg", imageCredit: "Joe Mabel, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "erkan_petekkaya", name: "Erkan Petekkaya", emojiClue: "🎬🇹🇷🐺🔫", fields: { birthYear: 1976, gender: "Erkek", mostKnownSeries: "Kurtlar Vadisi", debutDecade: "2000'ler", genre: "Aksiyon" }, image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Erkan_Petekkaya_Letafet_Elekberova_Turkiye_%28cropped%29.jpg", imageCredit: "Lətafət Ələkbərova, CC BY-SA 4.0, Wikimedia Commons" },
    { id: "ekin_koc", name: "Ekin Koç", emojiClue: "🎬🇹🇷📐🎓", fields: { birthYear: 1990, gender: "Erkek", mostKnownSeries: "Fi", debutDecade: "2010'lar", genre: "Dram" }, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Ekin_Ko%C3%A7_at_the_2025_Sundance_Film_Festival_%28cropped%29.jpg/960px-Ekin_Ko%C3%A7_at_the_2025_Sundance_Film_Festival_%28cropped%29.jpg", imageCredit: "Everwest, CC BY 4.0, Wikimedia Commons" },
  ],
  i18n: turkishTvActorsI18n,
};

export default turkishTvActors;
