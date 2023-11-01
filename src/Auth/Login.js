import {
	StyleSheet,
	Image,
	TextInput,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
const logo = require("../images/Logo.png");
import { useNavigation } from "@react-navigation/native";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card, imgStyle } from "../utilities/styles";

const Login = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPasssword] = useState("");

	const handleEmailChange = (email) => {
		setEmail(email);
	};
	const handlePasswordChange = (password) => {
		setPasssword(password);
	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#fff",
				paddingVertical: 20,
			}}
		>
			<View
				style={{
					flex: 1,
					backgroundColor: "#fff",
					padding: 16,
					gap: 20,
					justifyContent: "space-between",
				}}
			>
				<View style={[imgStyle.logoContainer]}>
					<Image source={logo} style={imgStyle.logo} />
				</View>

				<View>
					<View style={[{ alignItems: "center" }]}>
						<Text style={[text.header, { textAlign: "center" }]}>
							Login to your account
						</Text>
						<Text style={[text.content, { textAlign: "center" }]}>
							Securely login to your safeHome
						</Text>
					</View>
					<View>
						<View>
							<Text style={formStyle.label}>Email</Text>
							<TextInput
								style={formStyle.input} // Use the dynamically defined style
								onFocus={() => setFocusedInput("email")}
								onBlur={() => setFocusedInput(null)}
								value={email}
								placeholder="Enter your email address"
								placeholderTextColor={color.placeholder}
								onChangeText={handleEmailChange}
							/>
						</View>
						<View>
							<Text style={formStyle.label}>Password</Text>
							<TextInput
								style={formStyle.input} // Use the dynamically defined style
								onFocus={() => setFocusedInput("password")}
								onBlur={() => setFocusedInput(null)}
								value={password}
								placeholder="Enter your Password"
								placeholderTextColor={color.placeholder}
								onChangeText={handlePasswordChange}
							/>
						</View>

						<View style={{ marginTop: 44, flexDirection: "row" }}>
							<TouchableOpacity
								onPress={() => navigation.navigate("NavBar")}
								style={[button.fill, { width: "100%", flex: 1 }]}
							>
								<Text style={text.buttonFill}>Log in</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						onPress={() => navigation.navigate("CreateAccount")}
						style={[text.content, { fontSize: size.base }]}
					>
						Don’t have an account?{" "}
						<Text style={{ color: color.highlight }}>Create account</Text>
					</Text>
					<Text
						onPress={() => navigation.navigate("Forgot")}
						style={[
							text.content,
							{ fontSize: size.base, color: color.highlight },
						]}
					>
						Forgot Password?
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Login;

const styles = StyleSheet.create({
	viewForLogo: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 48,
	},
});
