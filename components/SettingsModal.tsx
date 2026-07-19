import { Modal, Pressable, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { LOCALES, LOCALE_FLAGS, LOCALE_LABELS, type Locale } from "@/engine/types";
import { useSettings } from "@/providers/SettingsProvider";
import { colors } from "@/theme/colors";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export function SettingsModal({ visible, onClose }: Props) {
  const { locale, setLocale, colorblind, setColorblind, t } = useSettings();

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={() => {}}>
          <Text style={styles.title}>{t.settingsTitle}</Text>

          <Text style={styles.sectionTitle}>{t.languagePickerTitle}</Text>
          <ScrollView style={styles.langList}>
            {LOCALES.map((code: Locale) => (
              <Pressable
                key={code}
                onPress={() => setLocale(code)}
                style={[styles.langRow, code === locale && styles.langRowActive]}
              >
                <Text style={styles.langFlag}>{LOCALE_FLAGS[code]}</Text>
                <Text style={styles.langLabel}>{LOCALE_LABELS[code]}</Text>
                {code === locale ? <Text style={styles.check}>✓</Text> : null}
              </Pressable>
            ))}
          </ScrollView>

          <View style={styles.divider} />

          <View style={styles.toggleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.toggleLabel}>{t.colorblindToggle}</Text>
              <Text style={styles.toggleHint}>{t.colorblindHint}</Text>
            </View>
            <Switch
              value={colorblind}
              onValueChange={setColorblind}
              trackColor={{ false: colors.border, true: colors.accent }}
              thumbColor="#fff"
            />
          </View>

          <Pressable onPress={onClose} style={({ pressed }) => [styles.closeButton, pressed && styles.pressed]}>
            <Text style={styles.closeText}>{t.close}</Text>
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
    maxHeight: "80%",
  },
  title: { color: colors.textPrimary, fontSize: 20, fontWeight: "800", textAlign: "center" },
  sectionTitle: { color: colors.textSecondary, fontSize: 13, fontWeight: "700", marginTop: 18, marginBottom: 8 },
  langList: { maxHeight: 260 },
  langRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  langRowActive: { backgroundColor: colors.surfaceRaised },
  langFlag: { fontSize: 20 },
  langLabel: { color: colors.textPrimary, fontSize: 15, flex: 1 },
  check: { color: colors.accent, fontWeight: "800" },
  divider: { height: 1, backgroundColor: colors.border, marginTop: 16 },
  toggleRow: { flexDirection: "row", alignItems: "center", marginTop: 16, gap: 10 },
  toggleLabel: { color: colors.textPrimary, fontSize: 15, fontWeight: "600" },
  toggleHint: { color: colors.textSecondary, fontSize: 12, marginTop: 2 },
  closeButton: {
    backgroundColor: colors.surfaceRaised,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 18,
  },
  pressed: { opacity: 0.8 },
  closeText: { color: colors.textPrimary, fontWeight: "700" },
});
