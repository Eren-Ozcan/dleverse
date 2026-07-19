import { StyleSheet, Text, View } from "react-native";
import type { Entity, PackConfig, PackDailyState } from "@/engine/types";
import { localizeEntityName, localizeFieldLabel, localizeFieldValue } from "@/engine/localize";
import { useSettings } from "@/providers/SettingsProvider";
import { colors } from "@/theme/colors";

interface Props {
  pack: PackConfig;
  target: Entity;
  state: PackDailyState;
}

function formatValue(value: string | number | string[]): string {
  if (Array.isArray(value)) return value.join(", ");
  return String(value);
}

export function EmojiClueCard({ pack, target, state }: Props) {
  const { locale, t } = useSettings();
  const wrongGuesses = state.guesses.filter((row) => !row.isWin);
  const revealedKeys = state.revealedFieldKeys ?? [];

  return (
    <View style={styles.card}>
      <Text style={styles.clue}>{target.emojiClue ?? "❔❔❔"}</Text>
      <Text style={styles.prompt}>{t.emojiCluePrompt}</Text>

      {revealedKeys.length > 0 ? (
        <View style={styles.hintRow}>
          {revealedKeys.map((key) => {
            const field = pack.fields.find((f) => f.key === key);
            if (!field) return null;
            const value = localizeFieldValue(pack, key, target.fields[key], locale);
            return (
              <View key={key} style={styles.hintChip}>
                <Text style={styles.hintLabel}>{localizeFieldLabel(pack, key, field.label, locale)}</Text>
                <Text style={styles.hintValue} numberOfLines={1}>
                  {formatValue(value)}
                </Text>
              </View>
            );
          })}
        </View>
      ) : null}

      {wrongGuesses.length > 0 ? (
        <View style={styles.wrongRow}>
          {wrongGuesses.map((row, i) => (
            <View key={`${row.entity.id}-${i}`} style={styles.wrongChip}>
              <Text style={styles.wrongText} numberOfLines={1}>
                {localizeEntityName(row.entity, locale)} ✕
              </Text>
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    alignItems: "center",
  },
  clue: { fontSize: 48, letterSpacing: 6, textAlign: "center" },
  prompt: { color: colors.textSecondary, fontSize: 13, marginTop: 10, textAlign: "center" },
  hintRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 16, justifyContent: "center" },
  hintChip: {
    backgroundColor: colors.partial,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 90,
    alignItems: "center",
  },
  hintLabel: { color: "rgba(0,0,0,0.6)", fontSize: 10, fontWeight: "700", textTransform: "uppercase" },
  hintValue: { color: "#1a1a1a", fontSize: 13, fontWeight: "700", marginTop: 2 },
  wrongRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 14, justifyContent: "center" },
  wrongChip: {
    backgroundColor: colors.wrong,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  wrongText: { color: "#fff", fontSize: 12, fontWeight: "600" },
});
