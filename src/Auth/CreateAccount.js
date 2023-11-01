import {
	StyleSheet,
	Image,
	TextInput,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
	Platform,
	Button,
} from "react-native";
import React, { useState } from "react";
const logo = require("../images/Logo.png");
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card, imgStyle } from "../utilities/styles";

const CreateAccount = () => {
	const navigation = useNavigation();
	const [focusedInput, setFocusedInput] = useState(null);
	const [firstName, setfirstName] = useState("");
	const [surname, setsurname] = useState("");
	const [password, setPassword] = useState("");
	const [gender, setGender] = useState("");
	const [phoneNumber, setphoneNumber] = useState("");
	const currentDate = new Date();
	const [dates, setDates] = useState(new Date());
	const [Errdates, ErrSetdates] = useState("");
	const [showPicker, setShowPicker] = useState(false);

	const onChange = (event, selectedDate) => {
		ErrSetdates("");
		setShowPicker(Platform.OS === "ios"); // For iOS, show the picker in modal
		if (selectedDate) {
			setDates(selectedDate);
			console.log(selectedDate, dates, "ggg");
		} else if (selectedDate === " ") {
			ErrSetdates("Select a Pickup Dater");
		}
	};
	console.log(dates, dates, "datesdates");
	const showDatepicker = () => {
		setShowPicker(true);
		// console.log(date,'date')
	};

	const handlefirstNameChange = (firstName) => {
		setfirstName(firstName);
	};
	const handleSurnameChange = (surname) => {
		setsurname(surname);
	};
	const handlePasswordChange = (password) => {
		setPassword(password);
	};
	const handleGenderChange = (gender) => {
		setGender(gender);
	};
	const handlePhoneNumberChange = (phoneNumber) => {
		setPhoneNumber(phoneNumber);
	};
	const data = [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	];

	const headerTintColor = "#000000";

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
						marginBottom: 40,
					}}
				>
					{/* <View style={[imgStyle.logoContainer, {marginTop:20}]}>
						<Image source={logo} style={imgStyle.logo} />
					</View> */}
					<View>
						<View style={[styles.viewForLogo, { marginTop: 10 }]}>
							<Text style={[text.header, { textAlign: "center" }]}>
								Personal Information
							</Text>
							<Text style={[text.content, { textAlign: "center" }]}>
								Securely sign up to safeHome
							</Text>
						</View>
						<View
							style={{
								marginTop: 10,
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
									onChangeText={handlefirstNameChange}
								/>
							</View>

							<View>
								<Text style={formStyle.label}>Surname</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("name")}
									onBlur={() => setFocusedInput(null)}
									value={surname}
									placeholder="Enter your Surname"
									placeholderTextColor={color.placeholder}
									onChangeText={handleSurnameChange}
								/>
							</View>

							<View>
								<Text style={formStyle.label}>Password</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("password")}
									onBlur={() => setFocusedInput(null)}
									value={password}
									placeholder="Enter your Password"
									placeholderTextColor={color.placeholder}
									onChangeText={handlePasswordChange}
								/>
							</View>
							<View>
								<Text style={formStyle.label}>Gender</Text>

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
									placeholder="Select Gender"
									value={gender}
									onChange={handleGenderChange}
								/>
							</View>
							<View>
								<Text style={formStyle.label}>Phone Number</Text>
								<TextInput
									style={formStyle.input} // Use the dynamically defined style
									onFocus={() => setFocusedInput("phoneNumber")}
									onBlur={() => setFocusedInput(null)}
									value={phoneNumber}
									placeholder="Phone Number"
									placeholderTextColor={color.placeholder}
									onChangeText={handlePhoneNumberChange}
								/>
							</View>
							<View>
								<Text style={formStyle.label}>Date of Birth</Text>
								<View
									style={[
										{
											justifyContent: "space-between",
											flexDirection: "row",
											alignItems: "center",
										},
									]}
								>
									<Text
										style={[formStyle.input, { paddingVertical: 12.5 }]}
										onPress={showDatepicker}
									>
										{`${
											dates
												? dates.toISOString().split("T")[0]
												: "Choose Pickup date"
										}`}
									</Text>
								</View>
								{showPicker && (
									<DateTimePicker
										testID="dateTimePicker"
										value={dates}
										//mode="datetime"
										mode="date"
										is24Hour={true}
										display="spinner"
										onChange={onChange}
										minimumDate={currentDate}
										timeZoneOffsetInMinutes={-60}
									/>
								)}
							</View>

							<View style={{ marginTop: 64 }}>
								<TouchableOpacity
									style={button.fill}
									onPress={() => navigation.navigate("CreateAccountNext")}
								>
									<Text style={text.buttonFill}>Next</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CreateAccount;

const styles = StyleSheet.create({
	viewForLogo: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 34,
	},
});
