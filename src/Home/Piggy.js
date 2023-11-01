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
import Overview from "../components/Overview";
import { useNavigation } from "@react-navigation/native";
import GoalsComponent from "../components/Goals";
import Tabs from "../components/Tabs";
import Header from "../components/Header";
const imageHouse = require("../images/house.png");

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card, tab } from "../utilities/styles";

const overviewData = [
	{
		icon: "bullseye",
		title: "Total Balance",
		price: "₦1,000,000.00",
		pa: "10% p.a",
	},
	{
		icon: "chart-bar",
		title: "Total Interest",
		price: "₦100,000.00",
		pa: "10% p.a",
	},
];

const tabsData = [
	{
		tab: "Ongoing Savings",
		text: "Ongoing Savings",
	},
	{
		tab: "Completed",
		text: "Completed",
	},
	{
		tab: "Transactions",
		text: "Transactions",
	},
];

const OngoingSavingsComponent = () => (
	<View style={{ gap: 15, marginTop: 10 }}>
		<GoalsComponent />
		<GoalsComponent />
		<GoalsComponent />
	</View>
);

const CompletedComponent = () => (
	<View
		style={{
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			padding: 48,
			height: 300,
		}}
	>
		<FontAwesome5 name="bullseye" size={48} />
		<Text style={[text.light, { textAlign: "center", marginTop: 24 }]}>
			You have no Completed savings plan, Create a goal or lock funds to get
			started.
		</Text>
	</View>
);

const TransactionsComponent = () => (
	<View>
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
	</View>
);

const PiggyHome = () => {
	const [selectedComponent, setSelectedComponent] = useState("Ongoing Savings");

	const navigation = useNavigation();
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
				<Header name="Savings" />

				<Overview data={overviewData} type="savings" />

				<View
					style={{
						marginTop: 24,
						width: "100%",
						flexDirection: "row",
						gap: 12,
					}}
				>
					<TouchableOpacity
						onPress={() => navigation.navigate("GoalSavings")}
						style={button.fill}
					>
						<Text style={text.buttonFill}>Goal Savings</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate("LockedHome")}
						style={button.outline}
					>
						<Text style={text.buttonOutline}>Locked Savings</Text>
					</TouchableOpacity>
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

						{selectedComponent === "Ongoing Savings" && (
							<OngoingSavingsComponent />
						)}
						{selectedComponent === "Completed" && <CompletedComponent />}
						{selectedComponent === "Transactions" && <TransactionsComponent />}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default PiggyHome;

const styles = StyleSheet.create({
	hi: {
		color: "#808080",
		fontSize: 16,
		fontFamily: "MontserratLight",
	},
	name: {
		fontSize: 18,
		fontFamily: "MontserratSemiBold",
	},
	viewWidths: {
		width: "50%",
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
	cards: {
		width: 300,
		height: 200,
		borderRadius: 12,
		padding: 24,
		flexDirection: "column",
		justifyContent: "space-between",
		//marginRight: 16,
		//width: "100%",
	},
	price: {
		fontSize: 28,
		marginTop: 4,
		fontFamily: "MontserratSemiBold",
	},
	title: {
		fontSize: 16,
		fontFamily: "Regular",
	},
	addFunds: {
		width: "48.5%",
		height: 50,
		backgroundColor: "#1E0700",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
	text: {
		color: "white",
		fontSize: 14,
		fontFamily: "Regular",
	},
	texts: {
		color: "#1E0700",
		fontSize: 14,
		fontFamily: "Regular",
	},
	withdraw: {
		width: "48.5%",
		height: 50,
		borderColor: "#1E0700",
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
	transaction: {
		color: "#121212",
		fontSize: 14,
		fontFamily: "MontserratLight",
	},
	activeText: {
		color: "#ff9100",
		paddingBottom: 5,
		borderColor: "#ff9100",
		borderBottomWidth: 2,
		fontFamily: "MontserratSemiBold",
	},
	goalComponent: {
		borderColor: "#66666645",
		borderWidth: 1,
		borderRadius: 12,
		padding: 12,
		flexDirection: "row",
		width: "100%",
		gap: 12,
		marginTop: 24,
	},
	goalComponentImage: {
		width: "48%",
	},
	goalComponentView: {
		//borderColor: "#66666645",
		//borderWidth: 1,
		justifyContent: "space-between",
		borderRadius: 12,
		// padding: 12,
		height: 130,
		flexDirection: "column",
		width: "48%",
		gap: 12,
	},
	flexGoal: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
