import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";
import { Searchbar } from "react-native-paper";

import { Platform } from "react-native-web";
const isAndroid = Platform.OS === "android";
const height = StatusBar.currentHeight;

const RestaurantScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.search}>
				<Searchbar />
			</View>
			<View style={styles.list}>
				{/* <RestaurantInfo /> */}
			</View>
		</SafeAreaView>
	);
};

export default RestaurantScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: isAndroid ? height : 0,
	},
	search: {
		padding: 16,
		backgroundColor: "white",
	},
	list: {
		flex: 1,
		padding: 16,
    color:"black"
		// backgroundColor: "blue",
	},
});
