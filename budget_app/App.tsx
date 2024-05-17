import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import { SQLiteProvider } from "expo-sqlite/next";
import React, { Suspense, useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { HomeScreen } from "./screens";

const Stack = createNativeStackNavigator();

const loadDB = async () => {
  const dbName = "budget.db";
  const dbAsset = require("./assets/budget.db");
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

  const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
  if (!fileInfo.exists) {
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      { intermediates: true }
    );
    await FileSystem.downloadAsync(dbUri, dbFilePath);
  }
};

export default function App() {
  const [dbLoaded, setDbLoaded] = useState<boolean>(true);

  useEffect(() => {
    loadDB()
      .then(() => setDbLoaded(false))
      .catch((e) => console.log(e));
  }, []);

  if (dbLoaded) {
    return (
      <View
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
        <Text>Loading....</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Suspense
        fallback={
          <View
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" />
            <Text>Loading....</Text>
          </View>
        }
      >
        <SQLiteProvider useSuspense databaseName="budget.db">
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              options={{
                headerTitle: "Budget Planner",
                headerLargeTitle: true,
              }}
              component={HomeScreen}
            />
          </Stack.Navigator>
        </SQLiteProvider>
      </Suspense>
    </NavigationContainer>
  );
}
