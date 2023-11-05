import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CreateAccountScreen = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(
    require("../AwesomeProject/assets/Untitled design/20.png")
  );
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Placeholder for sign up logic
    Alert.alert("Sign Up", "Account created successfully!");
    // navigation.navigate("NextScreen"); // Navigate to the next screen after sign up
  };

  const editProfileImage = () => {
    // Placeholder for logic to edit the profile image
    Alert.alert("Edit Profile Image", "Profile image edited!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.profileImageContainer}
        onPress={editProfileImage}
      >
        <Image source={profileImage} style={styles.profileImage} />
        <Ionicons
          name="pencil"
          size={24}
          color="black"
          style={styles.editIcon}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Create Your Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#FFF"
        value={fullName}
        onChangeText={setFullName}
        autoCapitalize="words"
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

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.signInText}>Already have an account? Sign In</Text>
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
  profileImageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 100, // Set the size of your profile image
    height: 100,
    borderRadius: 50, // Half of width and height to make it round
    borderWidth: 2,
    borderColor: "#FFF",
  },
  editIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
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
  },
  buttonText: {
    color: "#1b3f51",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInText: {
    color: "#FFF",
    fontSize: 16,
    marginTop: 20,
  },
});

export default CreateAccountScreen;
