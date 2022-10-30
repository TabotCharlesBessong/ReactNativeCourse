import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Platform , StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {RestaurantScreen} from './src/features/index'
import { theme } from './src/infrastructure/theme';
import {
	useFonts as useOswold,
	Oswald_400Regular
} from '@expo-google-fonts/oswald'
import {
	useFonts as useLato,
	Lato_400Regular
} from '@expo-google-fonts/lato'
 

export default function App() {

	const [oswaldLoaded] = useOswold({
		Oswald_400Regular
	})

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if(!oswaldLoaded || !latoLoaded) {
		return null
	}
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
