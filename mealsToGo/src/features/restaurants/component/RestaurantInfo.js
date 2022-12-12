
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../../../constant/images.js'

const RestaurantInfo = ({restaurant = {}}) => {
	const {name ="some restaurant",icon,photos = [
		images.icon
	],address = "Molyko,Buea",isOpenNow=true,rating = 4.2,isClosed} = restaurant
	return (
		<View>
			<Text>{name}</Text>
		</View>
	)
}

export default RestaurantInfo

const styles = StyleSheet.create({})