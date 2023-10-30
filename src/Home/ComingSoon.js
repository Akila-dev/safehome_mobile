import { Text, View, SafeAreaView } from "react-native";
import { FontAwesome5 } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card } from "../utilities/styles";

const ComingSoon = () => {
	const navigation = useNavigation();

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#ffffff",
			}}
		>
			<View
				style={{
					flex: 1,
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text
					style={[
						text.header,
						{
							color: color.placeholder,
							textAlign: "center",
							fontSize: size.md,
						},
					]}
				>
					Coming Soon
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default ComingSoon;
