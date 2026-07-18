import { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { packs } from "@/data/packs";
import { PackCard } from "@/components/PackCard";
import { colors } from "@/theme/colors";
import { loadDailyState, loadProgress } from "@/engine/storage";
import { todayKey } from "@/engine/dailySelection";

interface PackMeta {
  streak: number;
  playedToday: boolean;
}

export default function HomeScreen() {
  const router = useRouter();
  const [meta, setMeta] = useState<Record<string, PackMeta>>({});

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      (async () => {
        const dateKey = todayKey();
        const entries = await Promise.all(
          packs.map(async (pack) => {
            const [progress, daily] = await Promise.all([loadProgress(pack.id), loadDailyState(pack.id, dateKey)]);
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
            <Text style={styles.brand}>Dleverse</Text>
            <Text style={styles.tagline}>Her gün yeni bir tahmin. Sevdiğin fandom'u seç, seriyi bozma.</Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  listContent: { padding: 20, paddingBottom: 40 },
  header: { marginBottom: 24, marginTop: 8 },
  brand: { color: colors.textPrimary, fontSize: 34, fontWeight: "800", letterSpacing: -0.5 },
  tagline: { color: colors.textSecondary, fontSize: 14, marginTop: 6, lineHeight: 20 },
});
