import { StyleSheet, Text, View } from "react-native";
import type { GuessRow } from "@/engine/types";
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

export function GuessGrid({ rows }: { rows: GuessRow[] }) {
  if (rows.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>Henüz tahmin yok. Aşağıdan aramaya başla.</Text>
      </View>
    );
  }

  const headers = rows[0].cells.map((cell) => cell.label);

  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={[styles.headerCell, styles.nameCol]}> </Text>
        {headers.map((label) => (
          <Text key={label} style={styles.headerCell} numberOfLines={1}>
            {label}
          </Text>
        ))}
      </View>
      {rows.map((row, index) => (
        <View key={`${row.entity.id}-${index}`} style={styles.row}>
          <View style={[styles.cell, styles.nameCol, styles.nameCell]}>
            <Text style={styles.nameText} numberOfLines={2}>
              {row.entity.name}
            </Text>
          </View>
          {row.cells.map((cell) => (
            <View key={cell.key} style={[styles.cell, { backgroundColor: statusColor[cell.status] }]}>
              <Text style={styles.cellText} numberOfLines={2}>
                {formatValue(cell.value)}
              </Text>
              {cell.hint && cell.hint.direction !== "equal" ? (
                <Text style={styles.arrow}>{directionArrow[cell.hint.direction]}</Text>
              ) : null}
            </View>
          ))}
        </View>
      ))}
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
});
