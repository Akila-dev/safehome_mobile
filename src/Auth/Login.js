import {
  StyleSheet,
  Image,
  TextInput,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
const logo = require("../images/Logo.png");
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const handleEmailChange = (email) => {
    setEmail(email);
  };
  const handlePasswordChange = (password) => {
    setPasssword(password);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          padding: 16,
        }}
      >
        <View style={styles.viewForLogo}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View>
          <View style={styles.viewForLogo}>
            <Text style={styles.header}>Login to your account</Text>
            <Text style={styles.content}>Securely login to your safeHome</Text>
          </View>
          <View
            style={{
              marginTop: 24,
            }}
          >
            <View>
              <Text style={styles.textLabel}>Email</Text>
              <TextInput
                style={styles.textInput} // Use the dynamically defined style
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
                value={email}
                placeholder="Enter your email address"
                placeholderTextColor={"#1e1e1e45"}
                onChangeText={handleEmailChange}
              />
            </View>
            <View>
              <Text style={styles.textLabel}>Password</Text>
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
              onPress={() => navigation.navigate("NavBar")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <View>
              <Text
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
                Don’t have an account?{" "}
                <Text
                  onPress={() => navigation.navigate("CreateAccount")}
                  style={styles.orangeText}
                >
                  Create account
                </Text>
              </Text>
              <Text
                onPress={() => navigation.navigate("Forgot")}
                style={[styles.orangeText, { marginTop: 12 }]}
              >
                Forgot Password?
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
});
