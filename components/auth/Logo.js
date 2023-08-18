import { Text, View, StyleSheet, Image } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.containerImage}
        source={require("../../assets/logo.jpeg")}
      />
    </View>
  );
};
export default Logo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerImage: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});
