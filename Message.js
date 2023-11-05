import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../AwesomeProject/assets/Untitled design/logo1.png")} // Replace with the path to your start image
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the App</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")} // Navigate to the Login screen
      >
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff", // Or any color you prefer
  },
  image: {
    width: "100%", // Or adjust to your preference
    height: "60%", // Or adjust to your preference
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#000", // Or any color you prefer
    padding: 20,
    borderRadius: 5,
    marginTop: 30, // Or adjust based on your layout
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Text;
