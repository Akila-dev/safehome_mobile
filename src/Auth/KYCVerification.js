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
const logo = require("../images/Logo.png");
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const KYCVerification = () => {
  const navigation = useNavigation();
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState(null);

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
      label: "Bank Verification Number(BVN)",
      value: "Bank Verification Number(BVN)",
    },
    {
      label: "National Identity Number(NIN)",
      value: "National Identity Number(NIN)",
    },
  ];

  const nigeriaStates = [
    {
      label: "Abia",
      value: "Abia",
    },
    {
      label: "Adamawa",
      value: "Adamawa",
    },
    {
      label: "Akwa Ibom",
      value: "Akwa Ibom",
    },
    {
      label: "Anambra",
      value: "Anambra",
    },
    {
      label: "Bauchi",
      value: "Bauchi",
    },
    {
      label: "Bayelsa",
      value: "Bayelsa",
    },
    {
      label: "Benue",
      value: "Benue",
    },
    {
      label: "Borno",
      value: "Borno",
    },
    {
      label: "Cross River",
      value: "Cross River",
    },
    {
      label: "Delta",
      value: "Delta",
    },
    {
      label: "Ebonyi",
      value: "Ebonyi",
    },
    {
      label: "Edo",
      value: "Edo",
    },
    {
      label: "Ekiti",
      value: "Ekiti",
    },
    {
      label: "Enugu",
      value: "Enugu",
    },
    {
      label: "FCT - Abuja",
      value: "FCT - Abuja",
    },
    {
      label: "Gombe",
      value: "Gombe",
    },
    {
      label: "Imo",
      value: "Imo",
    },
    {
      label: "Jigawa",
      value: "Jigawa",
    },
    {
      label: "Kaduna",
      value: "Kaduna",
    },
    {
      label: "Kano",
      value: "Kano",
    },
    {
      label: "Katsina",
      value: "Katsina",
    },
    {
      label: "Kebbi",
      value: "Kebbi",
    },
    {
      label: "Kogi",
      value: "Kogi",
    },
    {
      label: "Kwara",
      value: "Kwara",
    },
    {
      label: "Lagos",
      value: "Lagos",
    },
    {
      label: "Nasarawa",
      value: "Nasarawa",
    },
    {
      label: "Niger",
      value: "Niger",
    },
    {
      label: "Ogun",
      value: "Ogun",
    },
    {
      label: "Ondo",
      value: "Ondo",
    },
    {
      label: "Osun",
      value: "Osun",
    },
    {
      label: "Oyo",
      value: "Oyo",
    },
    {
      label: "Plateau",
      value: "Plateau",
    },
    {
      label: "Rivers",
      value: "Rivers",
    },
    {
      label: "Sokoto",
      value: "Sokoto",
    },
    {
      label: "Taraba",
      value: "Taraba",
    },
    {
      label: "Yobe",
      value: "Yobe",
    },
    {
      label: "Zamfara",
      value: "Zamfara",
    },
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
            <View
              style={{
                marginTop: 32,
              }}
            >
              <Text style={styles.header}>KYC Verification</Text>
              <Text style={styles.content}>
                Ensure your name matches the name on Documents provided.
              </Text>
            </View>
            <View
              style={{
                marginTop: 24,
              }}
            >
              <View>
                <Text style={styles.textLabel}>Residential Address</Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  value={email}
                  placeholder="Enter your Address"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handleEmailChange}
                />
              </View>

              <View>
                <Text style={styles.textLabel}>State</Text>
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
                  data={nigeriaStates}
                  search
                  maxHeight={500}
                  labelField="label"
                  valueField="value"
                  placeholderTextColor={"#1e1e1e45"}
                  placeholder="Select Nigerian State"
                  value={gender}
                  onChange={handleGenderChange}
                />
              </View>

              <View>
                <Text style={styles.textLabel}>Select Document Type</Text>
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
                  placeholder="Select Document Type"
                  value={gender}
                  onChange={handleGenderChange}
                />
              </View>
              <View>
                <Text style={styles.textLabel}>
                  Enter your Bank Verification Number
                </Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("name")}
                  onBlur={() => setFocusedInput(null)}
                  value={name}
                  placeholder="Enter your Bank Verification Number"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handleNameChange}
                />
              </View>
              <View>
                <Text style={styles.textLabel}>
                  Upload Valid ID Image Int’l passport, Nimc - National ID Card,
                  Driver’s License, Voter’s Card
                </Text>
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
                      }}
                    >
                      <Text style={styles.textLabel}>Upload Image</Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>

            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("KYCProcessing")}
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

export default KYCVerification;

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
    marginTop: 32,
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
  textLabel: {
    marginTop: 24,
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
