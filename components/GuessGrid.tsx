import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import type { GuessRow, PackConfig } from "@/engine/types";
import { CELL_STATUS_SYMBOL } from "@/engine/types";
import { localizeEntityName, localizeFieldLabel, localizeFieldValue } from "@/engine/localize";
import { useSettings } from "@/providers/SettingsProvider";
import { colors } from "@/theme/colors";

const statusColor: Record<string, string> = {
  correct: colors.correct,
  partial: colors.partial,
  wrong: colors.wrong,
};

const directionArrow: Record<string, string> = {
  up: "↑",
  down: "↓",
  equal: "",
};

function formatValue(value: string | number | string[]): string {
  if (Array.isArray(value)) return value.join(", ");
  return String(value);
}

/** Flips the cells of a new guess row open left to right (the Wordle flip feel). */
function RevealCell({ delay, children, style }: { delay: number; children: React.ReactNode; style: object }) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 260,
      delay,
      useNativeDriver: true,
    }).start();
  }, [progress, delay]);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: progress,
          transform: [
            { scale: progress.interpolate({ inputRange: [0, 1], outputRange: [0.6, 1] }) },
            { rotateX: progress.interpolate({ inputRange: [0, 1], outputRange: ["90deg", "0deg"] }) },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

export function GuessGrid({ rows, pack }: { rows: GuessRow[]; pack: PackConfig }) {
  const { locale, colorblind, t } = useSettings();

  if (rows.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>{t.emptyGrid}</Text>
      </View>
    );
  }

  const headers = rows[0].cells.map((cell) => localizeFieldLabel(pack, cell.key, cell.label, locale));
  // Newest guess on top - you see the latest state without scrolling (Loldle layout).
  const displayRows = [...rows].reverse();

  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={[styles.headerCell, styles.nameCol]}> </Text>
        {headers.map((label, i) => (
          <Text key={`${label}-${i}`} style={styles.headerCell} numberOfLines={1}>
            {label}
          </Text>
        ))}
      </View>
      {displayRows.map((row, index) => {
        const isNewest = index === 0;
        return (
          <View key={`${row.entity.id}-${rows.length - index}`} style={styles.row}>
            <View style={[styles.cell, styles.nameCol, styles.nameCell]}>
              <Text style={styles.nameText} numberOfLines={2}>
                {localizeEntityName(row.entity, locale)}
              </Text>
            </View>
            {row.cells.map((cell, cellIndex) => {
              const localizedValue = localizeFieldValue(pack, cell.key, cell.value, locale);
              const content = (
                <>
                  <Text style={styles.cellText} numberOfLines={2}>
                    {formatValue(localizedValue)}
                  </Text>
                  {cell.hint && cell.hint.direction !== "equal" ? (
                    <Text style={styles.arrow}>{directionArrow[cell.hint.direction]}</Text>
                  ) : null}
                  {colorblind ? <Text style={styles.symbol}>{CELL_STATUS_SYMBOL[cell.status]}</Text> : null}
                </>
              );
              const cellStyle = [styles.cell, { backgroundColor: statusColor[cell.status] }];
              return isNewest ? (
                <RevealCell key={cell.key} delay={cellIndex * 150} style={StyleSheet.flatten(cellStyle)}>
                  {content}
                </RevealCell>
              ) : (
                <View key={cell.key} style={cellStyle}>
                  {content}
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  empty: { paddingVertical: 24, alignItems: "center" },
  emptyText: { color: colors.textSecondary, fontSize: 13 },
  headerRow: { flexDirection: "row", marginBottom: 6 },
  headerCell: {
    flex: 1,
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 2,
  },
  row: { flexDirection: "row", marginBottom: 8, gap: 6 },
  cell: {
    flex: 1,
    minHeight: 56,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  nameCol: { flex: 1.3 },
  nameCell: { backgroundColor: colors.surfaceRaised },
  nameText: { color: colors.textPrimary, fontSize: 12, fontWeight: "700", textAlign: "center" },
  cellText: { color: "#fff", fontSize: 11, fontWeight: "600", textAlign: "center" },
  arrow: { color: "#fff", fontSize: 13, fontWeight: "800", marginTop: 2 },
  symbol: { color: "#fff", fontSize: 11, fontWeight: "900", marginTop: 1 },
});
