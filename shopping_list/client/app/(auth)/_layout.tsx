import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function AuthRouteLayout () {
  const {isLoaded,isSignedIn} = useAuth()

  if(!isLoaded) return null
  if(isSignedIn) return <Redirect href={"/(index)"} />
  return (
    <Stack
      screenOptions={{
        ...(process.env.EXPO_OS !== "ios"
          ? {}
          : {
              headerLargeTitle: true,
              headerTransparent: true,
              headerBlurEffect: "systemChromeMaterial",
              headerLargeTitleShadowVisible: false,
              headerShadowVisible: true,
              headerLargeStyle: {
                // NEW: Make the large title transparent to match the background.
                backgroundColor: "transparent",
              },
            }),
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}