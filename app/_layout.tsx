import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { colors } from "@/theme/colors";
import { SettingsProvider } from "@/providers/SettingsProvider";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SettingsProvider>
        <View style={{ flex: 1, backgroundColor: colors.background }}>
          <StatusBar style="light" />
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: colors.background },
            }}
          />
        </View>
      </SettingsProvider>
    </SafeAreaProvider>
  );
}
