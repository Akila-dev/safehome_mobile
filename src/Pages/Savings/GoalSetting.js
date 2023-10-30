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

import { color, size, font } from "../../utilities/constants";
import { button, formStyle, text } from "../../utilities/styles";

const GoalSetting = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [goalName, setGoalName] = useState("");
	const [fundingSource, setFundingSource] = useState("");

	const headerTintColor = "#000000";

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor,
			headerBackTitleVisible: false,
		});
	}, [navigation]);

	const handleGoalNameChange = (goalName) => {
		setGoalName(goalName);
	};
	const handleFundingSourceChange = (fundingSource) => {
		setFundingSource(fundingSource);
	};
	const data = [
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
						paddingLeft: 16,
						paddingRight: 16,
						marginBottom: 20,
					}}
				>
					<View>
						<View
							style={{
								marginTop: 20,
							}}
						>
							<Text style={text.header}>Add Funds</Text>
							<Text style={text.content}>
								Instantly add funds to this savings goal.{" "}
							</Text>
						</View>
						<View
							style={{
								marginTop: 0,
							}}
						>
							<View>
								<Text style={formStyle.label}>Goal Name</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("goalName")}
									onBlur={() => setFocusedInput(null)}
									value={goalName}
									placeholder="Enter your an amount"
									placeholderTextColor={color.placeholder}
									onChangeText={handleGoalNameChange}
								/>
							</View>

							<View>
								<Text style={formStyle.label}>Change Funding Source</Text>
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
									placeholder="Choose Funding Source"
									value={fundingSource}
									onChange={handleFundingSourceChange}
								/>
							</View>
						</View>
						<View style={{ marginTop: 64 }}>
							<TouchableOpacity
								style={button.fill}
								// onPress={() => navigation.navigate("KYCProcessing")}
							>
								<Text style={text.buttonFill}>Submit</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default GoalSetting;

// const styles = StyleSheet.create({
// 	header: {
// 		fontSize: size.lg,
// 		fontFamily: font.semibold,
// 		textAlign: "left",
// 		color: color.highlight,
// 	},
// 	content: {
// 		color: color.text,
// 		fontFamily: font.regular,
// 		marginTop: 4,
// 		fontSize: size.base,
// 	},
// 	buttonText: {
// 		fontFamily: "MontserratSemiBold",
// 		fontSize: size.base,
// 		color: "#ffffff",
// 	},
// });
