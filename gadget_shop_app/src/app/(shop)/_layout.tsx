import { FontAwesome } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import React, { ComponentProps } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../providers/auth-provider";

function TabBarIcon(props:{
  name:ComponentProps<typeof FontAwesome>['name']
  color:string
}){
  return <FontAwesome {...props} size={24} style={{color:"#1BC464"}} />;
}
const TabsLayout = () => {
  const {session,mounting} = useAuth()
  if (mounting) return (
    <ActivityIndicator />
  )

  if(!session) return <Redirect href="/auth" />
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea} >
      <Tabs screenOptions={{
        tabBarActiveTintColor:"#1BC464",
        tabBarInactiveTintColor:'gray',
        tabBarLabelStyle:{
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          // paddingTop:10,
          paddingBottom:20
        },
        headerShown:false
      }} >
        <Tabs.Screen
          name="index"
          options={{ headerShown: true, title: "Shop",tabBarIcon(props){
            return <TabBarIcon name="shopping-cart" color={props.color} />;
          } }}
        />
        <Tabs.Screen name="orders" options={{
          headerShown: false, title: "Orders", tabBarIcon(props){
            return <TabBarIcon name="book" color={props.color} />;
          } 
        }} />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
  }
})
