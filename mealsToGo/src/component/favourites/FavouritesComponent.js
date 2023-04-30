import {TouchableOpacity, Text } from 'react-native'
import React , {useContext} from 'react'
import styled from 'styled-components/native'
import { FavouritesContext } from '../../services/favourites/favouritesContext'
import {AntDesign} from "@expo/vector-icons"

const FavouritesButton = styled(TouchableOpacity)`
  background-color:transparent;
  border-color:#20232a;
  position:absolute;
  top:25px;
  right:25px;
  width:64px;
  z-index:9 
`;

const FavouritesComponent = ({restaurant}) => {
  const {favourites,addToFavourites,removeFromFavourites} = useContext(FavouritesContext)
  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId )
  return (
    <FavouritesButton
    onPress = {() => !isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)  }
    >
      <AntDesign 
        name={isFavourite ? "heart" : "" }
        size={24}
        color= {isFavourite ? "red" : "white" }
      />
    </FavouritesButton>
  )
}

export default FavouritesComponent