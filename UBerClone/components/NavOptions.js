
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {data} from '../constant/data'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'


const NavOptions = () => {
  const navOptions = data.navOptions
  console.log(navOptions,'navOptions')
  return (
    <FlatList
    data={navOptions}
    keyExtractor={(item) => item.id }
    horizontal
    renderItem={({item}) => {
      return (
				<TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 w-40 m-2`} >
					<View style={{ flex: 1 }}>
						<Image
							style={{ width: 120, height: 120, resizeMode: "contain" }}
							source={{
								uri: item.image,
							}}
						/>
            <Text style={tw`mt-2 text-lg font-semibold`} >{item.title}</Text>
            <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} type='antdesign' color='white' name='arrowright' />
					</View>
				</TouchableOpacity>
			);
      
    }}
     />
  )
}

export default NavOptions