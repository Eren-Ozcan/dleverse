import type { CellStatus, Entity, FieldDef, FieldValue, GuessCell, GuessRow, NumericHint, PackConfig } from "./types";

export function normalize(text: string): string {
  return text
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

/** Matches an id/name/alias for search-as-you-type and win detection. */
export function findEntityByQuery(pack: PackConfig, query: string): Entity | undefined {
  const q = normalize(query);
  if (!q) return undefined;
  return pack.entities.find((entity) => {
    if (normalize(entity.name) === q) return true;
    return (entity.aliases ?? []).some((alias) => normalize(alias) === q);
  });
}

export function searchEntities(pack: PackConfig, query: string, limit = 8): Entity[] {
  const q = normalize(query);
  if (!q) return [];
  return pack.entities
    .filter((entity) => {
      if (normalize(entity.name).includes(q)) return true;
      return (entity.aliases ?? []).some((alias) => normalize(alias).includes(q));
    })
    .slice(0, limit);
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

function compareField(field: FieldDef, guessValue: FieldValue, targetValue: FieldValue): { status: CellStatus; hint?: NumericHint } {
  switch (field.type) {
    case "number":
    case "year": {
      const g = Number(guessValue);
      const t = Number(targetValue);
      if (g === t) return { status: "correct", hint: { direction: "equal" } };
      return { status: "wrong", hint: { direction: g < t ? "up" : "down" } };
    }
    case "multi":
      return { status: compareMulti(guessValue as string[], targetValue as string[]) };
    case "text":
    default: {
      const status: CellStatus = normalize(String(guessValue)) === normalize(String(targetValue)) ? "correct" : "wrong";
      return { status };
    }
  }
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
