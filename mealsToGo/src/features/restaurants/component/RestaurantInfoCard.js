import React from "react";
import { Text, StyleSheet,View ,Image} from "react-native";
import { Card } from "react-native-paper";
import images from "../../../constant/images";
import styled from "styled-components/native"
import { Icon } from "react-native-elements";
// import { SvgXml } from "react-native-svg";

const Title = styled(Text)`
	${'' /* font-family: ${(props) => props.theme.fonts.body}; */}
	${'' /* padding: ${(props) => props.theme.space[3]}; */}
	padding:16px
	color: red;
	font-family: "Oswald_400Regular";
`;

const RestaurantCard = styled(Card)`
	background-color: white;
`;

// const Rating = styled.View`
// 	flex-direction: row;
// 	padding-top: ${(props) => props.theme.space[2]};
// 	padding-bottom: ${(props) => props.theme.space[2]};
// `;



// const star = images.star

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

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<RestaurantCard elevation={5}>
			<RestaurantCardCover key={name} source={{ uri: photos[0] }} />
			<Title>{name}</Title>
			{/* <Rating>
				{ratingArray.map(() => (
					<SvgXml xml={star} width={20} height={20} />
				))}
			</Rating> */}
			<View style={styles.rating}>
				<Icon style={styles.star} name="star" size={30} color="orange" />
				<Icon style={styles.star} name="star" size={30} color="orange" />
				<Icon style={styles.star} name="star" size={30} color="orange" />
				<Icon style={styles.star} name="star" size={30} color="orange" />
			</View>
		</RestaurantCard>
	);
};

export default RestaurantInfoCard

const styles = StyleSheet.create({
	card: { backgroundColor: "white" },
	cover: { padding: 20, backgroundColor: "white" },
	title: { padding: 16 },
	rating:{
		display:'flex',
		justifyContent:'center',
		alignItems: 'center',
		flexDirection:'row'
	},
	star:{
		marginLeft:8
	}
});
