import {
	StyleSheet,
	Image,
	TextInput,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
	Switch,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const house = require("../../images/houses.png");
import { FontAwesome5 } from "react-native-vector-icons";
import Tabs from "../../components/Tabs";
import Highlight from "../../components/Highlight";

import { color, size, font } from "../../utilities/constants";
import { button, formStyle, text, card } from "../../utilities/styles";

const ViewLocked = () => {
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
						width: "100%",
						marginBottom: 20,
					}}
				>
					<Text style={[text.darkHeader, { textTransform: "uppercase" }]}>
						Smart Office Lekki
					</Text>

					<View>
						<View
							style={{
								position: "relative",
							}}
						>
							<Image
								style={{
									marginTop: 24,
									width: "100%",
									borderRadius: 8,
									height: 250,
								}}
								source={house}
							/>
							<View
								style={{
									position: "absolute",
									bottom: "10%",
									top: "10%",
									backgroundColor: "#Ffffff",
									fontSize: 28,
									height: 200,
									width: "92%",
									margin: 16,
									textAlign: "center",
									fontFamily: "MontserratSemiBold",
								}}
							>
								<View>
									<View
										style={{
											flexDirection: "row",
										}}
									>
										<View
											style={[
												styles.flexDisplay,
												{ borderWidth: 0, width: 120 },
											]}
										>
											<Text style={styles.content}>Group Balance</Text>
											<Text style={styles.contentGoal}>₦500,000</Text>
										</View>
										<View
											style={[
												styles.flexDisplay,
												{ borderWidth: 0, width: 120 },
											]}
										>
											<Text style={styles.content}>Target</Text>
											<Text style={styles.contentGoal}>₦500,000</Text>
										</View>
										<View
											style={[
												styles.flexDisplay,
												{ borderWidth: 0, width: 120 },
											]}
										>
											<Text style={styles.content}>Member</Text>
											<Text style={styles.contentGoal}>14</Text>
										</View>
									</View>
								</View>
								<View>
									<View
										style={{
											flexDirection: "row",
										}}
									>
										<View
											style={[
												styles.flexDisplay,
												{ borderWidth: 0, width: "100%" },
											]}
										>
											<Text style={styles.content}>Group Balance</Text>
											<View
												style={{
													backgroundColor: "#d9d9d945",
													width: "100%",
													borderRadius: 12,
													height: 12,
												}}
											>
												<View
													style={{
														backgroundColor: "#8D4000",
														width: "40%",
														borderRadius: 12,
														height: 12,
													}}
												></View>
											</View>
										</View>
									</View>
									<View
										style={{
											flexDirection: "row",
										}}
									>
										<View
											style={[
												styles.flexDisplay,
												{ borderWidth: 0, width: "100%" },
											]}
										>
											<Text style={styles.content}>Available Units: 200</Text>
										</View>
									</View>
								</View>
							</View>
						</View>

						<View
							style={{
								gap: 12,
								marginVertical: 25,
							}}
						>
							<Highlight title="Expected Returns" value="18% in 6 months" />
							<Highlight title="Offer Closing Date" value="7th August 2024" />
							<Highlight title="Maturity Date" value="23rd Oct 2023" />
							<Highlight title="Payout Time" value="Capital + profit" />
							<Highlight title="Status" value="Completed" />
							<Highlight title="Payback Time" value="06:09am" />
						</View>

						<View style={{ gap: 12, marginTop: 20 }}>
							<TouchableOpacity
								style={button.fill}
								onPress={() => navigation.navigate("LockedFundForm")}
							>
								<Text style={text.buttonFill}>Create Goal</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={button.outline}
								onPress={() => navigation.navigate("AboutOpp")}
							>
								<Text style={text.buttonOutline}>Cancel</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ViewLocked;

const styles = StyleSheet.create({
	logo: {
		height: 60,
		width: 160,
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
		fontSize: 12,
	},
	contentNaira: {
		color: "#1A374D",
		fontFamily: "MontserratSemiBold",
		marginTop: 4,
		fontSize: 14,
	},
	contentNairas: {
		color: "#1A374D",
		fontFamily: "MontserratLight",
		marginTop: 1,
		fontSize: 14,
	},
	contentGoal: {
		color: "#8D4000",
		fontFamily: "MontserratSemiBold",
		marginTop: 4,
		fontSize: 14,
	},
	textInput: {
		height: 56,
		borderRadius: 8,
		backgroundColor: "#F9F9F9",
		fontSize: 14,
		fontFamily: "Regular",
		padding: 20,
		marginTop: 4,
		// marginBottom: 24,
		width: "100%",
	},
	textLabel: {
		marginTop: 24,
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
		backgroundColor: "#8D4000",
		marginTop: 16,
		padding: 16,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
	buttonIn: {
		height: 56,
		borderColor: "#8D4000",
		borderWidth: 1,
		marginTop: 64,
		padding: 16,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
	orangeText: {
		color: "#FF6100",
		textAlign: "center",
		fontFamily: "Regular",
		fontSize: 16,
	},
	dropdown: {
		height: 55,
		// borderColor: `${theme.text}65`,
		//  borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
		marginTop: 4,
		// color: gray
		backgroundColor: "#f9f9f9",
	},
	flex: {
		flexDirection: "row",
		width: "100%",
		gap: 12,
		marginTop: 48,
	},
	flexDisplay: {
		flexDirection: "column",
		width: "48%",
		gap: 12,
		borderColor: "#66666635",
		borderWidth: 1,
		padding: 12,
		borderRadius: 12,
	},
	flexDisplays: {
		flexDirection: "row",
		width: "100%",
		gap: 12,
		borderColor: "#66666635",
		borderWidth: 1,
		padding: 12,
		borderRadius: 12,
		paddingTop: 24,
		paddingBottom: 24,
		alignItems: "center",
		justifyContent: "center",
	},
	flexColor: {
		color: "#1A374D",
		fontSize: 14,
		fontFamily: "MontserratLight",
		width: "80%",
	},
});
