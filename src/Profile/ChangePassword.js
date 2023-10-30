import {
	StyleSheet,
	Image,
	TextInput,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text } from "../utilities/styles";

const ChangePassword = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const headerTintColor = "#000000";

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor,
			headerBackTitleVisible: false,
		});
	}, [navigation]);

	const handleOldPasswordChange = (oldPassword) => {
		setOldPassword(oldPassword);
	};
	const handleNewPasswordChange = (newPassword) => {
		setNewPassword(newPassword);
	};
	const handleConfirmPasswordChange = (confirmPassword) => {
		setConfirmPassword(confirmPassword);
	};
	const data = [
		{
			label: "My Funds",
			value: "My Funds",
		},
		{
			label: "Debit Card",
			value: "Debit Card",
		},
		{
			label: "Bank Transfer",
			value: "Bank Transfer",
		},
	];

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
						marginBottom: 20,
					}}
				>
					<View>
						<View
							style={{
								marginTop: 0,
							}}
						>
							<Text style={text.header}>Change Password</Text>
							<Text style={text.light}>
								Change your password using the form below{" "}
							</Text>
						</View>
						<View
							style={{
								marginTop: 10,
							}}
						>
							<View>
								<View>
									<Text style={formStyle.label}>Enter your old Password</Text>
									<TextInput
										style={formStyle.input} // Use the dynamically defined style
										onFocus={() => setFocusedInput("oldPassword")}
										onBlur={() => setFocusedInput(null)}
										value={oldPassword}
										placeholder="Enter your old Password"
										placeholderTextColor={color.placeholder}
										onChangeText={handleOldPasswordChange}
									/>
								</View>
								<View>
									<Text style={formStyle.label}>Enter your new Password</Text>
									<TextInput
										style={formStyle.input} // Use the dynamically defined style
										onFocus={() => setFocusedInput("newPassword")}
										onBlur={() => setFocusedInput(null)}
										value={newPassword}
										placeholder="Enter your new Password"
										placeholderTextColor={color.placeholder}
										onChangeText={handleNewPasswordChange}
									/>
								</View>
								<View>
									<Text style={formStyle.label}>Confirm your new Password</Text>
									<TextInput
										style={formStyle.input} // Use the dynamically defined style
										onFocus={() => setFocusedInput("confirmPassword")}
										onBlur={() => setFocusedInput(null)}
										value={confirmPassword}
										placeholder="Enter your new Password"
										placeholderTextColor={color.placeholder}
										onChangeText={handleConfirmPasswordChange}
									/>
								</View>
							</View>
						</View>
						<View style={{ marginTop: 64 }}>
							<TouchableOpacity
								style={button.fill}
								// onPress={() => navigation.navigate("KYCProcessing")}
							>
								<Text style={text.buttonFill}>Change Password</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ChangePassword;

const styles = StyleSheet.create({
	logo: {
		height: 60,
		width: 160,
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
		height: 56,
		borderRadius: 8,
		backgroundColor: "#F9F9F9",
		fontSize: 14,
		fontFamily: "Regular",
		padding: 20,
		marginTop: 4,
		// marginBottom: 24,
		width: "100%",
	},
	textLabel: {
		marginTop: 24,
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
