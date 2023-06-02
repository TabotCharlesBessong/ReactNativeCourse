import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, Hero, Offers } from "../component";

const HomePage = () => {
  return (
    <View>
      <Header />
      <Hero />
      <Offers/>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
