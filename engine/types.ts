export type FieldType = "text" | "number" | "year" | "multi";

export interface FieldDef {
  key: string;
  label: string;
  type: FieldType;
  /** For number/year fields: a guess within ± this range counts as "partial" (close). */
  near?: number;
}

export type FieldValue = string | number | string[];

/** Supported interface/content languages. tr = the canonical language (the default in the pack files). */
export type Locale = "tr" | "en" | "de" | "fr" | "es" | "pt";

export const LOCALES: Locale[] = ["tr", "en", "de", "fr", "es", "pt"];

export const LOCALE_LABELS: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  pt: "Português",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  tr: "🇹🇷",
  en: "🇬🇧",
  de: "🇩🇪",
  fr: "🇫🇷",
  es: "🇪🇸",
  pt: "🇵🇹",
};

export type GameMode = "classic" | "emoji" | "sound";

export interface Entity {
  id: string;
  name: string;
  aliases?: string[];
  image?: string;
  /** Required when image is set: a short credit in "Author, License, Source" form (e.g. "Jane Doe, CC BY-SA 4.0, Wikimedia Commons"). */
  imageCredit?: string;
  fields: Record<string, FieldValue>;
  /** A short emoji sequence hinting at the answer, shown in Emoji mode (e.g. "🐍🍎🍊"). */
  emojiClue?: string;
  /** URL of the short clue clip played in Sound mode (e.g. an instrument/track excerpt, a speech sample). */
  audioClue?: string;
  /** audioClue doluysa zorunlu: kaynak+lisans kredisi. */
  audioCredit?: string;
  /** Set only when the name changes meaningfully across languages (e.g. "Büyük İskender" -> "Alexander the Great"). */
  nameByLocale?: Partial<Record<Locale, string>>;
}

export interface PackTheme {
  primary: string;
  secondary: string;
  background: string;
}

/**
 * The translation layer for pack content. The canonical (Turkish) values live
 * in the pack's own fields/entities; only the translations for the other 5
 * languages are kept here. A missing translation falls back to the canonical
 * Turkish value.
 */
export interface PackI18n {
  title?: Partial<Record<Locale, string>>;
  subtitle?: Partial<Record<Locale, string>>;
  /** fieldKey -> locale -> label translation */
  fieldLabels?: Record<string, Partial<Record<Locale, string>>>;
  /** fieldKey -> canonical (tr) value -> locale -> translation. For finite/enum values. */
  valueTranslations?: Record<string, Record<string, Partial<Record<Locale, string>>>>;
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
  i18n?: PackI18n;
}

export type CellStatus = "correct" | "partial" | "wrong";

/** Symbols shown alongside the colours in colour-blind mode. */
export const CELL_STATUS_SYMBOL: Record<CellStatus, string> = {
  correct: "✓",
  partial: "≈",
  wrong: "✕",
};

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
  mode: GameMode;
  guesses: GuessRow[];
  won: boolean;
  finished: boolean;
  /** Field keys revealed after wrong guesses in Emoji mode. */
  revealedFieldKeys?: string[];
}

export const MAX_GUESSES = 8;

/** In Emoji/Sound mode, one more field is revealed when the guess count hits these thresholds. */
export const CLUE_MODE_HINT_SCHEDULE = [2, 4, 6] as const;
