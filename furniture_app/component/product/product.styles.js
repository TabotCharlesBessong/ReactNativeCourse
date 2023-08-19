import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  productCardViewContainer: {
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    // backgroundColor:COLORS.secondary,
    // paddingBottom:60,
    position: 'relative',
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
    height: 180,
  },
  image: {
    // aspectRatio: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  productDetails: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  price: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
  },
  supplier: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color:COLORS.gray
  },
  addBtn:{
    position:'absolute',
    bottom: SIZES.xSmall,
    right:SIZES.xSmall
  }
});

export default styles
