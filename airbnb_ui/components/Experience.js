import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const Experience = () => {
  return (
    <View style={{ paddingBottom: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
        discover Airbnb experiences
      </Text>
      <ImageBackground
        style={{
          width: 350,
          resizeMode: "contain",
          height: 450,
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 10,
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcIhhZoVAOPiN5Mggdz1NdjW-5nvZvTzFog&usqp=CAU",
        }}
      >
        <Text style={{padding:20,fontSize:27,fontWeight:"bold",color:"white"}}>Things To do On your Trip</Text>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              backgroundColor: "white",
              padding: 10,
              width: 140,
              textAlign: "center",
              borderRadius: 8,
              fontWeight: "bold",
            }}
          >
            Experiences
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Experience;

const styles = StyleSheet.create({});
