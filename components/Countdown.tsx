import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { msUntilNextDaily } from "@/engine/dailySelection";
import { colors } from "@/theme/colors";

function formatRemaining(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export function Countdown({ prefix }: { prefix: string }) {
  const [remaining, setRemaining] = useState(() => msUntilNextDaily());

  useEffect(() => {
    const timer = setInterval(() => setRemaining(msUntilNextDaily()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Text style={styles.text}>
      {prefix}: <Text style={styles.time}>{formatRemaining(remaining)}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: { color: colors.textSecondary, fontSize: 13 },
  time: { color: colors.textPrimary, fontWeight: "700", fontVariant: ["tabular-nums"] },
});
