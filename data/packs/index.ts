import type { PackConfig } from "../../engine/types";
import baskentler from "./baskentler";
import nbaEfsaneler from "./nba-efsaneler";
import superlig from "./superlig";
import elementler from "./elementler";
import tarihiLiderler from "./tarihi-liderler";
import nobelBilimciler from "./nobel-bilimciler";
import ressamlar from "./ressamlar";
import olimpiyatEfsaneleri from "./olimpiyat-efsaneleri";
import tenisEfsaneleri from "./tenis-efsaneleri";
import besteciler from "./besteciler";
import yayincilar from "./yayincilar";
import f1Pilotlari from "./f1-pilotlari";
import nehirler from "./nehirler";
import nobelBaris from "./nobel-baris";
import daglar from "./daglar";
import atletizmEfsaneleri from "./atletizm-efsaneleri";
import yuzmeEfsaneleri from "./yuzme-efsaneleri";
import hollywoodAktorleri from "./hollywood-aktorleri";
import turkDiziOyunculari from "./turk-dizi-oyunculari";
import premierLig from "./premier-lig";
import f1Takimlari from "./f1-takimlari";
import dogalHarikalar from "./dogal-harikalar";
import rockGruplari from "./rock-gruplari";
import boksEfsaneleri from "./boks-efsaneleri";
import satrancSampiyonlari from "./satranc-sampiyonlari";
import kasifler from "./kasifler";
import astronotlar from "./astronotlar";
import mimarlar from "./mimarlar";
import heykeltiraslar from "./heykeltiraslar";
import filozoflar from "./filozoflar";

export const packs: PackConfig[] = [
  baskentler,
  nbaEfsaneler,
  superlig,
  elementler,
  tarihiLiderler,
  nobelBilimciler,
  ressamlar,
  olimpiyatEfsaneleri,
  tenisEfsaneleri,
  besteciler,
  yayincilar,
  f1Pilotlari,
  nehirler,
  nobelBaris,
  daglar,
  atletizmEfsaneleri,
  yuzmeEfsaneleri,
  hollywoodAktorleri,
  turkDiziOyunculari,
  premierLig,
  f1Takimlari,
  dogalHarikalar,
  rockGruplari,
  boksEfsaneleri,
  satrancSampiyonlari,
  kasifler,
  astronotlar,
  mimarlar,
  heykeltiraslar,
  filozoflar,
];

export function getPackById(id: string): PackConfig | undefined {
  return packs.find((pack) => pack.id === id);
}
