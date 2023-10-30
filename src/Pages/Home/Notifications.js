import {
	SafeAreaView,
	Dimensions,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import Transaction from "../../components/Transaction";
import NotificationComponent from "../../components/Notification";

import { color, size, font } from "../../utilities/constants";
import { button, formStyle, text, card } from "../../utilities/styles";

const NotificationPage = () => {
	const navigation = useNavigation();
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
				backgroundColor: "#ffffff",
			}}
		>
			<ScrollView
				style={{
					padding: 16,
				}}
			>
				<View
					style={{
						marginTop: 5,
						marginBottom: 48,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginBottom: 0,
						}}
					>
						<Text style={[text.header, { color: color.text }]}>
							Notifications
						</Text>
						<Text
							//  onPress={() => navigation.navigate("NotificationPage")}
							style={[text.light, { color: "red" }]}
						>
							Mark all as Read
						</Text>
					</View>
					<NotificationComponent />
					<NotificationComponent />
					<NotificationComponent />
					<NotificationComponent />
					<NotificationComponent />
					<NotificationComponent />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default NotificationPage;
