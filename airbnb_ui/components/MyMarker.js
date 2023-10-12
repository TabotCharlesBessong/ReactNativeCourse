import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Marker } from "react-native-maps";
import Search from "../data/Search";

const MyMarker = ({
  key,
  description,
  price,
  coordinate,
  onPress,
  Isselected,
}) => {
  const places = Search;
  return (
    <>
      <Marker
        onPress={onPress}
        edgePadding={{ top: 50, right: 50, bottom: 50, left: 50 }}
        title="Home"
        description={description}
        coordinate={coordinate}
      >
        <Pressable
          key={key}
          style={{
            padding: 5,
            borderRadius: 20,
            borderColor: "grey",
            borderWidth: 1,
            backgroundColor: Isselected ? "black" : "white",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: Isselected ? "white" : "black",
            }}
          >
            {"£"}
            {price.replace(/\D/g, "")}
          </Text>
        </Pressable>
      </Marker>
    </>
  );
};

export default MyMarker;

const styles = StyleSheet.create({});
