import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import {RestaurantInfoCard, RestaurantScreen} from './src/features'
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

// import { SafeArea } from "./src/components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

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
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarIcon: ({ color, size }) => {
								let iconName;

								if (route.name === "Restaurants") {
									iconName = "md-restaurant";
								} else if (route.name === "Settings") {
									iconName = "md-settings";
								} else if (route.name === "Map") {
									iconName = "md-map";
								}

								// You can return any component that you like here!
								return <Ionicons name={iconName} size={size} color={color} />;
							},
						})}
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
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}


