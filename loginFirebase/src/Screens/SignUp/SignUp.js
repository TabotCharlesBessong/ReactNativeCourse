import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Alert
} from "react-native";
import black from "../../../assets/images/black.jpg";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { firebaseConfig } from "../../back-end/firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";

const SignUp = () => {
  const navigation = useNavigation();

  const backToIntro = () => {
    navigation.navigate("Introduction");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  // call methods below in sign in and sign up
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password, passwordRepeat)
      .then((userCredential) => {
        console.log("Account created");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <SafeAreaView style={styles.root}>
      {/* An image as leading and an absolute positioned container with a text */}
      <Image source={black} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>chill comfortably with music</Text>
      </View>

      {/* TItle text */}
      <Text style={styles.subtitle}>Sign up</Text>

      {/* input container with three inputs */}
      <View style={styles.inputContainer}>
        <CustomInput placeholder={"Enter your email"} onChangeText={(email) => setEmail(email)} />
        <CustomInput
          placeholder={"Create your password"}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder={"Confirm your password"}
          onChangeText={(password) => setPasswordRepeat(passwordRepeat)}
          secureTextEntry={true}
        />
      </View>

      {/* bottom button container */}
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleCreateAccount} style={styles.button}>
          <Text style={styles.text}>sign up</Text>
        </Pressable>
        <Pressable onPress={backToIntro}>
          <Text style={styles.btnText}>back to welcome</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F1F5F9",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: 320,
    marginBottom: 20,
    borderRadius: 15,
    marginTop: 35,
    marginBottom: 20,
  },
  titleContainer: {
    position: "absolute",
    top: 70,
    left: "20%",
    textAlign: "center",
    width: 250,
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
    color: "#BBF7D0",
    textAlign: "center",
    letterSpacing: 0.9,
    textTransform: "capitalize",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#131418",
    letterSpacing: 0.9,
    textTransform: "capitalize",
    marginBottom: 10,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    width: "100%",
    alignItems: "center",
    paddingVertical: 15,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 20,
    width: "100%",

    backgroundColor: "#4338CA",

    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 3, height: 20 },
    shadowOpacity: 0.9,
    shadowRadius: 15,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    letterSpacing: 0.9,
    textAlign: "center",
    color: "#FFFFFF",
  },
  btnText: {
    color: "#4338CA",
    fontSize: 16,
    fontWeight: "400",
    textTransform: "capitalize",
    letterSpacing: 0.7,
  },
});

export default SignUp;
