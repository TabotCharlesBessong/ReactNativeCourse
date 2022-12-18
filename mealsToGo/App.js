import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantContextProvider } from "./src/services/restaurant/restaurantContext";
import { LocationContextProvider } from "./src/services/location/locationContext";
import { Navigation } from "./src/infrastructure/navigation";

// import { SafeArea } from "./src/components/utility/safe-area.component";



export default function App() {
  
	// loading the fonts into the app 
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
				<LocationContextProvider>
					<RestaurantContextProvider>
						<Navigation/>
					</RestaurantContextProvider>
				</LocationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}


