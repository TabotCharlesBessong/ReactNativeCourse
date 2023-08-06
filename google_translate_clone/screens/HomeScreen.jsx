import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "../constant/colors";

const HomeScreen = ({ navigation }) => {
  const [enteredtext, setEnteredtext] = useState("");
  const [resulttext, setResulttext] = useState("hola mi amore");
  return (
    <View style={styles.container}>
      {/* Building language selector */}
      <View style={styles.languageContainer}>
        <TouchableOpacity
          style={styles.languageOption}
          onPress={() => navigation.navigate("LanguageSelector")}
        >
          <Text style={styles.languageOptionText}>English</Text>
        </TouchableOpacity>

        <View style={styles.languageSelector}>
          <AntDesign name="arrowright" size={24} color={colors.lightGray} />
        </View>

        <TouchableOpacity
          style={styles.languageOption}
          onPress={() => navigation.navigate("LanguageSelector")}
        >
          <Text style={styles.languageOptionText}>French</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="enter text"
          multiline
          style={styles.textInput}
          onChangeText={(text) => setEnteredtext(text)}
        />

        <TouchableOpacity
          style={styles.iconContainer}
          disabled={enteredtext === ""}
          onPress={() => console.log("Ouch i was clicked")}
        >
          <Ionicons
            name="arrow-forward-circle-sharp"
            size={24}
            color={enteredtext !== "" ? colors.primary : colors.primaryDisabled}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{resulttext}</Text>
        <TouchableOpacity
          style={styles.iconContainer}
          disabled={resulttext === ""}
          onPress={() => console.log("Ouch i was clicked")}
        >
          <Ionicons
            name="copy"
            size={24}
            color={
              resulttext !== "" ? colors.textColor : colors.textColorDisabled
            }
          />
        </TouchableOpacity>
      </View>

      <View style={styles.historyContainer} >

      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  languageContainer: {
    flexDirection: "row",
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  languageOption: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  arrowContainer: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  languageOptionText: {
    color: colors.primary,
    fontFamily: "regular",
    letterSpacing: 0.3,
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  textInput: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: "regular",
    letterSpacing: 0.3,
    height: 90,
    color: colors.textColor,
  },
  iconContainer: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  resultContainer: {
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    flexDirection: "row",
    height: 90,
    paddingVertical: 15,
  },
  resultText: {
    fontFamily: "regular",
    letterSpacing: 0.3,
    color: colors.primary,
    flex: 1,
    marginHorizontal: 20,
  },
  historyContainer: {
    backgroundColor: colors.greyBackground,
    flex: 1,
    padding: 10,
  },
});
