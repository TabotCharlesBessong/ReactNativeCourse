import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Card } from './screens';

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    regular:require('./assets/fonts/Poppins-Regular.ttf'),
    light:require('./assets/fonts/Poppins-Light.ttf'),
    medium:require('./assets/fonts/Poppins-Medium.ttf'),
    bold:require('./assets/fonts/Poppins-Bold.ttf'),
    semiBold:require('./assets/fonts/Poppins-SemiBold.ttf'),
    extraBold:require('./assets/fonts/Poppins-ExtraBold.ttf')
  })

  const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded){
      await SplashScreen.hideAsync()
    }
  },[fontsLoaded])

  if(!fontsLoaded) return null
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown:false
        }} name='BottomNavigation' component={BottomTabNavigation} />
        <Stack.Screen options={{
          headerShown:false
        }} name='Card' component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

