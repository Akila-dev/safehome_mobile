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
import { button, formStyle, text, goalCard } from "../utilities/styles";

const AddCard = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [cardNumber, setCardNumber] = useState("");
	const [expiryDate, setExpiryDate] = useState("");
	const [cvv, setCvv] = useState("");

	const headerTintColor = "#000000";

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor,
			headerBackTitleVisible: false,
		});
	}, [navigation]);

	const handleCardNumberChange = (cardNumber) => {
		setCardNumber(cardNumber);
	};
	const handleExpiryDateChange = (expiryDate) => {
		setExpiryDate(expiryDate);
	};
	const handleCvvChange = (cvv) => {
		setCvv(cvv);
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
						marginBottom: 40,
					}}
				>
					<View>
						<View
							style={{
								marginTop: 0,
							}}
						>
							<Text style={text.header}>Add new card</Text>
							<Text style={text.light}>
								Make sure you input the right information
							</Text>
						</View>
						<View
							style={{
								marginTop: 0,
							}}
						>
							<View>
								<Text style={formStyle.label}>Card Number</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("cardNumber")}
									onBlur={() => setFocusedInput(null)}
									value={cardNumber}
									placeholder="5399  xxxx  xxxx  xxxx"
									placeholderTextColor={color.placeholder}
									onChangeText={handleCardNumberChange}
								/>
							</View>

							<View style={goalCard.flexGoal}>
								<View style={{ flex: 3 }}>
									<Text style={formStyle.label}>Expiry Date</Text>
									<TextInput
										style={formStyle.input} // Use the dynamically defined style
										onFocus={() => setFocusedInput("expiryDate")}
										onBlur={() => setFocusedInput(null)}
										value={expiryDate}
										placeholder="Enter expiry date"
										placeholderTextColor={color.placeholder}
										onChangeText={handleExpiryDateChange}
									/>
								</View>
								<View style={{ flex: 2 }}>
									<Text style={formStyle.label}>CVV</Text>
									<TextInput
										style={formStyle.input} // Use the dynamically defined style
										onFocus={() => setFocusedInput("cvv")}
										onBlur={() => setFocusedInput(null)}
										value={cvv}
										placeholder="Enter CVV"
										placeholderTextColor={color.placeholder}
										onChangeText={handleCvvChange}
									/>
								</View>
							</View>
						</View>

						<View style={{ marginTop: 64 }}>
							<TouchableOpacity
								style={button.fill}
								// onPress={() => navigation.navigate("KYCProcessing")}
							>
								<Text style={text.buttonFill}>Add Card</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AddCard;

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
