import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Contact = () => {
  const headerTintColor = "#000000";
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerTintColor,
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.name}>Contact Us</Text>
          <Text style={styles.title}>
            You can reach us via our phone numbers, social media profile, email
            etc.
          </Text>
        </View>

        <View style={styles.addressContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name="map-marker-alt" color="orange" size={16} />
          </View>
          <View>
            <Text style={styles.addressText}>
              {" "}
              Lapal House, 235 Igbosere Road
            </Text>
            <Text style={styles.addressText}> Onikan, Lagos </Text>
          </View>
        </View>
        <View style={styles.addressContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name="map-marker-alt" color="orange" size={16} />
          </View>
          <View>
            <Text style={styles.addressText}>Send us a mail</Text>
            <Text style={styles.addressText}>support@safehomecoop.com </Text>
          </View>
        </View>
        <View style={styles.addressContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name="map-marker-alt" color="orange" size={16} />
          </View>
          <View>
            <Text style={styles.addressText}>+234 812 994 0742</Text>
            <Text style={styles.addressText}>+234 812 994 0741</Text>
          </View>
        </View>
        <View
          style={[
            styles.addressContainer,
            { height: 150, flexDirection: "column" },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 12,
            }}
          >
            <FontAwesome5 name="facebook" size={24} color="#666666" />
            <FontAwesome5 name="twitter" size={24} color="#666666" />
            <FontAwesome5 name="instagram" size={24} color="#666666" />
            <FontAwesome5 name="linkedin" size={24} color="#666666" />
          </View>
          <View>
            <Text style={[styles.addressText, { textAlign: "center" }]}>
              Follow us on social media for updates, news, and more:
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollView: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontFamily: "MontserratSemiBold",
  },
  title: {
    fontSize: 14,
    fontFamily: "MontserratLight",
    color: "#666666",
  },
  addressContainer: {
    borderWidth: 1,
    borderColor: "#66666645",
    height: 100,
    borderRadius: 12,
    marginTop: 16,
    padding: 16,
    flexDirection: "row",
    gap: 12,
    //justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: "#ff9100",
    height: 40,
    width: 40,
    borderRadius: 333,
    justifyContent: "center",
    alignItems: "center",
  },
  addressText: {
    color: "#808080",
    fontSize: 14,
    fontFamily: "MontserratLight",
  },
});
