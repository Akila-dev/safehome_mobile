import {
	SafeAreaView,
	Dimensions,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Image,
	PixelRatio,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import Transaction from "../components/Transaction";
import Overview from "../components/Overview";
import { useNavigation } from "@react-navigation/native";
import GoalsComponentInvestment from "../components/Investment";
import Tabs from "../components/Tabs";
import Header from "../components/Header";
const imageHouse = require("../images/house.png");
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card, tab } from "../utilities/styles";

const overviewData = [
	{
		icon: "chart-bar",
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
		tab: "Investment",
		text: "My Investment",
	},
	{
		tab: "NewOpportunities",
		text: "New Opportunities",
	},
	{
		tab: "Completed",
		text: "Completed",
	},
];

const InvestmentComponent = () => (
	<View
		style={{
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			padding: 48,
			height: 250,
		}}
	>
		<FontAwesome5 name="bullseye" size={48} />
		<Text style={[text.light, { textAlign: "center", marginTop: 24 }]}>
			You have no ongoing investment. Click on New Opportunities to find
			investment plans and get started.
		</Text>
	</View>
);

const NewOpportunitiesComponent = () => (
	<View>
		<ScrollView
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			style={{
				marginBottom: 10,
				marginTop: 5,
				flexDirection: "row",
			}}
		>
			<Text style={[tab.activeFilter, { marginLeft: 0 }]}>All</Text>
			<Text style={tab.normalFilter}>Land owners club</Text>
			<Text style={tab.normalFilter}>Home owners club</Text>
			<Text style={tab.normalFilter}>Office owners club</Text>
		</ScrollView>
		<View style={{ gap: 15, marginTop: 5 }}>
			<GoalsComponentInvestment />
			<GoalsComponentInvestment />
			<GoalsComponentInvestment />
		</View>
	</View>
);

const CompletedComponent = () => (
	<View style={{ gap: 15, marginTop: 10 }}>
		<GoalsComponentInvestment />
		<GoalsComponentInvestment />
		<GoalsComponentInvestment />
	</View>
);

const Charts = () => {
	const [selectedComponent, setSelectedComponent] = useState("Investment");
	const headerTintColor = "#000000";

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor,
			headerBackTitleVisible: false,
		});
	}, [navigation]);
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
				<Header name="Investment" />

				<Overview data={overviewData} type="investments" />

				<View
					style={{
						marginTop: 24,
						width: "100%",
						flexDirection: "row",
						gap: 12,
					}}
				>
					<TouchableOpacity
						// onPress={() => navigation.navigate("LockedFundForm")}
						onPress={() => setSelectedComponent("NewOpportunities")}
						style={button.fill}
					>
						<Text style={text.buttonFill}>Invest Now</Text>
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

						{selectedComponent === "Investment" && <InvestmentComponent />}
						{selectedComponent === "NewOpportunities" && (
							<NewOpportunitiesComponent />
						)}
						{selectedComponent === "Completed" && <CompletedComponent />}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Charts;

const styles = StyleSheet.create({
	hi: {
		color: "#808080",
		fontSize: getFontSize(16),
		fontFamily: "MontserratLight",
	},
	name: {
		fontSize: getFontSize(18),
		color: "#8D4000",
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
		width: 340,
		height: 200,
		borderRadius: 12,
		padding: 24,
		flexDirection: "column",
		justifyContent: "space-between",
		//marginRight: 16,
		//width: "100%",
	},
	price: {
		fontSize: getFontSize(28),
		marginTop: 4,
		fontFamily: "MontserratSemiBold",
	},
	title: {
		fontSize: getFontSize(16),
		fontFamily: "Regular",
	},
	addFunds: {
		width: "100%",
		height: 50,
		backgroundColor: "#1E0700",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
	text: {
		color: "white",
		fontSize: getFontSize(16),
		fontFamily: "MontserratSemiBold",
	},
	texts: {
		color: "#1E0700",
		fontSize: getFontSize(16),
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
		fontSize: getFontSize(14),
		fontFamily: "MontserratLight",
	},
	activeText: {
		color: "#ff9100",
		paddingBottom: 1,
		borderColor: "#ff9100",
		borderBottomWidth: 3,
		borderRadius: 2,
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
