import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import images from "../../../constant/images";
import styled from "styled-components/native"

const Title = styled(Text)`
	padding: 16px;
	color: red;
`;

const RestaurantCard = styled(Card)`
	background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
	padding: 20px;
	background-color: white;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
	const {
		name = "Some Restaurant",
		icon,
		photos = [images.home],
		address = "100 some random street",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily,
	} = restaurant;

	return (
		<RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
	);
};

export default RestaurantInfoCard

const styles = StyleSheet.create({
	card: { backgroundColor: "white" },
	cover: { padding: 20, backgroundColor: "white" },
	title: { padding: 16 },
});
