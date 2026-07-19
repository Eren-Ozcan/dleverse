import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { PackConfig } from "@/engine/types";
import { localizePackSubtitle, localizePackTitle } from "@/engine/localize";
import { useSettings } from "@/providers/SettingsProvider";

interface Props {
  pack: PackConfig;
  streak: number;
  playedToday: boolean;
  onPress: () => void;
}

export function PackCard({ pack, streak, playedToday, onPress }: Props) {
  const { locale, t } = useSettings();
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.wrapper, pressed && styles.pressed]}>
      <LinearGradient
        colors={[pack.theme.primary, pack.theme.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.topRow}>
          <Text style={styles.emoji}>{pack.emoji}</Text>
          {playedToday ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{t.playedToday}</Text>
            </View>
          ) : null}
        </View>
        <Text style={styles.title}>{localizePackTitle(pack, locale)}</Text>
        <Text style={styles.subtitle}>{localizePackSubtitle(pack, locale)}</Text>
        <View style={styles.footerRow}>
          <Text style={styles.streak}>{t.streakDays(streak)}</Text>
          <Text style={styles.entityCount}>{t.entityCount(pack.entities.length)}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  card: {
    borderRadius: 20,
    padding: 18,
    minHeight: 128,
    justifyContent: "space-between",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emoji: { fontSize: 28 },
  badge: {
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeText: { color: "#fff", fontSize: 11, fontWeight: "600" },
  title: { color: "#fff", fontSize: 20, fontWeight: "700", marginTop: 10 },
  subtitle: { color: "rgba(255,255,255,0.85)", fontSize: 13, marginTop: 2 },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
  streak: { color: "#fff", fontSize: 13, fontWeight: "600" },
  entityCount: { color: "rgba(255,255,255,0.7)", fontSize: 12 },
});
