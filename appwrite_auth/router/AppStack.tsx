import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Home } from '../screens'

export type AppStackParamList = {
  Home:undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()


const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign:'center',
      headerBackTitleVisible:false
    }} >
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default AppStack
