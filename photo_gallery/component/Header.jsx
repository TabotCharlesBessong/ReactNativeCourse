import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const Header = () => {
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
      <View>
        <Text style={{ fontSize: 12 }}>Hi there</Text>
        <Text style={{ fontSize: 24 }}>Njamgue Glen</Text>
      </View>
      <View>
        <Icon
          // style={tw`p-2 bg-black rounded-full w-10 mt-4`}
          color="black"
          name="notifications"
          type="ionicons"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    // backgroundColor:'inhe'
  },
});
