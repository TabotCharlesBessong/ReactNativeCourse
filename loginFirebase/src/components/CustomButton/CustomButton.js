import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  const background = type === "PRIMARY" ? "#FFFFFF" : "#4338CA";
  // make text distinguishable for each button
  const color = type === "PRIMARY" ? "#000000" : "#FFFFFF";

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: background }]}
    >
      <Text style={[styles.text, { color: color }]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "45%",
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
  },
});

export default CustomButton;
