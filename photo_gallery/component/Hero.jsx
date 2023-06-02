
import { Image, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
// import { TouchableOpacity } from "react-native-gesture-handler";

const Hero = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "space-evenly" }}>
        <View>
          <Text style={{fontSize:20,textTransform:'capitalize'}} >no scheduler yet</Text>
          <Text>Lorem ipsum dolor sit.</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#423aa9",
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 16,
              marginTop: 12,
            }}
          >
            <Text style={{ color: "#ffffff"}}>schedule collection</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#dedede',
    // flex:1,
    paddingBottom:10,
    paddingBottom:10,
    paddingLeft:18,
    paddingRight:18,
    borderRadius:'2rem',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
});
