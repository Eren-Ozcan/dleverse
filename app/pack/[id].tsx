import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPackById } from "@/data/packs";
import { colors } from "@/theme/colors";
import { GuessGrid } from "@/components/GuessGrid";
import { GuessInput } from "@/components/GuessInput";
import { ResultPanel } from "@/components/ResultPanel";
import { StatsModal } from "@/components/StatsModal";
import { HowToPlayModal } from "@/components/HowToPlayModal";
import { SettingsModal } from "@/components/SettingsModal";
import { ModeTabs } from "@/components/ModeTabs";
import { EmojiClueCard } from "@/components/EmojiClueCard";
import type { Entity, GameMode, GuessRow, PackDailyState } from "@/engine/types";
import { MAX_GUESSES } from "@/engine/types";
import { pickDailyEntity, todayKey, yesterdayKey } from "@/engine/dailySelection";
import { buildGuessRow, fieldKeysToReveal } from "@/engine/guessEngine";
import { localizePackSubtitle, localizePackTitle } from "@/engine/localize";
import type { PackProgress } from "@/engine/storage";
import {
  getDeviceId,
  hasSeenHowToPlay,
  loadDailyState,
  loadProgress,
  markHowToPlaySeen,
  recordResult,
  saveDailyState,
} from "@/engine/storage";
import { fetchLeaderboard, fetchTodaySolvedCount, submitCompletion, type LeaderboardEntry } from "@/engine/globalStats";
import { useSettings } from "@/providers/SettingsProvider";

export default function PackScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const pack = getPackById(id);
  const { locale, t } = useSettings();

  const [mode, setMode] = useState<GameMode>("classic");
  const [state, setState] = useState<PackDailyState | null>(null);
  const [progress, setProgress] = useState<PackProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [statsVisible, setStatsVisible] = useState(false);
  const [howToVisible, setHowToVisible] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [todaySolvedCount, setTodaySolvedCount] = useState<number | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[] | null>(null);

  useEffect(() => {
    if (!pack) return;
    const dateKey = todayKey();
    setLoading(true);
    (async () => {
      const [existing, storedProgress, seenHowTo] = await Promise.all([
        loadDailyState(pack.id, mode, dateKey),
        loadProgress(pack.id, mode),
        hasSeenHowToPlay(),
      ]);
      setState(existing ?? { dateKey, mode, guesses: [], won: false, finished: false, revealedFieldKeys: [] });
      setProgress(storedProgress);
      setLoading(false);
      if (!seenHowTo) {
        setHowToVisible(true);
        await markHowToPlaySeen();
      }
    })();
  }, [pack, mode]);

  if (!pack) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.notFound}>{t.packNotFound}</Text>
      </SafeAreaView>
    );
  }

  const handleGuess = async (entity: Entity) => {
    if (!state || state.finished) return;
    const target = pickDailyEntity(pack, state.dateKey, mode);
    const row: GuessRow = buildGuessRow(pack, entity, target);
    const guesses = [...state.guesses, row];
    const finished = row.isWin || guesses.length >= MAX_GUESSES;
    const revealedFieldKeys = mode === "emoji" ? fieldKeysToReveal(pack, guesses.length) : state.revealedFieldKeys;
    const next: PackDailyState = { ...state, guesses, won: row.isWin, finished, revealedFieldKeys };
    setState(next);
    await saveDailyState(pack.id, next);
    if (finished) {
      const updated = await recordResult(pack.id, mode, state.dateKey, row.isWin, guesses.length);
      setProgress(updated);
      const deviceId = await getDeviceId();
      await submitCompletion(pack.id, mode, state.dateKey, deviceId, row.isWin, guesses.length);
    }
  };

  useEffect(() => {
    if (!pack || !state?.finished) return;
    let cancelled = false;
    (async () => {
      const [count, board] = await Promise.all([
        fetchTodaySolvedCount(pack.id, mode, state.dateKey),
        fetchLeaderboard(pack.id, mode, state.dateKey),
      ]);
      if (!cancelled) {
        setTodaySolvedCount(count);
        setLeaderboard(board);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [pack, mode, state?.finished, state?.dateKey]);

  const guessedIds = new Set((state?.guesses ?? []).map((row) => row.entity.id));
  const target = state ? pickDailyEntity(pack, state.dateKey, mode) : null;
  const remaining = MAX_GUESSES - (state?.guesses.length ?? 0);

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.headerRow}>
          <Text onPress={() => router.back()} style={styles.back}>
            {t.back}
          </Text>
          <View style={styles.headerButtons}>
            <Pressable onPress={() => setSettingsVisible(true)} hitSlop={8} style={styles.iconButton}>
              <Text style={styles.iconText}>⚙️</Text>
            </Pressable>
            <Pressable onPress={() => setHowToVisible(true)} hitSlop={8} style={styles.iconButton}>
              <Text style={styles.iconText}>?</Text>
            </Pressable>
            <Pressable onPress={() => setStatsVisible(true)} hitSlop={8} style={styles.iconButton}>
              <Text style={styles.iconText}>📊</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.emoji}>{pack.emoji}</Text>
        <Text style={styles.title}>{localizePackTitle(pack, locale)}</Text>
        <Text style={styles.subtitle}>{localizePackSubtitle(pack, locale)}</Text>

        <ModeTabs mode={mode} onChange={setMode} />

        {!loading && state && target ? (
          <>
            {state.finished ? (
              <ResultPanel
                pack={pack}
                state={state}
                target={target}
                streak={progress?.streak ?? 0}
                yesterdayAnswer={pickDailyEntity(pack, yesterdayKey(state.dateKey), mode)}
                todaySolvedCount={todaySolvedCount}
                leaderboard={leaderboard}
              />
            ) : (
              <>
                {mode === "emoji" ? <EmojiClueCard pack={pack} target={target} state={state} /> : null}
                <GuessInput pack={pack} guessedIds={guessedIds} disabled={state.finished} onGuess={handleGuess} />
                <Text style={styles.counter}>
                  {state.guesses.length === 0 ? t.guessesLeftFirst(MAX_GUESSES) : t.guessesLeft(remaining, MAX_GUESSES)}
                </Text>
              </>
            )}

            {mode === "classic" ? (
              <View style={styles.gridWrapper}>
                <GuessGrid rows={state.guesses} pack={pack} />
              </View>
            ) : null}
          </>
        ) : null}
      </ScrollView>

      {progress ? <StatsModal visible={statsVisible} progress={progress} onClose={() => setStatsVisible(false)} /> : null}
      <HowToPlayModal visible={howToVisible} onClose={() => setHowToVisible(false)} />
      <SettingsModal visible={settingsVisible} onClose={() => setSettingsVisible(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 60 },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  back: { color: colors.accent, fontSize: 15, fontWeight: "600" },
  headerButtons: { flexDirection: "row", gap: 10 },
  iconButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: { color: colors.textPrimary, fontSize: 15, fontWeight: "700" },
  emoji: { fontSize: 36, marginTop: 8 },
  title: { color: colors.textPrimary, fontSize: 26, fontWeight: "800", marginTop: 6 },
  subtitle: { color: colors.textSecondary, fontSize: 14, marginTop: 2, marginBottom: 20 },
  counter: { color: colors.textSecondary, fontSize: 12, marginTop: 8, textAlign: "center" },
  gridWrapper: { marginTop: 20 },
  notFound: { color: colors.textPrimary, padding: 20 },
});
