
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  container:{
    width:'100%'
  },
  welcomeTxt:(color,top) => ({
    fontSize:SIZES.xxLarge - 5,
    fontFamily:'bold',
    marginTop:top,
    color:color,
    marginHorizontal:12
  }),
  searchContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.secondary,
    borderRadius:SIZES.medium,
    marginVertical:SIZES.medium,
    height:50
  },
  searchIcon:{
    marginHorizontal:10,
    color:COLORS.gray,
    marginTop:SIZES.small
  },
  searchWrapper:{
    flex:1,
    backgroundColor:COLORS.secondary,
    marginRight:10,
    borderRadius:SIZES.small
  },
  searchInput:{
    fontFamily:'regular',
    width:'100%',
    height:'100%',
    paddingHorizontal:SIZES.small,
  },
  searchBtn:{
    width:50,
    backgroundColor:COLORS.primary,
    height:'100%',
    borderRadius:SIZES.medium,
    alignItems:'center',
    justifyContent:'center'
  }
})

export default styles