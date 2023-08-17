import { View, Text } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
      }}
    >
      <Text style={{ fontSize: 50, fontWeight: "bold", color: "#181818" }}>
        Welcome to HomePage
      </Text>
    </View>
  );
};

export default Home;
