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
import { useNavigation } from "@react-navigation/native";
const imageHouse = require("../images/house.png");

import { color, size, font } from "../utilities/constants";
import { text, goalCard } from "../utilities/styles";

const NewGoalsComponent = () => {
	const [selectedComponent, setSelectedComponent] = useState("Ongoing Savings");

	const navigation = useNavigation();

	return (
		<TouchableOpacity onPress={() => navigation.navigate("ViewGoal")}>
			<View style={goalCard.container}>
				<View style={goalCard.imageContainer}>
					<Image
						style={{ width: "100%", borderRadius: 12, height: 125 }}
						source={imageHouse}
					/>
				</View>
				<View style={goalCard.contentContainer}>
					<Text style={goalCard.title} numberOfLines={1}>
						Goal Title
					</Text>
					<View>
						<View style={goalCard.flexGoal}>
							<Text
								style={[
									goalCard.price,
									{
										flex: 2,
									},
								]}
							>
								{" "}
								₦50,000
							</Text>
							<Text
								style={[
									goalCard.price,
									{
										flex: 1,
										textAlign: "right",
									},
								]}
							>
								{" "}
								307
							</Text>
						</View>
						<View style={goalCard.flexGoal}>
							<Text style={[goalCard.type, { flex: 2 }]}> Amount Saved</Text>
							<Text style={[goalCard.type, { flex: 1, textAlign: "right" }]}>
								{" "}
								Day Left
							</Text>
						</View>
					</View>

					<View style={[goalCard.flexGoal, { alignItems: "center" }]}>
						<View
							style={{
								flex: 1,
								height: 8,
								backgroundColor: color.b1,
								borderRadius: 12,
							}}
						>
							<View
								style={{
									width: 30,
									height: 8,
									backgroundColor: color.highlight,
									borderRadius: 12,
								}}
							></View>
						</View>
						<Text style={text.content}>10%</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default NewGoalsComponent;

// const styles = StyleSheet.create({
// 	flexGoal: {
// 		flexDirection: "row",
// 		alignItems: "flex-start",
// 		justifyContent: "space-between",
// 		gap: 15,
// 	},
// });
