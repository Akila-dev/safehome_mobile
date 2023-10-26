import React, { useState, useRef } from "react";
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
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
const logo = require("../images/Logo.png");

const PassVerify = () => {
  const navigation = useNavigation();
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Fix the typo here
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleEmailChange = (email) => {
    setEmail(email);
  };
  const handleNameChange = (name) => {
    setName(name);
  };
  const handlePasswordChange = (password) => {
    setPassword(password);
  };
  const handleGenderChange = (gender) => {
    setGender(gender);
  };
  const data = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const handleOTPChange = (index, value) => {
    if (value.match(/^[0-9]$/)) {
      otp[index] = value;
      setOtp([...otp]);
      if (index < 5 && value !== "") {
        inputRefs[index + 1].current.focus();
      }
    }
  };
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
              <Text style={styles.header}>Verify it's you</Text>
              <Text style={styles.content}>
                A code has been sent to Example@gmail.com, kindly input the code
                to confirm Signup.
              </Text>
            </View>
            <View style={{ marginTop: 24 }}>
              <Text style={styles.textLabel}>Enter 6 Digit Code</Text>
              <View style={styles.container}>
                {otp.map((value, index) => (
                  <TextInput
                    key={index}
                    style={[
                      styles.input,
                      focusedInput === index
                        ? { borderColor: "#FF6100" }
                        : null,
                    ]}
                    value={value}
                    onChangeText={(text) => handleOTPChange(index, text)}
                    ref={inputRefs[index]}
                    keyboardType="numeric"
                    maxLength={1}
                    onFocus={() => setFocusedInput(index)}
                    onBlur={() => setFocusedInput(null)}
                  />
                ))}
              </View>
            </View>
            <View>
              <Text
                style={[
                  styles.textLabel,
                  {
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    textAlign: "right",
                    marginTop: 12,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.orangeText,
                    {
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      textAlign: "right",
                      marginTop: 12,
                    },
                  ]}
                >
                  Resend Code
                </Text>
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("reset")}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PassVerify;

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
    fontSize: 36,
    fontFamily: "Bold",
    width: "100%",
    textAlign: "left",
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
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },
  input: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#00000045",
    textAlign: "center",
    fontSize: 20,
    margin: 5,
  },
});
