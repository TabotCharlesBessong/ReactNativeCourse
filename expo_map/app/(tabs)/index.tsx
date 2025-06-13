import React, { useRef, useState } from "react";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
import { AppleMaps, GoogleMaps } from "expo-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBottomTabOverflow } from "@/components/ui/TabBarBackground";
import { locationList } from "../../LocationList";
import { useImage } from "expo-image";
import { AppleMapsMapType } from "expo-maps/build/apple/AppleMaps.types";
import { GoogleMapsMapType } from "expo-maps/build/google/GoogleMaps.types";

const SF_ZOOM = 12;

export default function HomeScreen() {
  const bottom = useBottomTabOverflow();
  const [locationIndex, setLocationIndex] = useState(0);
  const ref = useRef<AppleMaps.MapView>(null);

  const image = useImage("https://picsum.photos/128", {
    onError(error) {
      console.error(error);
    },
  });

  const cameraPosition = {
    coordinates: {
      latitude: locationList[locationIndex].stores[0].point[0],
      longitude: locationList[locationIndex].stores[0].point[1],
    },
    zoom: SF_ZOOM,
  };

  function handleChangeWithRef(direction: "next" | "prev") {
    const newIndex = locationIndex + (direction === "next" ? 1 : -1);
    const nextLocation = locationList[newIndex];

    // Set camera position first to ensure animation happens
    ref.current?.setCameraPosition({
      coordinates: {
        latitude: nextLocation.stores[0].point[0],
        longitude: nextLocation.stores[0].point[1],
      },
      zoom: SF_ZOOM,
    });

    // Update state after animation is triggered
    setLocationIndex(newIndex);
  }

  const renderMapControls = () => (
    <>
      <View style={{ flex: 8 }} pointerEvents="none" />

      <View style={styles.controlsContainer} pointerEvents="auto">
        {/* 1 */}
        <Button title="Prev" onPress={() => handleChangeWithRef("prev")} />
        <Button title="Next" onPress={() => handleChangeWithRef("next")} />

        {/* 2 */}
        {/* <Button
          title="Set random"
          onPress={() =>
            ref.current?.setCameraPosition({
              coordinates: {
                latitude: Math.random() * 360 - 180,
                longitude: Math.random() * 360 - 180,
              },
              zoom: 1,
            })
          }
        /> */}
      </View>
    </>
  );

  if (Platform.OS === "ios") {
    return (
      <>
        <AppleMaps.View
          ref={ref}
          style={StyleSheet.absoluteFill}
          cameraPosition={cameraPosition}
          properties={{
            isTrafficEnabled: false,
            mapType: AppleMapsMapType.STANDARD,
            selectionEnabled: true,
          }}
          // 3
          markers={markersApple}
          // 4
          //ios only
          annotations={[
            {
              coordinates: { latitude: 37.8199, longitude: -122.4783 },
              title: "Expo HQ",
              text: "Expo HQ",
              textColor: "white",
              backgroundColor: "black",
              icon: image ? image : undefined,
            },
          ]}
          // 5
          polylines={[
            {
              color: "blue",
              width: 5,
              coordinates: polylineCoordinates,
            },
          ]}
          // onPolylineClick={(event) => {
          //   console.log(event);
          //   Alert.alert("Polyline clicked", JSON.stringify(event));
          // }}

          onMapClick={(e) => {
            console.log(
              JSON.stringify({ type: "onMapClick", data: e }, null, 2)
            );
          }}
          onMarkerClick={(e) => {
            console.log(
              JSON.stringify({ type: "onMarkerClick", data: e }, null, 2)
            );
          }}
          onCameraMove={(e) => {
            console.log(
              JSON.stringify({ type: "onCameraMove", data: e }, null, 2)
            );
          }}
        />
        <SafeAreaView
          style={{ flex: 1, paddingBottom: bottom }}
          pointerEvents="box-none"
        >
          {renderMapControls()}
        </SafeAreaView>
      </>
    );
  } else if (Platform.OS === "android") {
    return (
      <>
        <GoogleMaps.View
          ref={ref}
          style={StyleSheet.absoluteFill}
          cameraPosition={cameraPosition}
          properties={{
            isBuildingEnabled: true,
            isIndoorEnabled: true,
            mapType: GoogleMapsMapType.TERRAIN,
            selectionEnabled: true,
            isMyLocationEnabled: false, // requires location permission
            isTrafficEnabled: true,
            // minZoomPreference: 1,
            // maxZoomPreference: 20,
          }}
          // 3
          polylines={[
            {
              color: "red",
              width: 20,
              coordinates: polylineCoordinates,
            },
          ]}
          // 4
          markers={markersGoogle}
          onPolylineClick={(event) => {
            console.log(event);
            Alert.alert("Polyline clicked", JSON.stringify(event));
          }}
          onMapLoaded={() => {
            console.log(JSON.stringify({ type: "onMapLoaded" }, null, 2));
          }}
          onMapClick={(e) => {
            console.log(
              JSON.stringify({ type: "onMapClick", data: e }, null, 2)
            );
          }}
          onMapLongClick={(e) => {
            console.log(
              JSON.stringify({ type: "onMapLongClick", data: e }, null, 2)
            );
          }}
          onPOIClick={(e) => {
            console.log(
              JSON.stringify({ type: "onPOIClick", data: e }, null, 2)
            );
          }}
          onMarkerClick={(e) => {
            console.log(
              JSON.stringify({ type: "onMarkerClick", data: e }, null, 2)
            );
          }}
          onCameraMove={(e) => {
            console.log(
              JSON.stringify({ type: "onCameraMove", data: e }, null, 2)
            );
          }}
        />
        {renderMapControls()}
      </>
    );
  } else {
    return <Text>Maps are only available on Android and iOS</Text>;
  }
}

const styles = StyleSheet.create({
  controlsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

const markersGoogle = [
  {
    coordinates: { latitude: 49.259133, longitude: -123.10079 },
    title: "49th Parallel Café & Lucky's Doughnuts - Main Street",
    snippet: "49th Parallel Café & Lucky's Doughnuts - Main Street",
    draggable: true,
  },
  {
    coordinates: { latitude: 49.268034, longitude: -123.154819 },
    title: "49th Parallel Café & Lucky's Doughnuts - 4th Ave",
    snippet: "49th Parallel Café & Lucky's Doughnuts - 4th Ave",
    draggable: true,
  },
  {
    coordinates: { latitude: 49.286036, longitude: -123.12303 },
    title: "49th Parallel Café & Lucky's Doughnuts - Thurlow",
    snippet: "49th Parallel Café & Lucky's Doughnuts - Thurlow",
    draggable: true,
  },
  {
    coordinates: { latitude: 49.311879, longitude: -123.079241 },
    title: "49th Parallel Café & Lucky's Doughnuts - Lonsdale",
    snippet: "49th Parallel Café & Lucky's Doughnuts - Lonsdale",
    draggable: true,
  },
  {
    coordinates: {
      latitude: 49.27235336018808,
      longitude: -123.13455838338278,
    },
    title: "A La Mode Pie Café - Granville Island",
    snippet: "A La Mode Pie Café - Granville Island",
    draggable: true,
  },
];

const markersApple = [
  {
    coordinates: { latitude: 49.259133, longitude: -123.10079 },
    title: "49th Parallel Café & Lucky's Doughnuts - Main Street",
    tintColor: "brown",
    systemImage: "cup.and.saucer.fill",
  },
  {
    coordinates: { latitude: 49.268034, longitude: -123.154819 },
    title: "49th Parallel Café & Lucky's Doughnuts - 4th Ave",
    tintColor: "brown",
    systemImage: "cup.and.saucer.fill",
  },
  {
    coordinates: { latitude: 49.286036, longitude: -123.12303 },
    title: "49th Parallel Café & Lucky's Doughnuts - Thurlow",
    tintColor: "brown",
    systemImage: "cup.and.saucer.fill",
  },
  {
    coordinates: { latitude: 49.311879, longitude: -123.079241 },
    title: "49th Parallel Café & Lucky's Doughnuts - Lonsdale",
    tintColor: "brown",
    systemImage: "cup.and.saucer.fill",
  },
  {
    coordinates: {
      latitude: 49.27235336018808,
      longitude: -123.13455838338278,
    },
    title: "A La Mode Pie Café - Granville Island",
    tintColor: "orange",
    systemImage: "fork.knife",
  },
];
const polylineCoordinates = [
  { latitude: 33.8121, longitude: -117.919 }, // Disneyland
  { latitude: 33.837, longitude: -117.912 },
  { latitude: 33.88, longitude: -117.9 },
  { latitude: 33.9456, longitude: -117.8735 },
  { latitude: 34.0, longitude: -117.85 },
  { latitude: 34.05, longitude: -117.82 },
  { latitude: 34.1, longitude: -117.78 },
  { latitude: 34.2, longitude: -118.0 },
  { latitude: 34.2222, longitude: -118.1234 },
  { latitude: 34.233, longitude: -118.2 },
  { latitude: 34.2355, longitude: -118.3 },
  { latitude: 34.1367, longitude: -118.2942 }, // Hollywood
  { latitude: 34.1341, longitude: -118.3215 }, // Hollywood Sign
];
