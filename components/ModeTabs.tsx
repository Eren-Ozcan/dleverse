import { Pressable, StyleSheet, Text, View } from "react-native";
import type { GameMode } from "@/engine/types";
import { useSettings } from "@/providers/SettingsProvider";
import { colors } from "@/theme/colors";

interface Props {
  mode: GameMode;
  onChange: (mode: GameMode) => void;
  soundAvailable?: boolean;
}

export function ModeTabs({ mode, onChange, soundAvailable }: Props) {
  const { t } = useSettings();
  const tabs: { key: GameMode; label: string }[] = [
    { key: "classic", label: t.modeClassic },
    { key: "emoji", label: `${t.modeEmoji} 🧩` },
    ...(soundAvailable ? [{ key: "sound" as GameMode, label: `${t.modeSound} 🔊` }] : []),
  ];

  return (
    <View style={styles.wrapper}>
      {tabs.map((tab) => {
        const active = tab.key === mode;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChange(tab.key)}
            style={[styles.tab, active && styles.tabActive]}
          >
            <Text style={[styles.tabText, active && styles.tabTextActive]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 4,
    marginBottom: 18,
  },
  tab: { flex: 1, borderRadius: 9, paddingVertical: 9, alignItems: "center" },
  tabActive: { backgroundColor: colors.accent },
  tabText: { color: colors.textSecondary, fontWeight: "700", fontSize: 13 },
  tabTextActive: { color: "#fff" },
});
