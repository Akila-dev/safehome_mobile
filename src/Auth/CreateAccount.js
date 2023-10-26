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
const logo = require("../images/Logo.png");
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker"; // Import from the new package

const CreateAccount = () => {
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
            <View style={styles.viewForLogo}>
              <Text style={styles.header}>Personal Information</Text>
              <Text style={styles.content}>Securely sign up to safeHome</Text>
            </View>
            <View
              style={{
                marginTop: 24,
              }}
            >
              <View>
                <Text style={styles.textLabel}>First Name</Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  value={email}
                  placeholder="Enter your First Name"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handleEmailChange}
                />
              </View>

              <View>
                <Text style={styles.textLabel}>Surname Name</Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("name")}
                  onBlur={() => setFocusedInput(null)}
                  value={name}
                  placeholder="Enter your Surname Name"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handleNameChange}
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
              <View>
                <Text style={styles.textLabel}>Gender</Text>

                <Dropdown
                  style={styles.dropdown}
                  //   placeholderStyle={styles.placeholderStyle}
                  //   selectedTextStyle={styles.selectedTextStyle}
                  //   selectedStyle={styles.selectedStyle}
                  //   inputSearchStyle={styles.inputSearchStyle}
                  //   iconStyle={styles.iconStyle}
                  itemTextStyle={{
                    fontSize: 17,
                    color: `#121212`,
                    fontFamily: "Regular",
                  }}
                  itemContainerStyle={{
                    backgroundColor: "#ffffff",
                  }}
                  //   selectedItemStyle={{
                  //     backgroundColor: "blue", // Set the background color for active (hovered) item
                  //   }}
                  data={data}
                  // search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Gender"
                  value={gender}
                  // searchPlaceholder="Search..."
                  //   value={packageTypes} // Use the value state here
                  onChange={handleGenderChange}
                />
              </View>
              <View>
                <Text style={styles.textLabel}>Phone Number</Text>
                <TextInput
                  style={styles.textInput} // Use the dynamically defined style
                  onFocus={() => setFocusedInput("password")}
                  onBlur={() => setFocusedInput(null)}
                  value={password}
                  placeholder="Phone Number"
                  placeholderTextColor={"#1e1e1e45"}
                  onChangeText={handlePasswordChange}
                />
              </View>
              <View
              style={[
                styles.input,
                {
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <View>
                <Text
                  style={[
                    {
                      fontFamily: "MontserratRegular",
                      color: "#000000",
                      fontSize: 16,
                    },
                  ]}
                >{`${
                  dates
                    ? dates.toISOString().split("T")[0]
                    : "Choose Pickup date"
                }`}</Text>
            
            </View>
            <View>
                <Button onPress={showDatepicker} title="Choose Date" />
                {showPicker && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={dates}
                    //mode="datetime"
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    minimumDate={currentDate}
                    timeZoneOffsetInMinutes={-60}
                  />
                )}
              </View>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("CreateAccountNext")}
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

export default CreateAccount;

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
