import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  headingContainer:{
    marginTop:SIZES.medium,
    // marginBottom:-SIZES.xSmall,
    marginHorizontal:12
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  headerTitle:{
    fontFamily:'semiBold',
    fontSize:SIZES.xLarge - 2,
    textTransform:'capitalize',
  }
})

export default styles