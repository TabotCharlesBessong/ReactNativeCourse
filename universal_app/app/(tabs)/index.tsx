import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Welcome to the home screen</Text>
      <Link href="/about" style={styles.button}>About</Link>
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
  }
})