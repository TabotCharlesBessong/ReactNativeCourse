import { View, Text , TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react'

const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <View>
      <TouchableOpacity style={[styles(size).radius,style]}  >
        <Text style={[styles.text , textStyle]} >{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = (size) => StyleSheet.create({
  radius:{
    borderRadius:size / 2,
    width:size,
    height: size,
    alignItems:'center',
    borderColor:'#fff',
    borderWidth:2
  },
  text:{
    color:'#fff',
    fontSize:size / 3 
  }
})

export default RoundedButton