import { StyleSheet } from "react-native";

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
    color: "#3D5AFE",
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
  pressable: {
    alignItems: "flex-end",
    textAlign: "right",
  },
  text: {
    textAlign: "right",
    fontWeight: "bold",
    color: "#4338CA",
    letterSpacing: 0.4,
    textTransform: "capitalize",
    marginBottom: 10,
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
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    letterSpacing: 0.9,
    textAlign: "center",
    color: "#FFFFFF",
  },
  subtext: {
    fontWeight: "500",
    letterSpacing: 0.7,
    color: "#131418",
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: "row",
    textAlign: "center",
  },
  sub: {
    fontWeight: "500",
    letterSpacing: 0.7,
    color: "#4338CA",
  },
});

export default styles;
