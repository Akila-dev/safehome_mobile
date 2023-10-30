import {
	StyleSheet,
	Image,
	TextInput,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
	Switch,
} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
const house = require("../../images/houses.png");

import { color, size, font } from "../../utilities/constants";
import { button, formStyle, text } from "../../utilities/styles";

const AddCreateGoalNext = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [preferredAmmount, setPreferredAmmount] = useState("");
	const [preferredTime, setPreferredTime] = useState("");
	const [startDate, setStartDate] = useState("");
	const [withdrawalDate, setWithdrawalDate] = useState("");
	const [primarySource, setPrimarySource] = useState("");
	const headerTintColor = "#000000";
	const [giveConsent, setGiveConsent] = useState(false);

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor,
			headerBackTitleVisible: false,
		});
	}, [navigation]);

	const handlePreferredAmmountChange = (preferredAmmount) => {
		setPreferredAmmount(preferredAmmount);
	};
	const handlePreferredTimeChange = (preferredTime) => {
		setPreferredTime(preferredTime);
	};
	const handleStartDateChange = (startDate) => {
		setStartDate(startDate);
	};
	const handleWithdrawalDateChange = (withdrawalDate) => {
		setWithdrawalDate(withdrawalDate);
	};
	const handlePrimarySourceChange = (primarySource) => {
		setPrimarySource(primarySource);
	};
	const data = [
		{
			label: "Daily",
			value: "Daily",
		},
		{
			label: "Weekly",
			value: "Weekly",
		},
		{
			label: "Monthly",
			value: "Monthly",
		},
		{
			label: "Anytime",
			value: "Anytime",
		},
	];

	const dataTwo = [
		{
			label: "Yes, I’d like my savings automated",
			value: "Yes, I’d like my savings automated",
		},
		{
			label: "No, I’ll make my savings myself",
			value: "No, I’ll make my savings myself",
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
						width: "100%",
						marginBottom: 40,
					}}
				>
					<View>
						<View
							style={{
								marginTop: 0,
								width: "100%",
							}}
						>
							<Text style={text.header}>Final Setup Stage</Text>
							<Text style={text.light}>Finalize your goal settings</Text>
						</View>

						<Image
							style={{
								marginTop: 24,
								width: "100%",
								borderRadius: 8,
								height: 200,
							}}
							source={house}
						/>
						<View
							style={{
								marginTop: 0,
							}}
						>
							<View>
								<Text style={formStyle.label}>
									Preferred amount to save on a daily basis
								</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("preferredAmmount")}
									onBlur={() => setFocusedInput(null)}
									value={preferredAmmount}
									placeholder="Enter Preferred amount to save on a daily basis"
									placeholderTextColor={color.placeholder}
									onChangeText={handlePreferredAmmountChange}
								/>
							</View>
							<View>
								<Text style={formStyle.label}>Preferred Time</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("preferredTime")}
									onBlur={() => setFocusedInput(null)}
									value={preferredTime}
									placeholder="What’s Preferred Time"
									placeholderTextColor={color.placeholder}
									onChangeText={handlePreferredTimeChange}
								/>
							</View>
							<View>
								<Text style={formStyle.label}>Set Start Date</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("startDate")}
									onBlur={() => setFocusedInput(null)}
									value={startDate}
									placeholder="Individual"
									placeholderTextColor={color.placeholder}
									onChangeText={handleStartDateChange}
								/>
							</View>

							<View>
								<Text style={formStyle.label}>Set Withdrawal Date</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("withdrawalDate")}
									onBlur={() => setFocusedInput(null)}
									value={withdrawalDate}
									placeholder="Individual"
									placeholderTextColor={color.placeholder}
									onChangeText={handleWithdrawalDateChange}
								/>
							</View>

							<View>
								<Text style={formStyle.label}>Select Primary Source</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("primarySource")}
									onBlur={() => setFocusedInput(null)}
									value={primarySource}
									placeholder="Individual"
									placeholderTextColor={color.placeholder}
									onChangeText={handlePrimarySourceChange}
								/>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								gap: 12,
								paddingTop: 28,
								paddingBottom: 50,
								alignItems: "flex-start",
								flex: 1,
							}}
						>
							<View>
								<Switch
									value={giveConsent}
									onValueChange={(value) => setGiveConsent(value)}
								/>
							</View>
							<View style={{ flex: 1 }}>
								<Text style={[text.light, { lineHeight: size.xl }]}>
									I acknowledge and agree that in the event I do not achieve the
									Goal amount of (₦340,000.00) by the set withdrawal date, I
									will forfeit the interest accrued on this Goal savings.
									Additionally, I understand that breaking the Goal before the
									withdrawal date will result in the loss of all accrued
									interest and I will be responsible for bearing the 1% payment
									gateway charge for processing my deposits into this Goal.
								</Text>
							</View>
						</View>
						<View style={{ gap: 12 }}>
							<TouchableOpacity
								style={button.fill}
								// onPress={() => navigation.navigate("KYCProcessing")}
							>
								<Text style={text.buttonFill}>Create Goal</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={button.outline}
								// onPress={() => navigation.navigate("KYCProcessing")}
							>
								<Text style={text.buttonOutline}>Cancel</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AddCreateGoalNext;

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
		backgroundColor: "#ff9100",
		marginTop: 64,
		padding: 16,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
	buttonIn: {
		height: 56,
		borderColor: "#ff9100",
		borderWidth: 1,
		marginTop: 64,
		padding: 16,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
	orangeText: {
		color: "#FF6100",
		textAlign: "center",
		fontFamily: "Regular",
		fontSize: 16,
	},
	dropdown: {
		height: 55,
		// borderColor: `${theme.text}65`,
		//  borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
		marginTop: 4,
		// color: gray
		backgroundColor: "#f9f9f9",
	},
	flex: {
		flexDirection: "row",
		width: "100%",
		gap: 12,
		marginTop: 48,
	},
	flexColor: {
		color: "#1A374D",
		fontSize: 14,
		fontFamily: "MontserratLight",
		width: "80%",
	},
});
