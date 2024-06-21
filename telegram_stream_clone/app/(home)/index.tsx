import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.container} >
      <Text>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flex:1
  }
})