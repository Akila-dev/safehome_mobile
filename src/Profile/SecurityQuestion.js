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

const SecurityQuestion = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [question1, setQuestion1] = useState("");
	const [answer1, setAnswer1] = useState("");
	const [question2, setQuestion2] = useState("");
	const [answer2, setAnswer2] = useState("");

	const headerTintColor = "#000000";

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor,
			headerBackTitleVisible: false,
		});
	}, [navigation]);

	const handleQuestion1Change = (question1) => {
		setQuestion1(question1);
	};
	const handleAnswer1Change = (answer1) => {
		setAnswer1(answer1);
	};
	const handleQuestion2Change = (question2) => {
		setQuestion2(question2);
	};
	const handleAnswer2Change = (answer2) => {
		setAnswer2(answer2);
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
							<Text style={text.header}>Security Question</Text>
							<Text style={text.light}>
								Set security questions and answers to protect your account.{" "}
							</Text>
						</View>
						<View
							style={{
								marginTop: 10,
							}}
						>
							<View>
								<Text style={formStyle.label}>Security Question 1</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("question1")}
									onBlur={() => setFocusedInput(null)}
									value={question1}
									placeholder="e.g First dog's name"
									placeholderTextColor={color.placeholder}
									onChangeText={handleQuestion1Change}
								/>
							</View>

							<View>
								<View>
									<Text style={formStyle.label}>Answer</Text>
									<TextInput
										style={formStyle.input} // Use the dynamically defined style
										onFocus={() => setFocusedInput("answer1")}
										onBlur={() => setFocusedInput(null)}
										value={answer1}
										placeholder="Enter your correct answer"
										placeholderTextColor={color.placeholder}
										onChangeText={handleAnswer1Change}
									/>
								</View>
								<View>
									<Text style={formStyle.label}>Security Question 2</Text>
									<TextInput
										style={formStyle.input} // Use the dynamically defined style
										onFocus={() => setFocusedInput("question2")}
										onBlur={() => setFocusedInput(null)}
										value={question2}
										placeholder="e.g Favorite place in the world"
										placeholderTextColor={color.placeholder}
										onChangeText={handleQuestion2Change}
									/>
								</View>
								<View>
									<Text style={formStyle.label}>Answer</Text>
									<TextInput
										style={formStyle.input} // Use the dynamically defined style
										onFocus={() => setFocusedInput("answer2")}
										onBlur={() => setFocusedInput(null)}
										value={answer2}
										placeholder="Enter your correct answer"
										placeholderTextColor={color.placeholder}
										onChangeText={handleAnswer2Change}
									/>
								</View>
							</View>
						</View>
						<View style={{ marginTop: 64 }}>
							<TouchableOpacity
								style={button.fill}
								// onPress={() => navigation.navigate("KYCProcessing")}
							>
								<Text style={text.buttonFill}>Save</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SecurityQuestion;

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
