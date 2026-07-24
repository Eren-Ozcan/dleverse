/**
 * Wikipedia sayfasının kapak görselini + Commons lisans/kredi metadata'sını çeker.
 * Halüsinasyon riski yok: tüm URL/lisans bilgisi gerçek Wikimedia API çağrılarından gelir.
 *
 * Tekli kullanım:
 *   node scripts/fetch-wiki-image.js "Michael Schumacher" en
 *
 * Toplu kullanım (JSON dizi girdi, JSON dizi çıktı):
 *   node scripts/fetch-wiki-image.js --batch input.json > output.json
 *   input.json: [{ "id": "schumacher", "title": "Michael Schumacher", "lang": "en" }, ...]
 */

const USER_AGENT = "Dleverse-ContentBot/1.0 (https://github.com/; contact: orhan.ozcan41@gmail.com)";

async function apiGet(lang, params) {
  const url = new URL(`https://${lang}.wikipedia.org/w/api.php`);
  url.search = new URLSearchParams({ format: "json", ...params }).toString();
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) throw new Error(`API ${res.status} ${res.statusText} for ${url}`);
  return res.json();
}

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "").trim();
}

async function fetchImageInfoFor(title, lang) {
  const data = await apiGet(lang, {
    action: "query",
    titles: title,
    prop: "pageimages",
    piprop: "thumbnail|name",
    pithumbsize: "800",
  });
  const pages = Object.values(data.query?.pages ?? {});
  const page = pages[0];
  if (!page || page.missing !== undefined) {
    return { found: false, reason: "page_not_found" };
  }
  const canonicalTitle = page.title;
  const imageName = page.pageimage;
  const thumbnail = page.thumbnail;
  if (!imageName || !thumbnail) {
    return { found: false, reason: "no_page_image", canonicalTitle };
  }

  const infoData = await apiGet(lang, {
    action: "query",
    titles: `File:${imageName}`,
    prop: "imageinfo",
    iiprop: "extmetadata|url",
  });
  const infoPages = Object.values(infoData.query?.pages ?? {});
  const infoPage = infoPages[0];
  const info = infoPage?.imageinfo?.[0];
  const meta = info?.extmetadata ?? {};

  const artist = stripHtml(meta.Artist?.value);
  const licenseShort = meta.LicenseShortName?.value ?? meta.UsageTerms?.value ?? "Bilinmiyor";
  const licenseUrl = meta.LicenseUrl?.value ?? "";
  const restrictions = meta.Restrictions?.value ?? "";

  return {
    found: true,
    canonicalTitle,
    imageName,
    thumbnailUrl: thumbnail.source,
    originalUrl: info?.url ?? thumbnail.source,
    filePageUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(imageName)}`,
    artist: artist || "Bilinmiyor",
    license: licenseShort,
    licenseUrl,
    restricted: Boolean(restrictions),
    credit: `${artist || "Bilinmeyen yazar"}, ${licenseShort}, Wikimedia Commons`,
  };
}

async function main() {
  const args = process.argv.slice(2);
  if (args[0] === "--batch") {
    const fs = await import("node:fs");
    const items = JSON.parse(fs.readFileSync(args[1], "utf-8"));
    const results = [];
    for (const item of items) {
      try {
        const info = await fetchImageInfoFor(item.title, item.lang || "en");
        results.push({ id: item.id, title: item.title, ...info });
      } catch (err) {
        results.push({ id: item.id, title: item.title, found: false, reason: String(err.message || err) });
      }
      // Wikimedia API etiquette: don't hammer the API.
      await new Promise((r) => setTimeout(r, 1500));
    }
    process.stdout.write(JSON.stringify(results, null, 2));
    return;
  }

  const title = args[0];
  const lang = args[1] || "en";
  if (!title) {
    console.error('Kullanım: node scripts/fetch-wiki-image.js "Madde Başlığı" [dil=en]');
    process.exit(1);
  }
  const info = await fetchImageInfoFor(title, lang);
  process.stdout.write(JSON.stringify(info, null, 2) + "\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
