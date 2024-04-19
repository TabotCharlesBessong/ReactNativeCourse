import { TracksList } from "@/components"
import { defaultStyles } from "@/styles"
import React from "react"
import { ScrollView, View } from "react-native"


const SongsScreen = () => {
  return (
    <View style={defaultStyles.container} >
      <ScrollView>
        <TracksList scrollEnabled={false} />
      </ScrollView>
    </View>
  )
}

export default SongsScreen