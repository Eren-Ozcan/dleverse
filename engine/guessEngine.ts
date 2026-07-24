import type { CellStatus, Entity, FieldDef, FieldValue, GuessCell, GuessRow, NumericHint, PackConfig } from "./types";
import { CLUE_MODE_HINT_SCHEDULE } from "./types";

export function normalize(text: string): string {
  return text
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

/** name + aliases + tüm dillerdeki nameByLocale çevirilerini tek listede toplar. */
function searchableNames(entity: Entity): string[] {
  return [entity.name, ...(entity.aliases ?? []), ...Object.values(entity.nameByLocale ?? {})];
}

/** Matches an id/name/alias (herhangi bir dilde) for search-as-you-type and win detection. */
export function findEntityByQuery(pack: PackConfig, query: string): Entity | undefined {
  const q = normalize(query);
  if (!q) return undefined;
  return pack.entities.find((entity) => searchableNames(entity).some((n) => normalize(n) === q));
}

export function searchEntities(pack: PackConfig, query: string, limit = 8): Entity[] {
  const q = normalize(query);
  if (!q) return [];
  return pack.entities.filter((entity) => searchableNames(entity).some((n) => normalize(n).includes(q))).slice(0, limit);
}

function compareMulti(guessValue: string[], targetValue: string[]): CellStatus {
  const guessSet = new Set(guessValue.map(normalize));
  const targetSet = new Set(targetValue.map(normalize));
  if (guessSet.size === targetSet.size && [...guessSet].every((v) => targetSet.has(v))) {
    return "correct";
  }
  const overlap = [...guessSet].some((v) => targetSet.has(v));
  return overlap ? "partial" : "wrong";
}

/** "Almanca / Fransızca" gibi çok değerli metinleri karşılaştırma için parçalara ayırır. */
function textTokens(value: string): string[] {
  return value
    .split(/[/,]/)
    .map(normalize)
    .filter(Boolean);
}

function compareField(field: FieldDef, guessValue: FieldValue, targetValue: FieldValue): { status: CellStatus; hint?: NumericHint } {
  switch (field.type) {
    case "number":
    case "year": {
      const g = Number(guessValue);
      const t = Number(targetValue);
      if (g === t) return { status: "correct", hint: { direction: "equal" } };
      const near = field.near ?? (field.type === "year" ? 10 : 0);
      const status: CellStatus = near > 0 && Math.abs(g - t) <= near ? "partial" : "wrong";
      return { status, hint: { direction: g < t ? "up" : "down" } };
    }
    case "multi":
      return { status: compareMulti(guessValue as string[], targetValue as string[]) };
    case "text":
    default: {
      const guessText = String(guessValue);
      const targetText = String(targetValue);
      if (normalize(guessText) === normalize(targetText)) return { status: "correct" };
      const guessSet = new Set(textTokens(guessText));
      const overlap = textTokens(targetText).some((token) => guessSet.has(token));
      return { status: overlap ? "partial" : "wrong" };
    }
  }
}

/**
 * Emoji/Ses Modu'nda kaç alanın açığa çıkması gerektiğini tahmin sayısına göre hesaplar.
 * En az bir alan her zaman gizli kalır ki asıl ipucu (emoji/ses) tek başına anlamını korusun.
 */
export function fieldKeysToReveal(pack: PackConfig, guessCount: number): string[] {
  const unlocked = CLUE_MODE_HINT_SCHEDULE.filter((threshold) => guessCount >= threshold).length;
  const maxReveals = Math.max(0, pack.fields.length - 1);
  return pack.fields.slice(0, Math.min(unlocked, maxReveals)).map((field) => field.key);
}

/** Ses Modu sekmesi yalnızca paketteki her entity'nin bir ses ipucu varsa gösterilir. */
export function packSupportsSoundMode(pack: PackConfig): boolean {
  return pack.entities.length > 0 && pack.entities.every((entity) => Boolean(entity.audioClue));
}

export function buildGuessRow(pack: PackConfig, guessEntity: Entity, targetEntity: Entity): GuessRow {
  const cells: GuessCell[] = pack.fields.map((field) => {
    const guessValue = guessEntity.fields[field.key];
    const targetValue = targetEntity.fields[field.key];
    const { status, hint } = compareField(field, guessValue, targetValue);
    return { key: field.key, label: field.label, value: guessValue, status, hint };
  });

  return {
    entity: guessEntity,
    cells,
    isWin: guessEntity.id === targetEntity.id,
  };
}
