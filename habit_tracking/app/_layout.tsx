import { Stack, useRouter, useSegments } from "expo-router";
import * as React from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthProvider, useAuth } from "../lib/auth-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoadingUser } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "auth";
    const inTabsGroup = segments[0] === "(tabs)";

    if (!isLoadingUser) {
      if (user && inAuthGroup) {
        // If user is authenticated but in auth group, redirect to tabs
        router.replace("/(tabs)");
      } else if (!user && !inAuthGroup) {
        // If no user and not in auth group, redirect to auth
        router.replace("/auth");
      }
    }
  }, [user, isLoadingUser, segments]);

  if (isLoadingUser) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{children}</>;
};

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient} >

    <AuthProvider>
      <PaperProvider>
        <SafeAreaProvider>
          <RouteGuard>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="auth" />
              <Stack.Screen name="(tabs)" />
            </Stack>
          </RouteGuard>
        </SafeAreaProvider>
      </PaperProvider>
    </AuthProvider>
    </QueryClientProvider>
  );
}
