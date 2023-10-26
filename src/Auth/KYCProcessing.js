import {
  StyleSheet,
  Image,
  TextInput,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
} from "react-native";
import React, { useState, useEffect } from "react";
const logo = require("../images/BG.png");
const stamp = require("../images/Stamp.png");
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";

const KYCProcessing = () => {
  const navigation = useNavigation();
  const [progress] = useState(new Animated.Value(0));
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerTintColor: "#000000",
      headerBackTitleVisible: false,
    });
  }, [navigation]);
  const animateProgressBar = () => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 100000, // 100 seconds
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animateProgressBar();
  }, []);
  return (
    <SafeAreaView
      onPress={() => navigation.navigate("NavBar")}
      style={{ flex: 1 }}
    >
      <Image
        source={logo}
        style={styles.backgroundImage}
        onPress={() => navigation.navigate("NavBar")}
      />
      <View
        style={{
          padding: 16,
        }}
        onPress={() => navigation.navigate("NavBar")}
      >
        <View style={styles.progressBar}>
          <Animated.View
            style={[
              styles.filler,
              {
                width: progress.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "100%"],
                }),
                height: 10,
                borderRadius: 122,
                //margin: 24,

                backgroundColor: "white",
              },
            ]}
            onPress={() => navigation.navigate("NavBar")}
          />
        </View>
      </View>
      <View
        style={[
          styles.overlayContainer,
          { width: "100%", alignItems: "center" },
        ]}
      >
        <View style={styles.overlayContent}>
          <View>
            <Image source={stamp} style={styles.logo} />
          </View>
          <View
            style={{
              marginTop: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={[styles.header, {}]}
              onPress={() => navigation.navigate("NavBar")}
            >
              We are reviewing your information
            </Text>
            <Text style={styles.content}>
              The check is almost complete. Please wait a few seconds, you’ll be
              automatically redirected to login.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KYCProcessing;

const styles = StyleSheet.create({
  overlayText: {
    color: "#ff0000",
    zIndex: 1, // Set zIndex to the highest value
  },
  stamp: {
    width: 300,
    height: 100,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    resizeMode: "cover", // You can adjust the resizeMode as needed
  },
  overlayContainer: {
    position: "relative",
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  overlayContent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to bottom, #582800, #1E0700)",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 300,
    width: 400,
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
    textAlign: "center",
    color: "#fff",
  },
  content: {
    color: "#fff",
    fontFamily: "Light",
    marginTop: 12,
    fontSize: 16,
    textAlign: "center",
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
    marginTop: 4,
    // color: gray
    backgroundColor: "#f9f9f9",
  },
  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#ccc",
    justifyContent: "center",
    //alignItems:'center',
    // margin:24,
    borderRadius: 222,
  },
  filler: {
    height: "100%",
    backgroundColor: "blue",
  },
});
