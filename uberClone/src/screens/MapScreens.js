import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MapScreens = () => {
  const navigation = useNavigation()
  return (
		<View>
			<TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')} >
				<Text>MapScreens</Text>
			</TouchableOpacity>
		</View>
	);
}

export default MapScreens