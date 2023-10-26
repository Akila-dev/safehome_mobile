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
import Transaction from "../../components/Transaction";
import { useNavigation } from "@react-navigation/native";
import GoalsComponent from "../../components/Goals";
import NewGoalsComponent from "../../components/NewGoals";
import NewGoal from "../../components/NewLocked";
import LockedGoalsComponent from "../../components/Locked";
const imageHouse = require("../../images/house.png");

const OngoingSavingsComponent = () => (
  <View>
    <ScrollView
      horizontal={true}
      style={{
        flexDirection: "row",
        gap: 24,
        marginTop: 24,
        marginBottom: 24,
      }}
    >
      <Text
        style={{
          fontSize: 13,
          fontFamily: "MontserratSemiBold",
          color: "#ffffff",
          padding: 8,
          backgroundColor: "#8D4000",
          borderRadius: 6,
        }}
      >
        All
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontFamily: "MontserratLight",
          color: "#666666",
          padding: 8,
          //backgroundColor:'#8D4000',
          borderRadius: 6,
          marginLeft: 12,
        }}
      >
        Land owners club
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontFamily: "MontserratLight",
          color: "#666666",
          padding: 8,
          // backgroundColor:'#8D4000',
          borderRadius: 6,
          marginLeft: 12,
        }}
      >
        Home owners club
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontFamily: "MontserratLight",
          color: "#666666",
          padding: 8,
          //  backgroundColor:'#8D4000',
          borderRadius: 6,
          marginLeft: 12,
        }}
      >
        Office owners club
      </Text>
    </ScrollView>
    <LockedGoalsComponent />
    <LockedGoalsComponent />
    <LockedGoalsComponent />
  </View>
);

const CompletedComponent = () => (
  <View
    style={{
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 48,
      height: 300,
    }}
  >
    <FontAwesome5 name="bullseye" size={48} />
    <Text style={[styles.texts, { textAlign: "center", marginTop: 24 }]}>
      You have no Completed savings plan, Create a goal or lock funds to get
      started.
    </Text>
  </View>
);

const TransactionsComponent = () => (
  <View>
    <NewGoal />
    <NewGoal />
    <NewGoal />
    <NewGoal />
  </View>
);

const LockedHome = () => {
  const [selectedComponent, setSelectedComponent] = useState("Ongoing Savings");
  const headerTintColor = "#000000";

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerTintColor,
      headerBackTitleVisible: false,
    });
  }, [navigation]);
  const navigation = useNavigation();
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
            <Text style={styles.name}>Locked Savings</Text>
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
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: 12,
            gap: 4,
          }}
        >
          <View
            style={{
              width: 24,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#8D4000",
            }}
          ></View>
          <View
            style={{
              width: 12,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#d9d9d948",
            }}
          ></View>
          <View
            style={{
              width: 12,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#d9d9d948",
            }}
          ></View>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 24,
            gap: 24,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={[
              styles.cards,
              {
                backgroundColor: "#fff",
                borderColor: "#66666645",
                borderWidth: 1,
                width: 340,
                marginRight: 8,
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <FontAwesome5 name="bullseye" size={28} />
              <Text
                style={[
                  styles.title,
                  {
                    color: "#8D4000",
                  },
                ]}
              >
                Up To{" "}
                <Text
                  style={[
                    styles.title,
                    {
                      color: "#121212",
                    },
                  ]}
                >
                  10% p.a
                </Text>
              </Text>
            </View>
            <View>
              <Text style={styles.title}>Total Balance</Text>
              <Text style={[styles.price, { color: "#8D4000" }]}>
                ₦1,000,000.00
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.cards,
              {
                backgroundColor: "#fff",
                borderColor: "#66666645",
                borderWidth: 1,
                width: 340,
                // marginRight:8
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <FontAwesome5 name="chart-bar" size={28} />
              <Text
                style={[
                  styles.title,
                  {
                    color: "#8D4000",
                  },
                ]}
              >
                Up To{" "}
                <Text
                  style={[
                    styles.title,
                    {
                      color: "#121212",
                    },
                  ]}
                >
                  10% p.a
                </Text>
              </Text>
            </View>
            <View>
              <Text style={styles.title}>Total Interest</Text>
              <Text style={[styles.price, { color: "#8D4000" }]}>
                ₦100,000.00
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View
          style={{
            marginTop: 24,
            width: "100%",
            flexDirection: "row",
            gap: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("LockedFundForm")}
            style={styles.addFunds}
          >
            <Text style={styles.text}>Lock Funds</Text>
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
                justifyContent: "space-around",
                flexDirection: "row",
              }}
            >
              <View
                style={[
                  selectedComponent === "Ongoing Savings" && styles.activeText,
                ]}
              >
                <Text
                  style={[
                    styles.transaction,
                    selectedComponent === "Ongoing Savings" &&
                      styles.activeText,
                  ]}
                  onPress={() => setSelectedComponent("Ongoing Savings")}
                >
                  Ongoing Savings
                </Text>
              </View>

              <View
                style={[selectedComponent === "Completed" && styles.activeText]}
              >
                <Text
                  style={[
                    styles.transaction,
                    selectedComponent === "Completed" && styles.activeText,
                  ]}
                  onPress={() => setSelectedComponent("Completed")}
                >
                  Explore
                </Text>
              </View>
              <View
                style={[
                  selectedComponent === "Transactions" && styles.activeText,
                ]}
              >
                <Text
                  style={[
                    styles.transaction,
                    selectedComponent === "Transactions" && styles.activeText,
                  ]}
                  onPress={() => setSelectedComponent("Transactions")}
                >
                  Completed
                </Text>
              </View>
            </View>
            {selectedComponent === "Ongoing Savings" && (
              <OngoingSavingsComponent />
            )}
            {selectedComponent === "Completed" && <CompletedComponent />}
            {selectedComponent === "Transactions" && <TransactionsComponent />}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LockedHome;

const styles = StyleSheet.create({
  hi: {
    color: "#808080",
    fontSize: 13,
    fontFamily: "MontserratLight",
  },
  name: {
    fontSize: 18,
    color: "#8D4000",
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
   // width: Dimensions.get("window").width,
    height: 200,
    borderRadius: 12,
    padding: 24,
    flexDirection: "column",
    justifyContent: "space-between",
    //marginRight: 16,
    //width: "100%",
  },
  price: {
    fontSize: 28,
    marginTop: 4,
    fontFamily: "MontserratSemiBold",
  },
  title: {
    fontSize: 16,
    fontFamily: "Regular",
  },
  addFunds: {
    width: "100%",
    height: 50,
    backgroundColor: "#1E0700",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "MontserratSemiBold",
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
    fontSize: 13,
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
    marginTop: 24,
  },
  goalComponentImage: {
    width: "48%",
  },
  goalComponentView: {
    //borderColor: "#66666645",
    //borderWidth: 1,
    justifyContent: "space-between",
    borderRadius: 12,
    // padding: 12,
    height: 130,
    flexDirection: "column",
    width: "48%",
    gap: 12,
  },
  flexGoal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
