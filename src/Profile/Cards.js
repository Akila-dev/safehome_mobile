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
import { LinearGradient } from "expo-linear-gradient";

import zenith from "../../assets/banks/zenith.png";
import mastercard from "../../assets/cards/mastercard.png";
import visa from "../../assets/cards/visa.png";

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
		logo: visa,
		type: "visa",
		card_no: "4173887766550000",
		name: "Samson Sayed",
		expiry_date: "02/24",
	},
	{
		logo: mastercard,
		type: "mastercard",
		card_no: "4173887766550000",
		name: "Samson Sayed",
		expiry_date: "02/24",
	},
];

const bankData = [
	{
		logo: zenith,
		bank: "Zenith Bank",
		name: "Samson Sayed",
		acc_no: "1130825681",
	},
	{
		logo: zenith,
		bank: "Zenith Bank",
		name: "Samson Sayed",
		acc_no: "1130825681",
	},
];
const visaGradient = ["#4682b4", "#87ceeb", "#0000ff"];
const mastercardGradient = ["#dc143c", "#ff0000", "#800000"];

const DebitCards = ({ navigation }) => (
	<View>
		<View style={{ gap: 20, marginTop: 10, marginBottom: 30 }}>
			{cardData.map((item, index) => (
				<View key={index}>
					<LinearGradient
						colors={item.type === "visa" ? visaGradient : mastercardGradient}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={[card.overview]}
					>
						<View style={[flex.row]}>
							<Image
								source={item.logo}
								style={{
									height: 30,
									width: item.type === "visa" ? 70 : 45,
									resizeMode: "contain",
								}}
							/>
							<View style={{ flex: 1 }}></View>
						</View>
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
					</LinearGradient>
				</View>
			))}
		</View>
		<View style={{ marginTop: 14 }}>
			<TouchableOpacity
				style={button.fill}
				onPress={() => navigation.navigate("AddCard")}
			>
				<Text style={text.buttonFill}>Add New Card</Text>
			</TouchableOpacity>
		</View>
	</View>
);

const BankDetails = ({ navigation }) => (
	<View>
		<View style={{ gap: 20, marginTop: 10, marginBottom: 30 }}>
			{bankData.map((item, index) => (
				<View
					key={index}
					style={[
						card.overview,
						{
							backgroundColor: color.b1,
							borderWidth: 1,
							borderColor: color.lines,
						},
					]}
				>
					<View>
						<Image source={item.logo} style={{ height: 50, width: 50 }} />
					</View>
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
				onPress={() => navigation.navigate("AddBank")}
			>
				<Text style={text.buttonFill}>Add New Bank</Text>
			</TouchableOpacity>
		</View>
	</View>
);

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

						{selectedComponent === "Debit Cards" && (
							<DebitCards navigation={navigation} />
						)}
						{selectedComponent === "Bank Detail" && (
							<BankDetails navigation={navigation} />
						)}
						{selectedComponent === "Transactions" && (
							<TransactionsComponent navigation={navigation} />
						)}
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
