import {
	SafeAreaView,
	Dimensions,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	PixelRatio,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import Transaction from "../components/Transaction";
import Overview from "../components/Overview";
import { useNavigation } from "@react-navigation/native";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card } from "../utilities/styles";

const overviewData = [
	{
		icon: "layer-group",
		bg: "#8D400012",
		title: "My Funds",
		price: "₦600.00",
	},
	{
		icon: "piggy-bank",
		bg: "#FF610010",
		title: "Total Savings",
		price: "₦2,200.00",
	},
	{
		icon: "chart-bar",
		bg: "#FF910010",
		title: "Total Investments",
		price: "₦2,220.00",
	},
	{
		icon: "money-check",
		bg: "#FF910010",
		title: "Total Loan",
		price: "₦220,200.00",
	},
];

const Home = () => {
	const navigation = useNavigation();

	const styles = StyleSheet.create({
		hi: {
			color: color.placeholder,
			fontSize: size.md,
			fontFamily: font.light,
		},
		name: {
			fontSize: size.lg,
			fontFamily: font.semibold,
		},
		viewWidths: {
			flex: 1,
		},
		topView: {
			marginTop: 24,
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		viewNotification: {
			width: 48,
			height: 48,
			backgroundColor: color.b1,
			alignItems: "center",
			justifyContent: "center",
			borderRadius: 12,
		},
	});

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
				<View style={[styles.topView]}>
					<View style={styles.viewWidths}>
						<Text style={styles.hi}>Hello</Text>
						<Text style={styles.name}>Ibeneme!</Text>
					</View>
					<TouchableOpacity
						onPress={() => navigation.navigate("NotificationPage")}
						style={styles.viewNotification}
					>
						<FontAwesome5 name="bell" size={28} />
						<View
							style={{
								width: 8,
								height: 8,
								backgroundColor: "#ff0000",
								position: "absolute",
								borderRadius: 12,
								right: 6,
								top: 10,
							}}
						></View>
					</TouchableOpacity>
				</View>

				<Overview data={overviewData} type="home" />

				<View
					style={{
						marginTop: 24,
						width: "100%",
						flexDirection: "row",
						gap: 12,
					}}
				>
					<TouchableOpacity
						onPress={() => navigation.navigate("AddFund")}
						style={button.fill}
					>
						<Text style={text.buttonFill}>+ Add Fund</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate("Withdraw")}
						style={button.outline}
					>
						<Text style={text.buttonOutline}>- Withdraw</Text>
					</TouchableOpacity>
				</View>

				<View
					style={{
						marginTop: 48,
						marginBottom: 48,
					}}
				>
					<View
						style={{
							justifyContent: "space-between",
							flexDirection: "row",
						}}
					>
						<Text style={text.header}>Transactions</Text>
						<Text
							onPress={() => navigation.navigate("TransactionPage")}
							style={[styles.hi, { fontSize: size.base }]}
						>
							See all
						</Text>
					</View>
					<Transaction type="deposit" />
					<Transaction type="withdrawal" />
					<Transaction type="deposit" />
					<Transaction type="withdrawal" />
					<Transaction type="deposit" />
					<Transaction type="withdrawal" />
					<Transaction type="deposit" />
					<Transaction type="withdrawal" />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
