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
const house = require("../../images/houses.png");

const AddCreateGoal = () => {
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
            marginBottom: 220,
          }}
        >
          <View>
            <View
              style={{
                marginTop: 32,
              }}
            >
              <Text style={[styles.header, { color: "#Ff9100" }]}>
                Create a Goal
              </Text>
              <Text style={styles.content}>
                Reach your personal goal much faster
              </Text>
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
                <Text style={styles.textLabel}>Goal Title</Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  value={email}
                  placeholder="Enter a Goal Title"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handleEmailChange}
                />
              </View>
              <View>
                <Text style={styles.textLabel}>Purpose of Goal</Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("name")}
                  onBlur={() => setFocusedInput(null)}
                  value={name}
                  placeholder="What’s the purpose of this Goal?"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handleNameChange}
                />
              </View>
              <View>
                <Text style={styles.textLabel}>Overall Goal Amount</Text>
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
                <Text style={styles.textLabel}>
                  How will you prefer to save?
                </Text>
                <Dropdown
                  style={styles.dropdown}
                  itemTextStyle={{
                    fontSize: 17,
                    color: `#121212`,
                    fontFamily: "Regular",
                  }}
                  itemContainerStyle={{
                    backgroundColor: "#ffffff",
                  }}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholderTextColor={"#1e1e1e45"}
                  placeholder="How will you prefer to save?"
                  value={gender}
                  onChange={handleGenderChange}
                />
              </View>
              <View>
                <Text style={styles.textLabel}>
                  Do you want to automate your plan?
                </Text>
                <Dropdown
                  style={styles.dropdown}
                  itemTextStyle={{
                    fontSize: 17,
                    color: `#121212`,
                    fontFamily: "Regular",
                  }}
                  itemContainerStyle={{
                    backgroundColor: "#ffffff",
                  }}
                  data={dataTwo}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholderTextColor={"#1e1e1e45"}
                  placeholder="How will you prefer to save?"
                  value={gender}
                  onChange={handleGenderChange}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
               onPress={() => navigation.navigate("AddCreateGoalNext")}
              >
                <Text style={styles.buttonText}>Continue Setup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddCreateGoal;

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
