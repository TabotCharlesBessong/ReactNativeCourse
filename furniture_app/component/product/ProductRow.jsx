import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import styles from './product.styles'
import { SIZES } from '../../constants/theme'
import ProductCardView from './ProductCardView'

const ProductRow = () => {
  const products = [1,2,3,4,5,6 ,7,8,9,10,11,12,13,14]
  return (
    <ScrollView style={{marginTop:SIZES.medium}} >
      <FlatList
        horizontal
        data={products}
        renderItem={({ item }) => <ProductCardView/>}
        contentContainerStyle={{
          columnGap: SIZES.medium,
        }}
      />
    </ScrollView>
  );
}

export default ProductRow
