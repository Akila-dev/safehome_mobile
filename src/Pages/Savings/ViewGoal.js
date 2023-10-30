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
import { useNavigation } from "@react-navigation/native";
const house = require("../../images/houses.png");
import { FontAwesome5 } from "react-native-vector-icons";
import Highlight from "../../components/Highlight";

import { color, size, font } from "../../utilities/constants";
import { text, button, goalCard } from "../../utilities/styles";

const ViewGoal = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPasssword] = useState("");
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [other, setOther] = useState("");
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
	const handleNameChange = (name) => {
		setName(name);
	};
	const handlePasswordChange = (password) => {
		setPasssword(password);
	};
	const handleGenderChange = (gender) => {
		setGender(gender);
	};
	const handleOtherChange = (other) => {
		setOther(other);
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
						width: "100%",
						marginBottom: 40,
					}}
				>
					<View>
						<View
							style={{
								position: "relative",
							}}
						>
							<Image
								style={{
									marginTop: 24,
									width: "100%",
									borderRadius: 8,
									height: 200,
								}}
								source={house}
							/>
							<View
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Text
									style={[
										{
											fontSize: size.xxl,
											color: "white",
											fontFamily: font.semibold,
											paddingTop: 10,
										},
									]}
								>
									Goal Title
								</Text>
							</View>
						</View>

						<View
							style={{
								flexDirection: "row",
								width: "100%",
								gap: 12,
								marginVertical: 25,
							}}
						>
							<Highlight title="Goal Balance" value="55,073.63" colored />
							<Highlight title="Overall Set Goal" value="505,073.63" colored />
						</View>

						<TouchableOpacity
							style={[button.fill, { marginBottom: 20 }]}
							onPress={() => navigation.navigate("AddFundsGoal")}
						>
							<Text style={text.buttonFill}>Add Funds to Goal</Text>
						</TouchableOpacity>

						<View>
							<View
								style={{
									flexDirection: "row",
									width: "100%",
									gap: 12,
									marginBottom: 12,
								}}
							>
								<TouchableOpacity
									onPress={() => navigation.navigate("GoalSettings")}
									style={[
										button.outline,
										{
											borderColor: color.highlight,
											height: "auto",
											flexDirection: "row",
											gap: 6,
											paddingHorizontal: 8,
											paddingVertical: 16,
											margin: 0,
										},
									]}
								>
									<FontAwesome5
										name="cog"
										color={color.highlight}
										size={size.md}
									/>
									<Text
										style={[text.header, { fontSize: size.base, margin: 0 }]}
									>
										Goal Settings
									</Text>
								</TouchableOpacity>

								<TouchableOpacity
									onPress={() => navigation.navigate("ExtendedGoal")}
									style={[
										button.outline,
										{
											borderColor: color.highlight,
											height: "auto",
											flexDirection: "row",
											gap: 6,
											padding: 8,
											margin: 0,
										},
									]}
								>
									<FontAwesome5
										name="calendar"
										color={color.highlight}
										size={size.md}
									/>
									<Text
										style={[text.header, { fontSize: size.base, margin: 0 }]}
									>
										Extend Goal
									</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View
							style={{
								gap: 12,
							}}
						>
							<View
								style={{
									flexDirection: "row",
									width: "100%",
									gap: 12,
								}}
							>
								<Highlight title="Start Date" value="8th August 2023" />
								<Highlight title="Withdrawal Date" value="7th August 2024" />
							</View>
							<View
								style={{
									flexDirection: "row",
									width: "100%",
									gap: 12,
								}}
							>
								<Highlight title="Frequency" value="Daily" />
								<Highlight title="Goal Amount" value="555,073.63" />
							</View>
							<View
								style={{
									flexDirection: "row",
									width: "100%",
									gap: 12,
								}}
							>
								<Highlight title="Interest per Annum" value="9%" />
								<Highlight title="Days Left" value="307" />
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ViewGoal;

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
		fontSize: 12,
	},
	contentNaira: {
		color: "#1A374D",
		fontFamily: "MontserratSemiBold",
		marginTop: 4,
		fontSize: 14,
	},
	contentNairas: {
		color: "#1A374D",
		fontFamily: "MontserratLight",
		marginTop: 1,
		fontSize: 14,
	},
	contentGoal: {
		color: "#ff9100",
		fontFamily: "MontserratSemiBold",
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
		marginTop: 16,
		padding: 16,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
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
	flexDisplay: {
		flexDirection: "column",
		width: "48%",
		gap: 12,
		borderColor: "#66666635",
		borderWidth: 1,
		padding: 12,
		borderRadius: 12,
	},
	flexDisplays: {
		flexDirection: "row",
		width: "48%",
		gap: 12,
		borderColor: "#66666635",
		borderWidth: 1,
		padding: 12,
		borderRadius: 12,
		paddingTop: 24,
		paddingBottom: 24,
		alignItems: "center",
		justifyContent: "center",
	},
	flexColor: {
		color: "#1A374D",
		fontSize: 14,
		fontFamily: "MontserratLight",
		width: "80%",
	},
});
