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
import { useNavigation } from "@react-navigation/native";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card } from "../utilities/styles";

const Home = ({ type, name }) => {
	const navigation = useNavigation();

	const styles = StyleSheet.create({
		topView: {
			marginTop: type === "popup" ? 20 : 30,
			marginBottom: 15,
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		viewWidths: {
			flex: 1,
			padding: 0,
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
		<View style={[styles.topView]}>
			{type === "home" ? (
				<View style={styles.viewWidths}>
					<Text style={text.light}>Hello</Text>
					<Text style={text.darkHeader}>{name}!</Text>
				</View>
			) : (
				<View style={styles.viewWidths}>
					<Text style={text.navHeader}>{name}</Text>
				</View>
			)}
			<TouchableOpacity
				onPress={() => navigation.navigate("NotificationPage")}
				style={styles.viewNotification}
			>
				<FontAwesome5 name="bell" size={28} />
				<View
					style={{
						width: 8,
						height: 8,
						backgroundColor: color.highlight,
						position: "absolute",
						borderRadius: 16,
						right: 6,
						top: 10,
					}}
				></View>
			</TouchableOpacity>
		</View>
	);
};

export default Home;
