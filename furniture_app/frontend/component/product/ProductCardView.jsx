
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './product.styles'
import images from '../../constants/images'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.productCardViewContainer}>
        <View style={styles.imageContainer}>
          <Image source={images.fn3} style={styles.image} />
        </View>

        <View style={styles.productDetails}>
          <Text style={styles.title} numberOfLines={1}>
            products
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            supplier
          </Text>
          <Text style={styles.price}>$234</Text>
        </View>

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate("Card")}
        >
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default ProductCardView