import {
  StyleSheet,
  Image,
  TextInput,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome5 } from "react-native-vector-icons";

const PersonalFormTwo = () => {
  const navigation = useNavigation();
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const currentDate = new Date();
  const [dates, setDates] = useState(new Date());
  const [Errdates, ErrSetdates] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [image, setImage] = useState(null);
  const [imagess, setImagess] = useState(null);

  const onChange = (event, selectedDate) => {
    ErrSetdates("");
    setShowPicker(Platform.OS === "ios"); // For iOS, show the picker in modal
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
    // console.log(date,'date')
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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const pickImager = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImagess(result.assets[0].uri);
    }
  };



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
                <Text style={[styles.textLabel, { color: "#66666675" }]}>
                  Documents
                </Text>
                <Text style={[styles.textLabel, { color: "#66666675" }]}>
                  - - - -{" "}
                </Text>
                <Text style={[styles.textLabel, { color: "#66666675" }]}>
                  Account
                </Text>
              </View>
              <View>
                <Text style={styles.textLabel}>
                  NIN or International Passport
                </Text>
                <TouchableOpacity onPress={pickImager}>
                  {imagess ? (
                    <Image
                      source={{ uri: imagess }}
                      style={{
                        width: "100%",
                        borderRadius: 12,
                        height: 200,
                      }}
                    />
                  ) : (
                    <View
                      //source={imageHouse}
                      style={{
                        width: "100%",
                        height: 200,
                        borderRadius: 12,
                        backgroundColor: "#d9d9d935",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: -12,
                      }}
                    >
                      <FontAwesome5 name="paste" size={48} color="#66666645" />
                      <Text
                        style={[
                          styles.textLabel,
                          {
                            fontFamily: "MontserratRegular",
                            fontSize: 14,
                            color: "#66666685",
                          },
                        ]}
                      >
                        Upload your NIN or International Passport
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>

              <View>
                <Text style={styles.textLabel}>Utility bill</Text>
                <TouchableOpacity onPress={pickImage}>
                  {image ? (
                    <Image
                      source={{ uri: image }}
                      style={{
                        width: "100%",
                        borderRadius: 12,
                        height: 200,
                      }}
                    />
                  ) : (
                    <View
                      //source={imageHouse}
                      style={{
                        width: "100%",
                        height: 200,
                        borderRadius: 12,
                        backgroundColor: "#d9d9d935",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: -12,
                      }}
                    >
                      <FontAwesome5 name="paste" size={48} color="#66666645" />
                      <Text
                        style={[
                          styles.textLabel,
                          {
                            fontFamily: "MontserratRegular",
                            fontSize: 14,
                            color: "#66666685",
                          },
                        ]}
                      >
                        Upload your Utility bill
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("PersonalFormThree")}
                >
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalFormTwo;

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
