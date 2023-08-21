import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
} from "react-native";
import jair from "../../../assets/images/jair.jpg";
import CustomButton from "../../components/CustomButton/CustomButton";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const IntroPage = () => {

  const navigation = useNavigation();

  const onSignInPress = () => {
    navigation.navigate('Sign In');
  }

  const onSignUpPress = () => {
    navigation.navigate('Sign Up');
  }

  return (
    <SafeAreaView style={styles.root}>
      {/* An image as leading and an absolute positioned container with a text */}
      <Image source={jair} style={styles.image} />
      <View style={styles.titleContainer}>
         <Text style={styles.title}>Make your moment with music</Text>
      </View>


      {/* Container or just a text with its subtext */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Find music & enjoy</Text>
        <Text style={styles.subtext}>
          Search, get and save your favourite music on your playlist make.
        </Text>
      </View>

      {/* Container with two horizontally aligned buttons */}
      <View style={styles.buttonContainer}>
         <CustomButton type="PRIMARY" text={"sign in"} onPress={onSignInPress} />
         <CustomButton type="SECONDARY" text={"sign up"} onPress={onSignUpPress} />
      </View>

    </SafeAreaView>
  );
};


export default IntroPage;
