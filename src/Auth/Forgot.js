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
const logo = require("../images/Logo.png");
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card, imgStyle } from "../utilities/styles";

const ForgotPassword = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPasssword] = useState("");
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");

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
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	];
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
						gap: 40,
						justifyContent: "space-between",
					}}
				>
					<View style={[imgStyle.logoContainer]}>
						<Image source={logo} style={imgStyle.logo} />
					</View>
					<View>
						<View style={[{ alignItems: "center", marginBottom: 20 }]}>
							<Text style={text.header}>Forgot Password</Text>
							<Text style={text.light}>Securely sign up to safeHome</Text>
						</View>
						<View>
							<View>
								<Text style={formStyle.label}>Email</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("email")}
									onBlur={() => setFocusedInput(null)}
									value={email}
									placeholder="Enter your Email Address"
									placeholderTextColor={color.placeholder}
									onChangeText={handleEmailChange}
								/>
							</View>
						</View>
					</View>
					<View>
						<View style={{ marginBottom: 20 }}>
							<TouchableOpacity
								style={[button.fill, { width: "100%", flex: 1 }]}
								onPress={() => navigation.navigate("passverify")}
							>
								<Text style={text.buttonFill}>Submit</Text>
							</TouchableOpacity>
						</View>
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Text style={[text.content, { fontSize: size.base }]}>
								Did you Remember?{" "}
								<Text
									onPress={() => navigation.navigate("Login")}
									style={{ color: color.highlight }}
								>
									Login
								</Text>
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ForgotPassword;

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
		fontSize: 24,
		fontFamily: "Bold",
	},
	content: {
		color: "#1A374D",
		fontFamily: "Light",
		marginTop: 4,
		fontSize: 14,
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
	},
	buttonText: {
		fontFamily: "Regular",
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
		marginTop: 24,
		backgroundColor: "#f9f9f9",
	},
});
