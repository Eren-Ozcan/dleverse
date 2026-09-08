import type { Entity, FieldValue, Locale, PackConfig } from "./types";

export function localizePackTitle(pack: PackConfig, locale: Locale): string {
  return pack.i18n?.title?.[locale] ?? pack.title;
}

export function localizePackSubtitle(pack: PackConfig, locale: Locale): string {
  return pack.i18n?.subtitle?.[locale] ?? pack.subtitle;
}

export function localizeFieldLabel(pack: PackConfig, fieldKey: string, fallbackLabel: string, locale: Locale): string {
  return pack.i18n?.fieldLabels?.[fieldKey]?.[locale] ?? fallbackLabel;
}

export function localizeEntityName(entity: Entity, locale: Locale): string {
  return entity.nameByLocale?.[locale] ?? entity.name;
}

function localizeSingleValue(pack: PackConfig, fieldKey: string, value: string, locale: Locale): string {
  return pack.i18n?.valueTranslations?.[fieldKey]?.[value]?.[locale] ?? value;
}

/** Translates text/multi field values from the canonical (tr) value into the target language; number/year values are returned unchanged. */
export function localizeFieldValue(pack: PackConfig, fieldKey: string, value: FieldValue, locale: Locale): FieldValue {
  if (locale === "tr") return value;
  if (Array.isArray(value)) return value.map((v) => localizeSingleValue(pack, fieldKey, v, locale));
  if (typeof value === "number") return value;
  return localizeSingleValue(pack, fieldKey, value, locale);
}
