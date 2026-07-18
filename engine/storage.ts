import AsyncStorage from "@react-native-async-storage/async-storage";
import type { PackDailyState } from "./types";
import { todayKey } from "./dailySelection";

export interface PackProgress {
  streak: number;
  lastWinDateKey: string | null;
  playedCount: number;
  wonCount: number;
}

const dailyStateKeyFor = (packId: string, dateKey: string) => `dleverse:daily:${packId}:${dateKey}`;
const progressKeyFor = (packId: string) => `dleverse:progress:${packId}`;

export async function loadDailyState(packId: string, dateKey: string = todayKey()): Promise<PackDailyState | null> {
  const raw = await AsyncStorage.getItem(dailyStateKeyFor(packId, dateKey));
  return raw ? (JSON.parse(raw) as PackDailyState) : null;
}

export async function saveDailyState(packId: string, state: PackDailyState): Promise<void> {
  await AsyncStorage.setItem(dailyStateKeyFor(packId, state.dateKey), JSON.stringify(state));
}

export async function loadProgress(packId: string): Promise<PackProgress> {
  const raw = await AsyncStorage.getItem(progressKeyFor(packId));
  return raw ? (JSON.parse(raw) as PackProgress) : { streak: 0, lastWinDateKey: null, playedCount: 0, wonCount: 0 };
}

function isConsecutiveDay(previous: string, current: string): boolean {
  const prevDate = new Date(previous);
  const currDate = new Date(current);
  const diffDays = Math.round((currDate.getTime() - prevDate.getTime()) / 86_400_000);
  return diffDays === 1;
}

export async function recordResult(packId: string, dateKey: string, won: boolean): Promise<PackProgress> {
  const progress = await loadProgress(packId);
  const next: PackProgress = {
    ...progress,
    playedCount: progress.playedCount + 1,
    wonCount: progress.wonCount + (won ? 1 : 0),
  };
  if (won) {
    next.streak = progress.lastWinDateKey && isConsecutiveDay(progress.lastWinDateKey, dateKey) ? progress.streak + 1 : 1;
    next.lastWinDateKey = dateKey;
  } else {
    next.streak = 0;
  }
  await AsyncStorage.setItem(progressKeyFor(packId), JSON.stringify(next));
  return next;
}
