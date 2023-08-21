import React, { useState } from "react";
import { View, Text, SafeAreaView, Pressable, Image } from "react-native";
import jakayla from "../../../assets/images/jakayla.jpg";
import CustomInput from "../../components/CustomInput/CustomInput";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

//firebase
import { firebaseConfig } from "../../back-end/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // call methods below in sign in and sign up
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // handle your sign in firebase account
  const handleSignInAccount = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed into Account with Firebase!");
        // if (firebaseAuthentication) { goto home} else {error}
        navigation.navigate("Home")
        // add firestore to access user credentials
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.root}>
      {/* An image as leading and an absolute positioned container with a text */}
      <Image source={jakayla} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Enjoy your day in music</Text>
      </View>

      {/* Sign In text */}
      <Text style={styles.subtitle}>sign in</Text>

      {/* Text Input */}
      <View style={styles.inputContainer}>
        <CustomInput
          placeholder={"Enter your email"}
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
        <CustomInput
          placeholder={"Enter your password"}
          onChangeText={(password) => {
            setPassword(password);
          }}
          secureTextEntry={true}
        />
      </View>

      {/* Forgot passowrd pressable text */}
      <Pressable
        onPress={() => {
          console.warn("preessedd");
        }}
        style={styles.pressable}
      >
        <Text style={styles.text}>forgot password</Text>
      </Pressable>

      {/* BOttom view with button and account sign up link */}
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleSignInAccount} style={styles.button}>
          <Text style={styles.btnText}>sign in</Text>
        </Pressable>

        {/* text */}
        <View style={styles.textContainer}>
          <Text style={styles.subtext}>Don't have an account? </Text>
          <Text style={styles.sub}>Sign Up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
