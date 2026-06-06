import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const PlaceholderImage = require("@/assets/images/background-image.png")

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#223",
  },
  text:{
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  button:{
    backgroundColor: "#fff",
    color: "#223",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    // textDecorationLine: "underline",
  },
  imageContainer:{
    flex: 1,
    paddingTop: 58,
  },
  image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer:{
    flex: 1/3,
    alignItems: "center",
  }
})