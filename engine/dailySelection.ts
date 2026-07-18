import type { Entity, PackConfig } from "./types";

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

export function pickDailyEntity(pack: PackConfig, dateKey: string = todayKey()): Entity {
  const seed = `${dateKey}:${pack.id}:v${pack.dailySaltVersion}`;
  const index = hashString(seed) % pack.entities.length;
  return pack.entities[index];
}
