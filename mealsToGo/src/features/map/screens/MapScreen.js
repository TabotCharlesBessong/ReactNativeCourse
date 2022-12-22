
import React , {useContext} from 'react'
import MapView from 'react-native-maps'
import styled from 'styled-components/native'
import SearchComponent from '../component/SearchComponent'
import {LocationContext} from '../../../services/location/locationContext'
import { RestaurantContext } from "../../../services/restaurant/restaurantContext";


const Map = styled(MapView)`
height:100%;
width:100%
`

const MapScreen = () => {
	const {location} = useContext(LocationContext)
	const { restaurants = [] } = useContext(RestaurantContext);
	const [latDelta,setLatDelta] = useState(0)
	const {lat,lng,viewport} = location

	useEffect(()=>{
    const northeastLat = viewport.norteast.lat
    const southwestLat = viewport.southwest.lat;
		setLatDelta(northeastLat - southwestLat)
	},[location,viewport])
  return (
		<>
		  <SearchComponent/>
			<Map
			region={{
				latitude:lat,
				longitude:lng,
				latitudeDelta:latDelta,
				longitudeDelta:0.02
			}}
			>
        {
					restaurants.map((restaurant)=> {
						return  null
						{/* (
							<MapView.Marker
							coordinate={{
								longitude
							}}
							>

							</MapView.Marker>
						) */}
					})
				}
			</Map>
		</>
	);
}

export default MapScreen

// const styles = Stylesheet.