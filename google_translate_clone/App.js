import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import Navigation from "./navigation/Navigation";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font"

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false)

  useEffect( () => {
    const prepare = async () => {
      try {       
        await Font.loadAsync({
          black: require("./assets/fonts/Roboto-Black.ttf"),
          italic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          medium: require("./assets/fonts/Roboto-Medium.ttf"),
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
          thin: require("./assets/fonts/Roboto-Thin.ttf"),
          light: require("./assets/fonts/Roboto-Light.ttf"),
          bold: require("./assets/fonts/Roboto-Bold.ttf"),
          blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
          thinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),
        })
      } catch (error) {
        console.log(error)
      }finally {
        setAppIsLoaded(true)
      }
    }
    prepare()
  },[])

  const onLayout = useCallback( async () => {
    if(appIsLoaded) {
      await SplashScreen.hideAsync()
    }
  },[appIsLoaded])

  if(!appIsLoaded) {
    return null
  }
  return (
    <>
    <Navigation onLayout={onLayout} />    
    </>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcfa",
    alignItems: "center",
    justifyContent: "center",
  },
});
