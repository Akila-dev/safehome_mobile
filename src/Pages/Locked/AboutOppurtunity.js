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

const AboutOpp = () => {
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
          <Text style={[styles.header, { color: "#8D4000", fontSize: 16 }]}>
            About This Opportunity
          </Text>
          <Text style={[styles.content, { fontSize: 14 }]}>
            Read about this investment opportunity below.
          </Text>
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
                  height: 240,
                }}
                source={house}
              />
            </View>

            <View>
              <Text
                style={[
                  styles.content,
                  { fontSize: 14, lineHeight: 22, marginTop: 24 },
                ]}
              >
                Lorem ipsum dolor sit amet consectetur. Proin risus elit
                vulputate sed ornare aliquet pellentesque. Dignissim venenatis
                dolor ultrices interdum imperdiet pharetra imperdiet tincidunt.
                Volutpat nunc eget lacinia diam libero scelerisque elit sit. Sit
                condimentum montes ante egestas sed sed odio at habitasse.
              </Text>
              <Text
                style={[
                  styles.content,
                  { fontSize: 14, lineHeight: 22, marginTop: 24 },
                ]}
              >
                Lorem ipsum dolor sit amet consectetur. Proin risus elit
                vulputate sed ornare aliquet pellentesque. Dignissim venenatis
                dolor ultrices interdum imperdiet pharetra imperdiet tincidunt.
                Volutpat nunc eget lacinia diam libero scelerisque elit sit. Sit
                condimentum montes ante egestas sed sed odio at habitasse.
              </Text>
            </View>
            <View style={{
                flexDirection:'row',
                width:'100%',
                gap:12
            }}>
              <Image
                style={{
                  marginTop: 24,
                width: "30%",
                  borderRadius: 8,
                  height: 160,
                }}
                source={house}
              />
              <Image
                style={{
                  marginTop: 24,
                width: "30%",
                  borderRadius: 8,
                  height: 160,
                }}
                source={house}
              />
              <Image
                style={{
                  marginTop: 24,
                width: "30%",
                  borderRadius: 8,
                  height: 160,
                }}
                source={house}
              />
            </View>
            <TouchableOpacity
              style={[styles.button, { marginTop: 48 }]}
              onPress={() => navigation.navigate("LockedFundForm")}
            >
              <Text style={styles.buttonText}> Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutOpp;

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
    color: "#8D4000",
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
    backgroundColor: "#8D4000",
    marginTop: 16,
    padding: 16,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonIn: {
    height: 56,
    borderColor: "#8D4000",
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
    width: "100%",
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
