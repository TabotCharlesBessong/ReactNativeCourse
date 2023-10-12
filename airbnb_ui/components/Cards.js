import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

const Cards = () => {
  const navigation = useNavigation();
    return (
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>
          Inspiration For your Next trip
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable
            onPress={() => navigation.navigate("Madikeri")}
            style={{ marginVertical: 20, marginHorizontal: 15 }}
          >
            <Image
              style={{
                width: 190,
                height: 150,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
              source={{
                uri: "https://i.pinimg.com/originals/b7/5f/da/b75fdaff1a53ea1cd53a7d1ac8b38c75.jpg",
              }}
            />
            <View
              style={{
                backgroundColor: "#FF4500",
                width: 190,
                padding: 12,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700", color: "white" }}>
                Madikeri
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "300", color: "white" }}>
                280 km away
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("ChikMagalur")}
            style={{ marginVertical: 20 }}
          >
            <Image
              style={{
                width: 190,
                height: 150,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
              source={{
                uri: "https://data.1freewallpapers.com/download/dream-house.jpg",
              }}
            />
            <View
              style={{
                backgroundColor: "#FF4500",
                width: 190,
                padding: 12,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700", color: "white" }}>
                Chikmagalur
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "300", color: "white" }}>
                200 km away
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Koidaikanal")}
            style={{ marginVertical: 20, marginHorizontal: 15 }}
          >
            <Image
              style={{
                width: 190,
                height: 150,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
              source={{
                uri: "https://cutewallpaper.org/21/hdphoto-download/Downloadfull-hd-wallpaper-download-1080p-in-2019-Nature-.jpg",
              }}
            />
            <View
              style={{
                backgroundColor: "#FF4500",
                width: 190,
                padding: 12,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700", color: "white" }}>
                KoidaiKanal
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "300", color: "white" }}>
                303 km away
              </Text>
            </View>
          </Pressable>

          <Pressable style={{ marginVertical: 20 }}>
            <Image
              style={{
                width: 190,
                height: 150,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JaRuZKF_iJQOmWs6yAozQHmpnVNV17YJe9WWa3PTW78SkMHkm5D3Rfs-_JSAmNwS5wE&usqp=CAU",
              }}
            />
            <View
              style={{
                backgroundColor: "#FF4500",
                width: 190,
                padding: 12,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700", color: "white" }}>
                Gokarna
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "300", color: "white" }}>
                393 km away
              </Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>
    );
}

export default Cards

const styles = StyleSheet.create({})
