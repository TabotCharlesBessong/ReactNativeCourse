import React from "react";
import { Text,View ,Image,StyleSheet} from "react-native";
import { Card } from "react-native-paper";
import images from "../../../constant/images";
import styled from "styled-components/native"
import { Icon } from "react-native-elements";
import {Spacer} from '../../../component'
// import { SvgXml } from "react-native-svg";

const Title = styled(Text)`
	font-family: ${(props) => props.theme.fonts.heading};
	color:${(props) => props.theme.colors.ui.primary };
	font-size:${(props) => props.theme.fontSizes.body }
`;

const RestaurantCard = styled(Card)`
	color: ${(props) => props.theme.colors.ui.primary};
	margin-bottom:${(props) => props.theme.space[3] }
`;

const Rating = styled.View`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
`;

const star = images.star

const RestaurantCardCover = styled(Card.Cover)`
	padding: 20px;
	color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`

const Section = styled.View`
	flex-direction: row;
	align-items: center;
`;
const SectionEnd = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
`;

const Address = styled(Text)`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption};
`;

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
				<Title>{name}</Title>
				<Section>
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
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant="label" style={{ color: "red" }}>
								CLOSED TEMPORARILY
							</Text>
						)}
						<Spacer variant="left.large">
							{isOpenNow && (
								<Icon
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
						<Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
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

			