import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Hotels = (props) => {
  /* Farklı olarak propslar yardımıyla veri taşınımı yapacağım */
  const rest = props.rest;
  const navigation = useNavigation()
  return (
    <Pressable onPress={()=>{
      /* Burada tanımlanan değişkenleri HotelRomm dosyasında kullanacağım.Bundan dolayı
      burada değişken tanımlaması yapıyorum ve HotelRomm sayfasında kullanıyorum.
       */
      /* I will use the variables defined here in the HotelRomm file.
      I define a variable here and use it on the HotelRomm page.
       */
      navigation.navigate("HotelRoom",{
        id:rest.id,
        name:rest.name,
        aggregate_rating:rest.aggregate_rating,
        adress:rest.adress,
        smalladress:rest.smalladress,
        cuisines:rest.cuisines,
      })
    }}>
      <View style={{padding:5}}>
        <View style={{ margin: 10 }}>
          <Image
          /* aspectRatio standart boyut-oran oranı olarak kullandım */
          /* I used aspectRatio as the standard aspect-ratio */
            style={{ width: "100%", aspectRatio: 6 / 4 }}
            source={{ uri: rest.featured_image }}
            //borderTopLeftRadius={7},
            borderRadius={20}
          />
        </View>

        <View
          style={{
            padding: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              {rest.name}
            </Text>
            <Text style={{ fontSize: 15, color: "gray", marginVertical: 7 }}>
              {rest.cuisines}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#17B169",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                paddingRight: 10,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              {rest.aggregate_rating}
            </Text>
            <AntDesign name="star" size={20} color="white" />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Hotels;

const styles = StyleSheet.create({});
