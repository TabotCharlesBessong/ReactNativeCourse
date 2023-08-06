
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LanguageSelectScreen = () => {
  return (
    <View style={styles.container} >
      <Text>LanguageSelectScreen</Text>
    </View>
  )
}

export default LanguageSelectScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})