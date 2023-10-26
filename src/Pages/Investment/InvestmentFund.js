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

const InvestmentFundForm = () => {
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
            <View>
              <Text
                style={[
                  styles.content,
                  {
                    fontSize: 18,
                    marginTop: 24,
                    fontFamily: "MontserratSemiBold",
                  },
                ]}
              >
                SMART OFFICE LEKKI
              </Text>
            </View>
            <View
              style={{
                marginTop: 24,
              }}
            >
              <Text style={styles.header}>Lock Fund</Text>
              <Text style={styles.content}>
                Use the form below to purchase enough investment units.
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
                  <View
                    style={{
                      position: "absolute",
                      bottom: "10%",
                      top: "70%",
                      backgroundColor: "#Ffffff",
                      fontSize: 28,
                      height: 50,
                      width: "92%",
                      margin: 16,
                      textAlign: "center",
                      fontFamily: "MontserratSemiBold",
                    }}
                  >
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <View
                          style={[
                            styles.flexDisplay,
                            { borderWidth: 0, width: "100%" },
                          ]}
                        >
                          <Text style={[styles.content, { fontSize: 16 }]}>
                            <Text
                              style={{
                                color: "#Ff9100",
                                fontFamily: "MontserratSemiBold",
                              }}
                            >
                              Available Units:
                            </Text>
                            {""} 200
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 32,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "MontserratLight",
                  }}
                >
                  SMART OFFICE LEKKI
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "MontserratSemiBold",
                      color: "#ff9100",
                    }}
                  >
                    ₦10,000
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "MontserratLight",
                      color: "#666",
                      textAlign: "right",
                    }}
                  >
                    Per Unit
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.textLabel}>How many units?</Text>
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
                <Text style={styles.textLabel}>Amount to Pay</Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("name")}
                  onBlur={() => setFocusedInput(null)}
                  value={name}
                  placeholder="What’samount to pay"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handleNameChange}
                />
              </View>
              <View>
                <Text style={styles.textLabel}>Funding Source</Text>
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
                  placeholder="Select a Funding Source"
                  value={gender}
                  onChange={handleGenderChange}
                />
              </View>
            </View>
            <View style={styles.flex}>
              <Switch></Switch>
              <Text style={styles.flexColor}>
                I authorize SafeHome to Lock ₦25,000 immediately, automatically
                invest into the property and return it in full with interest
                when the investment matures. I confirm and approve this
                transaction. I hereby acknowledge that this Locked Savings
                CANNOT be broken once it has been created.
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                // onPress={() => navigation.navigate("KYCProcessing")}
              >
                <Text style={styles.buttonText}>Locked Funds</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InvestmentFundForm;

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
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
    textAlign: "left",
    //color: "#1E0700",
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
    fontFamily: "MontserratSemiBold",
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
    backgroundColor: "#1E0700",
    marginTop: 64,
    padding: 16,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
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
  flexColor: {
    color: "#1A374D",
    fontSize: 14,
    fontFamily: "MontserratLight",
    width: "80%",
  },
});
