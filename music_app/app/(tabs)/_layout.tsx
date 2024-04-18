import { colors, fontSize } from "@/constants/tokens";
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const TabsNavigation = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: fontSize.sm,
          fontWeight: "300",
        },
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          bottom: 4,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={95}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: "hidden",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        options={{
          title: "Favourites",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={24} color={color} />
          ),
        }}
        name="favourites"
      />
      <Tabs.Screen
        options={{
          title: "Playlists",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="playlist-play"
              size={24}
              color={color}
            />
          ),
        }}
        name="playlists"
      />
      <Tabs.Screen
        options={{
          title: "Songs",
          tabBarIcon: ({ color }) => (
            <Ionicons name="musical-note-sharp" size={24} color={color} />
          ),
        }}
        name="(songs)"
      />
      <Tabs.Screen
        options={{
          title: "Artists",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="users-line" size={24} color={color} />
          ),
        }}
        name="artists"
      />
    </Tabs>
  );
};

export default TabsNavigation;
