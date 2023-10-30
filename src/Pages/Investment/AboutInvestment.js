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

import { color, size, font } from "../../utilities/constants";
import { text, button, goalCard } from "../../utilities/styles";

const AboutInvestment = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPasssword] = useState("");
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [other, setOther] = useState("");
	const headerTintColor = "#000000";

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor,
			headerBackTitleVisible: false,
		});
	}, [navigation]);

	const handleEmailChange = (email) => {
		setEmail(email);
	};
	const handleNameChange = (name) => {
		setName(name);
	};
	const handlePasswordChange = (password) => {
		setPasssword(password);
	};
	const handleGenderChange = (gender) => {
		setGender(gender);
	};
	const handleOtherChange = (other) => {
		setOther(other);
	};
	const data = [
		{
			label: "Daily",
			value: "Daily",
		},
		{
			label: "Weekly",
			value: "Weekly",
		},
		{
			label: "Monthly",
			value: "Monthly",
		},
		{
			label: "Anytime",
			value: "Anytime",
		},
	];

	const dataTwo = [
		{
			label: "Yes, I’d like my savings automated",
			value: "Yes, I’d like my savings automated",
		},
		{
			label: "No, I’ll make my savings myself",
			value: "No, I’ll make my savings myself",
		},
	];
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
					<Text style={[text.header]}>About This Investment</Text>
					<Text style={[text.light, { marginBottom: 30 }]}>
						Read more about this investment
					</Text>
					<View>
						<View
							style={{
								position: "relative",
							}}
						>
							<Image
								style={{
									width: "100%",
									borderRadius: 8,
									height: 240,
								}}
								source={house}
							/>
						</View>

						<View>
							<Text
								style={[
									text.light,
									{ fontSize: 14, lineHeight: 22, marginTop: 24 },
								]}
							>
								Lorem ipsum dolor sit amet consectetur. Proin risus elit
								vulputate sed ornare aliquet pellentesque. Dignissim venenatis
								dolor ultrices interdum imperdiet pharetra imperdiet tincidunt.
								Volutpat nunc eget lacinia diam libero scelerisque elit sit. Sit
								condimentum montes ante egestas sed sed odio at habitasse.
							</Text>
							<Text
								style={[
									text.light,
									{ fontSize: 14, lineHeight: 22, marginTop: 24 },
								]}
							>
								Lorem ipsum dolor sit amet consectetur. Proin risus elit
								vulputate sed ornare aliquet pellentesque. Dignissim venenatis
								dolor ultrices interdum imperdiet pharetra imperdiet tincidunt.
								Volutpat nunc eget lacinia diam libero scelerisque elit sit. Sit
								condimentum montes ante egestas sed sed odio at habitasse.
							</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								width: "100%",
								gap: 12,
								marginTop: 24,
							}}
						>
							<Image
								style={{
									flex: 1,
									borderRadius: 8,
									height: 160,
								}}
								source={house}
							/>
							<Image
								style={{
									flex: 1,
									borderRadius: 8,
									height: 160,
								}}
								source={house}
							/>
							<Image
								style={{
									flex: 1,
									borderRadius: 8,
									height: 160,
								}}
								source={house}
							/>
						</View>
						<TouchableOpacity
							style={[button.fill, { marginTop: 34, height: 50 }]}
							onPress={() => navigation.navigate("LockedFundForm")}
						>
							<Text style={text.buttonFill}>Buy Units</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AboutInvestment;
