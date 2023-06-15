import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, Hero } from "./component";
import HomePage from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/BottomNavigator";

const App = () => {
  return (
    <View style={styles.container} >
      <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
    {/* <HomePage/> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fefefe',
    padding:16,
    flex:1
  }
});
