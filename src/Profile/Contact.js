import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text } from "../utilities/styles";

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
		<SafeAreaView style={{ backgroundColor: "white" }}>
			<ScrollView style={{ padding: 16, height: "100%" }}>
				<View>
					<Text style={text.header}>Contact Us</Text>
					<Text style={text.light}>
						You can reach us via our phone numbers, social media profile, email
						etc.
					</Text>
				</View>

				<View style={{ gap: 15, marginVertical: 30 }}>
					<View style={styles.addressContainer}>
						<View style={styles.iconContainer}>
							<FontAwesome5
								name="map-marker-alt"
								color={color.highlight}
								size={16}
							/>
						</View>
						<View>
							<Text style={text.light}> Lapal House, 235 Igbosere Road</Text>
							<Text style={text.light}> Onikan, Lagos </Text>
						</View>
					</View>
					<View style={styles.addressContainer}>
						<View style={styles.iconContainer}>
							<FontAwesome5
								name="map-marker-alt"
								color={color.highlight}
								size={16}
							/>
						</View>
						<View>
							<Text style={text.light}>Send us a mail</Text>
							<Text style={text.light}>support@safehomecoop.com </Text>
						</View>
					</View>
					<View style={styles.addressContainer}>
						<View style={styles.iconContainer}>
							<FontAwesome5
								name="map-marker-alt"
								color={color.highlight}
								size={16}
							/>
						</View>
						<View>
							<Text style={text.light}>+234 812 994 0742</Text>
							<Text style={text.light}>+234 812 994 0741</Text>
						</View>
					</View>
				</View>

				<View
					style={[
						styles.addressContainer,
						{
							flexDirection: "column",
							paddingVertical: 24,
							borderColor: color.placeholder,
						},
					]}
				>
					<View
						style={{
							flexDirection: "row",
							gap: 15,
						}}
					>
						<FontAwesome5 name="facebook" size={24} color={color.button} />
						<FontAwesome5 name="twitter" size={24} color={color.button} />
						<FontAwesome5 name="instagram" size={24} color={color.button} />
						<FontAwesome5 name="linkedin" size={24} color={color.button} />
					</View>
					<View>
						<Text style={[text.light, { textAlign: "center" }]}>
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
	addressContainer: {
		borderWidth: 1,
		borderColor: color.lines,
		borderRadius: 12,
		padding: 16,
		flexDirection: "row",
		gap: 12,
		alignItems: "center",
	},
	iconContainer: {
		borderWidth: 1,
		borderColor: color.highlight,
		height: 40,
		width: 40,
		borderRadius: 333,
		justifyContent: "center",
		alignItems: "center",
	},
});
