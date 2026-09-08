import type { Entity, GameMode, PackConfig } from "./types";

/** FNV-1a 32-bit hash — stable across platforms, no external dependency needed. */
function hashString(input: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

/** Local (device) date key, so "today" matches the player's calendar day, not UTC. */
export function todayKey(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseDateKey(dateKey: string): Date {
  const [y, m, d] = dateKey.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function addDays(dateKey: string, delta: number): string {
  const date = parseDateKey(dateKey);
  date.setDate(date.getDate() + delta);
  return todayKey(date);
}

export function yesterdayKey(dateKey: string = todayKey()): string {
  return addDays(dateKey, -1);
}

/** Dleverse's day 1 - the "#N" number in the share text is counted from here. */
const EPOCH_KEY = "2026-07-01";

export function dayNumber(dateKey: string = todayKey()): number {
  const diff = parseDateKey(dateKey).getTime() - parseDateKey(EPOCH_KEY).getTime();
  return Math.round(diff / 86_400_000) + 1;
}

/** Time left until local midnight (the next daily puzzle). */
export function msUntilNextDaily(now: Date = new Date()): number {
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return next.getTime() - now.getTime();
}

/**
 * The mode is part of the salt: on the same day Classic and Emoji mode
 * usually pick different targets, so solving one does not give the other
 * away.
 */
export function pickDailyEntity(pack: PackConfig, dateKey: string = todayKey(), mode: GameMode = "classic"): Entity {
  const seed = `${dateKey}:${pack.id}:v${pack.dailySaltVersion}:${mode}`;
  const index = hashString(seed) % pack.entities.length;
  return pack.entities[index];
}
