import {
	StyleSheet,
	Image,
	TextInput,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
const logo = require("../images/Logo.png");
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card, imgStyle } from "../utilities/styles";

const KYCVerification = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [address, setAddress] = useState("");
	const [state, setState] = useState("");
	const [documentType, setDocumentType] = useState("");
	const [documentNumber, setDocumentNumber] = useState("");
	const [image, setImage] = useState(null);

	const handleAddressChange = (address) => {
		setAddress(address);
	};
	const handleStateChange = (state) => {
		setState(state);
	};
	const handleDocumentTypeChange = (documentType) => {
		setDocumentType(documentType);
	};
	const handleDocumentNumberChange = (documentNumber) => {
		setDocumentNumber(documentNumber);
	};
	const data = [
		{
			label: "Bank Verification Number(BVN)",
			value: "Bank Verification Number(BVN)",
		},
		{
			label: "National Identity Number(NIN)",
			value: "National Identity Number(NIN)",
		},
	];

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
	const headerTintColor = "#000000";

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
						marginBottom: 20,
					}}
				>
					{/* <View style={[imgStyle.logoContainer, { marginTop: 20 }]}>
						<Image source={logo} style={imgStyle.logo} />
					</View> */}
					<View>
						<View style={[styles.viewForLogo, { marginTop: 10 }]}>
							<Text style={text.header}>KYC Verification</Text>
							<Text style={text.content}>
								Ensure your name matches the name on Documents provided.
							</Text>
						</View>
						<View
							style={{
								marginTop: 0,
							}}
						>
							<View>
								<Text style={formStyle.label}>Residential Address</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("address")}
									onBlur={() => setFocusedInput(null)}
									value={address}
									placeholder="Enter your Address"
									placeholderTextColor={color.placeholder}
									onChangeText={handleAddressChange}
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
									value={state}
									onChange={handleStateChange}
								/>
							</View>

							<View>
								<Text style={formStyle.label}>Select Document Type</Text>
								<Dropdown
									style={formStyle.dropdown.container}
									itemTextStyle={formStyle.dropdown.text}
									placeholderStyle={formStyle.dropdown.placeholder}
									selectedTextStyle={formStyle.dropdown.text}
									itemContainerStyle={formStyle.dropdown.itemContainer}
									data={data}
									maxHeight={300}
									labelField="label"
									valueField="value"
									placeholderTextColor={color.placeholder}
									placeholder="Select Document Type"
									value={documentType}
									onChange={handleDocumentTypeChange}
								/>
							</View>
							<View>
								<Text style={formStyle.label}>Bank Verification Number</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("name")}
									onBlur={() => setFocusedInput(null)}
									value={documentNumber}
									placeholder="Enter your Bank Verification Number"
									placeholderTextColor={color.placeholder}
									onChangeText={handleDocumentNumberChange}
								/>
							</View>
							<View>
								<Text style={[text.light, { paddingVertical: 20 }]}>
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
											<Text style={text.content}>Upload Image</Text>
										</View>
									)}
								</TouchableOpacity>
							</View>
						</View>
						<View style={{ marginTop: 64 }}>
							<TouchableOpacity
								style={button.fill}
								onPress={() => navigation.navigate("KYCProcessing")}
							>
								<Text style={text.buttonFill}>Next</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default KYCVerification;

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
		fontSize: 24,
		fontFamily: "Bold",
		textAlign: "left",
	},
	content: {
		color: "#1A374D",
		fontFamily: "Light",
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
		marginTop: 32,
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
	textLabel: {
		marginTop: 24,
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
});
