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
  
  const NewGoal = () => {
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
            <Text style={[styles.price, { fontSize:  16, margin: 0 }]}>
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
                  width: "100%",
                  height: 36,
                  backgroundColor: "#087940",
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#ffffff",
                    fontFamily: "MontserratSemiBold",
                  }}
                >
                  100 available
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  export default NewGoal;
  
  const styles = StyleSheet.create({
    price: {
      fontSize: 24,
      marginTop: 4,
      fontFamily: "MontserratSemiBold",
    },
    title: {
      fontSize: 16,
      fontFamily: "Regular",
    },
    text: {
      color: "white",
      fontSize: 16,
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
  