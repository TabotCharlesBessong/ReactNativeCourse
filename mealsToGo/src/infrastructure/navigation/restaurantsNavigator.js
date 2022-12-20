
import { createStackNavigator  , TransitionPresets} from '@react-navigation/stack'
import React from 'react'
import { RestaurantDetails, RestaurantScreen } from '../../features'

const RestaurantsStack = createStackNavigator()

const RestaurantsNavigator = () => {
  return (
		<RestaurantsStack.Navigator options={{
			headerShown:false
		}}
			screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
		>
			<RestaurantsStack.Screen
				name="Restaurant"
				options={{
					headerShown: false,
				}}
				component={RestaurantScreen}
			/>
			<RestaurantsStack.Screen
				name="RestaurantDetail"
				options={{
					// headerShown: false,
				}}
				component={RestaurantDetails}
			/>
		</RestaurantsStack.Navigator>
	);
	
}

export default RestaurantsNavigator

// RestaurantNavigator.defaultNavigationOptions = {
// 	headerShown:false
// }