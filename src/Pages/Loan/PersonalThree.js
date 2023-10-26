import {
  StyleSheet,
  TextInput,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

const PersonalFormThree = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [name, setName] = useState("");
  const [dates, setDates] = useState(new Date());
  const [modalVisible, setModalVisible] = React.useState(false);

  const handlePress = () => {
    setModalVisible(false);
    navigation.navigate("Charts");
  };

  const handlePresss = () => {
    setModalVisible(true);
    //navigation.navigate("Charts");
  };

  const onChange = (event, selectedDate) => {
    ErrSetdates("");
    setShowPicker(Platform.OS === "ios");
    if (selectedDate) {
      setDates(selectedDate);
      console.log(selectedDate, dates, "ggg");
    } else if (selectedDate === " ") {
      ErrSetdates("Select a Pickup Dater");
    }
  };
  console.log(dates, dates, "datesdates");
  const showDatepicker = () => {
    setShowPicker(true);
  };

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: "white",
              height: "auto",
              position: "absolute",
              width: "100%",
              paddingBottom: 24,
              padding: 16,
              gap: 24,
            }}
          >
            <TouchableOpacity
              onPress={handlePress}
              style={styles.closeModalButton}
            >
              <FontAwesome5 size={24} color="#000000" name="times" />
            </TouchableOpacity>

            <View
              style={{
                gap: 48,
              }}
            >
              <View style={styles.container}>
                <Text style={styles.message}>Loan Approved</Text>
                <Text style={styles.messages}>
                  Congratulation, your Loan has been approved and we’ve credited
                  your account.
                </Text>
                <View
                  style={{
                    padding: 12,
                    marginTop:48,
                    marginBottom: 48,
                    justifyContent:'center',
                    alignItems:'center'
                  }}
                >
                  <Icon name="check-circle" size={160} color="#67CE67" />
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#008000",
                    width: "100%",
                    height: 55,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={handlePress}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      fontFamily: "MontserratSemiBold",
                    }}
                  >
                    Back to Home
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
            <View style={[styles.viewForLogo, { alignItems: "flex-start" }]}>
              <Text style={[styles.header, { textAlign: "left" }]}>
                Apply for Loan
              </Text>
              <Text style={styles.content}>
                Kindly enter the necessary details, to be qualified for your
                loan
              </Text>
            </View>
            <View
              style={{
                marginTop: 24,
              }}
            >
              <View
                style={{
                  marginTop: 12,
                  marginBottom: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={[styles.textLabel, { color: "#8D4000" }]}>
                  Personal
                </Text>
                <Text style={[styles.textLabel, { color: "#8D4000" }]}>
                  - - - -{" "}
                </Text>
                <Text style={[styles.textLabel, { color: "#8D4000" }]}>
                  Documents
                </Text>
                <Text style={[styles.textLabel, { color: "#8D4000" }]}>
                  - - - -{" "}
                </Text>
                <Text style={[styles.textLabel, { color: "#8D4000" }]}>
                  Account
                </Text>
              </View>
              <View
                style={{
                  marginTop: 48,
                }}
              >
                <Text
                  style={[styles.textLabel, { color: "#66666675", margin: 0 }]}
                >
                  Full name
                </Text>

                <Text
                  style={[
                    styles.textLabel,
                    {
                      fontSize: 18,
                      paddingTop: 12,
                      marginTop: 6,
                      marginBottom: 32,
                    },
                  ]}
                >
                  Full name
                </Text>
              </View>

              <View>
                <Text
                  style={[styles.textLabel, { color: "#66666675", margin: 0 }]}
                >
                  Email Address
                </Text>

                <Text
                  style={[
                    styles.textLabel,
                    {
                      fontSize: 18,
                      paddingTop: 12,
                      marginTop: 6,
                      marginBottom: 32,
                    },
                  ]}
                >
                  Email Address
                </Text>
              </View>

              <View>
                <Text
                  style={[styles.textLabel, { color: "#66666675", margin: 0 }]}
                >
                  Contact Number
                </Text>

                <Text
                  style={[
                    styles.textLabel,
                    {
                      fontSize: 18,
                      paddingTop: 12,
                      marginTop: 6,
                      marginBottom: 32,
                    },
                  ]}
                >
                  Contact Number
                </Text>
              </View>

              <View>
                <Text
                  style={[styles.textLabel, { color: "#66666675", margin: 0 }]}
                >
                  Home address
                </Text>

                <Text
                  style={[
                    styles.textLabel,
                    {
                      fontSize: 18,
                      paddingTop: 12,
                      marginTop: 6,
                      marginBottom: 32,
                    },
                  ]}
                >
                  Home address
                </Text>
              </View>

              <View>
                <Text
                  style={[styles.textLabel, { color: "#66666675", margin: 0 }]}
                >
                  Guarantor's name
                </Text>

                <Text
                  style={[
                    styles.textLabel,
                    {
                      fontSize: 18,
                      paddingTop: 12,
                      marginTop: 6,
                      marginBottom: 32,
                    },
                  ]}
                >
                  Guarantor's name
                </Text>
              </View>
              <View>
                <Text
                  style={[styles.textLabel, { color: "#66666675", margin: 0 }]}
                >
                  Guarantor's Contact
                </Text>

                <Text
                  style={[
                    styles.textLabel,
                    {
                      fontSize: 18,
                      paddingTop: 12,
                      marginTop: 6,
                      marginBottom: 32,
                    },
                  ]}
                >
                  Guarantor's Contact
                </Text>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={handlePresss}>
                  <Text style={styles.buttonText}>Yes is Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonn}
                  onPress={() => navigation.navigate("PersonalFormOne")}
                >
                  <Text style={styles.buttonnText}>No, it's not Correct</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalFormThree;

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
  input: {
    borderWidth: 1,
    borderColor: "#00000060",
    color: "#000000",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    height: 53,
    marginTop: 24,
    width: "100%",
    fontFamily: "MontserratRegular",
  },
  textLabel: {
    // marginTop: 32,
    fontFamily: "Regular",
    fontSize: 16,
  },
  buttonText: {
    fontFamily: "Regular",
    fontSize: 16,
    color: "#ffffff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  closeModalButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "flex-end",
    width: "100%",
  },
  closeModalButtonText: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
  },
  transaction: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Regular",
    marginBottom: 8,
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#008000",
    fontFamily: "MontserratSemiBold",
    textAlign: "center",
  },
  messages: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    color: "#666666",
    fontFamily: "MontserratRegular",
    textAlign: "center",
    paddingLeft: 24,
    paddingRight: 24,
  },
  buttonnText: {
    fontFamily: "Regular",
    fontSize: 16,
    color: "#000000",
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
  buttonn: {
    height: 56,
    borderColor: "#1E0700",
    borderWidth: 1,
    marginTop: 6,
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
