import React , {createContext,useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const FavouritesContext = createContext()

export const FavouritesContextProvider = ({children}) => {

  const [favourites,setFavourites] = useState([])

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant])
  }

  const saveFavourites = async (value) => {
    try{
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key',jsonValue)
    } catch(e) {
      // save the error
      console.log('saving error',e)
    }
  }

  const loadFavourites = async () => {
    try{
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        setFavourites(JSON.parse(value))
      }
    }catch(e){
      console.log('loading error',e)
    }
  }

  const remove = (restaurant) => {
    const newFavourites = favourites.filter((x) => x.placeId !== restaurant.placeId )
    setFavourites(newFavourites)
  }

  useEffect(()=>{
    loadFavourites(favourites)
  },[])

  useEffect(()=>{
    saveFavourites(favourites)
  },[favourites])
  return (
    <FavouritesContext.Provider
    value={{
      favourites,
      addToFavourites:add,
      removeFromFavourites:remove
    }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}