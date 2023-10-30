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
import Overview from "../components/Overview";
import { useNavigation } from "@react-navigation/native";
import GoalsComponent from "../components/Goals";
const imageHouse = require("../images/house.png");

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card, tab } from "../utilities/styles";

const tabsData = [
	{
		tab: "Completed",
		text: "Completed",
	},
	{
		tab: "Transactions",
		text: "Transactions",
	},
];

const Tabs = ({ data, func, selected }) => {
	return (
		<ScrollView
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			style={{
				marginBottom: 10,
				flexDirection: "row",
			}}
		>
			{data.map((item, index) => (
				<View>
					<Text
						style={[
							tab.normal,
							selected === item.tab && tab.active,
							{ marginRight: 16 },
						]}
						onPress={() => func(item.tab)}
					>
						{item.text}
					</Text>
				</View>
			))}
		</ScrollView>
	);
};

export default Tabs;
