import {FlatList, StatusBar } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { Spacer } from "../../../component";

import { Platform } from "react-native-web";
import RestaurantInfoCard from "../component/RestaurantInfoCard";
const isAndroid = Platform.OS === "android";
const height = StatusBar.currentHeight;
import { SafeArea , SearchContainer , RestaurantListContainer } from "./Styles";

const RestaurantScreen = () => {
	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<FlatList
				data={[
					{ name: 1 },
					{ name: 2 },
					{ name: 3 },
					{ name: 4 },
					{ name: 5 },
					{ name: 6 },
					{ name: 7 },
					{ name: 8 },
					{ name: 9 },
					{ name: 10 },
					{ name: 11 },
					{ name: 12 },
					{ name: 13 },
					{ name: 14 },
				]}
				renderItem={() => (
					<Spacer position="bottom" size="large">
						<RestaurantInfoCard />
					</Spacer>
				)}
				keyExtractor={(item) => item.name}
				contentContainerStyle={{ padding: 16 }}
			/>
		</SafeArea>
	);
};

export default RestaurantScreen;

