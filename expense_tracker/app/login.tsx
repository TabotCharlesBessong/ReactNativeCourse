import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

enum SigninType {
  Phone, Email, Google
}

const signup = () => {
  const onSignin = async (type:SigninType) => {
    if (type === SigninType.Phone){}
  };
  const [countryCode, setCountryCode] = useState("+237");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 80;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter the phone number associated with your account
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: 100 }]}
            placeholder="Country code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />
          <TextInput
            placeholder="Mobile Number"
            keyboardType="numeric"
            style={[styles.input, { flex: 1 }]}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <Link
          href={"/signup"}
          replace
          asChild
        >
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>
              Don't yet have an account? signup
            </Text>
          </TouchableOpacity>
        </Link>

        {/* <View style={{ flex: 1 }} /> */}
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            { marginTop: 20 },
            phoneNumber !== "" && phoneNumber.length == 9
              ? styles.enabled
              : styles.unenabled,
          ]}
          onPress={() => onSignin(SigninType.Phone)}
        >
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 100 }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: Colors.gray,
              // marginVertical: 20,
            }}
          />
          <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: Colors.gray,
              // marginVertical: 20,
            }}
          />
        </View>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: "row",
              gap: 16,
              marginTop: 20,
              backgroundColor: "white",
            },
          ]}
          onPress={() => onSignin(SigninType.Email)}
        >
          <Ionicons name="mail" size={24} color={"#000"} />
          <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
            Continue with email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: "row",
              gap: 16,
              marginTop: 20,
              backgroundColor: "white",
            },
          ]}
          onPress={() => onSignin(SigninType.Google)}
        >
          <Ionicons name="logo-google" size={24} color={"#000"} />
          <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
            Continue with google
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default signup;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  unenabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
