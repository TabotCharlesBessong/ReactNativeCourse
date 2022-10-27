import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View , Platform } from 'react-native';
import Focus from './src/features/focus/Focus'
import { colors } from './src/utils/Color';
import Timer from './src/features/timer/Timer';
import { paddingSizes } from './src/utils/Sizes';

export default function App() {
  const [focusSubject,setFocusSubject] = useState("Coding")
  return (
		<View style={styles.container}>
			{focusSubject ? (
				<Timer focusSubject={focusSubject} />
			) : (
				<Focus addSubject={setFocusSubject} />
			)}
      <Text> {focusSubject} </Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.darkBlue,
    // padding:50,
		paddingTop:Platform.OS === 'ios' ? paddingSizes.md : paddingSizes.lg  ,
    width:'100%',
    height:'100%'
	},
});