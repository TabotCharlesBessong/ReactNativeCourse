import React, { useLayoutEffect } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Search from "../data/Search";
import Koidaikanal from "../data/Koidaikanal";
import SearchItem from "../components/SearchItem";
import { Feather } from "@expo/vector-icons";
const KoidaikanalScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Explore Airbnb",
      headerTintColor: "white",

      gestureEnabled: false,
      headerStyle: {
        backgroundColor: "#fd5c63",
      },
      headerLeft: () => null,
    });
  }, []);
  const data = Koidaikanal;
  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => <SearchItem data={item} />}
      />
      <Pressable
        onPress={() => navigation.navigate("Map")}
        style={{
          position: "absolute",
          bottom: 60,
          right: 148,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#0a2351",
          padding: 8,
          borderRadius: 17,
        }}
      >
        <Feather
          name="map"
          size={20}
          color="white"
          style={{ paddingLeft: 3 }}
        />
        <Text style={{ color: "white", paddingHorizontal: 10 }}>Map</Text>
      </Pressable>
    </>
  );
};

export default KoidaikanalScreen;

const styles = StyleSheet.create({});
