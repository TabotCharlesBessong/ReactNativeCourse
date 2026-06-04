# Expo Maps Example

This repo is an example of how to use [expo-maps](https://docs.expo.dev/versions/latest/sdk/maps/), demonstrating various features and capabilities of maps in React Native with Expo.

Watch the video for a step-by-step walkthrough of Expo Maps: [Expo Maps Deep Dive](https://youtu.be/jDCuaIQ9vd0)

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Basic Map Implementation](#basic-map-implementation)
4. [Camera Controls](#camera-controls)
5. [Markers and Annotations](#markers-and-annotations)
6. [Polylines](#polylines)
7. [Map Properties](#map-properties)
8. [Event Handling](#event-handling)

## Installation

First, install the required dependencies:

```bash
npx expo install expo-maps
```

## Configuration

### Android Configuration

1. Get a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. Add the following to your `app.json`:

```json
{
  "expo": {
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "your-api-key-here"
        }
      }
    }
  }
}
```

## Basic Map Implementation

Here's a basic example of implementing a map:

```typescript
import { AppleMaps, GoogleMaps } from 'expo-maps';

// For iOS
<AppleMaps.View
  style={StyleSheet.absoluteFill}
  cameraPosition={{
    coordinates: {
      latitude: 37.8199,
      longitude: -122.4783
    },
    zoom: 12
  }}
/>

// For Android
<GoogleMaps.View
  style={StyleSheet.absoluteFill}
  cameraPosition={{
    coordinates: {
      latitude: 37.8199,
      longitude: -122.4783
    },
    zoom: 12
  }}
/>
```

## Camera Controls

### Using Refs

You can control the camera position using refs:

```typescript
const ref = useRef<AppleMaps.MapView>(null);

// Move camera to new position
ref.current?.setCameraPosition({
  coordinates: {
    latitude: newLatitude,
    longitude: newLongitude,
  },
  zoom: 12,
});
```

## Markers and Annotations

### Google Maps Markers

```typescript
const markers = [
  {
    coordinates: { latitude: 49.259133, longitude: -123.10079 },
    title: "Location Name",
    snippet: "Location Description",
    draggable: true,
  },
];

<GoogleMaps.View markers={markers} />;
```

### Apple Maps Annotations (iOS only)

```typescript
const annotations = [
  {
    coordinates: { latitude: 37.8199, longitude: -122.4783 },
    title: "Location Name",
    text: "Location Description",
    textColor: "white",
    backgroundColor: "black",
  },
];

<AppleMaps.View annotations={annotations} />;
```

## Polylines

Add routes or paths to your map:

```typescript
const polylineCoordinates = [
  { latitude: 33.8121, longitude: -117.919 },
  { latitude: 34.1367, longitude: -118.2942 }
];

// For iOS
<AppleMaps.View
  polylines={[{
    color: "blue",
    width: 5,
    coordinates: polylineCoordinates
  }]}
/>

// For Android
<GoogleMaps.View
  polylines={[{
    color: "red",
    width: 20,
    coordinates: polylineCoordinates
  }]}
/>
```

## Map Properties

### iOS Map Properties

```typescript
<AppleMaps.View
  properties={{
    isTrafficEnabled: false,
    mapType: AppleMapsMapType.STANDARD,
    selectionEnabled: true,
  }}
/>
```

### Android Map Properties

```typescript
<GoogleMaps.View
  properties={{
    isBuildingEnabled: true,
    isIndoorEnabled: true,
    mapType: GoogleMapsMapType.TERRAIN,
    selectionEnabled: true,
    isMyLocationEnabled: false,
    isTrafficEnabled: true,
  }}
/>
```

## Event Handling

Handle various map events:

```typescript
<GoogleMaps.View
  onMapClick={(e) => {
    console.log("Map clicked:", e);
  }}
  onMarkerClick={(e) => {
    console.log("Marker clicked:", e);
  }}
  onCameraMove={(e) => {
    console.log("Camera moved:", e);
  }}
  onMapLoaded={() => {
    console.log("Map loaded");
  }}
/>
```

## Platform-Specific Considerations

- iOS uses `AppleMaps.View` with iOS-specific features like annotations
- Android uses `GoogleMaps.View` with Android-specific features
- Some features are platform-specific, so always check the documentation for compatibility

## Additional Resources

- [Expo Maps Documentation](https://docs.expo.dev/versions/latest/sdk/maps/)
- [Google Maps Platform](https://developers.google.com/maps)
- [Apple Maps Documentation](https://developer.apple.com/documentation/mapkit)
