import React from 'react'
import { SafeAreas } from '../../../component'
import RestaurantInfoCard from '../component/RestaurantInfoCard'

const RestaurantDetails = ({route}) => {
  const {restaurant} = route.params
  return (
    <SafeAreas>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeAreas>
  )
}

export default RestaurantDetails