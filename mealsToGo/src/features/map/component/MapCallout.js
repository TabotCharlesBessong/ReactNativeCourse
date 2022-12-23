
import React from 'react'
import styled from 'styled-components/native '
import {Text} from 'react-native'
import CompactRestaurantInfo from "../../../component/restaurant/CompactRestaurantInfo"

const MyText = styles.Text`
`;

const MapCallout = ({restaurant}) =>{
  return(
    <CompactRestaurantInfo
      isMap
      restaurant={restaurant}
     />
  )
}