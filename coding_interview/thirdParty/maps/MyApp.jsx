import React, { useState, useEffect } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";

function MyMap(props) {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    Geocoder.init("YOUR_API_KEY");
    Geocoder.from("Times Square, New York")
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setRegion({
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        region={region}
        style={{ flex: 1 }}
        onRegionChange={(region) => console.log(region)}
      >
        <Marker
          coordinate={region}
          title="Marker title"
          description="Marker description"
        />
      </MapView>
    </View>
  );
}

export default MyMap;
