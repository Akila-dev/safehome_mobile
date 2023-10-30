import {
	SafeAreaView,
	Dimensions,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import Transaction from "../components/Transaction";
import { useNavigation } from "@react-navigation/native";
const imageHouse = require("../images/house.png");

import { color, size, font } from "../utilities/constants";
import { text, goalCard } from "../utilities/styles";

const GoalsComponentInvestment = () => {
	const [selectedComponent, setSelectedComponent] = useState("Ongoing Savings");

	const navigation = useNavigation();

	return (
		<TouchableOpacity onPress={() => navigation.navigate("ViewInvestment")}>
			<View style={goalCard.container}>
				<View style={goalCard.imageContainer}>
					<Image
						style={{ width: "100%", borderRadius: 12, height: 130 }}
						source={imageHouse}
					/>
				</View>
				<View style={[goalCard.contentContainer, { gap: 10 }]}>
					<View>
						<Text
							style={[goalCard.title, { textTransform: "uppercase" }]}
							numberOfLines={1}
						>
							smart office lekki
						</Text>
						<Text
							style={[text.content, { fontSize: size.sm }]}
							numberOfLines={1}
						>
							<Text style={{ color: color.green }} numberOfLines={1}>
								10%
							</Text>{" "}
							returns in 12 months
						</Text>
					</View>

					<View>
						<View style={goalCard.flexGoal}>
							<Text
								style={[
									goalCard.price,
									{
										flex: 2,
									},
								]}
							>
								{" "}
								₦50,000
							</Text>
							<Text
								style={[
									goalCard.price,
									{
										flex: 1,
										textAlign: "right",
									},
								]}
							>
								{" "}
								1807
							</Text>
						</View>
						<View style={goalCard.flexGoal}>
							<Text style={[goalCard.type, { flex: 2 }]}> Per Unit</Text>
							<Text style={[goalCard.type, { flex: 1, textAlign: "right" }]}>
								Investors
							</Text>
						</View>
					</View>

					<View style={[goalCard.flexGoal, { alignItems: "center" }]}>
						<View
							style={{
								width: "100%",
								height: 30,
								backgroundColor: color.green,
								borderRadius: 5,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Text
								style={{
									fontSize: size.sm,
									color: "#ffffff",
									fontFamily: font.regular,
								}}
							>
								100 available
							</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default GoalsComponentInvestment;

// const styles = StyleSheet.create({
// 	price: {
// 		fontSize: 24,
// 		marginTop: 4,
// 		fontFamily: "MontserratSemiBold",
// 	},
// 	title: {
// 		fontSize: 14,
// 		fontFamily: "Regular",
// 	},
// 	text: {
// 		color: "white",
// 		fontSize: 14,
// 		fontFamily: "Regular",
// 	},
// 	texts: {
// 		color: "#1E0700",
// 		fontSize: 14,
// 		fontFamily: "Regular",
// 	},
// 	withdraw: {
// 		width: "48.5%",
// 		height: 50,
// 		borderColor: "#1E0700",
// 		borderWidth: 1,
// 		justifyContent: "center",
// 		alignItems: "center",
// 		borderRadius: 4,
// 	},
// 	transaction: {
// 		color: "#121212",
// 		fontSize: 13,
// 		fontFamily: "MontserratLight",
// 	},
// 	activeText: {
// 		color: "#8D4000",
// 		paddingBottom: 1,
// 		borderColor: "#8D4000",
// 		borderBottomWidth: 3,
// 		borderRadius: 2,
// 		fontFamily: "MontserratSemiBold",
// 	},
// 	goalComponent: {
// 		borderColor: "#66666645",
// 		borderWidth: 1,
// 		borderRadius: 12,
// 		padding: 12,
// 		flexDirection: "row",
// 		width: "100%",
// 		gap: 12,
// 		marginTop: 12,
// 	},
// 	goalComponentImage: {
// 		width: "48%",
// 	},
// 	goalComponentView: {
// 		justifyContent: "space-between",
// 		borderRadius: 12,
// 		height: 130,
// 		flexDirection: "column",
// 		width: "48%",
// 		gap: 12,
// 	},
// 	flexGoal: {
// 		flexDirection: "row",
// 		alignItems: "center",
// 		justifyContent: "space-between",
// 	},
// });
