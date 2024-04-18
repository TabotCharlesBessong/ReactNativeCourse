import { defaultStyles } from "@/styles"
import React from "react"
import { Text, View } from "react-native"

const SongsScreen = () => {
  return (
    <View style={defaultStyles.container} >
      <Text style={defaultStyles.text} >Hello songs</Text>
    </View>
  )
}

export default SongsScreen