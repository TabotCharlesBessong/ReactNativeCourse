import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

type ImageProps = {
  imgSource: ImageSourcePropType
}

const ImageViewer = ({imgSource}: ImageProps) => {
  return (
    <View>
      <Image source={imgSource} style={styles.image} />
    </View>
  )
}

export default ImageViewer

const styles = StyleSheet.create({
  image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  }
})