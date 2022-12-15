
import React , {createContext,useState,useEffect,useMemo} from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurantServices";

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({children}) => {

  const [restaurants,setRestaurants] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState(null)

  const retrieveRestaurant = () => {
    setIsLoading(true)
    setTimeout(()=> {
      restaurantsRequest()
				.then(restaurantsTransform)
				.then((results) => {
          setIsLoading(false)
          setRestaurants(results)
					console.log(transformResponse);
				})
				.catch((err) => {
          setIsLoading(false)
          setError(err)
					console.log(err);
				});
    },2000)
  }

  useState(() => {
    retrieveRestaurant()
  }  , [])


  return (
    <RestaurantContext.Provider value={{restaurants,isLoading,error}} >
      {children}
    </RestaurantContext.Provider>
  )
}