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
const house = require("../../images/houses.png");

import { color, size, font } from "../../utilities/constants";
import { button, formStyle, text } from "../../utilities/styles";

const AddCreateGoal = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [goalTitle, setGoalTitle] = useState("");
	const [password, setPasssword] = useState("");
	const [goalPurpose, setGoalPurpose] = useState("");
	const [savePreference, setSavePreference] = useState("");
	const [automatePlanOption, setAutomatePlanOption] = useState("");

	const headerTintColor = "#000000";

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor,
			headerBackTitleVisible: false,
		});
	}, [navigation]);

	const handleGoalTitleChange = (goalTitle) => {
		setGoalTitle(goalTitle);
	};
	const handleGoalPurposeChange = (goalPurpose) => {
		setGoalPurpose(goalPurpose);
	};
	const handlePasswordChange = (password) => {
		setPasssword(password);
	};
	const handleSavePreferenceChange = (savePreference) => {
		setSavePreference(savePreference);
	};
	const handleAutomatePlanOptionChange = (savePreference) => {
		setAutomatePlanOption(savePreference);
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
						marginBottom: 40,
					}}
				>
					<View>
						<View
							style={{
								marginTop: 0,
							}}
						>
							<Text style={text.header}>Create a Goal</Text>
							<Text style={text.light}>
								Reach your personal goal much faster
							</Text>
						</View>

						<Image
							style={{
								marginTop: 34,
								width: "100%",
								borderRadius: 8,
								height: 200,
							}}
							source={house}
						/>
						<View
							style={{
								marginTop: 4,
							}}
						>
							<View>
								<Text style={formStyle.label}>Goal Title</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("goalTitle")}
									onBlur={() => setFocusedInput(null)}
									value={goalTitle}
									placeholder="Enter a Goal Title"
									placeholderTextColor={color.placeholder}
									onChangeText={handleGoalTitleChange}
								/>
							</View>
							<View>
								<Text style={formStyle.label}>Purpose of Goal</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("goalPurpose")}
									onBlur={() => setFocusedInput(null)}
									value={goalPurpose}
									placeholder="What’s the purpose of this Goal?"
									placeholderTextColor={color.placeholder}
									onChangeText={handleGoalPurposeChange}
								/>
							</View>
							<View>
								<Text style={formStyle.label}>Overall Goal Amount</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("savePreference")}
									onBlur={() => setFocusedInput(null)}
									value={savePreference}
									placeholder="Individual"
									placeholderTextColor={color.placeholder}
									onChangeText={handleSavePreferenceChange}
								/>
							</View>
							<View>
								<Text style={formStyle.label}>
									How will you prefer to save?
								</Text>
								<Dropdown
									style={formStyle.dropdown.container}
									itemTextStyle={formStyle.dropdown.text}
									placeholderStyle={formStyle.dropdown.placeholder}
									selectedTextStyle={formStyle.dropdown.text}
									itemContainerStyle={formStyle.dropdown.itemContainer}
									data={data}
									maxHeight={300}
									labelField="label"
									valueField="value"
									placeholderTextColor={color.placeholder}
									placeholder="How will you prefer to save?"
									value={savePreference}
									onChange={handleSavePreferenceChange}
								/>
							</View>
							<View>
								<Text style={formStyle.label}>
									Do you want to automate your plan?
								</Text>
								<Dropdown
									style={formStyle.dropdown.container}
									itemTextStyle={formStyle.dropdown.text}
									placeholderStyle={formStyle.dropdown.placeholder}
									selectedTextStyle={formStyle.dropdown.text}
									itemContainerStyle={formStyle.dropdown.itemContainer}
									data={dataTwo}
									maxHeight={300}
									labelField="label"
									valueField="value"
									placeholderTextColor={color.placeholder}
									placeholder="How will you prefer to save?"
									value={automatePlanOption}
									onChange={handleAutomatePlanOptionChange}
								/>
							</View>
						</View>
						<View style={{ marginTop: 60 }}>
							<TouchableOpacity
								style={button.fill}
								onPress={() => navigation.navigate("AddCreateGoalNext")}
							>
								<Text style={text.buttonFill}>Continue Setup</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AddCreateGoal;

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
		fontFamily: "MontserratSemiBold",
		textAlign: "left",
		color: "#1E0700",
	},
	content: {
		color: "#1A374D",
		fontFamily: "MontserratLight",
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
});
