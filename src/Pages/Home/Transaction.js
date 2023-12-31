import {
  SafeAreaView,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import Transaction from "../../components/Transaction";

const TransactionPage = () => {
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
        <View
          style={{
            marginTop: 24,
            marginBottom: 48,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 24
            }}
          >
            <Text style={styles.transaction}>Transactions</Text>
            <Text
           //  onPress={() => navigation.navigate("TransactionPage")}
              style={styles.hi}
            >
             Mark all as Read
            </Text>
          </View>
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionPage;

const styles = StyleSheet.create({
  hi: {
    color: "#ff0100",
    fontSize: 14,
    fontFamily: "MontserratLight",
  },
  name: {
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
  },
  viewWidths: {
    width: "50%",
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
  cards: {
    width: Dimensions.get("window").width,
    height: 200,
    borderRadius: 12,
    padding: 24,
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: 16,
  },
  price: {
    fontSize: 24,
    marginTop: 4,
    fontFamily: "MontserratSemiBold",
  },
  title: {
    fontSize: 14,
    fontFamily: "Regular",
  },
  addFunds: {
    width: "48.5%",
    height: 50,
    backgroundColor: "#1E0700",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  text: {
    color: "white",
    fontSize: 14,
    fontFamily: "Regular",
  },
  texts: {
    color: "#1E0700",
    fontSize: 16,
    fontFamily: "Regular",
  },
  withdraw: {
    width: "48.5%",
    height: 50,
    borderColor: "#1E0700",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  transaction: {
    color: "#121212",
    fontSize: 22,
    fontFamily: "MontserratSemiBold",
  },
});
