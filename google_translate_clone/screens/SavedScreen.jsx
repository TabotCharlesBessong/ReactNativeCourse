

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SavedScreen = () => {
  return (
    <View style={styles.container} >
      <Text>SavedScreen</Text>
    </View>
  )
}

export default SavedScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})