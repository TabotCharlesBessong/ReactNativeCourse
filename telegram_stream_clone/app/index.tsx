import { StyleSheet, Text, View } from 'react-native'
import {StatusBar} from "expo-status-bar"
import React from 'react'
import { Redirect } from 'expo-router'

const index = () => {
  return (
    <Redirect  href={"/(home)/(tabs)"}/>
    // <View style={styles.container} >
    //   <Text>Hello my people</Text>
    //   <StatusBar style='auto' />
    // </View>
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