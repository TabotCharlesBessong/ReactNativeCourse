import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Platform } from "react-native-web";

const isAndroid = Platform.OS === "android";

const height = StatusBar.currentHeight;

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? height : 0,
  },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
