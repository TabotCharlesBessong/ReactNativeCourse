import { defaultStyles } from "@/styles"
import React from "react"
import { Text, View } from "react-native"

const ArtistsScreen = () => {
  return (
    <View style={defaultStyles.container} >
      <Text style={defaultStyles.text} >Hello artists</Text>
    </View>
  )
}

export default ArtistsScreen