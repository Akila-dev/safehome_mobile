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

const AddBank = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPasssword] = useState("");
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");

	const headerTintColor = "#000000";

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor,
			headerBackTitleVisible: false,
		});
	}, [navigation]);

	const handleEmailChange = (email) => {
		setEmail(email);
	};
	const handleNameChange = (name) => {
		setName(name);
	};
	const handlePasswordChange = (password) => {
		setPasssword(password);
	};
	const handleGenderChange = (gender) => {
		setGender(gender);
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
						marginBottom: 220,
					}}
				>
					<View>
						<View
							style={{
								marginTop: 32,
							}}
						>
							<Text style={text.header}>Add Bank Details</Text>
							<Text style={text.light}>
								Make sure you input the right information
							</Text>
						</View>
						<View
							style={{
								marginTop: 24,
							}}
						>
							<View>
								<Text style={formStyle.label}>Bank Name</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("email")}
									onBlur={() => setFocusedInput(null)}
									value={email}
									placeholder="Select"
									placeholderTextColor={color.placeholder}
									onChangeText={handleEmailChange}
								/>
							</View>

							<View>
								<Text style={formStyle.label}>Account Number</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("name")}
									onBlur={() => setFocusedInput(null)}
									value={name}
									placeholder="Enter Account Number"
									placeholderTextColor={color.placeholder}
									onChangeText={handleEmailChange}
								/>
								<View
									style={{
										backgroundColor: "#ff910025",
										paddingTop: 12,
										paddingHorizontal: 12,
										marginTop: 12,
										borderRadius: 8,
									}}
								>
									<Text style={[formStyle.label, { marginTop: 0 }]}>
										IBENEME IKENNA
									</Text>
								</View>
							</View>
						</View>
						<View>
							<TouchableOpacity
								style={styles.button}
								// onPress={() => navigation.navigate("KYCProcessing")}
							>
								<Text style={styles.buttonText}>Add Bank</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AddBank;

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
