
import MapView, { Marker } from "react-native-maps";

<MapView
  region={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  style={{ flex: 1 }}
  onRegionChange={(region) => console.log(region)}
>
  <Marker
    coordinate={{
      latitude: 37.78825,
      longitude: -122.4324,
    }}
    title="Marker title"
    description="Marker description"
  />
</MapView>;