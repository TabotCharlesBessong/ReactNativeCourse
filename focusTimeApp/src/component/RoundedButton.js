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
      <TouchableOpacity style={[styles(size).radius,style]}  >
        <Text style={[styles.text , textStyle]} >{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
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
		},
		text: {
			color: colors.white,
			fontSize: size / 3,
		},
	});

export default RoundedButton