export type FieldType = "text" | "number" | "year" | "multi";

export interface FieldDef {
  key: string;
  label: string;
  type: FieldType;
}

export type FieldValue = string | number | string[];

export interface Entity {
  id: string;
  name: string;
  aliases?: string[];
  image?: string;
  fields: Record<string, FieldValue>;
}

export interface PackTheme {
  primary: string;
  secondary: string;
  background: string;
}

export interface PackConfig {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  theme: PackTheme;
  dailySaltVersion: number;
  fields: FieldDef[];
  entities: Entity[];
}

export type CellStatus = "correct" | "partial" | "wrong";

export interface NumericHint {
  direction: "up" | "down" | "equal";
}

export interface GuessCell {
  key: string;
  label: string;
  value: FieldValue;
  status: CellStatus;
  hint?: NumericHint;
}

export interface GuessRow {
  entity: Entity;
  cells: GuessCell[];
  isWin: boolean;
}

export interface PackStats {
  playedAt: string;
  guesses: number;
  won: boolean;
}

export interface PackDailyState {
  dateKey: string;
  guesses: GuessRow[];
  won: boolean;
  finished: boolean;
}
