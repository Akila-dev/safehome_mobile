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

const ViewInvestment = () => {
	const navigation = useNavigation();
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
			<ScrollView>
				<View
					style={{
						flex: 1,
						backgroundColor: "#fff",
						padding: 16,
						width: "100%",
						marginBottom: 20,
					}}
				>
					<Text style={[text.darkHeader, { textTransform: "uppercase" }]}>
						Smart Office Lekki
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

					{/* Other Contents */}
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

					{/* Highlights */}
					<View
						style={{
							flexDirection: "row",
							width: "100%",
							gap: 12,
							marginVertical: 25,
						}}
					>
						<Highlight title="Effective Capital" value="555,073.63" colored />
						<Highlight title="Units Purchased" value="1" colored />
					</View>

					{/* buttons */}
					<View
						style={{
							gap: 12,
						}}
					>
						<TouchableOpacity
							style={button.fill}
							onPress={() => navigation.navigate("InvestmentFundForm")}
						>
							<Text style={text.buttonFill}>Buy More Units</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate("AboutInvestment")}
							style={[button.outline]}
						>
							<Text style={text.buttonOutline}>About this Oppurtunity</Text>
						</TouchableOpacity>
					</View>

					<View
						style={{
							gap: 12,
							marginVertical: 25,
						}}
					>
						<Highlight title="ROI" value="Skyline Splendor" />
						<Highlight title="Maturity Date" value="5 Years" />
						<Highlight title="Investment ID" value="SP_MV_005" />
						<Highlight title="Investment Exit" value="Luxury Living" />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ViewInvestment;

// const styles = StyleSheet.create({
// 	logo: {
// 		height: 60,
// 		width: 160,
// 	},
// 	viewForLogo: {
// 		width: "100%",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		marginTop: 48,
// 	},
// 	header: {
// 		fontSize: 24,
// 		fontFamily: "MontserratSemiBold",
// 		textAlign: "left",
// 		color: "#1E0700",
// 	},
// 	content: {
// 		color: "#1A374D",
// 		fontFamily: "MontserratLight",
// 		marginTop: 4,
// 		fontSize: 12,
// 	},
// 	contentNaira: {
// 		color: "#1A374D",
// 		fontFamily: "MontserratSemiBold",
// 		marginTop: 4,
// 		fontSize: 13,
// 	},
// 	contentNairas: {
// 		color: "#1A374D",
// 		fontFamily: "MontserratLight",
// 		marginTop: 1,
// 		fontSize: 13,
// 	},
// 	viewFlex: {
// 		borderColor: "#66666645",
// 		borderWidth: 1,
// 		padding: 12,
// 		marginTop: 24,
// 		marginBottom: 12,
// 		borderRadius: 8,
// 		// width: '30%'
// 	},
// 	contentGoal: {
// 		color: "#1E0700",
// 		fontFamily: "MontserratSemiBold",
// 		marginTop: 4,
// 		fontSize: 13,
// 	},
// 	textInput: {
// 		height: 56,
// 		borderRadius: 8,
// 		backgroundColor: "#F9F9F9",
// 		fontSize: 13,
// 		fontFamily: "Regular",
// 		padding: 20,
// 		marginTop: 4,
// 		// marginBottom: 24,
// 		width: "100%",
// 	},
// 	textLabel: {
// 		marginTop: 24,
// 		fontFamily: "Regular",
// 		fontSize: 15,
// 		color: "#1A374D",
// 	},
// 	buttonText: {
// 		fontFamily: "MontserratSemiBold",
// 		fontSize: 15,
// 		color: "#ffffff",
// 	},
// 	button: {
// 		height: 56,
// 		backgroundColor: "#1E0700",
// 		marginTop: 16,
// 		padding: 16,
// 		width: "100%",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		borderRadius: 4,
// 	},
// 	buttonIn: {
// 		height: 56,
// 		borderColor: "#1E0700",
// 		borderWidth: 1,
// 		marginTop: 64,
// 		padding: 16,
// 		width: "100%",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		borderRadius: 4,
// 	},
// 	orangeText: {
// 		color: "#FF6100",
// 		textAlign: "center",
// 		fontFamily: "Regular",
// 		fontSize: 15,
// 	},
// 	dropdown: {
// 		height: 55,
// 		// borderColor: `${theme.text}65`,
// 		//  borderWidth: 0.5,
// 		borderRadius: 8,
// 		paddingHorizontal: 8,
// 		marginTop: 4,
// 		// color: gray
// 		backgroundColor: "#f9f9f9",
// 	},
// 	flex: {
// 		flexDirection: "row",
// 		width: "100%",
// 		gap: 12,
// 		marginTop: 48,
// 	},
// 	flexDisplay: {
// 		flexDirection: "column",
// 		width: "48%",
// 		gap: 12,
// 		borderColor: "#66666635",
// 		borderWidth: 1,
// 		padding: 12,
// 		borderRadius: 12,
// 	},
// 	flexDisplays: {
// 		height: 56,
// 		flexDirection: "row",
// 		width: "100%",
// 		gap: 12,
// 		borderColor: "#66666635",
// 		borderWidth: 1,
// 		padding: 12,
// 		borderRadius: 12,
// 		paddingTop: 24,
// 		paddingBottom: 24,
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// 	flexColor: {
// 		color: "#1A374D",
// 		fontSize: 13,
// 		fontFamily: "MontserratLight",
// 		width: "80%",
// 	},
// });
