import type { PackConfig } from "../../engine/types";
import capitals from "./capitals";
import nbaLegends from "./nba-legends";
import superLeague from "./super-league";
import elements from "./elements";
import historicalLeaders from "./historical-leaders";
import nobelScientists from "./nobel-scientists";
import painters from "./painters";
import olympicLegends from "./olympic-legends";
import tennisLegends from "./tennis-legends";
import composers from "./composers";
import streamers from "./streamers";
import f1Drivers from "./f1-drivers";
import rivers from "./rivers";
import nobelPeace from "./nobel-peace";
import mountains from "./mountains";
import athleticsLegends from "./athletics-legends";
import swimmingLegends from "./swimming-legends";
import hollywoodActors from "./hollywood-actors";
import turkishTvActors from "./turkish-tv-actors";
import premierLeague from "./premier-league";
import f1Teams from "./f1-teams";
import naturalWonders from "./natural-wonders";
import rockBands from "./rock-bands";
import boxingLegends from "./boxing-legends";
import chessChampions from "./chess-champions";
import explorers from "./explorers";
import astronauts from "./astronauts";
import architects from "./architects";
import sculptors from "./sculptors";
import philosophers from "./philosophers";
import classicLiteratureAuthors from "./classic-literature-authors";
import chefs from "./chefs";
import journalists from "./journalists";
import empires from "./empires";
import nobelLiterature from "./nobel-literature";
import renaissanceArtists from "./renaissance-artists";
import unescoHeritage from "./unesco-heritage";
import currencies from "./currencies";
import f1Tracks from "./f1-tracks";
import worldAirlines from "./world-airlines";
import cricketLegends from "./cricket-legends";
import volleyballLegends from "./volleyball-legends";
import rugbyLegends from "./rugby-legends";
import planets from "./planets";
import worldIslands from "./world-islands";
import worldDeserts from "./world-deserts";
import worldLakes from "./world-lakes";
import ancientCivilizations from "./ancient-civilizations";
import cs2Legends from "./cs2-legends";

export const packs: PackConfig[] = [
  capitals,
  nbaLegends,
  superLeague,
  elements,
  historicalLeaders,
  nobelScientists,
  painters,
  olympicLegends,
  tennisLegends,
  composers,
  streamers,
  f1Drivers,
  rivers,
  nobelPeace,
  mountains,
  athleticsLegends,
  swimmingLegends,
  hollywoodActors,
  turkishTvActors,
  premierLeague,
  f1Teams,
  naturalWonders,
  rockBands,
  boxingLegends,
  chessChampions,
  explorers,
  astronauts,
  architects,
  sculptors,
  philosophers,
  classicLiteratureAuthors,
  chefs,
  journalists,
  empires,
  nobelLiterature,
  renaissanceArtists,
  unescoHeritage,
  currencies,
  f1Tracks,
  worldAirlines,
  cricketLegends,
  volleyballLegends,
  rugbyLegends,
  planets,
  worldIslands,
  worldDeserts,
  worldLakes,
  ancientCivilizations,
  cs2Legends,
];

export function getPackById(id: string): PackConfig | undefined {
  return packs.find((pack) => pack.id === id);
}
