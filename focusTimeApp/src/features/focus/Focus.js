import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View , Platform } from "react-native";
import { TextInput } from "react-native-paper";
import { fontSizes , paddingSizes, PaddingSizes } from '../../utils/Sizes'
import RoundedButton from "../../component/RoundedButton";
import { colors } from "../../utils/Color";

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
		padding: paddingSizes.md,
		justifyContent:'center'
	},
	title:{
    color:colors.white,
		fontWeight:500,
		fontSize:fontSizes.lg
	},
	textInput:{
		backgroundColor:colors.white,
		width:'90%',
		height:'3rem',
		borderRadius:'1rem'
	},
	inputContainer:{
		paddingTop:paddingSizes.md,
		flexDirection:'row',
		alignItems:'center'
	}
});

export default Focus
