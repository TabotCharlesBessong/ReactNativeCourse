import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import MenuData from "../Data/MenuData";
import Menu from "../Components/Menu";
import { CartItems } from "../Context";
import ViewCart from "../Components/ViewCart";

const HotelRoom = () => {
  /* Hotels bileşininden gelen verileri route ile kullanabiilme durumumuz bulunmakta */
  /* We have the ability to use the data from the Hotels component with route */
  const route = useRoute();
  const navigation = useNavigation();
  const data = MenuData;
  const { card, setCard } = useContext(CartItems);
  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View
          style={{
            paddingTop: 30,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: "#002D62",
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Ionicons name="chevron-back" size={30} color="white" />
          </Pressable>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <AntDesign name="camerao" size={28} color="black" />
            <Feather name="bookmark" size={28} color="black" />
            <MaterialCommunityIcons
              name="share-outline"
              size={28}
              color="black"
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {route.params.name}
            </Text>
            <Text style={{ fontSize: 16, color: "gray", fontWeight: "bold" }}>
              {route.params.cuisines}
            </Text>
            <Text
              style={{ fontSize: 16, color: "#6082B6", fontWeight: "bold" }}
            >
              {route.params.smalladress}
            </Text>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "green",
                padding: 7,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text
                style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
              >
                {route.params.aggregate_rating}
              </Text>
              <AntDesign name="star" size={20} color="white" />
            </View>

            <View
              style={{
                /* Varsayılan olarak column oluyor */
                /* It's column by default */
                alignItems: "center",
                backgroundColor: "#F9629F",
                padding: 7,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>30</Text>
              <Text style={{ color: "white", fontSize: 15 }}>PHOTOS</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginLeft: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5
              style={{ backgroundColor: "#D8D8D8", padding: 7 }}
              name="motorcycle"
              size={30}
              color="pink"
            />
            <View style={{ marginLeft: 10 }}>
              <Text>Mode</Text>
              <Text>Delivery</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              style={{ backgroundColor: "#D8D8D8", padding: 7 }}
              name="timer-outline"
              size={30}
              color="red"
            />
            <View style={{ marginLeft: 10 }}>
              <Text>Time</Text>
              <Text>30Mins or free</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather
              style={{ backgroundColor: "#D8D8D8", padding: 7 }}
              name="paperclip"
              size={30}
              color="blue"
            />
            <View style={{ marginLeft: 10 }}>
              <Text>Offers</Text>
              <Text>View all</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#C8C8C8",
            marginTop: 25,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
            marginLeft: 10,
            padding: 5,
            borderRadius: 10,
            justifyContent: "space-around",
          }}
        >
          <Fontisto name="motorcycle" size={24} color="gray" />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            $30 additional distance fee
          </Text>
        </View>

        <View style={{ margin: 10,flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:15}}>
          <Text style={{ fontSize: 17 }}>Full Menu</Text>
          <Text
            style={{
              borderColor: "#ff1493",
              height: 3,
              borderWidth: 2,
              width: 70,
            }}
          ></Text>
        </View>

        {/* Burada oluşturduğum menu etiketi üzerinden oluşturulan
        menu props ile birlikye MenuData üzerinden veri alımı yapmaktayım.Hazır
        map fonksiyonu ile birlikte de item paramatresi ile birlikte dizi üzerinde
        dolaşarak veri okutma işlemi yapmaktayım.
        */
        /* The menu tag I created here is created over the menu tag
        I am receiving data via MenuData together with menu props.
        With the map function, you can also map the array with the item parameter on the array.
        I am reading data by walking around.
        */}
        {data.map((item) => (
          <Menu card={card} setCard={setCard} menu={item} />
        ))}
      </ScrollView>

      <ViewCart Rname={route.params.name} />
    </>
  );
};

export default HotelRoom;

const styles = StyleSheet.create({});
