import type { PackI18n } from "../../../engine/types";

export const planetsI18n: PackI18n = {
  title: {
    en: "Planets & Celestial Bodies",
    de: "Planeten & Himmelskörper",
    fr: "Planètes et corps célestes",
    es: "Planetas y cuerpos celestes",
    pt: "Planetas e corpos celestes",
  },
  subtitle: {
    en: "Guess today's celestial body",
    de: "Errate den Himmelskörper des Tages",
    fr: "Devine le corps céleste du jour",
    es: "Adivina el cuerpo celeste de hoy",
    pt: "Adivinhe o corpo celeste de hoje",
  },
  fieldLabels: {
    type: {
      en: "Type",
      de: "Typ",
      fr: "Type",
      es: "Tipo",
      pt: "Tipo",
    },
    parentBody: {
      en: "Orbits",
      de: "Umkreist",
      fr: "Orbite autour de",
      es: "Orbita a",
      pt: "Orbita",
    },
    diameterKm: {
      en: "Diameter (km)",
      de: "Durchmesser (km)",
      fr: "Diamètre (km)",
      es: "Diámetro (km)",
      pt: "Diâmetro (km)",
    },
    distanceFromSunAU: {
      en: "Distance from Sun (AU)",
      de: "Sonnenabstand (AE)",
      fr: "Distance au Soleil (UA)",
      es: "Distancia al Sol (UA)",
      pt: "Distância do Sol (UA)",
    },
    hasAtmosphere: {
      en: "Has an Atmosphere",
      de: "Hat eine Atmosphäre",
      fr: "Possède une atmosphère",
      es: "Tiene atmósfera",
      pt: "Tem atmosfera",
    },
  },
  valueTranslations: {
    type: {
      "Gezegen": { en: "Planet", de: "Planet", fr: "Planète", es: "Planeta", pt: "Planeta" },
      "Cüce Gezegen": { en: "Dwarf Planet", de: "Zwergplanet", fr: "Planète naine", es: "Planeta enano", pt: "Planeta anão" },
      "Uydu": { en: "Moon", de: "Mond", fr: "Lune", es: "Luna", pt: "Lua" },
      "Asteroit": { en: "Asteroid", de: "Asteroid", fr: "Astéroïde", es: "Asteroide", pt: "Asteroide" },
      "Kuyruklu Yıldız": { en: "Comet", de: "Komet", fr: "Comète", es: "Cometa", pt: "Cometa" },
      "Trans-Neptün Cismi": { en: "Trans-Neptunian Object", de: "Transneptunisches Objekt", fr: "Objet transneptunien", es: "Objeto transneptuniano", pt: "Objeto transnetuniano" },
    },
    parentBody: {
      "Güneş": { en: "Sun", de: "Sonne", fr: "Soleil", es: "Sol", pt: "Sol" },
      "Dünya": { en: "Earth", de: "Erde", fr: "Terre", es: "Tierra", pt: "Terra" },
      "Mars": { en: "Mars", de: "Mars", fr: "Mars", es: "Marte", pt: "Marte" },
      "Jüpiter": { en: "Jupiter", de: "Jupiter", fr: "Jupiter", es: "Júpiter", pt: "Júpiter" },
      "Satürn": { en: "Saturn", de: "Saturn", fr: "Saturne", es: "Saturno", pt: "Saturno" },
      "Uranüs": { en: "Uranus", de: "Uranus", fr: "Uranus", es: "Urano", pt: "Urano" },
      "Neptün": { en: "Neptune", de: "Neptun", fr: "Neptune", es: "Neptuno", pt: "Netuno" },
      "Plüton": { en: "Pluto", de: "Pluto", fr: "Pluton", es: "Plutón", pt: "Plutão" },
    },
    hasAtmosphere: {
      "Evet": { en: "Yes", de: "Ja", fr: "Oui", es: "Sí", pt: "Sim" },
      "Hayır": { en: "No", de: "Nein", fr: "Non", es: "No", pt: "Não" },
    },
  },
};

export default planetsI18n;
