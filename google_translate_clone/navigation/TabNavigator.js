import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SavedScreen, SettingsScreen } from "../screens";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }} >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Saved",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
        name="Saved"
        component={SavedScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;