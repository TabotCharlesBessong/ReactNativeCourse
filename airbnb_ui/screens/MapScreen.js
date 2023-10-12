import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
   useWindowDimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Carousel from "../components/Carousel";
import MyMarker from "../components/MyMarker";
import Search from "../data/Search";

const MapScreen = () => {
  const map = useRef();
  const { width, height } = Dimensions.get("window");
  const [selected, setSelected] = useState(null);
  const flatlist = useRef();
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const places = Search;
  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  // const onViewChanged = useRef(({ viewableItems }) => {
  //   if (viewableItems.length > 0) {
  //     const selectedPlace = viewableItems[0].item;
  //     setSelected(selectedPlace.id);
  //   }
  // });

  // const width = useWindowDimensions().width;
  useEffect(() => {
    if (!selected || !flatlist) {
      return;
    }
    const index = places.findIndex((place) => place.key === selected);
    flatlist.current.scrollToIndex({ index });

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selected]);

  return (
    <View style={{}}>
      <MapView
        ref={map}
        provider={PROVIDER_GOOGLE}
        zoomTapEnabled={true}
        // edgePadding={{ top: 50, right: 50, bottom: 50, left: 50 }}
        // mapPadding={{ top: 50, right: 50, bottom: 50, left: 50 }}
        style={{ width: 400, height: "100%" }}
        initialRegion={{
          latitude: 51.5072,
          longitude: 0.1276,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        {places.map((place, i) => (
          <MyMarker
            key={i}
            coordinate={{ latitude: place.lat, longitude: place.long }}
            Isselected={place.key === selected}
            onPress={() => setSelected(place.key)}
            description={place.location}
            price={place.price}
          />
        ))}
      </MapView>
      <View style={{ position: "absolute", bottom: 10 }}>
        <FlatList
          ref={flatlist}
          data={places}
          renderItem={({ item }) => <Carousel post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          // onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
