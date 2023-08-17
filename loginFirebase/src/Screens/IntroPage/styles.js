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
     height: 400,
     marginBottom: 20,
     borderRadius: 15,
     marginTop: 35,
     marginBottom: 40,
   },
   titleContainer: {
    position: "absolute",
    top: 70,
    left: "20%",
    textAlign: "center",
    width: 250
   },
   title: {
     fontSize: 25,
     fontWeight: "900",
     color: "#FFFFFF",
     textAlign: "center",
     letterSpacing: 0.9,
     textTransform: "capitalize",
   },
   textContainer: {
     alignItems: "center",
   },
   text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000",
    letterSpacing: 0.9,
    marginBottom: 10,
    textTransform: "capitalize",
   },
   subtext: {
    fontSize: 16,
    fontWeight: "400",
    color: "#6B7280",
    marginHorizontal: 20,
    textAlign: "center",
   },
   buttonContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
   },
 
 });

 export default styles;