import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "../constant/colors";
import supportedLanguages from "../utils/supportedLanguages";
import axios from "axios"

const HomeScreen = ({ navigation,route }) => {

  const params = route.params || {}
  const [enteredtext, setEnteredtext] = useState("");
  const [resulttext, setResulttext] = useState("hola mi amore");
  const [languageTo, setLanguageTo] = useState('fr')
  const [languageFrom, setLanguageFrom] = useState('en')

  useEffect(() => {
    if (params.languageTo) {
      setLanguageTo(params.languageTo)
    }if (params.languageFrom) {
      setLanguageFrom(params.languageFrom)
    }
  },[params.languageTo,params.languageFrom])

  const onSubmit =  useCallback (() => {
    // const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
      params: {
        text: 'Hello, world!!',
        to: 'es',
        from: 'en'
      },
      headers: {
        'X-RapidAPI-Key': 'aa90f9069dmsh77129c141cac057p10e255jsn3b7b6110ee58',
        'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data)
    }).catch(function (error) {
      console.error(error)
    })
  })
  return (
    <View style={styles.container}>
      {/* Building language selector */}
      <View style={styles.languageContainer}>
        <TouchableOpacity
          style={styles.languageOption}
          onPress={() => navigation.navigate("LanguageSelector",{title:'Translate from',selected:languageFrom,mode:'from'})}
        >
          <Text style={styles.languageOptionText}>{supportedLanguages[languageFrom]}</Text>
        </TouchableOpacity>

        <View style={styles.languageSelector}>
          <AntDesign name="arrowright" size={24} color={colors.lightGray} />
        </View>

        <TouchableOpacity
          style={styles.languageOption}
          onPress={() => navigation.navigate("LanguageSelector",{title:'Translate to',selected:languageTo,mode:'to'})}
        >
          <Text style={styles.languageOptionText}>{supportedLanguages[languageTo]}</Text>
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
          onPress={onSubmit}
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
