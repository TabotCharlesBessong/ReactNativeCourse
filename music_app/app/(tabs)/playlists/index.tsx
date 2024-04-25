import { defaultStyles } from "@/styles"
import React from "react"
import { Text, View } from "react-native"

const PlaylistsScreen = () => {
  return (
    <View style={defaultStyles.container} >
      <Text style={defaultStyles.text} >Hello playlists</Text>
    </View>
  )
}

export default PlaylistsScreen