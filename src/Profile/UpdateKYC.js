import {
	SafeAreaView,
	Dimensions,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import Transaction from "../components/Transaction";
import { useNavigation } from "@react-navigation/native";
import GoalsComponent from "../components/Goals";
const imageHouse = require("../images/house.png");
import * as ImagePicker from "expo-image-picker";
import { Dropdown } from "react-native-element-dropdown";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text } from "../utilities/styles";

const UpdateKYC = () => {
	const [selectedComponent, setSelectedComponent] = useState("Basic Info");
	const headerTintColor = "#000000";

	const navigation = useNavigation();

	const [image, setImage] = useState(null);
	const [focusedInput, setFocusedInput] = useState(null);
	const [userAddress, setUserAddress] = useState("");
	const [selectedState, setSelectedState] = useState("");

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerTintColor,
			headerBackTitleVisible: false,
		});
	}, [navigation]);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	const handleUserAddressChange = (userAddress) => {
		setUserAddress(userAddress);
	};
	const handleSelectedStateChange = (selectedState) => {
		setSelectedState(selectedState);
	};

	const nigeriaStates = [
		{
			label: "Abia",
			value: "Abia",
		},
		{
			label: "Adamawa",
			value: "Adamawa",
		},
		{
			label: "Akwa Ibom",
			value: "Akwa Ibom",
		},
		{
			label: "Anambra",
			value: "Anambra",
		},
		{
			label: "Bauchi",
			value: "Bauchi",
		},
		{
			label: "Bayelsa",
			value: "Bayelsa",
		},
		{
			label: "Benue",
			value: "Benue",
		},
		{
			label: "Borno",
			value: "Borno",
		},
		{
			label: "Cross River",
			value: "Cross River",
		},
		{
			label: "Delta",
			value: "Delta",
		},
		{
			label: "Ebonyi",
			value: "Ebonyi",
		},
		{
			label: "Edo",
			value: "Edo",
		},
		{
			label: "Ekiti",
			value: "Ekiti",
		},
		{
			label: "Enugu",
			value: "Enugu",
		},
		{
			label: "FCT - Abuja",
			value: "FCT - Abuja",
		},
		{
			label: "Gombe",
			value: "Gombe",
		},
		{
			label: "Imo",
			value: "Imo",
		},
		{
			label: "Jigawa",
			value: "Jigawa",
		},
		{
			label: "Kaduna",
			value: "Kaduna",
		},
		{
			label: "Kano",
			value: "Kano",
		},
		{
			label: "Katsina",
			value: "Katsina",
		},
		{
			label: "Kebbi",
			value: "Kebbi",
		},
		{
			label: "Kogi",
			value: "Kogi",
		},
		{
			label: "Kwara",
			value: "Kwara",
		},
		{
			label: "Lagos",
			value: "Lagos",
		},
		{
			label: "Nasarawa",
			value: "Nasarawa",
		},
		{
			label: "Niger",
			value: "Niger",
		},
		{
			label: "Ogun",
			value: "Ogun",
		},
		{
			label: "Ondo",
			value: "Ondo",
		},
		{
			label: "Osun",
			value: "Osun",
		},
		{
			label: "Oyo",
			value: "Oyo",
		},
		{
			label: "Plateau",
			value: "Plateau",
		},
		{
			label: "Rivers",
			value: "Rivers",
		},
		{
			label: "Sokoto",
			value: "Sokoto",
		},
		{
			label: "Taraba",
			value: "Taraba",
		},
		{
			label: "Yobe",
			value: "Yobe",
		},
		{
			label: "Zamfara",
			value: "Zamfara",
		},
	];

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
				<View>
					<Text style={text.header}>Update KYC </Text>
					<Text style={text.light}>
						Simply fill and upload the required information below, and we will
						take it from here.
					</Text>
				</View>

				<View
					style={{
						marginBottom: 48,
					}}
				>
					<View>
						<View
							style={{
								marginTop: 10,
							}}
						>
							<View>
								<Text style={formStyle.label}>Residential Address</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("userAddress")}
									onBlur={() => setFocusedInput(null)}
									value={userAddress}
									placeholder="Enter your Residential UserAddress"
									placeholderTextColor={color.placeholder}
									onChangeText={handleUserAddressChange}
								/>
							</View>

							<View>
								<Text style={formStyle.label}>State</Text>
								<Dropdown
									style={formStyle.dropdown.container}
									itemTextStyle={formStyle.dropdown.text}
									placeholderStyle={formStyle.dropdown.placeholder}
									selectedTextStyle={formStyle.dropdown.text}
									itemContainerStyle={formStyle.dropdown.itemContainer}
									data={nigeriaStates}
									search
									maxHeight={500}
									labelField="label"
									valueField="value"
									placeholderTextColor={color.placeholder}
									placeholder="Select Nigerian State"
									value={selectedState}
									onChange={handleSelectedStateChange}
								/>
							</View>

							<View style={{ marginVertical: 24, gap: 20, paddingBottom: 10 }}>
								<Text style={text.light}>
									Upload Valid ID Image Int’l passport, Nimc - National ID Card,
									Driver’s License, Voter’s Card
								</Text>
								<TouchableOpacity onPress={pickImage}>
									{image ? (
										<Image
											source={{ uri: image }}
											style={{
												width: "100%",
												borderRadius: 12,
												height: 180,
											}}
										/>
									) : (
										<View
											//source={imageHouse}
											style={{
												width: "100%",
												height: 180,
												borderRadius: 12,
												backgroundColor: "#d9d9d935",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<Text style={[text.content]}>Upload Image</Text>
										</View>
									)}
								</TouchableOpacity>
							</View>
						</View>

						<View style={{ marginVertical: 10 }}>
							<TouchableOpacity
								style={button.fill}
								//onPress={() => navigation.navigate("EmailVerification")}
							>
								<Text style={text.buttonFill}>Update Profile</Text>
							</TouchableOpacity>
						</View>
						<View></View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default UpdateKYC;

const styles = StyleSheet.create({
	hi: {
		color: "#808080",
		fontSize: 16,
		fontFamily: "MontserratLight",
	},
	name: {
		fontSize: 24,
		fontFamily: "MontserratSemiBold",
	},
	viewWidths: {
		width: "80%",
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

	price: {
		fontSize: 32,
		marginTop: 4,
		fontFamily: "MontserratSemiBold",
	},
	title: {
		fontSize: 16,
		fontFamily: "Regular",
		color: "#66666690",
	},

	activeText: {
		color: "#ff9100",
		paddingBottom: 1,
		borderColor: "#ff9100",
		borderBottomWidth: 3,
		borderRadius: 2,
		fontFamily: "MontserratSemiBold",
	},

	textInput: {
		height: 56,
		borderRadius: 8,
		backgroundColor: "#F9F9F9",
		fontSize: 14,
		fontFamily: "Regular",
		padding: 20,
		borderColor: "#66666635",
		borderWidth: 1,
		marginTop: 4,
		// marginBottom: 24,
		width: "100%",
	},
	textLabel: {
		marginTop: 24,
		fontFamily: "Regular",
		fontSize: 16,
	},
	buttonText: {
		fontFamily: "Regular",
		fontSize: 16,
		color: "#ffffff",
	},
	button: {
		height: 56,
		backgroundColor: "#1E0700",
		marginTop: 64,
		marginBottom: 220,
		padding: 16,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
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
});
