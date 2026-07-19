import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { MAX_GUESSES } from "@/engine/types";
import { colors } from "@/theme/colors";
import { useSettings } from "@/providers/SettingsProvider";

interface Props {
  visible: boolean;
  onClose: () => void;
}

function LegendRow({ color, symbol, text }: { color: string; symbol?: string; text: string }) {
  return (
    <View style={styles.legendRow}>
      <View style={[styles.swatch, { backgroundColor: color }]}>
        {symbol ? <Text style={styles.swatchSymbol}>{symbol}</Text> : null}
      </View>
      <Text style={styles.legendText}>{text}</Text>
    </View>
  );
}

export function HowToPlayModal({ visible, onClose }: Props) {
  const { t } = useSettings();

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={() => {}}>
          <Text style={styles.title}>{t.howToTitle}</Text>
          <Text style={styles.body}>{t.howToBody(MAX_GUESSES)}</Text>

          <LegendRow color={colors.correct} text={t.legendCorrect} />
          <LegendRow color={colors.partial} text={t.legendPartial} />
          <LegendRow color={colors.wrong} text={t.legendWrong} />
          <LegendRow color={colors.wrong} symbol="↑" text={t.legendArrow} />

          <Text style={styles.tip}>{t.howToTip}</Text>

          <Pressable onPress={onClose} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
            <Text style={styles.buttonText}>{t.howToButton}</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    justifyContent: "center",
    padding: 24,
  },
  sheet: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
  },
  title: { color: colors.textPrimary, fontSize: 20, fontWeight: "800", textAlign: "center" },
  body: { color: colors.textSecondary, fontSize: 14, lineHeight: 20, marginTop: 10, marginBottom: 16 },
  legendRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 10 },
  swatch: { width: 28, height: 28, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  swatchSymbol: { color: "#fff", fontWeight: "800", fontSize: 14 },
  legendText: { color: colors.textPrimary, fontSize: 13, flex: 1 },
  tip: { color: colors.textSecondary, fontSize: 13, lineHeight: 19, marginTop: 6 },
  button: {
    backgroundColor: colors.accent,
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 16,
  },
  pressed: { opacity: 0.85 },
  buttonText: { color: "#fff", fontWeight: "800", fontSize: 15 },
});
