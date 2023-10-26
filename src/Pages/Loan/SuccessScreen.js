import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const SuccessScreen = () => {
  const navigation = useNavigation();
  const headerTintColor = "#000000";

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerTintColor,
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Loan Approved</Text>
      <Text style={styles.messages}>
        Congratulation, your Loan has been approved and we’ve credited your
        account.
      </Text>
      <View
        style={{
          margin: 48,
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
        onPress={() => navigation.navigate("NotificationPage")}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#008000",
    fontFamily: "MontserratSemiBold",
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
});

export default SuccessScreen;
