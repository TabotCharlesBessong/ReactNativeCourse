
import { COLORS,SIZES } from "../../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textStyle:{
    fontFamily:'bold',
    fontSize:40
  },
  appBarWrapper:{
    marginHorizontal:22,
    marginTop:SIZES.small
  },
  appBar:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  location:{
    fontFamily:'semiBold',
    fontSize:SIZES.medium,
    color:COLORS.gray
  },
  cardCount:{
    position:'absolute',
    bottom:16,
    width:16,
    height:16,
    borderRadius:8,
    alignItems:'center',
    backgroundColor:"green",
    justifyContent:'center',
    zIndex:999
  }
})

export default styles