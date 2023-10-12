import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={{ width: "100%", height: 540 }}
        source={{
          uri: "https://wallpapersmug.com/download/1280x900/3126d4/outing-campfire-tent-night.jpg",
        }}
      >
        <View
          style={{
            marginTop: 13,
            backgroundColor: "white",
            padding: 6,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            paddingHorizontal: 30,
            borderRadius: 23,
          }}
        >
          <Ionicons
            name="search"
            size={20}
            color="#fd5c63"
            style={{ paddingRight: 5 }}
          />
          <TextInput
            style={{ fontSize: 14, fontWeight: "bold", width: "41%" }}
            placeholder="where are you going?"
          />
        </View>

        <Pressable
        onPress={()=>navigation.navigate("Search")}
          style={{
            backgroundColor: "white",
            padding: 6,
            marginLeft: "auto",
            borderRadius:23,
            paddingHorizontal:10,
            paddingVertical: 10,
            marginRight: "auto",
            // marginBottom: "auto",
            marginTop: "auto",
          }}
        >
          <Text style={{ color: "#C71585",fontWeight: "bold",fontSize:15, }}>i'm flexible</Text>
        </Pressable>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "auto",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "600" }}>
            Not Sure Where to GO?
          </Text>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "600" }}>
            Perfect.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
