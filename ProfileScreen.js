import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";

// The navigation prop needs to be passed into the ProfileScreen function for navigation to work
const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [childTask, setChildTask] = useState(null);
  const [shareSummary, setShareSummary] = useState("");
  const [settings, setSettings] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [profilePic, setProfilePic] = useState(
    "https://via.placeholder.com/150"
  );

  const handleLogout = () => {
    // Handle the logout logic here
  };

  const handleEditPicture = () => {
    // Handle the profile picture editing logic here
  };

  const handleMessagePage = () => {
    navigation.navigate("Message"); // Make sure 'Message' matches the name of the route in your navigator
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profilePicContainer}>
        <Image source={{ uri: profilePic }} style={styles.profilePic} />
        <TouchableOpacity
          style={styles.editProfilePic}
          onPress={handleEditPicture}
        >
          <Ionicons name="pencil" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Grade/Class"
        value={grade}
        onChangeText={setGrade}
      />

      <DropDownPicker
        open={openDropdown === "childTask"}
        value={childTask}
        items={[
          { label: "Task 1", value: "task1" },
          { label: "Task 2", value: "task2" },
          // ... other tasks
        ]}
        setOpen={(open) => {
          setOpenDropdown(open ? "childTask" : null);
        }}
        setValue={setChildTask}
        setItems={() => {}}
        style={styles.dropdown}
        placeholder="Select Child Task"
      />

      <TextInput
        style={styles.input}
        placeholder="Share Summary"
        value={shareSummary}
        onChangeText={setShareSummary}
      />

      <DropDownPicker
        open={openDropdown === "settings"}
        value={settings}
        items={[
          { label: "Setting 1", value: "setting1" },
          { label: "Setting 2", value: "setting2" },
          // ... other settings
        ]}
        setOpen={(open) => {
          setOpenDropdown(open ? "settings" : null);
        }}
        setValue={setSettings}
        setItems={() => {}}
        style={styles.dropdown}
        placeholder="Select Setting"
      />

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.startButton} onPress={handleMessagePage}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#94b7e9",
    padding: 20,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: "white",
    marginBottom: 10,
    zIndex: 6000, // ensure dropdown overlays other components
  },
  logoutButton: {
    backgroundColor: "#4cd965", // The color you provided
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  profilePicContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editProfilePic: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButton: {
    backgroundColor: "#4cd965", // Use appropriate color for the start button
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  startButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
