import {
  SafeAreaView,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import Transaction from "../components/Transaction";
import { useNavigation } from "@react-navigation/native";
const imageHouse = require("../images/house.png");

const LockedGoalsComponet = () => {
  const [selectedComponent, setSelectedComponent] = useState("Ongoing Savings");

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ViewLocked")}>
      <View style={styles.goalComponent}>
        <View style={styles.goalComponentImage}>
          <Image
            style={{ width: "100%", borderRadius: 12, height: 130 }}
            source={imageHouse}
          />
        </View>
        <View style={styles.goalComponentView}>
          <Text style={[styles.price, { fontSize: 15, margin: 0 }]}>
            Goal Title
          </Text>
          <View>
            <View style={styles.flexGoal}>
              <Text
                style={[
                  styles.title,
                  {
                    color: "#8D4000",
                    fontSize: 16,
                    fontFamily: "MontserratSemiBold",
                  },
                ]}
              >
                {" "}
                ₦50,000
              </Text>
              <Text
                style={[
                  styles.title,
                  {
                    color: "#8D4000",
                    fontSize: 14,
                  },
                ]}
              >
                {" "}
                307
              </Text>
            </View>
            <View style={styles.flexGoal}>
              <Text style={styles.transaction}> Amount Saved</Text>
              <Text style={styles.transaction}> Day Left</Text>
            </View>
          </View>

          <View style={[styles.flexGoal, { alignItems: "center" }]}>
            <View
              style={{
                width: 120,
                height: 12,
                backgroundColor: "#d9d9d975",
                borderRadius: 12,
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 12,
                  backgroundColor: "#8D4000",
                  borderRadius: 12,
                }}
              ></View>
            </View>
            <Text style={styles.title}>10%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LockedGoalsComponet;

const styles = StyleSheet.create({
  price: {
    fontSize: 24,
    marginTop: 4,
    fontFamily: "MontserratSemiBold",
  },
  title: {
    fontSize: 14,
    fontFamily: "Regular",
  },
  text: {
    color: "white",
    fontSize: 14,
    fontFamily: "Regular",
  },
  texts: {
    color: "#1E0700",
    fontSize: 14,
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
    fontSize: 12,
    fontFamily: "MontserratLight",
  },
  activeText: {
    color: "#8D4000",
    paddingBottom: 1,
    borderColor: "#8D4000",
    borderBottomWidth: 3,
    borderRadius: 2,
    fontFamily: "MontserratSemiBold",
  },
  goalComponent: {
    borderColor: "#66666645",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    width: "100%",
    gap: 12,
    marginTop: 12,
  },
  goalComponentImage: {
    width: "48%",
  },
  goalComponentView: {
    justifyContent: "space-between",
    borderRadius: 12,
    height: 130,
    flexDirection: "column",
    width: "48%",
    gap: 12,
  },
  flexGoal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
