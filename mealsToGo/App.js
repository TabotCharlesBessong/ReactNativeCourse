import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Platform , StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android'

export default function App() {
  return (
		<>
			<SafeAreaView
				style={{ flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0 }}
			>
				<View style={{ padding: 16, backgroundColor: "green" }}>
					<Text>Search</Text>
				</View>
				<View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
					<Text>List</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({
  
});
