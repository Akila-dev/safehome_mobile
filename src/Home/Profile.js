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
import React from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import Transaction from "../components/Transaction";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
const pics = require("../images/house.png");

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card, flex } from "../utilities/styles";

const accountNavs = [
	{ icon: "user-alt", url: "profileInformation", text: "Profile Information" },
	{ icon: "book", url: "profileKYC", text: "Update KYC" },
	{ icon: "bell", url: "profileNotifications", text: "Notification" },
	{ icon: "credit-card", url: "cards", text: "Card & Bank Settings" },
	{ icon: "lock", url: "Security", text: "Security" },
	{ icon: "share-alt", url: "Refer", text: "Refer & Earn" },
	{ icon: "phone-alt", url: "Contact", text: "Contact Us" },
];

const Profile = () => {
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
				<Header name="Account" />

				<View style={[flex.row, { marginTop: 10 }]}>
					<View>
						<Image
							source={pics}
							style={{
								width: 60,
								height: 60,
								borderRadius: 64,
							}}
						/>
					</View>
					<View>
						<Text
							style={[text.darkHeader, { fontSize: size.lg }]}
							numberOfLines={1}
						>
							Ibeneme Ikenna
						</Text>
						<Text
							style={[
								text.header,
								{ fontSize: size.base, fontFamily: font.regular },
							]}
							numberOfLines={1}
						>
							Ibenemeikenna96@gmail.com
						</Text>
					</View>
				</View>

				<View style={{ gap: 25, paddingVertical: 35 }}>
					{accountNavs.map((item, index) => (
						<TouchableOpacity
							key={index}
							style={[flex.row]}
							onPress={() => navigation.navigate(item.url)}
						>
							<FontAwesome5 name={item.icon} size={18} width={20} />
							<Text style={[text.content, { fontSize: size.md, marginTop: 0 }]}>
								{item.text}
							</Text>
						</TouchableOpacity>
					))}
					<TouchableOpacity
						onPress={() => navigation.navigate("Login")}
						style={[flex.row]}
					>
						<FontAwesome5
							name="sign-out-alt"
							size={18}
							width={20}
							color="#ff0000"
						/>
						<Text
							style={[
								text.content,
								{ fontSize: size.md, marginTop: 0, color: "#ff0000" },
							]}
						>
							Log Out
						</Text>
					</TouchableOpacity>
				</View>

				<View
					style={{
						marginBottom: 30,
					}}
				></View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Profile;

const styles = StyleSheet.create({
	hi: {
		// color: "#808080",
		fontSize: 18,
		fontFamily: "MontserratSemiBold",
		marginBottom: 4,
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
	title: {
		fontSize: 16,
		fontFamily: "MontserratMedium",
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
	flex: {
		flexDirection: "row",
		// justifyContent: "center",
		alignItems: "center",
		gap: 16,
		marginTop: 32,
	},
	transaction: {
		color: "#121212",
		fontSize: 20,
		fontFamily: "Regular",
	},
});
