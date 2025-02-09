import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function AuthRouteLayout () {
  const {isLoaded,isSignedIn} = useAuth()

  if(!isLoaded) return null
  if(isSignedIn) return <Redirect href={"/(index)"} />
  return(
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  )
}