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
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "react-native-vector-icons";

const LoanType = () => {
  const navigation = useNavigation();
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const headerTintColor = "#000000";

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerTintColor,
      headerBackTitleVisible: false,
    });
  }, [navigation]);

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
    {
      label: "My Funds",
      value: "My Funds",
    },
    {
      label: "Debit Card",
      value: "Debit Card",
    },
    {
      label: "Bank Transfer",
      value: "Bank Transfer",
    },
  ];

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
          <View>
            <View
              style={{
                marginTop: 32,
              }}
            >
              <Text style={styles.header}>Select loan type</Text>
              <Text style={styles.content}>
                Select the type of loan you are applying for
              </Text>
            </View>
            <View
              style={{
                marginTop: 24,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("PersonalLoan")}
                style={[styles.textInput]}
              >
                <Text style={styles.content}>Personal Loan</Text>
                <FontAwesome5 name="arrow-right" size={16} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("PersonalLoan")}
                style={[styles.textInput, { marginTop: 18 }]}
              >
                <Text style={styles.content}>BNPL Loan</Text>
                <FontAwesome5 name="arrow-right" size={16} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#1E0700" }]}
                onPress={() => navigation.navigate("PersonalLoan")}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoanType;

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
    fontFamily: "MontserratSemiBold",
    textAlign: "left",
    color: "#1E0700",
  },
  content: {
    color: "#1A374D",
    fontFamily: "MontserratLight",
    marginTop: 4,
    fontSize: 14,
  },
  textInput: {
    height: 56,
    borderRadius: 8,
    backgroundColor: "#F9F9F9",
    fontSize: 14,
    fontFamily: "Regular",
    padding: 12,
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 24,
    width: "100%",
  },
  textLabel: {
    marginTop: 24,
    fontFamily: "Regular",
    fontSize: 16,
    color: "#1A374D",
  },
  buttonText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    color: "#ffffff",
  },
  button: {
    height: 56,
    backgroundColor: "#ff9100",
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
    marginTop: 4,
    // color: gray
    backgroundColor: "#f9f9f9",
  },
});
