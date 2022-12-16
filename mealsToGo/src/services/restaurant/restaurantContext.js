
import React , {createContext,useState,useEffect,useMemo,useContext} from "react";
import { LocationContext } from "../location/locationContext";

import { restaurantsRequest, restaurantsTransform } from "./restaurantServices";

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({children}) => {

  const [restaurants,setRestaurants] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState(null)
  const {location} = useContext(LocationContext)

  const retrieveRestaurant = (loc) => {
    setIsLoading(true)
    setRestaurants([])
    setTimeout(()=> {
      restaurantsRequest(loc)
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

  useEffect(() => {
    if(location){
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurant(locationString);
    }
  }  , [location])


  return (
    <RestaurantContext.Provider value={{restaurants,isLoading,error}} >
      {children}
    </RestaurantContext.Provider>
  )
}