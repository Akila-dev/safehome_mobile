import React, { useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "react-native-vector-icons";
const logo = require("../images/Logo.png");

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card, imgStyle } from "../utilities/styles";

const PinEntryScreen = () => {
	const [pin, setPin] = useState("");
	const navigation = useNavigation();

	const handlePinPress = (digit) => {
		if (pin.length < 4) {
			setPin(pin + digit);
			if (pin.length === 4) {
				navigation.navigate("NavBar");
			}
		}
	};

	const handleClearPin = () => {
		setPin("");
	};

	const handleDelete = () => {
		if (pin.length > 0) {
			setPin(pin.slice(0, -1));
		}
	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#fff",
			}}
		>
			{/* <ScrollView> */}
			<View
				style={{
					flex: 1,
					justifyContent: "space-between",
					height: "100%",
					paddingVertical: 40,
				}}
			>
				<View style={imgStyle.logoContainer}>
					<Image source={logo} style={imgStyle.logo} />
					{/* <Text style={[text.header]}>Login to Safehome</Text> */}
				</View>

				<View style={styles.pinContainer}>
					<Text style={[text.header, { fontSize: size.lg }]}>Enter PIN</Text>
					<View
						style={{
							borderWidth: 0,
							width: "80%",
							borderRadius: 12,
							padding: 10,
							borderColor: color.lines,
						}}
					>
						<Text style={styles.pinDisplay}>{pin}</Text>
					</View>
					<View style={styles.grid}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, "Clear", 0, "Delete"].map(
							(digit, index) =>
								index === 9 ? (
									// Clear
									<TouchableOpacity
										key={digit}
										style={styles.gridItem}
										onPress={handleClearPin}
									>
										<Text style={[text.header, { fontSize: size.base }]}>
											{digit}
										</Text>
									</TouchableOpacity>
								) : index === 11 ? (
									// Delete
									<TouchableOpacity
										key={digit}
										style={styles.gridItem}
										onPress={handleDelete}
									>
										<Text style={[text.header, { fontSize: size.base }]}>
											{digit}
										</Text>
									</TouchableOpacity>
								) : (
									// Numbers
									<TouchableOpacity
										key={digit}
										style={styles.gridItem}
										onPress={() => handlePinPress(digit)}
									>
										<Text style={[text.darkHeader, { fontSize: size.lg }]}>
											{digit}
										</Text>
									</TouchableOpacity>
								)
						)}
					</View>
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Text
							onPress={() => navigation.navigate("Login")}
							style={[text.content, { fontSize: size.base }]}
						>
							Login manually with{" "}
							<Text style={{ color: color.highlight }}>password</Text>
						</Text>
					</View>
				</View>
			</View>
			{/* </ScrollView> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	logoContainer: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 30,
		gap: 10,
	},
	pinContainer: {
		justifyContent: "center",
		alignItems: "center",
		gap: 20,
	},
	pinDisplay: {
		fontSize: size.xxxl,
		// fontWeight: "bold",
		fontFamily: font.semibold,
		textAlign: "center",
	},
	grid: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	gridItem: {
		width: "30%",
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
	},
	gridItemText: {
		fontSize: 20,
	},
	clearButton: {
		marginVertical: 20,
	},
	clearButtonText: {
		fontSize: 16,
		fontFamily: "MontserratRegular",
	},
});

export default PinEntryScreen;
