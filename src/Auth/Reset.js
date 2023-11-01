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

const ResetPassword = () => {
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
				paddingVertical: 20,
			}}
		>
			<ScrollView>
				<View
					style={{
						flex: 1,
						backgroundColor: "#fff",
						padding: 16,
						gap: 20,
						// justifyContent: "center",
					}}
				>
					<View style={[imgStyle.logoContainer, { marginTop: 10 }]}>
						<Image source={logo} style={imgStyle.logo} />
					</View>

					<View>
						<View style={styles.viewForLogo}>
							<Text style={text.header}>Reset Password</Text>
							<Text style={text.light}>Securely sign up to safeHome</Text>
						</View>
						<View>
							<View>
								<Text style={formStyle.label}>Create Password</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("name")}
									onBlur={() => setFocusedInput(null)}
									value={name}
									placeholder="Enter new password"
									placeholderTextColor={color.placeholder}
									onChangeText={handleNameChange}
								/>
							</View>

							<View>
								<Text style={formStyle.label}>Confirm Password</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("password")}
									onBlur={() => setFocusedInput(null)}
									value={password}
									placeholder="Re-enter new password"
									placeholderTextColor={color.placeholder}
									onChangeText={handlePasswordChange}
								/>
							</View>
						</View>
						<View style={{ marginTop: 44, flexDirection: "row" }}>
							<TouchableOpacity
								style={[button.fill, { width: "100%", flex: 1 }]}
								onPress={() => navigation.navigate("NavBar")}
							>
								<Text style={text.buttonFill}>Submit</Text>
							</TouchableOpacity>
						</View>
						<View></View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ResetPassword;

const styles = StyleSheet.create({
	viewForLogo: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 24,
	},
});
