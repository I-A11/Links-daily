import { Text, View, StyleSheet, TextInput } from "react-native";

const UserInput = ({ filed, value, setValue }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{filed}:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
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
    height: 32,
    borderBottomColor: "#8e93a1",
    marginBottom: 30,
  },
});
