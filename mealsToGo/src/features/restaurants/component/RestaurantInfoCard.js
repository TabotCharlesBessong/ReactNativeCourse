import React from "react";
import { Text,View ,Image,StyleSheet} from "react-native";
import { Card } from "react-native-paper";
import images from "../../../constant/images";
import styled from "styled-components/native"
import { Icon as IconE } from "react-native-elements";
import {Spacer } from '../../../component'
// import { SvgXml } from "react-native-svg";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./Styles";


const RestaurantInfoCard = ({ restaurant = {} }) => {
	const {
		name = "Some Restaurant",
		icon = images.icon3,
		photos = [images.home],
		address = "100 some random street",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<RestaurantCard elevation={5}>
			<RestaurantCardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Text variant="label">{name}</Text>
				<Section>
					{/* <Rating>
						{ratingArray.map(() => (
							<SvgXml xml={star} width={20} height={20} />
						))}
					</Rating> */}
					<View style={styles.rating}>
						<IconE style={styles.star} name="star" size={30} color="orange" />
						<IconE style={styles.star} name="star" size={30} color="orange" />
						<IconE style={styles.star} name="star" size={30} color="orange" />
						<IconE style={styles.star} name="star" size={30} color="orange" />
					</View>
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant="error">CLOSED TEMPORARILY</Text>
						)}
						<Spacer variant="left.large">
							{isOpenNow && (
								<IconE
									name="restaurant_menu"
									size={50}
									color="#373647"
									onPress={() => {
										Alert.alert("Want to take ride downward");
									}}
								/>
							)}
						</Spacer>
						<Spacer variant="left.large" />
						<Icon source={{ uri: icon }} />
					</SectionEnd>
				</Section>
				<Address>{address}</Address>
			</Info>
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

			