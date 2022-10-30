
import React from 'react'
import {View, Text} from 'react-native'
import images from '../../../constant/images'

const RestaurantInfo = ({restaurant}) => {
  const {
    name= ' my restaurant',
    icon,
    photos = images.home ,
    address='molyko, buea',
    openingHours = '8am - 6pm',
    rating,
    isClosedTemporarily
  } = restaurant
  return (
    <View>
      <Text style={{color:'#fff'}} >Hello world</Text>
    </View>
  )
}

export default RestaurantInfo