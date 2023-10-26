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
import { useNavigation } from "@react-navigation/native";
const cardBlue = require("../images/CardBlue.png");
const cardRed = require("../images/cardRed.png");
const bank = require("../images/Bank.png");

const Cards = () => {
  const [selectedComponent, setSelectedComponent] = useState("Debit Cards");
  const headerTintColor = "#000000";

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerTintColor,
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  const OngoingSavingsComponent = () => (
    <View>
      <Image
        source={cardBlue}
        style={{
          width: "100%",
          borderRadius: 4,
          height: 240,
          resizeMode: "contain",
          marginTop: 24,
        }}
      />
      <Image
        source={cardRed}
        style={{
          width: "100%",
          borderRadius: 4,
          height: 240,
          resizeMode: "contain",
          marginTop: 24,
        }}
      />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddCard")}
        >
          <Text style={styles.buttonText}>Add New Card</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );

  const CompleteComponent = () => (
    <View>
       <Image
        source={bank}
        style={{
          width: "100%",
          borderRadius: 4,
          height: 240,
          resizeMode: "contain",
          marginTop: 24,
        }}
      />
         <Image
        source={bank}
        style={{
          width: "100%",
          borderRadius: 4,
          height: 240,
          resizeMode: "contain",
          marginTop: 24,
        }}
      />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddBank")}
        >
          <Text style={styles.buttonText}>Add a Bank</Text>
        </TouchableOpacity>
      </View>
      <View></View>
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
            <Text style={styles.name}>Card & bank setting</Text>
            <Text style={styles.title}>
              Fll and upload the required Card and Bank information below.
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
                  selectedComponent === "Debit Cards" && styles.activeText,
                ]}
              >
                <Text
                  style={[
                    styles.transaction,
                    selectedComponent === "Debit Cards" && styles.activeText,
                  ]}
                  onPress={() => setSelectedComponent("Debit Cards")}
                >
                  Debit Cards
                </Text>
              </View>

              <View
                style={[
                  selectedComponent === "Bank Detail" && styles.activeText,
                ]}
              >
                <Text
                  style={[
                    styles.transaction,
                    selectedComponent === "Bank Detail" && styles.activeText,
                  ]}
                  onPress={() => setSelectedComponent("Bank Detail")}
                >
                  Bank Detail
                </Text>
              </View>
            </View>
            {selectedComponent === "Debit Cards" && <OngoingSavingsComponent />}
            {selectedComponent === "Bank Detail" && <CompleteComponent />}
            {selectedComponent === "Transactions" && <TransactionsComponent />}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cards;

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
  transaction: {
    fontSize: 14,
    fontFamily: "MontserratLight",
    color: "#666666",
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
    borderColor: "#66666635",
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
