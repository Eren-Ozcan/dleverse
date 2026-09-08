import type { CellStatus, PackConfig, PackDailyState } from "./types";
import { MAX_GUESSES } from "./types";
import { dayNumber } from "./dailySelection";

const statusEmoji: Record<CellStatus, string> = {
  correct: "🟩",
  partial: "🟨",
  wrong: "⬛",
};

/** Produces a Loldle/Wordle-style emoji grid that does not give the answer away. */
export function buildShareText(pack: PackConfig, state: PackDailyState): string {
  const score = state.won ? `${state.guesses.length}/${MAX_GUESSES}` : `X/${MAX_GUESSES}`;
  const header = `Dleverse ${pack.emoji} ${pack.title} #${dayNumber(state.dateKey)} — ${score}`;
  const grid = state.guesses
    .map((row) => row.cells.map((cell) => statusEmoji[cell.status]).join(""))
    .join("\n");
  return `${header}\n\n${grid}`;
}
