import type { PackConfig } from "../../engine/types";
import superlig from "./superlig";
import nbaEfsaneler from "./nba-efsaneler";
import yayincilar from "./yayincilar";
import baskentler from "./baskentler";

export const packs: PackConfig[] = [superlig, nbaEfsaneler, yayincilar, baskentler];

export function getPackById(id: string): PackConfig | undefined {
  return packs.find((pack) => pack.id === id);
}
