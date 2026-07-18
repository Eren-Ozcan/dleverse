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
];

export function getPackById(id: string): PackConfig | undefined {
  return packs.find((pack) => pack.id === id);
}
