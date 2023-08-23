import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./details.styles";
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import images from "../../constants/images";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image style={styles.image} source={images.fn1} />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Our Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$2126</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((rating, i) => (
              <Ionicons key={i} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro
            neque unde magni!
          </Text>
        </View>

        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text>  Buea</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text>  Free delivery  </Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow} >
          <TouchableOpacity style={styles.cartBtn} onPress={() => {}} >
            <Text style={styles.cartTitle} >buy now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCart} >
            <Fontisto name="shopping-bag" size={24} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
