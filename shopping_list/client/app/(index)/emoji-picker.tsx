import React from "react";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { FlatList, Pressable, Text } from "react-native";
import { emojies } from "@/constants/Colors";
import { useListCreation } from "@/context/ListCreationContext";

export default function EmojiPickerScreen() {
  const router = useRouter();
  const { setSelectedEmoji } = useListCreation();

  const handleEmojiSelect = (emoji: string) => {
    setSelectedEmoji(emoji);
    router.back();
  };

  return (
    <FlatList
      data={emojies}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            if (process.env.EXPO_OS === "ios") {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }
            handleEmojiSelect(item);
          }}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 40 }}>{item}</Text>
        </Pressable>
      )}
      numColumns={5}
      keyExtractor={(item) => item}
      automaticallyAdjustContentInsets
      contentInsetAdjustmentBehavior="automatic"
      contentInset={{ bottom: 0 }}
      scrollIndicatorInsets={{ bottom: 0 }}
      contentContainerStyle={{
        padding: 16,
        paddingBottom: 100,
      }}
    />
  );
}
