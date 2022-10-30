
import React from 'react'
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Platform,
	StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from '../components/RestaurantInfo';

const isAndroid = Platform.OS === "android";
const RestaurantScreen = () => {
  return (
		<SafeAreaView
			style={{ flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0 }}
		>
			<View style={styles.search}>
				<Searchbar style={{ flex: 1, marginRight: "auto" }} />
			</View>
			<View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
				<Text>List</Text>
			</View>
			<RestaurantInfo/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	search: {
		padding: 16,
		backgroundColor: "green",
		flexDirection: "row",
		alignItems: "center",
	},
});

export default RestaurantScreen