import { StyleSheet } from 'react-native'
import React from 'react'
import {Provider} from 'react-redux'
import { store } from './redux/store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import {HomeScreen, MapScreens} from './screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//1 setup redux 

const App = () => {

	const Stack = createStackNavigator()
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<Stack.Navigator>
						<Stack.Screen
							name="HomeScreen"
							component={HomeScreen}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							options={{
								headerShown: false,
							}}
							name="MapScreen"
							component={MapScreens}
						/>
					</Stack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
}

export default App

const styles = StyleSheet.create({})