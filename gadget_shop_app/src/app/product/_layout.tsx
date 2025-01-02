import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useProductUpdateSubscription } from "../../api/subscription";

export default function ProductLayout() {
  useProductUpdateSubscription()
  return (
    <Stack>
      <Stack.Screen
        name="[slug]"
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={24} color="black" onPress={() => router.back()} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack>
  );
}
