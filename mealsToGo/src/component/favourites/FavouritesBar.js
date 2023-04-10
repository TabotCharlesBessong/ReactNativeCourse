
import React from 'react'
import styled from 'styled-components/native' 
import {ScrollView , TouchableOpacity} from 'react-native'
import {Spacer , CompactRestaurantInfo} from '../../component'
import {Text} from '../typography/Text'

const FavouritesWrapper = styled.View`
  padding:10px
`;

const FavouritesBar = ({favourites,onNavigate}) => {
  if (!favourites.length) return null
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {
          favourites.map((restaurant)=> {
            const key = restaurant.name.split(" ").join("")
            return (
              <Spacer position="left" size="medium" key={key} style={{marginLeft:10}}  >
                <TouchableOpacity onPress={() => onNavigate("RestaurantDetail",{
                  restaurant
                })} >
                <CompactRestaurantInfo restaurant={restaurant} />

                </TouchableOpacity>
              </Spacer>
            )
          } )
        }
      </ScrollView>
    </FavouritesWrapper>
  )
}

export default FavouritesBar