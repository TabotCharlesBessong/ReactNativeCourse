import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const ItemComponent = () => {
  return (
    <View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            padding: 4,
            textAlign: "center",
          }}
        >
          Eat What Makes You Happy
        </Text>
      </View>
      {/* Şu an pressable kalmalı ilerleyen durumda her bir yemek için yönlendirme olabilir */}
      {/* Genel bir etikete aldım çünkü bütün grupları yönlendirmem gerekmekte */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          //paddingHorizontal: 11,
          justifyContent: "center",
        }}
      >
        <View style={{ margin: 10 }}>
          <Image
            style={{ width: 70, height: 70, borderRadius: 40 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZDb8hWL40qKbszAavTSLFkyOcAhvnPmgXw&usqp=CAU",
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "gray",
              margin: 10,
              textAlign: "center",
            }}
          >
            Thalis
          </Text>
        </View>

        <View style={{ margin: 10 }}>
          <Image
            style={{ width: 70, height: 70, borderRadius: 40 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fIIZ5yHqkqXHgg9TuQuJ_mFZbINJLt1ODQ&usqp=CAU",
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "gray",
              margin: 10,
              textAlign: "center",
            }}
          >
            Pizzas
          </Text>
        </View>

        <View style={{ margin: 10 }}>
          <Image
            style={{ width: 70, height: 70, borderRadius: 40 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-SsbTrLAm9o9ABakjoILX9G5LIDNJnVwvA&usqp=CAU",
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "gray",
              margin: 10,
              textAlign: "center",
            }}
          >
            Burger
          </Text>
        </View>

        <View style={{ margin: 10 }}>
          <Image
            style={{ width: 70, height: 70, borderRadius: 40 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsC7uWf7rd0qrXk2zCpasTV8W-HCcr9JeKQ&usqp=CAU",
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "gray",
              margin: 10,
              textAlign: "center",
            }}
          >
            Dosas
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({});
