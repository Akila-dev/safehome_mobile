import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const Refer = () => {
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
        backgroundColor: "#fff",
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: 16,
            marginBottom: 220,
          }}
        >
          <View>
            <View
              style={{
                marginTop: 32,
              }}
            >
              <Text style={styles.header}>Refferal</Text>
            </View>
            <View
              style={{
                marginTop: 24,
              }}
            >
             <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    marginTop: 24,
                    gap: 12,
                    flexDirection: "row",
                  }}>

             <View style={[styles.textInput, {width:390}]}>
                <FontAwesome5 name="share-alt" size={24} />
                <Text style={styles.textLabel}>Amount Earned</Text>
                <Text style={styles.price}>₦10,000.00</Text>
              </View>
              <View  style={[styles.textInput, {width:390, backgroundColor:'#ff785612'}]}>
                <FontAwesome5 name="share-alt" size={24} />
                <Text style={styles.textLabel}>Number of referrals</Text>
                <Text style={styles.price}>3</Text>
              </View>
             </ScrollView>

              <View style={styles.textInputs}>
                <Text style={styles.textLabels}>shhshshshgsff</Text>
                <View style={styles.viewss}>
                  <FontAwesome5 name="copy" size={20} />
                  <Text style={styles.textLabels}>Copy Link {""}</Text>
                </View>
              </View>

              <View style={styles.textInputs}>
                <Text style={styles.textLabels}>shhshshshgsff</Text>
                <View style={styles.viewss}>
                  <FontAwesome5 name="copy" size={20} />
                  <Text style={styles.textLabels}>Copy Link {""}</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 64,
            }}
          >
            <Text style={[styles.textLabels, { fontSize: 18 }]}>
              Referral History
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <View>
                <FontAwesome5 name="search" size={24} />
              </View>
              <FontAwesome5 name="bars" size={24} />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              height: 55,
              marginTop: 32,
              backgroundColor:'#f9f9f9',
              alignItems:'center'
            }}
          >
            <Text style={styles.textLabels}>1</Text>
            <Text style={styles.textLabels}>Ibeneme Ibeneme</Text>
            <Text style={styles.textLabels}>10/10/2023</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              height: 55,
              backgroundColor:'#fff',
              alignItems:'center'
            }}
          >
            <Text style={styles.textLabels}>2</Text>
            <Text style={styles.textLabels}>Ibeneme Ibeneme</Text>
            <Text style={styles.textLabels}>10/10/2023</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Refer;

const styles = StyleSheet.create({
  logo: {
    height: 60,
    width: 160,
  },
  price: {
    fontSize: 32,
    marginTop: 4,
    fontFamily: "MontserratSemiBold",
  },
  viewForLogo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,
  },
  header: {
    fontSize: 28,
    fontFamily: "MontserratSemiBold",
    textAlign: "left",
    color: "#1E0700",
  },
  content: {
    color: "#1A374D",
    fontFamily: "MontserratLight",
    marginTop: 4,
    fontSize: 16,
  },
  textInput: {
    height: 180,
    borderRadius: 8,
    backgroundColor: "#FF910015",
    fontSize: 14,
    fontFamily: "Regular",
    padding: 20,
    marginTop: 4,
    // marginBottom: 24,
    width: "100%",
  },
  viewss: {
    backgroundColor: "#ffffff",
    padding: 8,
    width: 140,
    borderRadius: 2,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  textInputs: {
    height: 55,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    fontSize: 14,
    fontFamily: "Regular",
    padding: 12,
    marginTop: 24,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 24,
    width: "100%",
  },
  textLabel: {
    marginTop: 32,
    fontFamily: "Regular",
    fontSize: 16,
    color: "#1A374D",
  },
  textLabels: {
    fontFamily: "Regular",
    fontSize: 16,
    color: "#1A374D",
  },

  buttonText: {
    fontFamily: "MontserratSemiBold",
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
});
