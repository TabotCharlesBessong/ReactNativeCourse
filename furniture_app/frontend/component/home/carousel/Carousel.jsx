import { View, Text } from "react-native";
import React from "react";
import styles from "./carousel.styles";
import { SliderBox } from "react-native-image-slider-box";
import images from "../../../constants/images";
import { COLORS } from "../../../constants/theme";

const Carousel = () => {
  const slides = [images.fn1, images.fn2, images.fn3, images.fn4];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "92%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;
