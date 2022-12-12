import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { Platform } from "react-native-web";
import RestaurantInfoCard from "../component/RestaurantInfoCard";
const isAndroid = Platform.OS === "android";
const height = StatusBar.currentHeight;

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
	padding: 16px;
`;

const RestaurantListContainer = styled.View`
	flex: 1;
	padding: 16px;
	background-color: blue;
`;

const RestaurantScreen = () => {
	return (
		<SafeArea>
    <SearchContainer>
      <Searchbar />
			</SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
		</SafeArea>
	);
};

export default RestaurantScreen;

