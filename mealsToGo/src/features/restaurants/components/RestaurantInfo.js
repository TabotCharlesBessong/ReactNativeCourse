
import React from 'react'
import {View, Text , StyleSheet } from 'react-native'
import images from '../../../constant/images'
import {Card} from 'react-native-paper'
import { RestaurantCard } from './Styles'
import styled from 'styled-components/native'


const RestaurantInfo = ({restaurant ={} }) => {
  const {
    name= ' my restaurant',
    icon,
    photos = [images.home , images.adaptiveIcon] ,
    address='molyko, buea',
    isOpenNow = true,
    rating = 4.2,
    isClosedTemporarily = false
  } = restaurant
  return (
    <View>
      <RestaurantCard elevation={5} style={StyleSheet.card} >
        <Card.Cover key={name} style={styles.cover} source={{uri:photos[0]}} />
        <Text style={styles.title} >{name}</Text>
        <Text style={styles.title} > {address} </Text>
      </RestaurantCard>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#fff'
  },
  cover:{
    padding:20,
    backgroundColor:'#fff'
  },
  title:{
    textAlign:'center',
    padding:4,
    textTransform:'capitalize'
  }
})

export default RestaurantInfo