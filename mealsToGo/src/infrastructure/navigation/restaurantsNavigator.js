
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { RestaurantScreen } from '../../features'

const RestaurantsStack = createStackNavigator()

const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator headerMode="none" >
      <RestaurantsStack.Screen 
        name="Restaurant"
        component={RestaurantScreen}
      />
    </RestaurantsStack.Navigator>
  )
}

export default RestaurantsNavigator