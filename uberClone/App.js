import { Text, View } from 'react-native'
import React from 'react'
import {Provider} from 'react-redux'
import { store } from './src/redux/store'
import { HomeScreen } from './src/screens'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<View>
					<Text>App</Text>
					<HomeScreen />
				</View>
			</SafeAreaProvider>
		</Provider>
	);
}

export default App
