import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Overview from "../components/Overview";
import CopyButton from "../components/CopyButton";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card, flex } from "../utilities/styles";

const overviewData = [
	{
		icon: "piggy-bank",
		bg: "#8D400012",
		title: "Amount Earned",
		price: "₦10,000.00",
	},
	{
		icon: "share-alt",
		bg: "#FF610010",
		title: "Number of referrals",
		price: "3",
	},
];

const refersData = [
	{
		name: "Ibeneme Ibenemeeeeeeeeeeeeee",
		date: "10/10/2023",
	},
	{
		name: "Ibeneme Ibeneme",
		date: "10/10/2023",
	},
];

const Refer = () => {
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
						marginBottom: 20,
					}}
				>
					<View>
						<Text
							style={[text.darkHeader, { fontSize: size.xl, marginBottom: 0 }]}
						>
							Refer & Earn
						</Text>
						<Overview data={overviewData} type="home" />
					</View>

					<View style={{ marginVertical: 38, gap: 15 }}>
						<CopyButton link="shhshshshgsff" type="Link" />
						<CopyButton link="shhshshshgsff" type="Code" />
					</View>

					<View
						style={[
							flex.row,
							{
								justifyContent: "space-between",
							},
						]}
					>
						<Text style={[text.darkHeader]}>Referral History</Text>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								gap: 12,
							}}
						>
							<View>
								<FontAwesome5
									name="search"
									size={20}
									style={{ color: color.button }}
								/>
							</View>
							<FontAwesome5
								name="bars"
								size={20}
								style={{ color: color.button }}
							/>
						</View>
					</View>

					<View style={{ marginTop: 15 }}>
						{refersData.map((item, index) => (
							<View
								key={index}
								style={{
									flexDirection: "row",
									justifyContent: "space-around",
									height: 55,
									backgroundColor: index % 2 === 0 ? color.b1 : "white",
									alignItems: "center",
									gap: 15,
									paddingHorizontal: 15,
								}}
							>
								<Text style={[text.content]}>{index + 1}</Text>
								<Text style={[text.content, { flex: 1 }]} numberOfLines={1}>
									{item.name}
								</Text>
								<Text style={[text.content]}>{item.date}</Text>
							</View>
						))}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Refer;

const styles = StyleSheet.create({
	logo: {
		height: 60,
		width: 160,
	},
	price: {
		fontSize: 32,
		marginTop: 4,
		fontFamily: "MontserratSemiBold",
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
		fontSize: 16,
	},
	textInput: {
		height: 180,
		borderRadius: 8,
		backgroundColor: "#FF910015",
		fontSize: 14,
		fontFamily: "Regular",
		padding: 20,
		marginTop: 4,
		// marginBottom: 24,
		width: "100%",
	},
	viewss: {
		backgroundColor: "#ffffff",
		padding: 8,
		width: 140,
		borderRadius: 2,
		height: 45,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		gap: 12,
	},
	textInputs: {
		height: 55,
		borderRadius: 8,
		backgroundColor: "#f9f9f9",
		fontSize: 14,
		fontFamily: "Regular",
		padding: 12,
		marginTop: 24,
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		// marginBottom: 24,
		width: "100%",
	},
	textLabel: {
		marginTop: 32,
		fontFamily: "Regular",
		fontSize: 16,
		color: "#1A374D",
	},
	textLabels: {
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
		backgroundColor: "#1E0700",
		marginTop: 64,
		padding: 16,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
});
