import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
const imageHouse = require("../images/IconForLoan.png");

const Dollar = () => {
  const OngoingSavingsComponent = () => (
    <View>
      <Text></Text>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          // marginTop: 120,
        }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 48,
            gap: 12,
          }}
        >
          <Image source={imageHouse} />
          <Text
            style={[
              styles.hi,
              { fontSize: 16, textAlign: "center", width: 200 },
            ]}
          >
            Oops, you do not have any loan at the moment.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("loantype")}
            style={[styles.addFunds, { marginTop: 24, width: 200 }]}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                fontFamily: "MontserratSemiBold",
              }}
            >
              Apply for a Loan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  const CompletedComponent = () => (
    <View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // padding: 48,
          height: 300,
        }}
      >
        <TouchableOpacity
          style={[
            styles.cards,
            {
              backgroundColor: "#FFF9F5",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
              height: "auto",
              padding: 32,
            },
          ]}
          onPress={() => navigation.navigate("loantype")}
        >
          <View>
            <Text
              style={[
                styles.price,
                {
                  textAlign: "center",
                  fontSize: 19,
                  color: "#1A374D",
                  marginBottom: 12,
                },
              ]}
            >
              Personal Loan @ 9% Per Annum
            </Text>
            <Text
              style={[
                styles.title,
                { textAlign: "center", fontFamily: "MontserratRegular", fontSize:14 },
              ]}
            >
              Take a personal loan to cater for an emergency or other purpose.
            </Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                fontSize: 18,
                paddingBottom: 12,
                paddingTop: 24,
                gap: 16,
              }}
            >
              <Text
                style={[
                  styles.price,
                  {
                    textAlign: "center",
                    fontSize:14 ,
                    color: "#8D4000",
                    marginTop: -2,
                  },
                ]}
              >
                Apply Now
              </Text>
              <FontAwesome5 name="arrow-right" color="#8D4000" size={16} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // padding: 48,
          height: 300,
          marginTop: -96,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("loantype")}
          style={[
            styles.cards,
            {
              backgroundColor: "#FFFBF5",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
              height: "auto",
              padding: 32,
            },
          ]}
        >
          <View>
            <Text
              style={[
                styles.price,
                {
                  textAlign: "center",
                  fontSize: 19,
                  color: "#1A374D",
                  marginTop: -12,
                },
              ]}
            >
              BNPL Loan @ 9% Per Annum
            </Text>
            <Text
              style={[
                styles.title,
                { textAlign: "center", fontSize:14 , fontFamily: "MontserratRegular" },
              ]}
            >
              Purchase an item or equipment now, and pay back in installments.{" "}
            </Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                fontSize:14 ,
                paddingBottom: 12,
                paddingTop: 24,
                gap: 16,
              }}
            >
              <Text
                style={[
                  styles.price,
                  {
                    textAlign: "center",
                    fontSize:14 ,
                    color: "#8D4000",
                    marginTop: -2,
                  },
                ]}
              >
                Apply Now
              </Text>
              <FontAwesome5 name="arrow-right" color="#8D4000" size={16} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const [selectedComponent, setSelectedComponent] = useState("Ongoing Savings");
  const [modalVisible, setModalVisible] = React.useState(true);

  const handlePress = () => {
    setModalVisible(true);
  };

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
            <Text style={styles.hi}>Hello</Text>
            <Text style={styles.name}>Ibeneme!</Text>
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
              backgroundColor: "#FF9100",
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
                backgroundColor: "#8D400012",
                width: 340, 
                height: 200,
                borderRadius: 12,
                padding: 24,
                marginRight:12,
              },
            ]}
          >
            <FontAwesome5 name="layer-group" size={28} />
            <View>
              <Text style={styles.title}>TOTAL LOAN</Text>
              <Text style={styles.price}>₦1,000,000.00</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.cards,
              {
                backgroundColor: "#FF610010",
                width: 340, 
                height: 200,
                borderRadius: 12,
                padding: 24,
                marginRight:12,
              },
            ]}
          >
            <FontAwesome5 name="piggy-bank" size={28} />
            <View>
              <Text style={styles.title}>OUTSTANDING LOAN</Text>
              <Text style={styles.price}>₦2,200,000.00</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
                  MY LOAN
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
                  EXPLORE
                </Text>
              </View>
            </View>
            {selectedComponent === "Ongoing Savings" && (
              <OngoingSavingsComponent />
            )}
            {selectedComponent === "Completed" && <CompletedComponent />}
            {/* {selectedComponent === "Transactions" && <TransactionsComponent />} */}
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: "white",
              height: "auto",
              position: "absolute",
              // bottom: "30%",
              //top: "20%",
              width: "100%",
              paddingBottom: 24,
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeModalButton}
            >
              <FontAwesome5 size={24} color="#000000" name="times" />
            </TouchableOpacity>

            <View>
              {/* <Text style={styles.transaction}>Transaction Type</Text> */}
              <Text style={[styles.status, { color: "red" }]}>Notice</Text>

              <View
                style={[
                  styles.details,
                  {
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 24,
                  },
                ]}
              >
                <Text style={[styles.detailsLeft, { textAlign: "center" }]}>
                  You are not eligible for loan yet! For you to be eligible for
                  our loan
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text style={[styles.detailsRight, { fontSize: 18 }]}>
                    -{" "}
                  </Text>
                  <Text style={[styles.detailsRight, { fontSize: 18 }]}>
                    You need to be an active member of Safe-Home cooperatives
                    for at least a year to access the loan
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text style={[styles.detailsRight, { fontSize: 18 }]}>
                    -{" "}
                  </Text>
                  <Text style={[styles.detailsRight, { fontSize: 18 }]}>
                    You need to have a guarantor who is also an active member of
                    Safe-Home Cooperatives for at least a year.
                  </Text>
                </View>
              </View>
              <Text style={[styles.status, { marginTop: 48 }]}>
                Thank You 🙏🏽
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Dollar;

const styles = StyleSheet.create({
  hi: {
    color: "#808080",
    fontSize: 16,
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
    width: "100%", // Changed from Dimensions.get("window").width
    height: 200,
    borderRadius: 12,
    padding: 24,
    flexDirection: "column",
    justifyContent: "space-between",
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
    width: "48.5%",
    height: 50,
    backgroundColor: "#1E0700",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
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
    fontSize: 14, // Adjusted from 20
    fontFamily: "MontserratLight",
  },
  activeText: {
    color: "#1E0700",
    //paddingBottom: 1,
    borderColor: "#1E0700",
    borderBottomWidth: 2,
    borderRadius: 2,
    fontSize: 14, 
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
    justifyContent: "space-between",
    borderRadius: 12,
    height: 130,
    flexDirection: "column",
    width: "48%",
    gap: 12,
  },
  flexGoal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addFunds: {
    width: "100%",
    height: 50,
    backgroundColor: "#1E0700",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  transactionContainer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  closeModalButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "flex-end",
    width: "100%",
  },
  closeModalButtonText: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
  },
  transaction: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Regular",
    marginBottom: 8,
  },
  status: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "MontserratSemiBold",
    marginBottom: 24,
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#66666646",
  },

  detailsLeft: {
    fontSize: 16,
    fontFamily: "MontserratLight",
  },
  detailsRight: {
    fontSize: 16,
    fontFamily: "MontserratSemiBold",
  },
});
