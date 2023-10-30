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
import { Dropdown } from "react-native-element-dropdown";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, tab, flex } from "../utilities/styles";

const Notifications = () => {
	const [selectedComponent, setSelectedComponent] = useState("Basic Info");
	const headerTintColor = "#000000";
	const [pushNotificationEnabled, setPushNotificationEnabled] = useState(false);
	const [emailAlertEnabled, setEmailAlertEnabled] = useState(false);
	const [smsAlertEnabled, setSmsAlertEnabled] = useState(false);

	const navigation = useNavigation();

	const [image, setImage] = useState(null);

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
					<Text style={text.header}>Notification </Text>
					<Text style={text.light}>Manage your notification settings.</Text>
				</View>

				<View
					style={{
						marginTop: 28,
						marginBottom: 48,
						gap: 30,
					}}
				>
					<View style={flex.row}>
						<View style={{ flex: 1, gap: 5 }}>
							<Text style={[text.darkHeader, { fontSize: size.md }]}>
								Push Notification
							</Text>
							<Text style={text.light}>
								Notifications on successful log ins to your account.
							</Text>
						</View>
						<Switch
							value={pushNotificationEnabled}
							onValueChange={(value) => setPushNotificationEnabled(value)}
						/>
					</View>

					<View style={flex.row}>
						<View style={{ flex: 1, gap: 5 }}>
							<Text style={[text.darkHeader, { fontSize: size.md }]}>
								Email Alert
							</Text>
							<Text style={text.light}>
								Get notifications via your registered email.{" "}
							</Text>
						</View>
						<Switch
							value={emailAlertEnabled}
							onValueChange={(value) => setEmailAlertEnabled(value)}
						/>
					</View>

					<View style={flex.row}>
						<View style={{ flex: 1, gap: 5 }}>
							<Text style={[text.darkHeader, { fontSize: size.md }]}>
								SMS Alert
							</Text>
							<Text style={text.light}>
								Get notifications via your verified phone number.
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

export default Notifications;

const styles = StyleSheet.create({
	flexWidth: {
		width: "80%",
	},
	hi: {
		color: "#808080",
		fontSize: 14,
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
