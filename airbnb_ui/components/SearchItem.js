import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const SearchItem = (props) => {
  const data = props.data;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Reserve", {
          id: data.id,
          location: data.location,
          img:data.img,
          title: data.title,
          description: data.description,
          person: data.person,
          review: data.review,
          image: data.image,
          price: data.price,
          long: data.long,
          lat: data.lat,
        })
      }
      style={{ flex: 1, margin: 15,marginTop: 30 }}
    >
      <Image
        source={data.img}
        style={{
          width: "100%",
          height: 300,
          borderRadius: 7,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 7,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "600" }}>{data.location}</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{data.price}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "gray" }}>
          {data.distance}
          {" kilometers away"}
        </Text>
        <Text>{"dec 12- 20 "}</Text>
      </View>
      <View style={{ position: "absolute", top: 20, right: 20 }}>
        <AntDesign name="hearto" size={24} color="white" />
      </View>
    </Pressable>
  );
};

export default SearchItem;

const styles = StyleSheet.create({});
