import {FlatList, StatusBar } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { Spacer } from "../../../component";

import RestaurantInfoCard from "../component/RestaurantInfoCard";
import {  SearchContainer  } from "./Styles";
import { SafeAreas } from "../../../component";
import styled from "styled-components";

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

const RestaurantScreen = () => {
	return (
		<SafeAreas>
			<SearchContainer>
				<Searchbar />
			</SearchContainer>

			{/* rendering list of restaurant Card */}
			<RestaurantList
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
		</SafeAreas>
	);
};

export default RestaurantScreen;

