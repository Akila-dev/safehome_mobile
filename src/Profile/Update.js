import {
  SafeAreaView,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import Transaction from "../components/Transaction";
import { useNavigation } from "@react-navigation/native";
import GoalsComponent from "../components/Goals";
const imageHouse = require("../images/house.png");
import * as ImagePicker from "expo-image-picker";

const Update = () => {
  const [selectedComponent, setSelectedComponent] = useState("Basic Info");
  const headerTintColor = "#000000";

  const navigation = useNavigation();

  const [image, setImage] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

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

  const OngoingSavingsComponent = () => (
    <View>
      <View>
        <Text style={styles.textLabel}>Profile Picture</Text>
        <TouchableOpacity onPress={pickImage}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{
                width: 64,
                borderRadius: 64,
                height: 64,
                borderRadius: 64,
              }}
            />
          ) : (
            <Image
              source={imageHouse}
              style={{
                width: 64,
                borderRadius: 64,
                height: 64,
                borderRadius: 64,
              }}
            />
          )}
        </TouchableOpacity>
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
          <Text style={styles.textLabel}>Email Address</Text>
          <TextInput
            style={styles.textInput} // Use the dynamically defined style
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
            value={password}
            placeholder="Enter your Email Address"
            placeholderTextColor={"#1e1e1e45"}
            onChangeText={handlePasswordChange}
          />
        </View>

        <View>
          <Text style={styles.textLabel}>Phone Number</Text>
          <TextInput
            style={styles.textInput} // Use the dynamically defined style
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
            value={password}
            placeholder="Enter your Phone Number"
            placeholderTextColor={"#1e1e1e45"}
            onChangeText={handlePasswordChange}
          />
        </View>

      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          //onPress={() => navigation.navigate("EmailVerification")}
        >
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
      <View>
   
      </View>
    </View>
  );

  const CompleteComponent = () => (
    <View>
    <View
      style={{
        marginTop: 24,
      }}
    >
      <View>
        <Text style={styles.textLabel}>Full Name</Text>
        <TextInput
          style={styles.textInput} // Use the dynamically defined style
          onFocus={() => setFocusedInput("gender")}
          onBlur={() => setFocusedInput(null)}
          value={gender}
          placeholder="Enter your Full Name"
          placeholderTextColor={"#1e1e1e45"}
          onChangeText={handleGenderChange}
        />
      </View>

      <View>
        <Text style={styles.textLabel}>Relationship</Text>
        <TextInput
          style={styles.textInput} // Use the dynamically defined style
          onFocus={() => setFocusedInput("name")}
          onBlur={() => setFocusedInput(null)}
          value={name}
          placeholder="Example Brother"
          placeholderTextColor={"#1e1e1e45"}
          onChangeText={handleNameChange}
        />
      </View>

   

      <View>
        <Text style={styles.textLabel}>Phone Number</Text>
        <TextInput
          style={styles.textInput} // Use the dynamically defined style
          onFocus={() => setFocusedInput("password")}
          onBlur={() => setFocusedInput(null)}
          value={password}
          placeholder="Enter your Phone Number"
          placeholderTextColor={"#1e1e1e45"}
          onChangeText={handlePasswordChange}
        />
      </View>
      <View>
        <Text style={styles.textLabel}>Email Address</Text>
        <TextInput
          style={styles.textInput} // Use the dynamically defined style
          onFocus={() => setFocusedInput("password")}
          onBlur={() => setFocusedInput(null)}
          value={password}
          placeholder="Enter your Email Address"
          placeholderTextColor={"#1e1e1e45"}
          onChangeText={handlePasswordChange}
        />
      </View>
    </View>
    <View>
      <TouchableOpacity
        style={styles.button}
        //onPress={() => navigation.navigate("EmailVerification")}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
    <View>
 
    </View>
  </View>
  );

  const TransactionsComponent = () => (
    <View>
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <ScrollView
        style={{
          padding: 16,
        }}
      >
        <View style={[styles.topView]}>
          <View style={styles.viewWidths}>
            <Text style={styles.name}>Personal Information</Text>
            <Text style={styles.title}>
              Contact Support to Update your basic informations.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("NotificationPage")}
            style={styles.viewNotification}
          >
            <FontAwesome5 name="bell" size={28} />
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#ff0000",
                position: "absolute",
                borderRadius: 12,
                right: 6,
                top: 10,
              }}
            ></View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 48,
            marginBottom: 48,
          }}
        >
          <View>
            <View
              style={{
                // justifyContent: "space-around",
                flexDirection: "row",
                gap: 48,
              }}
            >
              <View
                style={[
                  selectedComponent === "Basic Info" && styles.activeText,
                ]}
              >
                <Text
                  style={[
                    styles.transaction,
                    selectedComponent === "Basic Info" && styles.activeText,
                  ]}
                  onPress={() => setSelectedComponent("Basic Info")}
                >
                  Basic Info
                </Text>
              </View>

              <View
                style={[
                  selectedComponent === "Next of kin" && styles.activeText,
                ]}
              >
                <Text
                  style={[
                    styles.transaction,
                    selectedComponent === "Next of kin" && styles.activeText,
                  ]}
                  onPress={() => setSelectedComponent("Next of kin")}
                >
                  Next of kin
                </Text>
              </View>
            </View>
            {selectedComponent === "Basic Info" && <OngoingSavingsComponent />}
            {selectedComponent === "Next of kin" && <CompleteComponent />}
            {selectedComponent === "Transactions" && <TransactionsComponent />}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Update;

const styles = StyleSheet.create({
  hi: {
    color: "#808080",
    fontSize: 16,
    fontFamily: "MontserratLight",
  },
  name: {
    fontSize: 24,
    fontFamily: "MontserratSemiBold",
  },
  viewWidths: {
    width: "80%",
  },
  topView: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewNotification: {
    width: 48,
    backgroundColor: "#d9d9d945",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },

  price: {
    fontSize: 32,
    marginTop: 4,
    fontFamily: "MontserratSemiBold",
  },
  title: {
    fontSize: 16,
    fontFamily: "Regular",
    color: "#66666690",
  },

  activeText: {
    color: "#ff9100",
    paddingBottom: 1,
    borderColor: "#ff9100",
    borderBottomWidth: 3,
    borderRadius: 2,
    fontFamily: "MontserratSemiBold",
  },

  textInput: {
    height: 56,
    borderRadius: 8,
    backgroundColor: "#F9F9F9",
    fontSize: 14,
    fontFamily: "Regular",
    padding: 20,
    borderColor:'#66666635',
    borderWidth: 1,
    marginTop: 4,
    // marginBottom: 24,
    width: "100%",
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
    marginBottom: 220,
    padding: 16,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
