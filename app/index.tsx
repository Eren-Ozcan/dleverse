import { useCallback, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { packs } from "@/data/packs";
import { PackCard } from "@/components/PackCard";
import { Countdown } from "@/components/Countdown";
import { SettingsModal } from "@/components/SettingsModal";
import { colors } from "@/theme/colors";
import { loadDailyState, loadProgress } from "@/engine/storage";
import { todayKey } from "@/engine/dailySelection";
import { useSettings } from "@/providers/SettingsProvider";

interface PackMeta {
  streak: number;
  playedToday: boolean;
}

export default function HomeScreen() {
  const router = useRouter();
  const { t } = useSettings();
  const [meta, setMeta] = useState<Record<string, PackMeta>>({});
  const [settingsVisible, setSettingsVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      (async () => {
        const dateKey = todayKey();
        const entries = await Promise.all(
          packs.map(async (pack) => {
            const [progress, daily] = await Promise.all([
              loadProgress(pack.id, "classic"),
              loadDailyState(pack.id, "classic", dateKey),
            ]);
            return [pack.id, { streak: progress.streak, playedToday: Boolean(daily?.finished) }] as const;
          })
        );
        if (!cancelled) setMeta(Object.fromEntries(entries));
      })();
      return () => {
        cancelled = true;
      };
    }, [])
  );

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <FlatList
        data={packs}
        keyExtractor={(pack) => pack.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.brandRow}>
              <Text style={styles.brand}>Dleverse</Text>
              <Pressable onPress={() => setSettingsVisible(true)} hitSlop={8} style={styles.settingsButton}>
                <Text style={styles.settingsIcon}>⚙️</Text>
              </Pressable>
            </View>
            <Text style={styles.tagline}>{t.tagline}</Text>
            <View style={styles.dailyRow}>
              <Text style={styles.dailyProgress}>
                {t.dailyProgress(Object.values(meta).filter((m) => m.playedToday).length, packs.length)}
              </Text>
              <Countdown prefix={t.nextGames} />
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <PackCard
            pack={item}
            streak={meta[item.id]?.streak ?? 0}
            playedToday={meta[item.id]?.playedToday ?? false}
            onPress={() => router.push(`/pack/${item.id}`)}
          />
        )}
      />
      <SettingsModal visible={settingsVisible} onClose={() => setSettingsVisible(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  listContent: { padding: 20, paddingBottom: 40 },
  header: { marginBottom: 24, marginTop: 8 },
  brandRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  settingsButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  settingsIcon: { fontSize: 17 },
  dailyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  dailyProgress: { color: colors.textPrimary, fontSize: 13, fontWeight: "700" },
  brand: { color: colors.textPrimary, fontSize: 34, fontWeight: "800", letterSpacing: -0.5 },
  tagline: { color: colors.textSecondary, fontSize: 14, marginTop: 6, lineHeight: 20 },
});
