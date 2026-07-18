import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPackById } from "@/data/packs";
import { colors } from "@/theme/colors";
import { GuessGrid } from "@/components/GuessGrid";
import { GuessInput } from "@/components/GuessInput";
import type { Entity, GuessRow, PackDailyState } from "@/engine/types";
import { pickDailyEntity, todayKey } from "@/engine/dailySelection";
import { buildGuessRow } from "@/engine/guessEngine";
import { loadDailyState, recordResult, saveDailyState } from "@/engine/storage";

export default function PackScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const pack = getPackById(id);

  const [state, setState] = useState<PackDailyState | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!pack) return;
    const dateKey = todayKey();
    (async () => {
      const existing = await loadDailyState(pack.id, dateKey);
      setState(existing ?? { dateKey, guesses: [], won: false, finished: false });
      setLoading(false);
    })();
  }, [pack]);

  if (!pack) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.notFound}>Paket bulunamadı.</Text>
      </SafeAreaView>
    );
  }

  const handleGuess = async (entity: Entity) => {
    if (!state || state.finished) return;
    const target = pickDailyEntity(pack, state.dateKey);
    const row: GuessRow = buildGuessRow(pack, entity, target);
    const guesses = [...state.guesses, row];
    const finished = row.isWin || guesses.length >= 8;
    const next: PackDailyState = { ...state, guesses, won: row.isWin, finished };
    setState(next);
    await saveDailyState(pack.id, next);
    if (finished) {
      await recordResult(pack.id, state.dateKey, row.isWin);
    }
  };

  const guessedIds = new Set((state?.guesses ?? []).map((row) => row.entity.id));

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerRow}>
          <Text onPress={() => router.back()} style={styles.back}>
            ‹ Geri
          </Text>
        </View>
        <Text style={styles.emoji}>{pack.emoji}</Text>
        <Text style={styles.title}>{pack.title}</Text>
        <Text style={styles.subtitle}>{pack.subtitle}</Text>

        {!loading && state ? (
          <>
            {state.finished ? (
              <View style={[styles.resultBanner, { backgroundColor: state.won ? colors.correct : colors.wrong }]}>
                <Text style={styles.resultText}>
                  {state.won ? "Bugünkü tahmini bildin! 🎉" : "Bugünün hakkı doldu, yarın tekrar dene."}
                </Text>
              </View>
            ) : null}

            <GuessInput pack={pack} guessedIds={guessedIds} disabled={state.finished} onGuess={handleGuess} />

            <View style={styles.gridWrapper}>
              <GuessGrid rows={state.guesses} />
            </View>
          </>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 60 },
  headerRow: { marginBottom: 8 },
  back: { color: colors.accent, fontSize: 15, fontWeight: "600" },
  emoji: { fontSize: 36, marginTop: 8 },
  title: { color: colors.textPrimary, fontSize: 26, fontWeight: "800", marginTop: 6 },
  subtitle: { color: colors.textSecondary, fontSize: 14, marginTop: 2, marginBottom: 20 },
  resultBanner: { borderRadius: 12, padding: 14, marginBottom: 16 },
  resultText: { color: "#fff", fontWeight: "700", textAlign: "center" },
  gridWrapper: { marginTop: 20 },
  notFound: { color: colors.textPrimary, padding: 20 },
});
