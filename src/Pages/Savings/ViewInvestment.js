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

import { color, size, font } from "../../utilities/constants";
import { text, button } from "../../utilities/styles";

const ViewInvestment = () => {
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
						marginBottom: 220,
					}}
				>
					<Text style={[text.darkHeader, { textTransform: "uppercase" }]}>
						Smart Office Lekki
					</Text>

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
									height: 50,
									width: "92%",
									margin: 16,
									textAlign: "center",
									fontFamily: "MontserratSemiBold",
								}}
							>
								<View>
									<View
										style={{
											flexDirection: "row",
										}}
									>
										<View
											style={[
												styles.flexDisplay,
												{ borderWidth: 0, width: "100%" },
											]}
										>
											<Text style={[styles.content, { fontSize: 16 }]}>
												<Text
													style={{
														color: "#Ff9100",
														fontFamily: "MontserratSemiBold",
													}}
												>
													Available Units:
												</Text>
												{""} 200
											</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
						<Text
							style={[
								styles.content,
								{
									fontSize: 15,
									marginTop: 24,
									fontFamily: "MontserratSemiBold",
								},
							]}
						>
							SMART OFFICE LEKKI
						</Text>

						<View
							style={{
								flexDirection: "row",
								width: "100%",
								gap: 6,
							}}
						>
							<View style={styles.viewFlex}>
								<Text
									style={[
										styles.contentNairas,
										{
											color: "#ff9100",
											fontFamily: "MontserratSemiBold",
											fontSize: 12,
										},
									]}
								>
									Effective Capital
								</Text>
								<Text style={styles.contentNairas}>₦555,073</Text>
							</View>
							<View style={styles.viewFlex}>
								<Text
									style={[
										styles.contentNairas,
										{
											color: "#ff9100",
											fontFamily: "MontserratSemiBold",
											fontSize: 12,
										},
									]}
								>
									Effective Capital
								</Text>
								<Text style={styles.contentNairas}>₦555,073</Text>
							</View>
							<View style={styles.viewFlex}>
								<Text
									style={[
										styles.contentNairas,
										{
											color: "#ff9100",
											fontFamily: "MontserratSemiBold",
											fontSize: 12,
										},
									]}
								>
									Effective Capital
								</Text>
								<Text style={styles.contentNairas}>₦555,073</Text>
							</View>
						</View>
						<TouchableOpacity
							style={styles.button}
							onPress={() => navigation.navigate("InvestmentFundForm")}
						>
							<Text style={styles.buttonText}>Invest Now</Text>
						</TouchableOpacity>
						<View>
							<View style={[styles.flex, { marginTop: 16 }]}>
								<TouchableOpacity
									onPress={() => navigation.navigate("AboutInvestment")}
									style={[
										styles.button,
										{
											borderColor: "#1E0700",
											borderWidth: 1,
											marginTop: 0,
											backgroundColor: "#ffffff",
										},
									]}
								>
									<Text style={styles.contentGoal}>
										About Locked Oppurtunity
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View>
							<View style={[styles.flex, { marginTop: 16 }]}>
								<View style={styles.flexDisplay}>
									<Text style={styles.content}>Total Capital</Text>
									<Text style={styles.contentNairas}>18% in 6 months</Text>
								</View>
								<View style={styles.flexDisplay}>
									<Text style={styles.content}>Maturity Value</Text>
									<Text style={styles.contentNairas}>₦555,073</Text>
								</View>
							</View>
						</View>
						<View>
							<View style={[styles.flex, { marginTop: 16 }]}>
								<View style={styles.flexDisplay}>
									<Text style={styles.content}>Profit</Text>
									<Text style={styles.contentNairas}>₦555,073</Text>
								</View>
								<View style={styles.flexDisplay}>
									<Text style={styles.content}>Purchased Units</Text>
									<Text style={styles.contentNairas}>100 units</Text>
								</View>
							</View>
						</View>
						<View>
							<View style={[styles.flex, { marginTop: 16 }]}>
								<View style={styles.flexDisplay}>
									<Text style={styles.content}>Maturity Date</Text>
									<Text style={styles.contentNairas}>23rd October, 2023</Text>
								</View>
								<View style={styles.flexDisplay}>
									<Text style={styles.content}>Expected Returns</Text>
									<Text style={styles.contentNairas}>11% in 12 months</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ViewInvestment;

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
		fontSize: 12,
	},
	contentNaira: {
		color: "#1A374D",
		fontFamily: "MontserratSemiBold",
		marginTop: 4,
		fontSize: 13,
	},
	contentNairas: {
		color: "#1A374D",
		fontFamily: "MontserratLight",
		marginTop: 1,
		fontSize: 13,
	},
	viewFlex: {
		borderColor: "#66666645",
		borderWidth: 1,
		padding: 12,
		marginTop: 24,
		marginBottom: 12,
		borderRadius: 8,
		// width: '30%'
	},
	contentGoal: {
		color: "#1E0700",
		fontFamily: "MontserratSemiBold",
		marginTop: 4,
		fontSize: 13,
	},
	textInput: {
		height: 56,
		borderRadius: 8,
		backgroundColor: "#F9F9F9",
		fontSize: 13,
		fontFamily: "Regular",
		padding: 20,
		marginTop: 4,
		// marginBottom: 24,
		width: "100%",
	},
	textLabel: {
		marginTop: 24,
		fontFamily: "Regular",
		fontSize: 15,
		color: "#1A374D",
	},
	buttonText: {
		fontFamily: "MontserratSemiBold",
		fontSize: 15,
		color: "#ffffff",
	},
	button: {
		height: 56,
		backgroundColor: "#1E0700",
		marginTop: 16,
		padding: 16,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
	buttonIn: {
		height: 56,
		borderColor: "#1E0700",
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
		fontSize: 15,
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
		height: 56,
		flexDirection: "row",
		width: "100%",
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
		fontSize: 13,
		fontFamily: "MontserratLight",
		width: "80%",
	},
});
