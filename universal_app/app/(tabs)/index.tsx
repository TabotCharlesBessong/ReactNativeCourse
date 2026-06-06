import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

const PlaceholderImage = require("@/assets/images/background-image.png")

export default function Index() {

  const [selectedImgUri, setSelectedImgUri] = useState<string | undefined>(undefined)
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [pickedImage, setPickedImage] = useState<ImageSourcePropType | undefined>(undefined)
  const pickImageAsync = async () => {


    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
      // console.log([result.assets[0].uri,result]);
      setSelectedImgUri(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert("You did not select any image.");
    }
  }

  const onReset = () => {
    setShowAppOptions(false)
  }

  const onAddSticker = () => {
    setIsModalVisible(true)
  };

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  const onSaveImageAsync = async () => {
    // code will be here
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImgUri={selectedImgUri}
        />
        {pickedImage && <EmojiSticker imageSize={40} stickerSource={pickedImage} />}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} >
        <EmojiList onSelect={setPickedImage} onCloseModal={onModalClose} />
      </EmojiPicker>
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
  },
  optionsContainer:{
    position:'absolute',
    bottom:80
  },
  optionsRow:{
    alignItems:'center',
    flexDirection:'row'
  }
})