import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import UserInput from "../components/auth/UserInput";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign up</Text>
      <UserInput filed="Name" value={name} setValue={setName} />
      <UserInput filed="Email" value={email} setValue={setEmail} />
      <UserInput filed="Password" value={password} setValue={setPassword} />

      <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text>
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