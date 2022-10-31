import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import data from '../constant/data'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

const NavOptions = () => {
  console.log(data.data1)
  return (
    <FlatList
    data={data.data1}
    horizontal
    keyExtractor={(item) => item.id }
    renderItem={({item}) => (
      <TouchableOpacity style={tw`p-2 pl-6 pt-4 pb-8 bg-gray-200 m-2`} >
        <View>
          <Image
          style={{
            width:120,
            height:120,
            resizeMode:'contain'
          }}
            source={{
              uri:item.image
            }}
          />
          <Text style={tw`mt-2 text-lg font-semibold`} >{item.title}</Text>
          <Icon 
          type='antdesign'
          name='arrowright'
          color='white'
          style={tw`p-2 bg-black rounded-full w-10 mt-4`}
           />
      
        </View>
      </TouchableOpacity>
    )}
     />
  )
}

export default NavOptions