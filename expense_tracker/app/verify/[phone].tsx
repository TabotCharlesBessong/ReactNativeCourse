import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const VerifyPhone = () => {
  const {phone} = useLocalSearchParams<{phone:string}>()
  return (
    <View>
      <Text>[phone]</Text>
    </View>
  )
}

export default VerifyPhone

const styles = StyleSheet.create({})