import { Pressable, StyleSheet, Text, View, Modal } from "react-native";
import React, { useContext, useState } from "react";
import { CartItems } from "../Context";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewCart = (props) => {
  const { card, setCard } = useContext(CartItems);
  const total = card
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  /* Varsayılan kapalı(default close) */
  const [modalVisible, setModalVisible] = useState(false);
  const Rname = props.Rname;
  /* kapatma butonu işlevi(close button function) */
  const checkout = () => {
    return (
      <View
        style={{
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.6)",
          flex: 1,
        }}
      >
        <Pressable
          /* Modal Kapatmak için
          (Modal With closed) 
          */
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 5,
          }}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <AntDesign name="closecircle" size={35} color="black" />
        </Pressable>
        <View
          style={{
            height: 500,
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 10,
              color: "red",
              fontSize: 15,
            }}
          >
            {Rname}
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          >
            <Ionicons name="timer" size={26} color="gray" />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
              30 Dakika içinde teslim
            </Text>
          </View>
          <View
            style={{ borderColor: "#F0F0F0", borderWidth: 1, height: 1 }}
          ></View>
          {card.map((item, key) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
              key={key}
            >
              <Text style={{ color: "red", fontWeight: "bold", fontSize: 15 }}>
                {item.name}
              </Text>
              <Text style={{ color: "red", fontWeight: "bold", fontSize: 15 }}>
                {item.price}
              </Text>
            </View>
          ))}
          <View
            style={{ borderColor: "#F0F0F0", borderWidth: 1, height: 1 }}
          ></View>

          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 17 }}>Teklif Durumları</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <MaterialCommunityIcons
                name="brightness-percent"
                size={24}
                color="blue"
              />
              <Text>Promosyon kodu seçimi</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        {checkout()}
      </Modal>

      <View>
        {total === 0 ? (null) : (
          <Pressable
            onPress={() => {
              setModalVisible(true);
            }}
            style={{
              backgroundColor: "#fd5c63",
              width: 140,
              borderRadius: 8,
              position: "absolute",
              bottom: 10,
              left: 120,
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Durum
            </Text>
          </Pressable>
        )}
      </View>
    </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({});
