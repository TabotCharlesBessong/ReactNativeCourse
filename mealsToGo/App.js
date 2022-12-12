import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import {RestaurantInfo, RestaurantScreen} from './src/features'

export default function App() {
  return (
    <>
      <RestaurantScreen/>
      <RestaurantInfo/>
      <ExpoStatusBar style="auto" />
    </>
  );
}


