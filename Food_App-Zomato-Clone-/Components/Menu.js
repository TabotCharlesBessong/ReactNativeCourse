import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Menu = (props, { card, setCard }) => {
  const menu = props.menu;
  const [additems, setAdditems] = useState(0);
  return (
    <View
      style={{
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <View>
        <View style={{ marginLeft: 5 }}>
          <Text
            style={{ textAlign: "center", fontSize: 17, fontWeight: "bold" }}
          >
            {menu.name}
          </Text>
          <Text
            style={{ textAlign: "center", fontSize: 17, fontWeight: "bold" }}
          >
            {menu.price}
          </Text>
        </View>

        <View
          style={{ marginLeft: 5, flexDirection: "row", alignItems: "center" }}
        >
          <Text
            style={{
              marginLeft: 10,
              backgroundColor: "#FFFFF0",
              padding: 5,
              borderRadius: 4,
            }}
          >
            {[0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome
                key={`${menu.id}-${i}`}
                style={{ margin: 2, marginHorizontal: 3 }}
                name={i < Math.floor(menu.star) ? "star" : "star-o"}
                size={13}
                color="#FFD700"
              />
            ))}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            marginLeft: 5,
          }}
        >
          <AntDesign
            style={{ borderWidth: 1, padding: 6, borderRadius: 20 }}
            name="hearto"
            size={24}
            color="#ff726f"
          />
          <MaterialCommunityIcons
            style={{
              borderWidth: 1,
              padding: 6,
              borderRadius: 20,
              marginLeft: 5,
            }}
            name="share-outline"
            size={24}
            color="#ff726f"
          />
        </View>
      </View>
      <View>
        <Image
          style={{ width: 150, height: 150, borderRadius: 80 }}
          source={{ uri: menu.image }}
        />
        <Pressable
          style={{
            position: "absolute",
            right: 30,
            top: 130,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FF3366",
            borderRadius: 20,
          }}
        >
          <Pressable
            onPress={() => {
              setAdditems(Math.max(0, additems - 1));
              /* 
               parametre olarak verilen dizi içerisinde bulunan eleman ile işlem yapar ve true dönen tüm değerleri 
              yeni dizi oluşturarak geri döndürür.Bu sayede çeşitli filtrelemeler yapmanıza olanak sağlar.
              */
              setCard(card.filter((p) => p.id !== menu.id));
            }}
          >
            <Text
              style={{ fontSize: 25, color: "white", paddingHorizontal: 10 }}
            >
              -
            </Text>
          </Pressable>

          <Pressable>
            <Text
              style={{ fontSize: 20, color: "white", paddingHorizontal: 10 }}
            >
              {additems}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setCard([...card, menu]);
              setAdditems(additems + 1);
            }}
          >
            <Text
              style={{ fontSize: 20, color: "white", paddingHorizontal: 10 }}
            >
              +
            </Text>
          </Pressable>
        </Pressable>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
