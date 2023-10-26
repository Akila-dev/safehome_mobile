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
import { useNavigation } from "@react-navigation/native";
const house = require("../../images/houses.png");
import { FontAwesome5 } from "react-native-vector-icons";

const ViewGoal = () => {
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
                position: "relative",
              }}
            >
              <Image
                style={{
                  marginTop: 24,
                  width: "100%",
                  borderRadius: 8,
                  height: 200,
                }}
                source={house}
              />
              <Text
                style={{
                  position: "absolute",
                  bottom: '35%',
                  right: '35%',
                  color:'#Ffffff',
                  fontSize: 28,
                  textAlign:'center',
                  fontFamily:'MontserratSemiBold'
                }}
              >
                Goal Title
              </Text>
            </View>
            <View>
              <View style={styles.flex}>
                <View style={styles.flexDisplay}>
                  <Text style={styles.content}>Goal Balance</Text>
                  <Text style={styles.contentNaira}>₦50,000</Text>
                </View>
                <View style={styles.flexDisplay}>
                  <Text style={styles.content}>Overall Set Goal Amount</Text>
                  <Text style={styles.contentNaira}>₦500,000</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("AddFundsGoal")}
            >
              <Text style={styles.buttonText}>Add Funds to Goal</Text>
            </TouchableOpacity>
            <View>
              <View style={[styles.flex, { marginTop: 16 }]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("GoalSettings")}
                  style={[styles.flexDisplays, { borderColor: "#ff9100" }]}
                >
                  <FontAwesome5 name="cog" color="#ff9100" size={22} />
                  <Text style={styles.contentGoal}>Goal Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate("ExtendedGoal")}
                  style={[styles.flexDisplays, { borderColor: "#ff9100" }]}
                >
                  <FontAwesome5 name="calendar" color="#ff9100" size={22} />
                  <Text style={styles.contentGoal}>Extend Goal</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <View style={[styles.flex, { marginTop: 16 }]}>
                <View style={styles.flexDisplay}>
                  <Text style={styles.content}>Start Date</Text>
                  <Text style={styles.contentNairas}>8th August 2023</Text>
                </View>
                <View style={styles.flexDisplay}>
                  <Text style={styles.content}>Withdrawal Date</Text>
                  <Text style={styles.contentNairas}>7th August 2024</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={[styles.flex, { marginTop: 16 }]}>
                <View style={styles.flexDisplay}>
                  <Text style={styles.content}>Frequency</Text>
                  <Text style={styles.contentNairas}>Daily</Text>
                </View>
                <View style={styles.flexDisplay}>
                  <Text style={styles.content}>Goal Amount</Text>
                  <Text style={styles.contentNairas}>₦500,000</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={[styles.flex, { marginTop: 16 }]}>
                <View style={styles.flexDisplay}>
                  <Text style={styles.content}>Interest per Annum</Text>
                  <Text style={styles.contentNairas}>9%</Text>
                </View>
                <View style={styles.flexDisplay}>
                  <Text style={styles.content}>Days Left</Text>
                  <Text style={styles.contentNairas}>307</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewGoal;

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
    fontSize: 12,
  },
  contentNaira: {
    color: "#1A374D",
    fontFamily: "MontserratSemiBold",
    marginTop: 4,
    fontSize: 14,
  },
  contentNairas: {
    color: "#1A374D",
    fontFamily: "MontserratLight",
    marginTop: 1,
    fontSize: 14,
  },
  contentGoal: {
    color: "#ff9100",
    fontFamily: "MontserratSemiBold",
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
    marginTop: 16,
    padding: 16,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonIn: {
    height: 56,
    borderColor: "#ff9100",
    borderWidth: 1,
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
  flexDisplay: {
    flexDirection: "column",
    width: "48%",
    gap: 12,
    borderColor: "#66666635",
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
  },
  flexDisplays: {
    flexDirection: "row",
    width: "48%",
    gap: 12,
    borderColor: "#66666635",
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  flexColor: {
    color: "#1A374D",
    fontSize: 14,
    fontFamily: "MontserratLight",
    width: "80%",
  },
});
