import { useMemo, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import type { Entity, PackConfig } from "@/engine/types";
import { searchEntities } from "@/engine/guessEngine";
import { colors } from "@/theme/colors";

interface Props {
  pack: PackConfig;
  guessedIds: Set<string>;
  disabled: boolean;
  onGuess: (entity: Entity) => void;
}

export function GuessInput({ pack, guessedIds, disabled, onGuess }: Props) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query) return [];
    return searchEntities(pack, query, 6).filter((entity) => !guessedIds.has(entity.id));
  }, [pack, query, guessedIds]);

  const handlePick = (entity: Entity) => {
    onGuess(entity);
    setQuery("");
  };

  return (
    <View>
      <TextInput
        value={query}
        onChangeText={setQuery}
        editable={!disabled}
        placeholder={disabled ? "Bugünkü tahmin tamamlandı" : "Bir isim yaz..."}
        placeholderTextColor={colors.textSecondary}
        style={[styles.input, disabled && styles.inputDisabled]}
        autoCorrect={false}
        autoCapitalize="none"
      />
      {results.length > 0 ? (
        <FlatList
          data={results}
          keyExtractor={(entity) => entity.id}
          style={styles.suggestions}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <Pressable style={styles.suggestionRow} onPress={() => handlePick(item)}>
              <Text style={styles.suggestionText}>{item.name}</Text>
            </Pressable>
          )}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: colors.textPrimary,
    fontSize: 15,
  },
  inputDisabled: { opacity: 0.5 },
  suggestions: {
    marginTop: 8,
    backgroundColor: colors.surface,
    borderRadius: 12,
    maxHeight: 220,
    borderWidth: 1,
    borderColor: colors.border,
  },
  suggestionRow: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  suggestionText: { color: colors.textPrimary, fontSize: 14 },
});
