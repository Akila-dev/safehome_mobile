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
import Tabs from "../components/Tabs";
const imageHouse = require("../images/house.png");
import * as ImagePicker from "expo-image-picker";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, tab, flex } from "../utilities/styles";

const tabsData = [
	{
		tab: "Basic Info",
		text: "Basic Info",
	},
	{
		tab: "Next of kin",
		text: "Next of kin",
	},
];

const BasicInfo = () => {
	const navigation = useNavigation();

	const [image, setImage] = useState(null);
	const [focusedInput, setFocusedInput] = useState(null);
	const [firstName, setFirstName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

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
	const handleFirstNameChange = (firstName) => {
		setFirstName(firstName);
	};
	const handleSurnameChange = (surname) => {
		setSurname(surname);
	};
	const handleEmailChange = (email) => {
		setEmail(email);
	};
	const handlePhoneNumberChange = (phoneNumber) => {
		setPhoneNumber(phoneNumber);
	};

	return (
		<View>
			<View style={{ gap: 10, marginTop: 10 }}>
				<Text style={[text.content]}>Profile Picture</Text>
				<TouchableOpacity onPress={pickImage}>
					{image ? (
						<Image
							source={{ uri: image }}
							style={{
								width: 60,
								borderRadius: 60,
								height: 60,
								borderRadius: 60,
							}}
						/>
					) : (
						<Image
							source={imageHouse}
							style={{
								width: 60,
								borderRadius: 60,
								height: 60,
								borderRadius: 60,
							}}
						/>
					)}
				</TouchableOpacity>
			</View>

			<View
				style={{
					marginTop: 0,
				}}
			>
				<View>
					<Text style={formStyle.label}>First Name</Text>
					<TextInput
						style={formStyle.input} // Use the dynamically defined style
						onFocus={() => setFocusedInput("firstName")}
						onBlur={() => setFocusedInput(null)}
						value={firstName}
						placeholder="Enter your First Name"
						placeholderTextColor={color.placeholder}
						onChangeText={handleFirstNameChange}
					/>
				</View>

				<View>
					<Text style={formStyle.label}>Surname Name</Text>
					<TextInput
						style={formStyle.input} // Use the dynamically defined style
						onFocus={() => setFocusedInput("surname")}
						onBlur={() => setFocusedInput(null)}
						value={surname}
						placeholder="Enter your Surname Surname"
						placeholderTextColor={color.placeholder}
						onChangeText={handleSurnameChange}
					/>
				</View>

				<View>
					<Text style={formStyle.label}>Email Address</Text>
					<TextInput
						style={formStyle.input} // Use the dynamically defined style
						onFocus={() => setFocusedInput("email")}
						onBlur={() => setFocusedInput(null)}
						value={email}
						placeholder="Enter your Email Address"
						placeholderTextColor={color.placeholder}
						onChangeText={handleEmailChange}
					/>
				</View>

				<View>
					<Text style={formStyle.label}>Phone Number</Text>
					<TextInput
						style={formStyle.input} // Use the dynamically defined style
						onFocus={() => setFocusedInput("phoneNumber")}
						onBlur={() => setFocusedInput(null)}
						value={phoneNumber}
						placeholder="Enter your Phone Number"
						placeholderTextColor={color.placeholder}
						onChangeText={handlePhoneNumberChange}
					/>
				</View>
			</View>
			<View style={{ marginTop: 40, marginBottom: 20 }}>
				<TouchableOpacity
					style={button.fill}
					//onPress={() => navigation.navigate("EmailVerification")}
				>
					<Text style={text.buttonFill}>Update Profile</Text>
				</TouchableOpacity>
			</View>
			<View></View>
		</View>
	);
};

const NextOfKin = () => {
	const navigation = useNavigation();

	const [focusedInput, setFocusedInput] = useState(null);
	const [name, setName] = useState("");
	const [relationship, setRelationship] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");

	const handleNameChange = (name) => {
		setName(name);
	};
	const handleRelationshipChange = (relationship) => {
		setRelationship(relationship);
	};
	const handlePhoneNumberChange = (phoneNumber) => {
		setPhoneNumber(phoneNumber);
	};
	const handleEmailChange = (email) => {
		setEmail(email);
	};

	return (
		<View>
			<View>
				<View>
					<Text style={formStyle.label}>Full Name</Text>
					<TextInput
						style={formStyle.input} // Use the dynamically defined style
						onFocus={() => setFocusedInput("name")}
						onBlur={() => setFocusedInput(null)}
						value={name}
						placeholder="Enter your Full Name"
						placeholderTextColor={color.placeholder}
						onChangeText={handleNameChange}
					/>
				</View>

				<View>
					<Text style={formStyle.label}>Relationship</Text>
					<TextInput
						style={formStyle.input} // Use the dynamically defined style
						onFocus={() => setFocusedInput("name")}
						onBlur={() => setFocusedInput(null)}
						value={name}
						placeholder="Example Brother"
						placeholderTextColor={color.placeholder}
						onChangeText={handleNameChange}
					/>
				</View>

				<View>
					<Text style={formStyle.label}>Phone Number</Text>
					<TextInput
						style={formStyle.input} // Use the dynamically defined style
						onFocus={() => setFocusedInput("phoneNumber")}
						onBlur={() => setFocusedInput(null)}
						value={phoneNumber}
						placeholder="Enter your Phone Number"
						placeholderTextColor={color.placeholder}
						onChangeText={handlePhoneNumberChange}
					/>
				</View>
				<View>
					<Text style={formStyle.label}>Email Address</Text>
					<TextInput
						style={formStyle.input} // Use the dynamically defined style
						onFocus={() => setFocusedInput("email")}
						onBlur={() => setFocusedInput(null)}
						value={email}
						placeholder="Enter your Email Address"
						placeholderTextColor={color.placeholder}
						onChangeText={handleEmailChange}
					/>
				</View>
			</View>
			<View style={{ marginTop: 40, marginBottom: 20 }}>
				<TouchableOpacity
					style={button.fill}
					//onPress={() => navigation.navigate("EmailVerification")}
				>
					<Text style={text.buttonFill}>Save</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const Update = () => {
	const [selectedComponent, setSelectedComponent] = useState("Basic Info");
	const headerTintColor = "#000000";

	const navigation = useNavigation();

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
				backgroundColor: "#ffffff",
			}}
		>
			<ScrollView
				style={{
					padding: 16,
				}}
			>
				<View style={[flex.row]}>
					<View style={{ flex: 1 }}>
						<Text style={text.header}>Personal Information</Text>
						<Text style={[text.light]}>
							Contact Support to Update your basic informations.
						</Text>
					</View>
				</View>

				<View
					style={{
						marginTop: 38,
						marginBottom: 38,
					}}
				>
					<View>
						<Tabs
							data={tabsData}
							func={setSelectedComponent}
							selected={selectedComponent}
						/>

						{selectedComponent === "Basic Info" && <BasicInfo />}
						{selectedComponent === "Next of kin" && <NextOfKin />}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Update;

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
});
