import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text } from "react-native";
import {RestaurantScreen} from './src/features'
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SafeAreas } from "./src/component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantContextProvider } from "./src/services/restaurant/restaurantContext";

// import { SafeArea } from "./src/components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: "md-restaurant",
	Map: "md-map",
	Settings: "md-settings",
};

const Settings = () => (
	<SafeAreas>
		<Text>Settings</Text>
	</SafeAreas>
);
const Map = () => (
	<SafeAreas>
		<Text>Map</Text>
	</SafeAreas>
);

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
	};
};

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
				<RestaurantContextProvider>
					<NavigationContainer>
						<Tab.Navigator
							screenOptions={createScreenOptions}
							tabBarOptions={{
								activeTintColor: "tomato",
								inactiveTintColor: "gray",
							}}
						>
							<Tab.Screen name="Restaurants" component={RestaurantScreen} />
							<Tab.Screen name="Map" component={Map} />
							<Tab.Screen name="Settings" component={Settings} />
						</Tab.Navigator>
					</NavigationContainer>
				</RestaurantContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}


