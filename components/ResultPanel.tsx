import { useState } from "react";
import { Image, Pressable, Share, StyleSheet, Text, View } from "react-native";
import type { Entity, PackConfig, PackDailyState } from "@/engine/types";
import { MAX_GUESSES } from "@/engine/types";
import { buildShareText } from "@/engine/share";
import { localizeEntityName } from "@/engine/localize";
import type { LeaderboardEntry } from "@/engine/globalStats";
import { useSettings } from "@/providers/SettingsProvider";
import { colors } from "@/theme/colors";
import { Countdown } from "./Countdown";

interface Props {
  pack: PackConfig;
  state: PackDailyState;
  target: Entity;
  streak: number;
  yesterdayAnswer: Entity;
  /** The real count when Supabase is configured; otherwise null -> the section is hidden (an invented number is never shown). */
  todaySolvedCount?: number | null;
  leaderboard?: LeaderboardEntry[] | null;
}

export function ResultPanel({ pack, state, target, streak, yesterdayAnswer, todaySolvedCount, leaderboard }: Props) {
  const { locale, t } = useSettings();
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    await Share.share({ message: buildShareText(pack, state) });
    setShared(true);
  };

  return (
    <View style={[styles.panel, { borderColor: state.won ? colors.correct : colors.border }]}>
      <Text style={styles.title}>{state.won ? t.wonTitle(state.guesses.length, MAX_GUESSES) : t.lostTitle}</Text>

      <View style={styles.answerBox}>
        {target.image ? (
          <>
            <Image source={{ uri: target.image }} style={styles.answerImage} resizeMode="cover" />
            {target.imageCredit ? <Text style={styles.imageCredit}>{target.imageCredit}</Text> : null}
          </>
        ) : null}
        <Text style={styles.answerLabel}>{state.won ? t.answerLabelWon : t.answerLabelLost}</Text>
        <Text style={styles.answerName}>{localizeEntityName(target, locale)}</Text>
      </View>

      {streak > 1 ? <Text style={styles.streak}>{t.streakLabel(streak)}</Text> : null}

      {typeof todaySolvedCount === "number" ? (
        <Text style={styles.globalStat}>{t.todaySolvedCount(todaySolvedCount)}</Text>
      ) : null}

      {leaderboard && leaderboard.length > 0 ? (
        <View style={styles.leaderboard}>
          <Text style={styles.leaderboardTitle}>{t.leaderboardTitle}</Text>
          {leaderboard.slice(0, 5).map((entry) => (
            <View key={entry.rank} style={styles.leaderboardRow}>
              <Text style={styles.leaderboardRank}>#{entry.rank}</Text>
              <Text style={styles.leaderboardValue}>{entry.guessCount}/{MAX_GUESSES}</Text>
            </View>
          ))}
        </View>
      ) : null}

      <Pressable onPress={handleShare} style={({ pressed }) => [styles.shareButton, pressed && styles.pressed]}>
        <Text style={styles.shareText}>{shared ? t.sharedDone : t.shareButton}</Text>
      </Pressable>

      <View style={styles.footer}>
        <Countdown prefix={t.nextGame} />
        <Text style={styles.yesterday}>
          {t.yesterdayAnswer}: <Text style={styles.yesterdayName}>{localizeEntityName(yesterdayAnswer, locale)}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    padding: 18,
    marginBottom: 16,
    alignItems: "center",
  },
  title: { color: colors.textPrimary, fontSize: 18, fontWeight: "800" },
  answerBox: { alignItems: "center", marginTop: 12 },
  answerImage: { width: 96, height: 96, borderRadius: 14, backgroundColor: colors.surfaceRaised },
  imageCredit: { color: colors.textSecondary, fontSize: 9, marginTop: 4, opacity: 0.7 },
  answerLabel: { color: colors.textSecondary, fontSize: 12, textTransform: "uppercase", letterSpacing: 1 },
  answerName: { color: colors.accent, fontSize: 22, fontWeight: "800", marginTop: 2, textAlign: "center" },
  streak: { color: colors.partial, fontSize: 14, fontWeight: "700", marginTop: 10 },
  globalStat: { color: colors.textSecondary, fontSize: 12, marginTop: 8 },
  leaderboard: { width: "100%", marginTop: 14, backgroundColor: colors.surfaceRaised, borderRadius: 12, padding: 12 },
  leaderboardTitle: { color: colors.textSecondary, fontSize: 11, fontWeight: "700", textTransform: "uppercase", marginBottom: 6 },
  leaderboardRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 3 },
  leaderboardRank: { color: colors.textPrimary, fontSize: 13, fontWeight: "700" },
  leaderboardValue: { color: colors.textSecondary, fontSize: 13 },
  shareButton: {
    backgroundColor: colors.accent,
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginTop: 14,
  },
  pressed: { opacity: 0.85 },
  shareText: { color: "#fff", fontWeight: "800", fontSize: 15 },
  footer: { alignItems: "center", marginTop: 14, gap: 4 },
  yesterday: { color: colors.textSecondary, fontSize: 13 },
  yesterdayName: { color: colors.textPrimary, fontWeight: "700" },
});
