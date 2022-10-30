
import React , {useState} from 'react'
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
	// const [restaurant, setRestaurant] = useState({})
  return (
		<SafeAreaView
			style={{ flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0 }}
		>
			<View style={styles.search}>
				<Searchbar style={{ flex: 1, marginRight: "auto" }} />
			</View>
			<View style={styles.list} >
				<RestaurantInfo  />
			</View>
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
	list: {
		flex: 1,
		padding: 16,
		backgroundColor: "blue",
	},
});

export default RestaurantScreen