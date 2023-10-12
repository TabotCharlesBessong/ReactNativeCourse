import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Cards from "../components/Cards";
import Explore from "../components/Explore";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import Experience from "../components/Experience";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginTop: 40 }}>
      <Header />

      <Cards />

      <Explore />

      <Experience/>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
