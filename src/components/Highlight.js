import { Text, View } from "react-native";

import { color, size, font } from "../utilities/constants";
import { text, button, goalCard } from "../utilities/styles";

const Highlight = ({ title, value, colored }) => {
	return (
		<View
			style={{
				gap: 2,
				flex: 1,
				paddingHorizontal: 12.5,
				paddingVertical: 10,
				borderRadius: 8,
				borderColor: color.lines,
				borderWidth: 1,
			}}
		>
			{colored ? (
				<View
					style={{
						gap: 2,
					}}
				>
					<Text
						style={[
							text.base,
							{
								color: color.highlight,
								fontFamily: font.regular,
								fontSize: size.sm,
							},
						]}
						numberOfLines={1}
					>
						{title}
					</Text>
					<Text
						style={[
							text.base,
							{
								fontFamily: font.semibold,
							},
						]}
						numberOfLines={1}
					>
						{value}
					</Text>
				</View>
			) : (
				<View
					style={{
						gap: 2,
					}}
				>
					<Text
						style={[
							text.base,
							{
								color: color.placeholder,
								fontFamily: font.regular,
								fontSize: size.sm,
							},
						]}
						numberOfLines={1}
					>
						{title}
					</Text>
					<Text
						style={[
							text.base,
							{
								fontFamily: font.semibold,
								fontSize: size.tab,
							},
						]}
						numberOfLines={1}
					>
						{value}
					</Text>
				</View>
			)}
		</View>
	);
};

export default Highlight;
