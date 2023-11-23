

import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container} >
      <Text>Setting Screen</Text>
      <Button title='click me' onPress={() => navigation.navigate("saved")} />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})