import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Platform , StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {RestaurantScreen} from './src/features/index'
import { theme } from './src/infrastructure/theme';


export default function App() {
  return (
		<>
			<ThemeProvider theme={theme} >
				<RestaurantScreen />
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({
	
});
