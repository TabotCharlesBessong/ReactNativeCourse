import {FlatList, StatusBar } from "react-native";
import React, {useContext} from "react";
import { Searchbar } from "react-native-paper";
import { Spacer } from "../../../component";

import RestaurantInfoCard from "../component/RestaurantInfoCard";
import {  SearchContainer  } from "./Styles";
import { SafeAreas } from "../../../component";
import styled from "styled-components";
import { RestaurantContext } from "../../../services/restaurant/restaurantContext";

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

const RestaurantScreen = () => {
	const {restaurants , error , isLoading } = useContext(RestaurantContext)
	console.log(restaurants)
	return (
		<SafeAreas>
			<SearchContainer>
				<Searchbar />
			</SearchContainer>

			{/* rendering list of restaurant Card */}
			<RestaurantList
				data={
					restaurants
				}
				renderItem={({item}) => {
					console.log(item)
					return (
					<Spacer position="bottom" size="large">
						<RestaurantInfoCard restaurant={item} />
					</Spacer>
				)}}
				keyExtractor={(item) => item.name}
				contentContainerStyle={{ padding: 16 }}
			/>
		</SafeAreas>
	);
};

export default RestaurantScreen;

