import React, { useState, useRef } from "react";
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
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
const logo = require("../images/Logo.png");

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card, imgStyle } from "../utilities/styles";

const EmailVerification = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState(""); // Fix the typo here
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor: "#000000",
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
		setPassword(password);
	};
	const handleGenderChange = (gender) => {
		setGender(gender);
	};
	const data = [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	];

	const [otp, setOtp] = useState(["", "", "", "", "", ""]);
	const inputRefs = [
		useRef(),
		useRef(),
		useRef(),
		useRef(),
		useRef(),
		useRef(),
	];

	const handleOTPChange = (index, value) => {
		if (value.match(/^[0-9]$/)) {
			otp[index] = value;
			setOtp([...otp]);
			if (index < 5 && value !== "") {
				inputRefs[index + 1].current.focus();
			}
		}
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
			<ScrollView style={{ height: "100%" }}>
				<View
					style={{
						flex: 1,
						backgroundColor: "#fff",
						padding: 16,
						marginBottom: 40,
						height: "100%",
						justifyContent: "center",
					}}
				>
					{/* <View style={[imgStyle.logoContainer, { marginTop: 20 }]}>
						<Image source={logo} style={imgStyle.logo} />
					</View> */}
					<View>
						<View
							style={
								(styles.viewForLogo,
								{ alignItems: "flex-start", marginTop: 45 })
							}
						>
							<Text style={text.header}>Email Verification</Text>
							<Text style={text.content}>
								A code has been sent to Example@gmail.com, kindly input the code
								to confirm Signup.
							</Text>
						</View>

						<View style={{ marginTop: 48 }}>
							<Text style={[text.darkHeader, { fontSize: size.md }]}>
								Enter 6 Digit Code
							</Text>

							<View style={styles.container}>
								{otp.map((value, index) => (
									<TextInput
										key={index}
										style={[
											styles.input,
											focusedInput === index
												? { borderColor: "#FF6100" }
												: null,
										]}
										value={value}
										onChangeText={(text) => handleOTPChange(index, text)}
										ref={inputRefs[index]}
										keyboardType="numeric"
										maxLength={1}
										onFocus={() => setFocusedInput(index)}
										onBlur={() => setFocusedInput(null)}
									/>
								))}
							</View>
						</View>
						<TouchableOpacity>
							<Text
								style={[
									text.header,
									{
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
										textAlign: "right",
										marginTop: 12,
										fontSize: size.base,
									},
								]}
							>
								Resend Code
							</Text>
						</TouchableOpacity>
						<View style={{ marginTop: 64 }}>
							<TouchableOpacity
								style={button.fill}
								onPress={() => navigation.navigate("KYCVerification")}
							>
								<Text style={text.buttonFill}>Create Account</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default EmailVerification;

const styles = StyleSheet.create({
	viewForLogo: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 34,
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 24,
		gap: 10,
		paddingVertical: 5,
	},
	input: {
		flex: 1,
		height: 55,
		borderWidth: 1,
		borderRadius: 6,
		borderColor: "#00000045",
		textAlign: "center",
		fontSize: size.lg,
	},
});
