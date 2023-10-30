import {
	StyleSheet,
	Image,
	TextInput,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
	Switch,
} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
const house = require("../../images/houses.png");

import { color, size, font } from "../../utilities/constants";
import {
	button,
	formStyle,
	text,
	card,
	tab,
	goalCard,
} from "../../utilities/styles";

const InvestmentFundForm = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [noOfUnits, setNoOfUnits] = useState("");
	const [password, setPasssword] = useState("");
	const [ammount, setAmmount] = useState("");
	const [fundingSource, setFundingSource] = useState("");
	const [other, setOther] = useState("");
	const headerTintColor = "#000000";
	const [giveConsent, setGiveConsent] = useState(false);

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor,
			headerBackTitleVisible: false,
		});
	}, [navigation]);

	const handleNoOfUnitsChange = (noOfUnits) => {
		setNoOfUnits(noOfUnits);
	};
	const handleAmmountChange = (ammount) => {
		setAmmount(ammount);
	};
	const handlePasswordChange = (password) => {
		setPasssword(password);
	};
	const handleFundingSourceChange = (fundingSource) => {
		setFundingSource(fundingSource);
	};
	const handleOtherChange = (other) => {
		setOther(other);
	};
	const data = [
		{
			label: "My Funds",
			value: "My Funds",
		},
		{
			label: "Savings Balance",
			value: "Savings Balance",
		},
		{
			label: "Debit card 531212 XXXX XXXX 1234",
			value: "Debit card 531212 XXXX XXXX 1234",
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
						width: "100%",
						marginBottom: 40,
					}}
				>
					<View>
						<View
							style={{
								marginTop: 0,
							}}
						>
							<Text style={text.header}>SMART OFFICE LEKKI</Text>
							<Text style={text.light}>
								Use the form below to purchase enough investment units.
							</Text>

							{/* Image and Image content */}
							<View
								style={{
									position: "relative",
								}}
							>
								<Image
									style={{
										marginTop: 20,
										width: "100%",
										borderRadius: 8,
										height: 210,
									}}
									source={house}
								/>
								<View
									style={{
										position: "absolute",
										bottom: 0,
										backgroundColor: "#Ffffff",
										fontSize: 28,
										height: "auto",
										width: "auto",
										margin: 16,
										textAlign: "center",
										fontFamily: "MontserratSemiBold",
										justifyContent: "center",
										paddingHorizontal: 12,
										paddingVertical: 5,
										borderRadius: 5,
									}}
								>
									<Text style={([text.content], { fontSize: size.tab })}>
										<Text
											style={{
												color: color.highlight,
												fontFamily: font.semibold,
											}}
										>
											Available Units:
										</Text>
										{""} 200
									</Text>
								</View>
							</View>

							<View style={[goalCard.flexGoal, { marginTop: 20 }]}>
								<View style={{ flex: 5 }}>
									<Text
										style={[text.content, { fontSize: size.md }]}
										numberOfLines={1}
									>
										SMART OFFICE LEKKI
									</Text>
									<Text
										style={[text.content, { fontSize: size.sm, marginTop: 0 }]}
										numberOfLines={1}
									>
										skyscraper_avenue_city_views
									</Text>
								</View>
								<View style={{ flex: 3 }}>
									<Text
										style={[
											goalCard.price,
											{ fontSize: size.md, textAlign: "right" },
										]}
										numberOfLines={1}
									>
										₦555,073.00
									</Text>
									<Text
										style={[
											text.content,
											{ fontSize: size.sm, textAlign: "right" },
										]}
										numberOfLines={1}
									>
										Per unit
									</Text>
								</View>
							</View>

							{/* Forms */}
							<View>
								<Text style={formStyle.label}>How many units?</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("noOfUnits")}
									onBlur={() => setFocusedInput(null)}
									value={noOfUnits}
									placeholder="Enter Preferred amount to save on a daily basis"
									placeholderTextColor={color.placeholder}
									onChangeText={handleNoOfUnitsChange}
								/>
							</View>
							<View>
								<Text style={formStyle.label}>Amount to Pay</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("ammount")}
									onBlur={() => setFocusedInput(null)}
									value={ammount}
									placeholder="What’samount to pay"
									placeholderTextColor={color.placeholder}
									onChangeText={handleAmmountChange}
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
									placeholder="Select a Funding Source"
									value={fundingSource}
									onChange={handleFundingSourceChange}
								/>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								gap: 12,
								paddingTop: 28,
								paddingBottom: 50,
								alignItems: "flex-start",
								flex: 1,
							}}
						>
							<View>
								<Switch
									value={giveConsent}
									onValueChange={(value) => setGiveConsent(value)}
								/>
							</View>
							<View style={{ flex: 1 }}>
								<Text style={[text.light, { lineHeight: size.xl }]}>
									I authorize SafeHome to Lock ₦25,000 immediately,
									automatically invest into the property and return it in full
									with interest when the investment matures. I confirm and
									approve this transaction. I hereby acknowledge that this
									Locked Savings CANNOT be broken once it has been created.
								</Text>
							</View>
						</View>
						<View>
							<TouchableOpacity
								style={button.fill}
								// onPress={() => navigation.navigate("KYCProcessing")}
							>
								<Text style={text.buttonFill}>Locked Funds</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default InvestmentFundForm;

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
		fontSize: 18,
		fontFamily: "MontserratSemiBold",
		textAlign: "left",
		//color: "#1E0700",
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
		fontFamily: "MontserratSemiBold",
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
	flexDisplay: {
		flexDirection: "column",
		width: "48%",
		gap: 12,
		borderColor: "#66666635",
		borderWidth: 1,
		padding: 12,
		borderRadius: 12,
	},
	buttonIn: {
		height: 56,
		borderColor: "#ff9100",
		borderWidth: 1,
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
	flex: {
		flexDirection: "row",
		width: "100%",
		gap: 12,
		marginTop: 48,
	},
	flexColor: {
		color: "#1A374D",
		fontSize: 14,
		fontFamily: "MontserratLight",
		width: "80%",
	},
});
