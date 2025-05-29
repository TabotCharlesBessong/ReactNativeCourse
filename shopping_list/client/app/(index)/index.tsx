import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import Button from "@/components/ui/button";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { appleBlue } from "@/constants/Colors";
import { useClerk } from "@clerk/clerk-expo";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen () {
  const router = useRouter()

  const renderHeaderRight = () => (
    <Pressable
      // work around for https://github.com/software-mansion/react-native-screens/issues/2219
      // onPress={handleNewListPress}
      // @ts-ignore
      onPress={() => router.push("/list/new")}
      style={styles.headerButton}
    >
      <IconSymbol name="plus" color={appleBlue} />
    </Pressable>
  );

  const renderHeaderLeft = () => (
    <Pressable
      // work around for https://github.com/software-mansion/react-native-screens/issues/2219
      // onPress={handleProfilePress}
      onPress={() => router.push("/profile")}
      style={[styles.headerButton, styles.headerButtonLeft]}
    >
      <IconSymbol
        name="gear"
        color={appleBlue}
        style={{ marginRight: Platform.select({ default: 0, android: 8 }) }}
      />
    </Pressable>
  );
  const {signOut} = useClerk()
  return (
    <>
      <Stack.Screen
        options={{
          title: "Shopping lists",
          headerRight: renderHeaderRight,
          headerLeft: renderHeaderLeft,
        }}
      />
      <BodyScrollView>
        <ThemedText type="title">Hello</ThemedText>
        <Button
          onPress={signOut}
          style={{
            marginTop: 10,
            marginHorizontal: 12,
          }}
        >
          Signout
        </Button>
      </BodyScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 8,
  },
  emptyStateContainer: {
    alignItems: "center",
    gap: 8,
    paddingTop: 100,
  },
  headerButton: {
    padding: 8,
    paddingRight: 0,
    marginHorizontal: Platform.select({ web: 16, default: 0 }),
  },
  headerButtonLeft: {
    paddingLeft: 0,
  },
});