import AsyncStorage from "@react-native-async-storage/async-storage";
import type { GameMode, Locale, PackDailyState } from "./types";
import { todayKey } from "./dailySelection";

export interface PackProgress {
  streak: number;
  maxStreak: number;
  lastWinDateKey: string | null;
  playedCount: number;
  wonCount: number;
  /** Kazanılan oyunlarda kaçıncı tahminde bilindiği: { "3": 5 } → 5 kez 3. tahminde. */
  distribution: Record<string, number>;
}

const dailyStateKeyFor = (packId: string, mode: GameMode, dateKey: string) => `dleverse:daily:${packId}:${mode}:${dateKey}`;
const progressKeyFor = (packId: string, mode: GameMode) => `dleverse:progress:${packId}:${mode}`;
const HOW_TO_PLAY_KEY = "dleverse:howToPlaySeen";
const LOCALE_KEY = "dleverse:locale";
const COLORBLIND_KEY = "dleverse:colorblind";
const DEVICE_ID_KEY = "dleverse:deviceId";

const emptyProgress: PackProgress = {
  streak: 0,
  maxStreak: 0,
  lastWinDateKey: null,
  playedCount: 0,
  wonCount: 0,
  distribution: {},
};

export async function loadDailyState(
  packId: string,
  mode: GameMode = "classic",
  dateKey: string = todayKey()
): Promise<PackDailyState | null> {
  const raw = await AsyncStorage.getItem(dailyStateKeyFor(packId, mode, dateKey));
  return raw ? (JSON.parse(raw) as PackDailyState) : null;
}

export async function saveDailyState(packId: string, state: PackDailyState): Promise<void> {
  await AsyncStorage.setItem(dailyStateKeyFor(packId, state.mode, state.dateKey), JSON.stringify(state));
}

export async function loadProgress(packId: string, mode: GameMode = "classic"): Promise<PackProgress> {
  const raw = await AsyncStorage.getItem(progressKeyFor(packId, mode));
  if (!raw) return { ...emptyProgress };
  const parsed = JSON.parse(raw) as Partial<PackProgress>;
  // Eski kayıtlarda maxStreak/distribution yok — varsayılanlarla birleştir.
  return {
    ...emptyProgress,
    ...parsed,
    maxStreak: parsed.maxStreak ?? parsed.streak ?? 0,
    distribution: parsed.distribution ?? {},
  };
}

function isConsecutiveDay(previous: string, current: string): boolean {
  const prevDate = new Date(previous);
  const currDate = new Date(current);
  const diffDays = Math.round((currDate.getTime() - prevDate.getTime()) / 86_400_000);
  return diffDays === 1;
}

export async function recordResult(
  packId: string,
  mode: GameMode,
  dateKey: string,
  won: boolean,
  guessCount: number
): Promise<PackProgress> {
  const progress = await loadProgress(packId, mode);
  const next: PackProgress = {
    ...progress,
    playedCount: progress.playedCount + 1,
    wonCount: progress.wonCount + (won ? 1 : 0),
    distribution: { ...progress.distribution },
  };
  if (won) {
    next.streak = progress.lastWinDateKey && isConsecutiveDay(progress.lastWinDateKey, dateKey) ? progress.streak + 1 : 1;
    next.lastWinDateKey = dateKey;
    const bucket = String(guessCount);
    next.distribution[bucket] = (next.distribution[bucket] ?? 0) + 1;
  } else {
    next.streak = 0;
  }
  next.maxStreak = Math.max(next.maxStreak, next.streak);
  await AsyncStorage.setItem(progressKeyFor(packId, mode), JSON.stringify(next));
  return next;
}

export async function hasSeenHowToPlay(): Promise<boolean> {
  return (await AsyncStorage.getItem(HOW_TO_PLAY_KEY)) === "1";
}

export async function markHowToPlaySeen(): Promise<void> {
  await AsyncStorage.setItem(HOW_TO_PLAY_KEY, "1");
}

export async function loadLocale(): Promise<Locale | null> {
  return (await AsyncStorage.getItem(LOCALE_KEY)) as Locale | null;
}

export async function saveLocale(locale: Locale): Promise<void> {
  await AsyncStorage.setItem(LOCALE_KEY, locale);
}

export async function loadColorblindMode(): Promise<boolean> {
  return (await AsyncStorage.getItem(COLORBLIND_KEY)) === "1";
}

export async function saveColorblindMode(enabled: boolean): Promise<void> {
  await AsyncStorage.setItem(COLORBLIND_KEY, enabled ? "1" : "0");
}

/** Global istatistikler için kalıcı, anonim cihaz kimliği (hesap gerektirmez). */
export async function getDeviceId(): Promise<string> {
  const existing = await AsyncStorage.getItem(DEVICE_ID_KEY);
  if (existing) return existing;
  const id = `dev_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
  await AsyncStorage.setItem(DEVICE_ID_KEY, id);
  return id;
}
