import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const SubmitButton = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.button}>Submit</Text>
    </TouchableOpacity>
  );
};
export default SubmitButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#ff9900",
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    marginHorizontal: 50,
    borderRadius: 24,
  },

  button: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "blue",
  },
});
