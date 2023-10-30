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

const ExtendGoal = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [amount, setAmount] = useState("");
	const [fundingSource, setFundingSource] = useState("");
	const [periodicAmount, setPeriodicAmount] = useState("");

	const headerTintColor = "#000000";

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor,
			headerBackTitleVisible: false,
		});
	}, [navigation]);

	const handleAmountChange = (amount) => {
		setAmount(amount);
	};
	const handleFundingSourceChange = (fundingSource) => {
		setFundingSource(fundingSource);
	};
	const handlePeriodicAmountChange = (periodicAmount) => {
		setPeriodicAmount(periodicAmount);
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
							<Text style={text.header}>Extend Goal Amount</Text>
							<Text style={[text.content]}>
								You can now extend your goal amount.
							</Text>
							<Text
								style={[text.content, { marginTop: 0, lineHeight: size.md }]}
							>
								More options coming soon.
							</Text>
						</View>
						<View
							style={{
								marginTop: 0,
							}}
						>
							<View>
								<Text style={formStyle.label}>Increase Goal Amount (₦)</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("amount")}
									onBlur={() => setFocusedInput(null)}
									value={amount}
									placeholder="Enter your an amount"
									placeholderTextColor={color.placeholder}
									onChangeText={handleAmountChange}
								/>
							</View>

							<View>
								<Text style={formStyle.label}>Funding Source</Text>
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

							<View>
								<Text style={formStyle.label}>
									Enter Periodic Amount (if applicable)
								</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("periodicAmount")}
									onBlur={() => setFocusedInput(null)}
									value={periodicAmount}
									placeholder="Periodic Amount"
									placeholderTextColor={color.placeholder}
									onChangeText={handlePeriodicAmountChange}
								/>
							</View>
						</View>
						<View style={{ marginTop: 64 }}>
							<TouchableOpacity
								style={button.fill}
								// onPress={() => navigation.navigate("KYCProcessing")}
							>
								<Text style={text.buttonFill}>Top up</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ExtendGoal;

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
