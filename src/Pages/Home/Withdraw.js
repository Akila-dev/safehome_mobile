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

const Withdraw = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("");

	const headerTintColor = "#000000";

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor,
			headerBackTitleVisible: false,
		});
	}, [navigation]);

	const handleEmailChange = (email) => {
		setEmail(email);
	};
	const handleGenderChange = (gender) => {
		setGender(gender);
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
							<Text style={text.header}>Withdraw Funds</Text>
							<Text style={text.light}>
								Instantly Withdrawal funds to your account.{" "}
							</Text>
						</View>
						<View
							style={{
								marginTop: 24,
							}}
						>
							<View>
								<Text style={formStyle.label}>Amount to Withdraw (₦)</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("email")}
									onBlur={() => setFocusedInput(null)}
									value={email}
									placeholder="Enter your an amount"
									placeholderTextColor={"#1e1e1e45"}
									onChangeText={handleEmailChange}
								/>
							</View>

							<View>
								<Text style={formStyle.label}>Withdrawal Source</Text>
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
									placeholderTextColor={"#1e1e1e45"}
									placeholder="Choose Withdrawal Source"
									value={gender}
									onChange={handleGenderChange}
								/>
							</View>
						</View>
						<View style={{ marginTop: 64 }}>
							<TouchableOpacity
								style={button.fill}
								// onPress={() => navigation.navigate("KYCProcessing")}
							>
								<Text style={text.buttonFill}>Withdraw</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Withdraw;

const styles = StyleSheet.create({
	header: {
		fontSize: size.lg,
		fontFamily: font.semibold,
		textAlign: "left",
		color: color.highlight,
	},
	content: {
		color: color.text,
		fontFamily: font.regular,
		marginTop: 4,
		fontSize: size.base,
	},
	buttonText: {
		fontFamily: "MontserratSemiBold",
		fontSize: size.base,
		color: "#ffffff",
	},
});
