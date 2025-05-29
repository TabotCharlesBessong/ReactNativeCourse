import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (<Stack >
    {/* <Stack.Screen name="index" options={{ headerShown:true }} /> */}
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack>);
}
