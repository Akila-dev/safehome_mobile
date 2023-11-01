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

const CreateAccountNext = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleEmailChange = (email) => {
		setEmail(email);
	};
	const handleConfirmPasswordChange = (confirmPassword) => {
		setConfirmPassword(confirmPassword);
	};
	const handlePasswordChange = (password) => {
		setPassword(password);
	};

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
						marginBottom: 20,
					}}
				>
					{/* <View style={[imgStyle.logoContainer, { marginTop: 20 }]}>
						<Image source={logo} style={imgStyle.logo} />
					</View> */}
					<View>
						<View style={[styles.viewForLogo, { marginTop: 10 }]}>
							<Text style={[text.header]}>Create your Account</Text>
							<Text style={[text.light]}>Securely sign up to safeHome</Text>
						</View>
						<View
							style={{
								marginTop: 0,
							}}
						>
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

							<View>
								<Text style={formStyle.label}>Create Password</Text>
								<TextInput
									style={formStyle.input}
									onFocus={() => setFocusedInput("password")}
									onBlur={() => setFocusedInput(null)}
									value={password}
									placeholder="Enter your Password"
									placeholderTextColor={color.placeholder}
									onChangeText={handlePasswordChange}
								/>
							</View>

							<View>
								<Text style={formStyle.label}>Confirm Password</Text>
								<TextInput
									style={formStyle.input}
									onFocus={() => setFocusedInput("confirmPassword")}
									onBlur={() => setFocusedInput(null)}
									value={confirmPassword}
									placeholder="Re-enter your Password"
									placeholderTextColor={color.placeholder}
									onChangeText={handleConfirmPasswordChange}
								/>
							</View>

							<View style={{ marginTop: 64 }}>
								<TouchableOpacity
									style={button.fill}
									onPress={() => navigation.navigate("EmailVerification")}
								>
									<Text style={text.buttonFill}>Create Account</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
								marginTop: 20,
							}}
						>
							<Text
								onPress={() => navigation.navigate("Login")}
								style={[text.content, { fontSize: size.base }]}
							>
								Already have an account?{" "}
								<Text style={{ color: color.highlight }}>Login</Text>
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CreateAccountNext;

const styles = StyleSheet.create({
	viewForLogo: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 34,
	},
});
