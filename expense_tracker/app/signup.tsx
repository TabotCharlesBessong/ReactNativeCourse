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
import { Link, useRouter } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";

const signup = () => {
  const router = useRouter()
  const {signUp} = useSignUp()
  const onSignup = async () => {
    const fullPhoneNumber = `${countryCode}${phoneNumber}`
    try {
      await signUp?.create({
        phoneNumber:fullPhoneNumber
      })
      router.push({pathname:"/verify/[phone]",params:{phone:fullPhoneNumber}})
    } catch (error) {
      console.log("error signing up")
    }
  };
  const [countryCode, setCountryCode] = useState("+237");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 80
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset} >

    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter your phone number we will send you a configuration code there
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
        href={"/login"}
        // style={[
        //   defaultStyles.pillButton,
        //   { flex: 1, backgroundColor: Colors.dark },
        // ]}
        replace
        asChild
      >
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </Link>

      <View style={{flex:1}} />
      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          { marginTop: 20 },
          phoneNumber !== "" && phoneNumber.length == 9
            ? styles.enabled
            : styles.unenabled,
        ]}
        onPress={onSignup}
      >
        <Text style={defaultStyles.buttonText}>Continue</Text>
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
