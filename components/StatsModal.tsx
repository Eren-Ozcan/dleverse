import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import type { PackProgress } from "@/engine/storage";
import { MAX_GUESSES } from "@/engine/types";
import { colors } from "@/theme/colors";
import { useSettings } from "@/providers/SettingsProvider";

interface Props {
  visible: boolean;
  progress: PackProgress;
  onClose: () => void;
}

function StatBox({ value, label }: { value: string | number; label: string }) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

export function StatsModal({ visible, progress, onClose }: Props) {
  const { t } = useSettings();
  const winRate = progress.playedCount > 0 ? Math.round((progress.wonCount / progress.playedCount) * 100) : 0;
  const buckets = Array.from({ length: MAX_GUESSES }, (_, i) => progress.distribution[String(i + 1)] ?? 0);
  const maxBucket = Math.max(1, ...buckets);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={() => {}}>
          <Text style={styles.title}>{t.statsTitle}</Text>

          <View style={styles.statsRow}>
            <StatBox value={progress.playedCount} label={t.statPlayed} />
            <StatBox value={`%${winRate}`} label={t.statWinRate} />
            <StatBox value={progress.streak} label={t.statStreak} />
            <StatBox value={progress.maxStreak} label={t.statBestStreak} />
          </View>

          <Text style={styles.sectionTitle}>{t.distributionTitle}</Text>
          {buckets.map((count, index) => (
            <View key={index} style={styles.distRow}>
              <Text style={styles.distLabel}>{index + 1}</Text>
              <View style={styles.distTrack}>
                <View
                  style={[
                    styles.distBar,
                    { width: `${Math.max(8, (count / maxBucket) * 100)}%` },
                    count === 0 && styles.distBarEmpty,
                  ]}
                >
                  <Text style={styles.distCount}>{count}</Text>
                </View>
              </View>
            </View>
          ))}

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
  },
  title: { color: colors.textPrimary, fontSize: 20, fontWeight: "800", textAlign: "center" },
  statsRow: { flexDirection: "row", gap: 8, marginTop: 16 },
  statBox: {
    flex: 1,
    backgroundColor: colors.surfaceRaised,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  statValue: { color: colors.textPrimary, fontSize: 20, fontWeight: "800" },
  statLabel: { color: colors.textSecondary, fontSize: 11, marginTop: 2 },
  sectionTitle: { color: colors.textSecondary, fontSize: 13, fontWeight: "700", marginTop: 20, marginBottom: 8 },
  distRow: { flexDirection: "row", alignItems: "center", marginBottom: 6, gap: 8 },
  distLabel: { color: colors.textSecondary, fontSize: 12, fontWeight: "700", width: 14, textAlign: "center" },
  distTrack: { flex: 1 },
  distBar: {
    backgroundColor: colors.correct,
    borderRadius: 6,
    paddingVertical: 3,
    paddingHorizontal: 8,
    alignItems: "flex-end",
  },
  distBarEmpty: { backgroundColor: colors.surfaceRaised },
  distCount: { color: "#fff", fontSize: 11, fontWeight: "700" },
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
