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
import Transaction from "../../components/Transaction";
import Overview from "../../components/Overview";
import { useNavigation } from "@react-navigation/native";
import GoalsComponent from "../../components/Goals";
import Header from "../../components/Header";

import { color, size, font } from "../../utilities/constants";
import { button, formStyle, text, card, tab } from "../../utilities/styles";

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

const OngoingSavingsComponent = () => (
	<View style={{ gap: 15 }}>
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

const GoalSavings = () => {
	const [selectedComponent, setSelectedComponent] = useState("Ongoing Savings");
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
				marginTop: -24,
			}}
		>
			<ScrollView
				style={{
					padding: 16,
				}}
			>
				<Header name="Goal Savings" type="popup" />

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
						onPress={() => navigation.navigate("AddCreateGoal")}
						style={[button.fill]}
					>
						<Text style={text.buttonFill}>Create Goal</Text>
					</TouchableOpacity>
				</View>

				<View
					style={{
						marginTop: 38,
						marginBottom: 48,
					}}
				>
					<View>
						<View
							style={{
								marginBottom: 20,
								justifyContent: "space-around",
								flexDirection: "row",
							}}
						>
							<View>
								<Text
									style={[
										tab.normal,
										selectedComponent === "Ongoing Savings" && tab.active,
									]}
									onPress={() => setSelectedComponent("Ongoing Savings")}
								>
									Ongoing Savings
								</Text>
							</View>

							<View>
								<Text
									style={[
										tab.normal,
										selectedComponent === "Completed" && tab.active,
									]}
									onPress={() => setSelectedComponent("Completed")}
								>
									Completed
								</Text>
							</View>
						</View>
						{selectedComponent === "Ongoing Savings" && (
							<OngoingSavingsComponent />
						)}
						{selectedComponent === "Completed" && <CompletedComponent />}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default GoalSavings;

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
		width: Dimensions.get("window").width,
		height: 200,
		borderRadius: 12,
		padding: 24,
		flexDirection: "column",
		justifyContent: "space-between",
		//marginRight: 16,
		width: "100%",
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
		fontSize: 16,
		fontFamily: "Regular",
	},
	texts: {
		color: "#1E0700",
		fontSize: 16,
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
		fontSize: 12,
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
