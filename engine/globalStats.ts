import { supabase } from "@/lib/supabase";
import type { GameMode } from "./types";

/** A silent no-op when Supabase is not configured; screens read that as "no data". */
export async function submitCompletion(
  packId: string,
  mode: GameMode,
  dateKey: string,
  deviceId: string,
  won: boolean,
  guessCount: number
): Promise<void> {
  if (!supabase) return;
  await supabase
    .from("daily_completions")
    .upsert(
      { pack_id: packId, mode, date_key: dateKey, device_id: deviceId, won, guess_count: guessCount },
      { onConflict: "pack_id,mode,date_key,device_id" }
    );
}

/** null = Supabase is not connected or the request failed -> the UI hides the section. */
export async function fetchTodaySolvedCount(packId: string, mode: GameMode, dateKey: string): Promise<number | null> {
  if (!supabase) return null;
  const { count, error } = await supabase
    .from("daily_completions")
    .select("id", { count: "exact", head: true })
    .eq("pack_id", packId)
    .eq("mode", mode)
    .eq("date_key", dateKey)
    .eq("won", true);
  if (error) return null;
  return count ?? 0;
}

export interface LeaderboardEntry {
  rank: number;
  guessCount: number;
}

/** Anonymous performance ranking - the device id is never exported. */
export async function fetchLeaderboard(
  packId: string,
  mode: GameMode,
  dateKey: string,
  limit = 10
): Promise<LeaderboardEntry[] | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("daily_completions")
    .select("guess_count")
    .eq("pack_id", packId)
    .eq("mode", mode)
    .eq("date_key", dateKey)
    .eq("won", true)
    .order("guess_count", { ascending: true })
    .limit(limit);
  if (error || !data) return null;
  return data.map((row, i) => ({ rank: i + 1, guessCount: row.guess_count as number }));
}
