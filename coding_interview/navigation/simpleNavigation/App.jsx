
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
// import { HomeScreen, DetailScreen } from "./screens";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS, // Use the ModalSlideFromBottomIOS transition preset
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;