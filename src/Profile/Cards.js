import {
	SafeAreaView,
	Dimensions,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
const cardBlue = require("../images/CardBlue.png");
const cardRed = require("../images/cardRed.png");
const bank = require("../images/Bank.png");
import Tabs from "../components/Tabs";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, flex, tab, card } from "../utilities/styles";

const tabsData = [
	{
		tab: "Debit Cards",
		text: "Debit Cards",
	},
	{
		tab: "Bank Detail",
		text: "Bank Detail",
	},
];

const cardData = [
	{
		type: "visa",
		card_no: "4173887766550000",
		name: "Samson Sayed",
		expiry_date: "02/24",
	},
	{
		type: "mastercard",
		card_no: "4173887766550000",
		name: "Samson Sayed",
		expiry_date: "02/24",
	},
];

const bankData = [
	{
		bank: "Zenith Bank",
		name: "Samson Sayed",
		acc_no: "1130825681",
	},
	{
		bank: "Zenith Bank",
		name: "Samson Sayed",
		acc_no: "1130825681",
	},
];

const DebitCards = () => {
	const navigation = useNavigation();
	return (
		<View>
			<View style={{ gap: 20, marginTop: 20, marginBottom: 30 }}>
				{cardData.map((item, index) => (
					<View
						key={index}
						style={[card.overview, { backgroundColor: "gray" }]}
					>
						<Text>VISA</Text>
						<View
							style={[
								flex.row,
								{
									gap: 12,
									justifyContent: "flex-start",
									// flex: 1,
								},
							]}
						>
							<Text style={[card.card_no]}>
								{String(item.card_no).slice(0, 4)}
							</Text>
							<Text style={[card.card_no]}>****</Text>
							<Text style={[card.card_no]}>****</Text>
							<Text style={[card.card_no]}>
								{String(item.card_no).slice(String(item.card_no).length - 4)}
							</Text>
						</View>
						<View style={[flex.row, { alignItems: "flex-end" }]}>
							<Text
								style={[
									text.content,
									{ flex: 1, color: "white", fontFamily: font.semibold },
								]}
								numberOfLines={1}
							>
								{item.name}
							</Text>
							<View>
								<Text
									style={[text.content, { color: "white", fontSize: size.xs }]}
								>
									VALID THRU
								</Text>
								<Text
									style={[
										text.content,
										{
											color: "white",
											fontSize: size.sm,
											fontFamily: font.semibold,
										},
									]}
								>
									{item.expiry_date}
								</Text>
							</View>
						</View>
					</View>
				))}
			</View>
			<View style={{ marginTop: 34 }}>
				<TouchableOpacity
					style={button.fill}
					onPress={() => navigation.navigate("AddCard")}
				>
					<Text style={text.buttonFill}>Add New Card</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const BankDetails = () => {
	return (
		<View>
			<View style={{ gap: 20, marginTop: 20, marginBottom: 30 }}>
				{bankData.map((item, index) => (
					<View
						key={index}
						style={[card.overview, { backgroundColor: color.b1 }]}
					>
						<Text>Zenith</Text>
						<View style={{ gap: 20 }}>
							<Text
								style={[text.darkHeader, { fontSize: size.base }]}
								numberOfLines={1}
							>
								{item.name}
							</Text>
							<View
								style={[
									flex.row,
									{
										justifyContent: "space-between",
										gap: 20,
										width: "100%",
									},
								]}
							>
								<Text
									style={[text.content, { flex: 1, fontFamily: font.regular }]}
									numberOfLines={1}
								>
									{item.bank}
								</Text>
								<Text
									style={[text.content, { flex: 1, textAlign: "right" }]}
									numberOfLines={1}
								>
									{item.acc_no}
								</Text>
							</View>
						</View>
					</View>
				))}
			</View>
			<View style={{ marginTop: 34 }}>
				<TouchableOpacity
					style={button.fill}
					onPress={() => navigation.navigate("AddCard")}
				>
					<Text style={text.buttonFill}>Add New Card</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const Cards = () => {
	const [selectedComponent, setSelectedComponent] = useState("Debit Cards");
	const headerTintColor = "#000000";

	const navigation = useNavigation();

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
				backgroundColor: "#ffffff",
			}}
		>
			<ScrollView
				style={{
					padding: 16,
				}}
			>
				<View>
					<View style={{ flex: 1 }}>
						<Text style={text.header}>Card & bank setting</Text>
						<Text style={text.light}>
							Fll and upload the required Card and Bank information below.
						</Text>
					</View>
				</View>

				<View
					style={{
						marginTop: 38,
						marginBottom: 48,
					}}
				>
					<View>
						<Tabs
							data={tabsData}
							func={setSelectedComponent}
							selected={selectedComponent}
						/>

						{selectedComponent === "Debit Cards" && <DebitCards />}
						{selectedComponent === "Bank Detail" && <BankDetails />}
						{selectedComponent === "Transactions" && <TransactionsComponent />}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Cards;

const styles = StyleSheet.create({
	hi: {
		color: "#808080",
		fontSize: 16,
		fontFamily: "MontserratLight",
	},
	name: {
		fontSize: 24,
		fontFamily: "MontserratSemiBold",
	},
	viewWidths: {
		width: "80%",
	},
	topView: {
		marginTop: 24,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	viewNotification: {
		width: 48,
		backgroundColor: "#d9d9d945",
		height: 48,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 16,
	},
	transaction: {
		fontSize: 14,
		fontFamily: "MontserratLight",
		color: "#666666",
	},
	price: {
		fontSize: 32,
		marginTop: 4,
		fontFamily: "MontserratSemiBold",
	},
	title: {
		fontSize: 16,
		fontFamily: "Regular",
		color: "#66666690",
	},

	activeText: {
		color: "#ff9100",
		paddingBottom: 1,
		borderColor: "#ff9100",
		borderBottomWidth: 3,
		borderRadius: 2,
		fontFamily: "MontserratSemiBold",
	},

	textInput: {
		height: 56,
		borderRadius: 8,
		backgroundColor: "#F9F9F9",
		fontSize: 14,
		fontFamily: "Regular",
		padding: 20,
		borderColor: "#66666635",
		borderWidth: 1,
		marginTop: 4,
		// marginBottom: 24,
		width: "100%",
	},
	textLabel: {
		marginTop: 24,
		fontFamily: "Regular",
		fontSize: 16,
	},
	buttonText: {
		fontFamily: "Regular",
		fontSize: 16,
		color: "#ffffff",
	},
	button: {
		height: 56,
		backgroundColor: "#1E0700",
		marginTop: 64,
		marginBottom: 220,
		padding: 16,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
});
