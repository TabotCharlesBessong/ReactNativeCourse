import { Text, View } from 'react-native'
import React from 'react'
import {Provider} from 'react-redux'
import { store } from './src/redux/store'
import { HomeScreen } from './src/screens'
// import

const App = () => {
	return (
		<Provider store={store} >
			<View  >
				<Text>App</Text>
				<HomeScreen/>
			</View>
		</Provider>
	);
}

export default App
