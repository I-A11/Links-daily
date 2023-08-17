import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./components/Welcome";
import { WebView } from "react-native-webview";

export default function App() {
  const names = ["Islam", "Yasmin", "Farida", "Zain"];
  return (
    <WebView
      source={{ uri: "https://home-style.netlify.app/" }}
      style={{ flex: 1 }}
    />
    // <View style={styles.container}>
    //   <Text>Hello World</Text>
    //   <StatusBar style="auto" />
    //   {names.map((item) => (
    //     <Welcome name={item} key={item} />
    //   ))}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
