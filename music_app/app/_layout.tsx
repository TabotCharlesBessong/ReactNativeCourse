import { useSetupTrackPlayer } from "@/hooks/useSetupTrackPlayer"
import { SplashScreen, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import React, { useCallback } from "react"
import { Text } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

SplashScreen.preventAutoHideAsync()

const App = () => {
  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync()
  },[])
  useSetupTrackPlayer({
    onLoad:handleTrackPlayerLoaded
  })
  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  )
}

const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown:false}} />
    </Stack>
  )
}

export default App