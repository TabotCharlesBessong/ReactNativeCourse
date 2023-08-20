import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xLarge + 12,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    // aspectRatio:1,
    // resizeMode:'cover',
    width: "100%",
    height: 400,
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderRadius: SIZES.medium,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  price: {
    fontFamily: "semiBold",
    fontSize: SIZES.large,
    padding: 6,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 10,
    marginHorizontal: 20,
  },
  rating:{
    top:SIZES.large,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginHorizontal:SIZES.large
  },
  ratingText:{
    color:COLORS.gray,
    fontFamily:'medium'
  },
  descriptionWrapper:{
    marginTop:SIZES.large * 2,
    marginHorizontal:SIZES.large
  }
});

export default styles
