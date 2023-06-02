
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage, ProfileScreen } from "../screens";
import React from "react";
import SearchScreen from "../screens/SearchScreen";
import MessageScreen from "../screens/MessageScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={MessageScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator
