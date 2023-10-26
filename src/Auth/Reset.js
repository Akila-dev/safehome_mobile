import {
  StyleSheet,
  Image,
  TextInput,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
const logo = require("../images/Logo.png");
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";

const ResetPassword = () => {
  const navigation = useNavigation();
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleEmailChange = (email) => {
    setEmail(email);
  };
  const handleNameChange = (name) => {
    setName(name);
  };
  const handlePasswordChange = (password) => {
    setPasssword(password);
  };
  const handleGenderChange = (gender) => {
    setGender(gender);
  };
  const data = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  const headerTintColor = "#000000";

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerTintColor,
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: 16,
            marginBottom: 220,
          }}
        >
          <View style={styles.viewForLogo}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View>
            <View style={styles.viewForLogo}>
              <Text style={styles.header}>Reset Password</Text>
              <Text style={styles.content}>Securely sign up to safeHome</Text>
            </View>
            <View
              style={{
                marginTop: 24,
              }}
            >
                  {/* 
              <View>
                <Text style={styles.textLabel}>Email</Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  value={email}
                  placeholder="Enter your Email Address"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handleEmailChange}
                />
              </View>
            */}
            <View>
                  <Text style={styles.textLabel}>Create Password</Text>
                  <TextInput
                    style={styles.textInput} // Use the dynamically defined style
                    onFocus={() => setFocusedInput("name")}
                    onBlur={() => setFocusedInput(null)}
                    value={name}
                    placeholder="Enter your Surname Name"
                    placeholderTextColor={"#1e1e1e45"}
                    onChangeText={handleNameChange}
                  />
                </View>
  
                <View>
                  <Text style={styles.textLabel}>Confirm Password</Text>
                  <TextInput
                    style={styles.textInput} // Use the dynamically defined style
                    onFocus={() => setFocusedInput("password")}
                    onBlur={() => setFocusedInput(null)}
                    value={password}
                    placeholder="Enter your Password"
                    placeholderTextColor={"#1e1e1e45"}
                    onChangeText={handlePasswordChange}
                  />
                </View>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("NavBar")}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
            <View>
              {/* <Text
                style={[
                  styles.textLabel,
                  {
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    textAlign: "center",
                  },
                ]}
              >
                Did you Remember?{" "}
                <Text
                  onPress={() => navigation.navigate("Login")}
                  style={styles.orangeText}
                >
                  Login
                </Text> 
              </Text>*/}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  logo: {
    height: 60,
    width: 160,
  },
  viewForLogo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,
  },
  header: {
    fontSize: 24,
    fontFamily: "Bold",
  },
  content: {
    color: "#1A374D",
    fontFamily: "Light",
    marginTop: 4,
    fontSize: 14,
  },
  textInput: {
    height: 56,
    borderRadius: 8,
    backgroundColor: "#F9F9F9",
    fontSize: 14,
    fontFamily: "Regular",
    padding: 20,
    marginTop: 4,
    // marginBottom: 24,
    width: "100%",
  },
  textLabel: {
    marginTop: 24,
    fontFamily: "Regular",
    fontSize: 16,
  },
  buttonText: {
    fontFamily: "Regular",
    fontSize: 16,
    color: "#ffffff",
  },
  button: {
    height: 56,
    backgroundColor: "#1E0700",
    marginTop: 64,
    padding: 16,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  orangeText: {
    color: "#FF6100",
    textAlign: "center",
    fontFamily: "Regular",
    fontSize: 16,
  },
  dropdown: {
    height: 55,
    // borderColor: `${theme.text}65`,
    //  borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 24,
    backgroundColor: "#f9f9f9",
  },
});
