
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import RestaurantsNavigator from './restaurantsNavigator';
import { SafeAreas } from '../../component';
import { Text } from 'react-native';
import { MapScreen } from '../../features';


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

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
	};
};

const AppNavigator = () => {
  return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={createScreenOptions}
				tabBarOptions={{
					activeTintColor: "tomato",
					inactiveTintColor: "gray",
				}}
			>
				<Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
				<Tab.Screen name="Map" component={MapScreen} />
				<Tab.Screen name="Settings" component={Settings} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigator