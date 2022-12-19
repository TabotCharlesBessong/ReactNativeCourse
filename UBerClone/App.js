import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Provider} from 'react-redux'
import { store } from './redux/store'

//1 setup redux 

const App = () => {
	return (
		<Provider store={store} >
			<View>
				<Text>App</Text>
				<Text>Lets build the uber clone </Text>
			</View>
		</Provider>
	);
}

export default App

const styles = StyleSheet.create({})