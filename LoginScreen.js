import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Placeholder for login logic
    navigation.navigate("Profile"); // Navigate to the Profile screen after login
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../AwesomeProject")} // Replace with the actual path to your logo
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#FFF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#FFF"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.separator}>--- Or continue with ---</Text>
      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => {
          /* Handle Google login here */
        }}
      >
        <Text style={styles.googleButtonText}>Google Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text style={styles.signUpText}>Don’t have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8caab9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profileImage: {
    width: 100, // Adjust the size as needed
    height: 100,
    borderRadius: 50, // Half of width/height to make it round
    marginBottom: 20,
  },
  logo: {
    width: 200, // Set the width of your logo
    height: 100, // Set the height of your logo
    resizeMode: "contain", // This will ensure that your logo maintains its aspect ratio
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: "90%",
    backgroundColor: "#1b3f51",
    color: "#FFF",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    height: 50,
    width: "90%",
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#1b3f51",
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    color: "#FFF",
    marginVertical: 20,
  },
  googleButton: {
    height: 50,
    width: "90%",
    backgroundColor: "#db4437", // Google's red color
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  googleButtonText: {
    color: "#FFF",
    fontSize: 18,
  },
  signUpText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default LoginScreen;
