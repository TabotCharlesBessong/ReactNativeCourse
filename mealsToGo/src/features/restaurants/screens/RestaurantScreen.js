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
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.space[3]};
	color: ${(props) => props.theme.colors.brand.primary};
`;

const RestaurantScreen = () => {
	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<RestaurantListContainer>
				<RestaurantInfoCard />
				<RestaurantInfoCard />
				<RestaurantInfoCard />
				<RestaurantInfoCard />
				<RestaurantInfoCard />
			</RestaurantListContainer>
		</SafeArea>
	);
};

export default RestaurantScreen;

