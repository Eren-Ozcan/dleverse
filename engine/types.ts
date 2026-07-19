export type FieldType = "text" | "number" | "year" | "multi";

export interface FieldDef {
  key: string;
  label: string;
  type: FieldType;
  /** For number/year fields: a guess within ± this range counts as "partial" (close). */
  near?: number;
}

export type FieldValue = string | number | string[];

/** Desteklenen arayüz/içerik dilleri. tr = kanonik (paket dosyalarındaki varsayılan) dil. */
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

export type GameMode = "classic" | "emoji";

export interface Entity {
  id: string;
  name: string;
  aliases?: string[];
  image?: string;
  fields: Record<string, FieldValue>;
  /** Emoji Modu'nda gösterilen, cevabı ima eden kısa emoji dizisi (ör. "🐍🍎🍊"). */
  emojiClue?: string;
  /** Sadece isim diller arası anlamlı şekilde değiştiğinde dolu olur (ör. "Büyük İskender" → "Alexander the Great"). */
  nameByLocale?: Partial<Record<Locale, string>>;
}

export interface PackTheme {
  primary: string;
  secondary: string;
  background: string;
}

/**
 * Paket içeriğinin çeviri katmanı. Kanonik (Türkçe) değerler paketin kendi
 * alanlarında/entity'lerinde durur; burada sadece diğer 5 dile karşılık gelen
 * çeviriler tutulur. Eksik bir çeviri varsa kanonik Türkçe değere düşülür.
 */
export interface PackI18n {
  title?: Partial<Record<Locale, string>>;
  subtitle?: Partial<Record<Locale, string>>;
  /** fieldKey -> locale -> etiket çevirisi */
  fieldLabels?: Record<string, Partial<Record<Locale, string>>>;
  /** fieldKey -> kanonik (tr) değer -> locale -> çeviri. Sonlu/enum değerler için. */
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

/** Renk körü modunda renklere ek olarak gösterilen semboller. */
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
  /** Emoji Modu'nda yanlış tahminler sonrası açığa çıkan alan anahtarları. */
  revealedFieldKeys?: string[];
}

export const MAX_GUESSES = 8;

/** Emoji Modu'nda tahmin sayısı bu eşiklere ulaştığında bir alan daha açığa çıkar. */
export const EMOJI_MODE_HINT_SCHEDULE = [2, 4, 6] as const;
