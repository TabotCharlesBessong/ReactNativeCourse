import { StyleSheet } from 'react-native'
import React from 'react'
import {Provider} from 'react-redux'
import { store } from './redux/store'
import HomeScreen from './screens/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'

//1 setup redux 

const App = () => {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<HomeScreen />
			</SafeAreaProvider>
		</Provider>
	);
}

export default App

const styles = StyleSheet.create({})