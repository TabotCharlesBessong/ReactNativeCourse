import { Text, View } from 'react-native'
import React from 'react'
import {Provider} from 'react-redux'
import { store } from './src/redux/store'
import { HomeScreen, MapScreens } from './src/screens'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

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
							name="MapScreen"
							component={MapScreens}
							options={{
								headerShown: false,
							}}
						/>
					</Stack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
}

export default App
