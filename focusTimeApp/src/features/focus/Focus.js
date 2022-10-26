import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View , Platform } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../component/RoundedButton";

const  Focus = ({addSubject}) =>{
	const [tempItem, setTempItem] = useState()
	return (
		<View style={styles.titleContainer}>
			<View className="titleContainer">
				<Text style={styles.title}>Hey! What will you like to focus on ?</Text>
				<View style={styles.inputContainer} >
					<TextInput style={{flex:1 , marginRight:20}} onSubmitEditing={
						({nativeEvent}) => {
							setTempItem(nativeEvent.text)
						}
					}   />
					<RoundedButton size={50} title="+" onPress = {() => {addSubject(tempItem)}} />
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding:50,
		// backgroundColor:'#fff'
	},
	titleContainer:{
    flex:0.5,
		padding: Platform.OS === 'android' ? 16 : 50,		justifyContent:'center'
	},
	title:{
    color:'#fff',
		fontWeight:500,
		fontSize:24
	},
	textInput:{
		backgroundColor:'#fff',
		width:'90%',
		height:'3rem',
		borderRadius:'1rem'
	},
	inputContainer:{
		paddingTop:20,
		flexDirection:'row',
		alignItems:'center'
	}
});

export default Focus
