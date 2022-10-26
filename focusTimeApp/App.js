import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Focus from './src/features/focus/Focus'

export default function App() {
  const [focusSubject,setFocusSubject] = useState(null)
  return (
		<View style={styles.container}>
			{focusSubject ? (
				<Text>This is where i am going to build the timer</Text>
			) : (
				<Focus addSubject={setFocusSubject} />
			)}
      <Text> {focusSubject} </Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1ab785",
    padding:50,
    width:'100%',
    height:'100%'
	},
});