import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import {RestaurantInfoCard, RestaurantScreen} from './src/features'
// import { ThemeProvider } from "styled-components/native";

// import { theme } from "./src/infrastructure";

export default function App() {
  return (
		<>
			{/* <ThemeProvider theme={theme}>
				<RestaurantScreen />
			</ThemeProvider> */}
      <RestaurantScreen/>
			<RestaurantInfoCard />
			<ExpoStatusBar style="auto" />
		</>
	);
}


