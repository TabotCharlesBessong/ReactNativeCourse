import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SQLiteProvider } from "expo-sqlite/next";
import React, { Suspense, useEffect, useState } from "react";
import { Loader } from "./components";
import { HomeScreen } from "./screens";
import { loadDB } from "./utils";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbLoaded, setDbLoaded] = useState<boolean>(true);

  useEffect(() => {
    loadDB()
      .then(() => setDbLoaded(false))
      .catch((e) => console.log(e));
  }, []);

  if (dbLoaded) {
    return (
      <Loader />
    );
  }
  return (
    <NavigationContainer>
      <Suspense
        fallback={
          <Loader />
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
