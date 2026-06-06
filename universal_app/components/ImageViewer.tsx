import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

type ImageProps = {
  imgSource: ImageSourcePropType
  selectedImgUri: string | undefined
}

const ImageViewer = ({imgSource, selectedImgUri}: ImageProps) => {
  return (
    <View>
      <Image source={selectedImgUri ? { uri: selectedImgUri } : imgSource} style={styles.image} />
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