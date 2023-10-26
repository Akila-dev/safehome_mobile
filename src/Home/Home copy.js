import {
	SafeAreaView,
	Dimensions,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	PixelRatio,
	FlatList,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import Transaction from "../components/Transaction";
import { useNavigation } from "@react-navigation/native";

const data = [
	{
		icon: "layer-group",
		title: "My Funds",
		content: "₦600.00",
		color: "#8D400012",
	},
	{
		icon: "piggy-bank",
		title: "Total Savings",
		content: "₦2,200.00",
		color: "#FF610010",
	},
	{
		icon: "chart-bar",
		title: "Total Investments",
		content: "₦2,200.00",
		color: "#FF910010",
	},
	{
		icon: "money-check",
		title: "Total Loan",
		content: "₦220,000.00",
		color: "#FF910010",
	},
];

const Home = () => {
	const navigation = useNavigation();
	const fontScale = PixelRatio.getFontScale();
	const getFontSize = (size) => size / fontScale;

	const styles = StyleSheet.create({
		hi: {
			color: "#808080",
			fontSize: getFontSize(16),
			fontFamily: "MontserratLight",
		},
		name: {
			fontSize: getFontSize(18),
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
			width: "25%",
			flex: 1,
			height: 200,
			borderRadius: 12,
			padding: 24,
			flexDirection: "column",
			justifyContent: "space-between",
			marginRight: 16,
			alignSelf: "stretch",
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
			width: "47%",
			height: 50,
			backgroundColor: "#1E0700",
			justifyContent: "center",
			alignItems: "center",
			borderRadius: 4,
		},
		withdraw: {
			width: "47%",
			height: 50,
			borderColor: "#1E0700",
			borderWidth: 1,
			justifyContent: "center",
			alignItems: "center",
			borderRadius: 4,
		},
		text: {
			color: "white",
			fontSize: getFontSize(16),
			fontFamily: "Regular",
		},
		texts: {
			color: "#1E0700",
			fontSize: getFontSize(16),
			fontFamily: "Regular",
		},

		transaction: {
			color: "#121212",
			fontSize: getFontSize(20),
			fontFamily: "Regular",
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

				<View
					style={{
						flexDirection: "row",
						justifyContent: "flex-end",
						marginTop: 12,
						gap: 4,
					}}
				>
					<View
						style={{
							width: 24,
							height: 8,
							borderRadius: 4,
							backgroundColor: "#FF9100",
						}}
					></View>
					<View
						style={{
							width: 12,
							height: 8,
							borderRadius: 4,
							backgroundColor: "#d9d9d948",
						}}
					></View>
					<View
						style={{
							width: 12,
							height: 8,
							borderRadius: 4,
							backgroundColor: "#d9d9d948",
						}}
					></View>
				</View>

				<FlatList
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					data={data}
					style={{
						marginTop: 14,
						gap: 24,
					}}
					renderItem={({ item, index }) => (
						<View
							style={[
								styles.cards,
								{
									backgroundColor: item.color,
								},
							]}
						>
							<FontAwesome5 name={item.icon} size={28} />
							<View>
								<Text style={styles.title}>{item.title}</Text>
								<Text style={styles.price}>{item.content}</Text>
							</View>
						</View>
					)}
				/>
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
						style={styles.addFunds}
					>
						<Text style={styles.text}>+ Add Fund</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate("Withdraw")}
						style={styles.withdraw}
					>
						<Text style={styles.texts}>- Withdraw</Text>
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
						<Text
							style={[
								styles.transaction,
								{ fontSize: 16, fontFamily: "MontserratSemiBold" },
							]}
						>
							Transactions
						</Text>
						<Text
							onPress={() => navigation.navigate("TransactionPage")}
							style={[styles.hi, { fontSize: 14 }]}
						>
							See all
						</Text>
					</View>
					<Transaction />
					<Transaction />
					<Transaction />
					<Transaction />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
