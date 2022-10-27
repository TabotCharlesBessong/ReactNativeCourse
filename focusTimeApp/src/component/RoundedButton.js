import { View, Text , TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react'
import { colors } from '../utils/Color';

const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
		<View>
			<TouchableOpacity
				style={[styles(size).radius, style]}
				onPress={props.onPress}
			>
				<Text style={[styles(size).text, textStyle]}>{props.title}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = (size) =>
	StyleSheet.create({
		radius: {
			borderRadius: size / 2,
			width: size,
			height: size,
			alignItems: "center",
			borderColor: colors.white,
			borderWidth: 2,
			justifyContent: "center",
		},
		text: {
			color: colors.white,
			fontSize: size / 3,
		},
	});

export default RoundedButton