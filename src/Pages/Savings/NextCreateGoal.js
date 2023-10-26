import {
  StyleSheet,
  Image,
  TextInput,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
const house = require("../../images/houses.png");

const AddCreateGoalNext = () => {
  const navigation = useNavigation();
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [other, setOther] = useState("");
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
  const handleOtherChange = (other) => {
    setOther(other);
  };
  const data = [
    {
      label: "Daily",
      value: "Daily",
    },
    {
      label: "Weekly",
      value: "Weekly",
    },
    {
      label: "Monthly",
      value: "Monthly",
    },
    {
      label: "Anytime",
      value: "Anytime",
    },
  ];

  const dataTwo = [
    {
      label: "Yes, I’d like my savings automated",
      value: "Yes, I’d like my savings automated",
    },
    {
      label: "No, I’ll make my savings myself",
      value: "No, I’ll make my savings myself",
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
            width: "100%",
            marginBottom: 220,
          }}
        >
          <View>
            <View
              style={{
                marginTop: 32,
                width: "100%",
              }}
            >
              <Text style={[styles.header, { color: "#Ff9100" }]}>
                Final Setup Stage
              </Text>
              <Text style={styles.content}>Finalize your goal settings</Text>
            </View>

            <Image
              style={{
                marginTop: 24,
                width: "100%",
                borderRadius: 8,
                height: 200,
              }}
              source={house}
            />
            <View
              style={{
                marginTop: 24,
              }}
            >
              <View>
                <Text style={styles.textLabel}>
                  Preferred amount to save on a daily basis
                </Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  value={email}
                  placeholder="Enter Preferred amount to save on a daily basis"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handleEmailChange}
                />
              </View>
              <View>
                <Text style={styles.textLabel}>Preferred Time</Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("name")}
                  onBlur={() => setFocusedInput(null)}
                  value={name}
                  placeholder="What’s Preferred Time"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handleNameChange}
                />
              </View>
              <View>
                <Text style={styles.textLabel}>Set Start Date</Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("gender")}
                  onBlur={() => setFocusedInput(null)}
                  value={gender}
                  placeholder="Individual"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handleGenderChange}
                />
              </View>

              <View>
                <Text style={styles.textLabel}>Set Withdrawal Date</Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("other")}
                  onBlur={() => setFocusedInput(null)}
                  value={other}
                  placeholder="Individual"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handleOtherChange}
                />
              </View>

              <View>
                <Text style={styles.textLabel}>Select Primary Source</Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("password")}
                  onBlur={() => setFocusedInput(null)}
                  value={password}
                  placeholder="Individual"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handlePasswordChange}
                />
              </View>
            </View>
            <View style={styles.flex}>
              <Switch></Switch>
              <Text style={styles.flexColor}>
                I acknowledge and agree that in the event I do not achieve the
                Goal amount of (₦340,000.00) by the set withdrawal date, I will
                forfeit the interest accrued on this Goal savings. Additionally,
                I understand that breaking the Goal before the withdrawal date
                will result in the loss of all accrued interest and I will be
                responsible for bearing the 1% payment gateway charge for
                processing my deposits into this Goal
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                // onPress={() => navigation.navigate("KYCProcessing")}
              >
                <Text style={styles.buttonText}>Create Goal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonIn, { marginTop: 12 }]}
                // onPress={() => navigation.navigate("KYCProcessing")}
              >
                <Text style={[styles.buttonText, {color:'#ff9100'}]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddCreateGoalNext;

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
    fontSize: 28,
    fontFamily: "MontserratSemiBold",
    textAlign: "left",
    color: "#1E0700",
  },
  content: {
    color: "#1A374D",
    fontFamily: "MontserratLight",
    marginTop: 4,
    fontSize: 16,
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
  buttonIn: {
    height: 56,
    borderColor: "#ff9100",
    borderWidth:1,
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
  flex: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
    marginTop: 48,
  },
  flexColor: {
    color: "#1A374D",
    fontSize: 14,
    fontFamily: "MontserratLight",
    width: "80%",
  },
});
