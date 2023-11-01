import {
	StyleSheet,
	Image,
	TextInput,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
	Animated,
	Easing,
} from "react-native";
import React, { useState, useEffect } from "react";
const logo = require("../images/BG.png");
const stamp = require("../images/Stamp.png");
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card, imgStyle } from "../utilities/styles";

const KYCProcessing = () => {
	const navigation = useNavigation();
	const [progress] = useState(new Animated.Value(0));
	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor: "#000000",
			headerBackTitleVisible: false,
		});
	}, [navigation]);
	const animateProgressBar = () => {
		Animated.timing(progress, {
			toValue: 100,
			duration: 100000, // 100 seconds
			easing: Easing.linear,
			useNativeDriver: false,
		}).start();
	};

	useEffect(() => {
		animateProgressBar();
	}, []);
	return (
		<SafeAreaView
			onPress={() => navigation.navigate("NavBar")}
			style={{ flex: 1 }}
		>
			<LinearGradient
				colors={["#8a4000", "#1e0700"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={{
					height: "100%",
					width: "100%",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<View
					style={{
						paddingHorizontal: 16,
						paddingVertical: 40,
						width: "100%",
						height: "100%",
						justifyContent: "space-between",
					}}
				>
					<View>
						<View>
							<View style={{ alignItems: "center" }}>
								<Image source={stamp} style={styles.stamp} />
							</View>
							<View
								style={{
									marginTop: 32,
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Text
									style={[text.header, { color: "white", textAlign: "center" }]}
									onPress={() => navigation.navigate("NavBar")}
								>
									We are reviewing your information
								</Text>
								<Text
									style={[
										text.light,
										{ color: "white", textAlign: "center", marginTop: 10 },
									]}
								>
									The check is almost complete. Please wait a few seconds,
									you’ll be automatically redirected to login.
								</Text>
							</View>
						</View>
					</View>

					{/* Progressbar */}
					<View
						onPress={() => navigation.navigate("NavBar")}
						style={{ alignItems: "center" }}
					>
						<View style={{ width: "90%" }}>
							<View style={styles.progressBar}>
								<Animated.View
									style={[
										styles.filler,
										{
											width: progress.interpolate({
												inputRange: [0, 100],
												outputRange: ["0%", "100%"],
											}),
											borderRadius: 122,
											//margin: 24,

											backgroundColor: "white",
										},
									]}
									onPress={() => navigation.navigate("NavBar")}
								/>
							</View>
						</View>
					</View>
				</View>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default KYCProcessing;

const styles = StyleSheet.create({
	stamp: {
		height: 300,
		width: 400,
	},
	progressBar: {
		width: "100%",
		height: 6,
		backgroundColor: "#ccc",
		justifyContent: "center",
		//alignItems:'center',
		// margin:24,
		borderRadius: 222,
	},
	filler: {
		height: "100%",
		backgroundColor: "blue",
	},
});
