import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Switch,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, tab, flex } from "../utilities/styles";

const Security = () => {
	const headerTintColor = "#000000";
	const [pushNotificationEnabled, setPushNotificationEnabled] = useState(false);
	const [emailAlertEnabled, setEmailAlertEnabled] = useState(false);
	const [smsAlertEnabled, setSmsAlertEnabled] = useState(false);

	const navigation = useNavigation();

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
				<View>
					<Text style={text.header}>Security </Text>
					<Text style={text.light}>
						Enable any at least any two security options of your choice to
						protect your account.
					</Text>
				</View>

				<View
					style={{
						marginTop: 38,
						marginBottom: 38,
						gap: 30,
					}}
				>
					<TouchableOpacity
						onPress={() => navigation.navigate("ChangePassword")}
					>
						<View style={{ flex: 1, gap: 5 }}>
							<Text style={[text.darkHeader, { fontSize: size.md }]}>
								Change Password
								{/* // <FontAwesome5 size={24} name='circle-question'/> */}
							</Text>
							<Text style={text.light}>
								Change the password to your SafeHome account.{" "}
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate("SecurityQuestion")}
					>
						<View style={{ flex: 1, gap: 5 }}>
							<Text style={[text.darkHeader, { fontSize: size.md }]}>
								Security Question
							</Text>
							<Text style={text.light}>
								Set a security Question to provide more security for your
								SafeHome account.{" "}
							</Text>
						</View>
					</TouchableOpacity>

					<View style={flex.row}>
						<View style={{ flex: 1, gap: 5 }}>
							<Text style={[text.darkHeader, { fontSize: size.md }]}>
								Email Verification
							</Text>
							<Text style={text.light}>
								Receive a six digit code sent to your registered Email Address.{" "}
							</Text>
						</View>
						<Switch
							value={smsAlertEnabled}
							onValueChange={(value) => setSmsAlertEnabled(value)}
						/>
					</View>
					<View style={{ marginTop: 30 }}>
						<TouchableOpacity style={button.fill}>
							<Text style={text.buttonFill}>Save</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Security;

const styles = StyleSheet.create({
	flexWidth: {
		width: "80%",
	},
	hi: {
		color: "#808080",
		fontSize: 16,
		fontFamily: "MontserratLight",
	},
	name: {
		fontSize: 24,
		fontFamily: "MontserratSemiBold",
	},

	price: {
		fontSize: 32,
		marginTop: 4,
		fontFamily: "MontserratSemiBold",
	},
	title: {
		fontSize: 14,
		fontFamily: "MontserratLight",
		color: "#666666",
	},

	textLabel: {
		marginTop: 24,
		fontFamily: "MontserratSemiBold",
		fontSize: 14,
		marginBottom: 8,
	},
	flex: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},
	buttonText: {
		fontFamily: "Regular",
		fontSize: 14,
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
