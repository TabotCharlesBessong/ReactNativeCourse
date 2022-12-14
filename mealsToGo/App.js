import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import {RestaurantInfoCard, RestaurantScreen} from './src/features'
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {

	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}
  return (
		<>
			<ThemeProvider theme={theme}>
				<RestaurantScreen />
			</ThemeProvider>
      {/* <RestaurantScreen/> */}
			{/* <RestaurantInfoCard /> */}
			<ExpoStatusBar style="auto" />
		</>
	);
}


