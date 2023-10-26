import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./Routing/Stack";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Regular: require("./assets/fonts/Rubik/static/Rubik-Regular.ttf"),
    Bold: require("./assets/fonts/Rubik/static/Rubik-Bold.ttf"),
    Medium: require("./assets/fonts/Rubik/static/Rubik-Medium.ttf"),
    SemiBold: require("./assets/fonts/Rubik/static/Rubik-SemiBold.ttf"),
    ExtraBold: require("./assets/fonts/Rubik/static/Rubik-ExtraBold.ttf"),
    Light: require("./assets/fonts/Rubik/static/Rubik-Light.ttf"),

    MontserratSemiBold: require("./assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
    MontserratLight: require("./assets/fonts/Montserrat/static/Montserrat-Light.ttf"),
    MontserratRegular: require("./assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    MontserratMedium: require("./assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
