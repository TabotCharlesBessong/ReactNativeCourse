
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const Offers = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 120, height: 150, borderRadius: 32, margin: 32 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              height: "80%",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#ffffff",
              }}
            >
              Become a collector
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              color: "#ffffff",
              height: "20%",
            }}
          >
            <Text style={{ textTransform: "capitalize", color: "#ffffff" }}>
              Join us
            </Text>
            <Icon color="white" name="arrowright" type="antdesign" />
          </View>
        </View>

        <View style={{ width: 120, height: 150, borderRadius: 32, margin: 32 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              height: "80%",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#ffffff",
              }}
            >
              Become a collector
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              color: "#ffffff",
              height: "20%",
            }}
          >
            <Text style={{ textTransform: "capitalize", color: "#ffffff" }}>
              Join us
            </Text>
            <Icon color="white" name="arrowright" type="antdesign" />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 120, height: 150, borderRadius: 32, margin: 32 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              height: "80%",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#ffffff",
              }}
            >
              Become a collector
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              color: "#ffffff",
              height: "20%",
            }}
          >
            <Text style={{ textTransform: "capitalize", color: "#ffffff" }}>
              Join us
            </Text>
            <Icon color="white" name="arrowright" type="antdesign" />
          </View>
        </View>

        <View style={{ width: 120, height: 150, borderRadius: 32, margin: 32 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              height: "80%",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#ffffff",
              }}
            >
              Become a collector
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              color: "#ffffff",
              height: "20%",
            }}
          >
            <Text style={{ textTransform: "capitalize", color: "#ffffff" }}>
              Join us
            </Text>
            <Icon color="white" name="arrowright" type="antdesign" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    alignItems:'start',
    justifyContent:'center',
    color:'#ffffff',
    marginTop:32,
  },
  card:{
    alignItems:'center',
    justifyContent:'space-around'
  }
});
