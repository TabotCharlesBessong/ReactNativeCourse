import { Stack } from "expo-router";
import React from "react";
import { useOrderUpdateSubscription } from "../../../api/subscription";

export default function OrdersLayout() {
  useOrderUpdateSubscription();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
