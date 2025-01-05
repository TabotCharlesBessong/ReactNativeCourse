import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Tables } from '../types/datebase.types'

const ProductListItem = ({product}:{product:Tables<'product'>}) => {
  return (
    <Link asChild href={`/product/${product.slug}`} >
      <Pressable style={styles.item} >
        <View  style={styles.itemImageContainer} >
          <Image source={{uri:product.heroImage}} style={styles.itemImage} />
        </View>
        <View style={styles.itemTextContainer} >
          <Text style={styles.itemTitle} numberOfLines={2}>{product.title}</Text>
          <Text style={styles.itemPrice}>${product.price}</Text>
        </View>
      </Pressable>
    </Link>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
  item:{
    width:"40%",
    backgroundColor:"white",
    marginVertical:8,
    borderRadius:10,
    overflow: "hidden"
  },
  itemImageContainer:{
    borderRadius:10,
    width:"100%",
    height:150,
    overflow: "hidden",
    marginBottom:8
  },
  itemImage:{
    width:"100%",
    height:"100%",
    resizeMode:"cover"
  },
  itemTextContainer:{
    padding:8,
    alignItems:"flex-start",
    gap:4
  },
  itemTitle:{
    fontSize:16,
    fontWeight:"bold",
    color:"#888"
  },
  itemPrice:{
    fontSize:14,
    color:"#333",
    fontWeight:"semibold"
  }
})