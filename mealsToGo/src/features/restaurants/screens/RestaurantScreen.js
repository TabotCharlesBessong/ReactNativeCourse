import {FlatList, TouchableOpacity , View } from "react-native";
import React, {useContext,useState} from "react";
import {ActivityIndicator,Colors} from "react-native-paper"

import RestaurantInfoCard from "../component/RestaurantInfoCard";
import { SafeAreas, Spacer } from "../../../component";
import styled from "styled-components";
import { RestaurantContext } from "../../../services/restaurant/restaurantContext";
import { FavouritesContext } from "../../../services/favourites/favouritesContext";
import {Search} from '../../index'
import FavouritesBar from '../../../component/favourites/FavouritesBar'

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

const Loading = styled(ActivityIndicator)`
  margin-left:-25px
`;
const loadingContainer = styled(View)`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const RestaurantScreen = ({navigation}) => {
	const {restaurants  , isLoading } = useContext(RestaurantContext)
	const {favourites } = useContext(FavouritesContext)
	// console.log(restaurants)
	const [isToggled,setIsToggled] = useState(false)
	return (
		<SafeAreas>
			{isLoading ? (
				<View style={{position:'absolute' , top:"50%" , left:"50%"}} >
					<Loading size={50} animation={true} />
				</View>
			) : (
				<>
					
          <Search isFavouritesToggled={isToggled} onFavouritesToggle={()=> setIsToggled(!isToggled) } />

					{isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} /> }
					<RestaurantList
						data={restaurants}
						renderItem={({ item }) => {
							console.log(item);
							return (
								<TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail" , {restaurant:item}) } >
									<Spacer position="bottom" size="large">
										<RestaurantInfoCard restaurant={item} />
									</Spacer>
								</TouchableOpacity>
							);
						}}
						keyExtractor={(item) => item.name}
						contentContainerStyle={{ padding: 16 }}
					/>
				</>
			)}
		</SafeAreas>
	);
};

export default RestaurantScreen;

