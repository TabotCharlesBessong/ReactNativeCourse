import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Login, Signup } from '../screens'

export type AuthStackParamList = {
  Login:undefined
  Signup:undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()


const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign:'center',
      headerBackTitleVisible:false
    }} >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  )
}

export default AuthStack
