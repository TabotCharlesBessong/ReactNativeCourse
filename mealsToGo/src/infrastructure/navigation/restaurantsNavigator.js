
import { View, Text } from 'react-native'
import { createStackNavigator  , TransitionPresets} from '@react-navigation/stack'
import React from 'react'
import { RestaurantDetails, RestaurantScreen } from '../../features'

const RestaurantsStack = createStackNavigator()

const RestaurantsNavigator = () => {
  return (
		<RestaurantsStack.Navigator headerMode="none" screenOptions={{...TransitionPresets.ModalPresentationIOS}} >
			<RestaurantsStack.Screen name="Restaurant" component={RestaurantScreen} />
			<RestaurantsStack.Screen name="RestaurantDetail" component={() => {RestaurantDetails}} />
		</RestaurantsStack.Navigator>
	);
}

export default RestaurantsNavigator