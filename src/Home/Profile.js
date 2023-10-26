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
import React from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import Transaction from "../components/Transaction";
import { useNavigation } from "@react-navigation/native";
const pics = require("../images/house.png");

const Profile = () => {
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
            <Text style={styles.name}>Account</Text>
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

        <View style={styles.flex}>
          <View>
            <Image
              source={pics}
              style={{
                width: 64,
                height: 64,
                borderRadius: 64,
              }}
            />
          </View>
          <View>
            <Text style={styles.hi}>Ibeneme Ikenna</Text>
            <Text style={[styles.title, { fontSize: 16, color: "#FF9100" }]}>
              Ibenemeikenna96@gmail.com
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.flex}
          onPress={() => navigation.navigate("profileInformation")}
        >
          <FontAwesome5 name="user-alt" size={18} width={20} />
          <Text style={styles.title}>Profile Information</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("profileKYC")}
          style={styles.flex}
        >
          <FontAwesome5 name="book" size={18} width={20} />
          <Text style={styles.title}>Update KYC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("profileNotifications")}
          style={styles.flex}
        >
          <FontAwesome5 name="bell" size={18} width={20} />
          <Text style={styles.title}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("cards")}
          style={styles.flex}
        >
          <FontAwesome5 name="credit-card" size={18} width={20} />
          <Text style={styles.title}>Card & Bank Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Security")}
          style={styles.flex}
        >
          <FontAwesome5 name="lock" size={18} width={20} />
          <Text style={styles.title}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Refer")}
          style={styles.flex}
        >
          <FontAwesome5 name="share-alt" size={18} width={20} />
          <Text style={styles.title}>Refer & Earn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Contact")}
          style={styles.flex}
        >
          <FontAwesome5 name="phone-alt" size={18} width={20} />
          <Text style={styles.title}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.flex}
        >
          <FontAwesome5
            name="sign-out-alt"
            size={18}
            width={20}
            color="#ff0000"
          />
          <Text style={[styles.title, { color: "#ff0000" }]}>Log Out</Text>
        </TouchableOpacity>
        <View
          style={{
            marginBottom: 200,
          }}
        ></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  hi: {
    // color: "#808080",
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
    marginBottom: 4,
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
  title: {
    fontSize: 16,
    fontFamily: "MontserratMedium",
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
  flex: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: 32,
  },
  transaction: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "Regular",
  },
});
