import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const VerifyPhone = () => {
  const {phone,signin} = useLocalSearchParams<{phone:string,signin:string}>()
  return (
    <View>
      <Text>[phone]</Text>
    </View>
  )
}

export default VerifyPhone

const styles = StyleSheet.create({})