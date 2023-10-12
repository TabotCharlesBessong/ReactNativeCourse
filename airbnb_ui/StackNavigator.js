import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ChikMagalurScreen,
  ConfirmationScreen,
  FinishScreen,
  HomeScreen,
  KoidaikanalScreen,
  MadikeriScreen,
  MapScreen,
  ReserveScreen,
  SearchScreen,
} from "./screens";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="Reserve"
          component={ReserveScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen
          name="Finish"
          component={FinishScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Madikeri"
          component={MadikeriScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChikMagalur"
          component={ChikMagalurScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Koidaikanal"
          component={KoidaikanalScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
