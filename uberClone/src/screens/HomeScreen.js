
import {Text, View , SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { NavOptions } from '../components'
import images from '../constant/images'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import {API_KEY} from '@env'
import {useDispatch} from 'react-redux'
// import 

const HomeScreen = () => {

	const dispatch = useDispatch()
  return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
					}}
					source={{
						uri: images.uber,
					}}
				/>

				<GooglePlacesAutocomplete
					placeholder="Where from"
					styles={{
						container: {
							flex: 0,
							marginBottom: "2rem",
						},
						textInput: {
							fontSize: 20,
						},
					}}
					onPress={(data,details = null)=> {
            console.log(data)
					}}
					fetchDetails={true}
					returnKeyType = {"search"}
					enablePoweredByContainer={false}
					minLength={2}
					query={{
						key: API_KEY,
						language: "en",
					}}
					requestUrl={{
						useOnPlatform: "all",
						url:'localhost:19006'
					}}
					nearbyPlacesAPI="GooglePlacesSearch"
					debounce={500}
				/>
				<NavOptions />
			</View>
		</SafeAreaView>
	);
}

export default HomeScreen
