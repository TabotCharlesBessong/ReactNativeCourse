import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Categories from "../Components/Categories";
import ItemComponent from "../Components/ItemComponent";
import hotels from "../Data/hotels";
import Hotels from "../Components/Hotels";

const HomeScreen = () => {
  const data = hotels;
  return (
    <ScrollView style={{ margin: 5, paddingTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 20,
          padding: 4,
          backgroundColor: "#D8D8D8",
          borderRadius: 6,
          marginBottom:5
        }}
      >
        <AntDesign style={{marginBottom:10}}  name="search1" size={24} color="#E52B50" />
        <TextInput
          style={{ paddingLeft: 10,marginBottom:10 }}
          placeholder="Restaurant name,cuisines,or a dishes"
        />
      </View>
      <Categories />
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ width: 150, height: 100, margin: 10, borderRadius: 7 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU",
            }}
          />
          <Image
            style={{ width: 150, height: 100, borderRadius: 7 }}
            source={{
              uri: "https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1002269/zomato-infinity-dining-916x516-1-916x516.jpg",
            }}
          />
        </View>
      </View>
      <ItemComponent />
      {/* Burada rest bir prop olmakla birlikte oluşturulan Hotel 
      etiketinde var olan veri render işlemini yapmamı sağlamakta 
      */
     /* Here rest is a prop, but the created Hotel 
      The data in the tag allows me to render 
      */
      }
      {data.map((item) => (
        <Hotels rest={item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
