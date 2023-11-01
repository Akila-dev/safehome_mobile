import {
	SafeAreaView,
	Dimensions,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Image,
	PixelRatio,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "react-native-vector-icons";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card, flex } from "../utilities/styles";

const CopyButton = ({ link, type }) => {
	return (
		<View>
			<TouchableOpacity
				style={[
					button.fill,
					flex.row,
					{
						backgroundColor: color.b1,
						justifyContent: "space-between",
						paddingLeft: 20,
						height: 50,
						borderRadius: 50,
						borderWidth: 1,
						borderColor: color.lines2,
					},
				]}
			>
				<Text style={([text.light], { flex: 1 })} numberOfLines={1}>
					{link}
				</Text>
				<View
					style={[
						flex.row,
						{
							backgroundColor: "white",
							height: "100%",
							alignItems: "center",
							borderRadius: 50,
							paddingHorizontal: 20,
							gap: 10,
							// borderWidth: 1,
							// borderColor: color.lines,
						},
					]}
				>
					<FontAwesome5 name="copy" size={16} />
					<Text style={text.content}>Copy {type}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default CopyButton;
