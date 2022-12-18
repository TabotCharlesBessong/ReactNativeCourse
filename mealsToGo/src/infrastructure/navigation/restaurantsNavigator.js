
import { View, Text } from 'react-native'
import { createStackNavigator  , TransitionPresets} from '@react-navigation/stack'
import React from 'react'
import { RestaurantScreen } from '../../features'

const RestaurantsStack = createStackNavigator()

const RestaurantsNavigator = () => {
  return (
		<RestaurantsStack.Navigator headerMode="none" screenOptions={{...TransitionPresets.ModalPresentationIOS}} >
			<RestaurantsStack.Screen name="Restaurant" component={RestaurantScreen} />
			<RestaurantsStack.Screen name="RestaurantDetail" component={() => {<Text style={{marginBottom:'12rem'}} >Restaurant Details</Text>}} />
		</RestaurantsStack.Navigator>
	);
}

export default RestaurantsNavigator