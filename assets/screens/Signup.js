import { Text, View, StyleSheet, TextInput } from "react-native";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Name:</Text>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};
export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "#333",
    textAlign: "center",
  },
  inputLabel: {
    fontWeight: "500",
    color: "#333",
  },
  inputContainer: {
    marginHorizontal: 24,
    marginVertical: 12,
  },

  input: {
    borderBottomWidth: 0.5,
    height: 48,
    borderBottomColor: "#8e93a1",
    marginBottom: 30,
  },
});
