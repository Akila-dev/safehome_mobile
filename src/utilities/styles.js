import { color, size, font } from "./constants";
import { Dimensions } from "react-native";

export const button = {
	fill: {
		flex: 1,
		height: 45,
		backgroundColor: color.button,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
	outline: {
		flex: 1,
		height: 45,
		borderColor: color.button,
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
};

export const formStyle = {
	label: {
		marginTop: 28,
		marginBottom: 8,
		fontFamily: "Regular",
		fontSize: size.base,
		color: color.text,
	},
	input: {
		borderRadius: 8,
		backgroundColor: color.b1,
		fontSize: size.base,
		fontFamily: "Regular",
		padding: 10,
		marginTop: 4,
		// marginBottom: 24,
		width: "100%",
		color: color.text,
	},
	dropdown: {
		container: {
			height: 55,
			borderRadius: 8,
			paddingHorizontal: 8,
			marginTop: 4,
			backgroundColor: color.b1,
			fontSize: size.base,
		},
		itemContainer: {
			backgroundColor: "#ffffff",
		},
		text: {
			fontSize: size.base,
			color: color.text,
			fontFamily: font.regular,
		},
		placeholder: {
			fontSize: size.base,
			color: color.placeholder,
			fontFamily: font.regular,
		},
	},
};

export const text = {
	header: {
		fontSize: size.lg,
		fontFamily: font.semibold,
		textAlign: "left",
		color: color.highlight,
	},
	darkHeader: {
		fontSize: size.lg,
		fontFamily: font.semibold,
		textAlign: "left",
		color: color.text,
	},
	content: {
		color: color.text,
		marginTop: 4,
		fontFamily: font.regular,
		fontSize: size.base,
	},
	light: {
		color: color.text,
		marginTop: 4,
		fontFamily: font.light,
		fontSize: size.base,
	},
	buttonFill: {
		fontFamily: "MontserratSemiBold",
		fontSize: size.base,
		color: "#ffffff",
	},
	buttonOutline: {
		color: color.text,
		fontSize: size.base,
		fontFamily: "Regular",
	},
};

export const card = {
	overview: {
		width: Dimensions.get("window").width - 32,
		height: 200,
		borderRadius: 12,
		padding: 24,
		flexDirection: "column",
		justifyContent: "space-between",
		marginRight: 16,
	},
	price: {
		fontSize: size.xxl,
		marginTop: 4,
		fontFamily: "MontserratSemiBold",
	},
	title: {
		fontSize: size.md,
		fontFamily: "Regular",
	},
	indicatorContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		marginTop: 12,
		gap: 4,
	},
	indicatorActive: {
		width: 22,
		height: 8,
		borderRadius: 4,
		backgroundColor: color.highlight,
	},
	indicatorNormal: {
		width: 12,
		height: 8,
		borderRadius: 4,
		backgroundColor: color.b1,
	},
	card_no: {
		marginTop: 4,
		fontFamily: "MontserratSemiBold",
		color: "white",
		fontFamily: font.semibold,
		fontSize: size.xl,
		gap: 10,
	},
};

export const goalCard = {
	container: {
		borderColor: color.lines,
		borderWidth: 1,
		borderRadius: 12,
		padding: 8,
		flexDirection: "row",
		width: "100%",
		gap: 12,
		// marginTop: 12,
		height: "auto",
	},
	imageContainer: {
		flex: 5,
	},
	contentContainer: {
		flex: 7,
		justifyContent: "space-between",
		borderRadius: 12,
		flexDirection: "column",
		gap: 10,
		paddingRight: 5,
		paddingVertical: 2,
	},
	title: {
		fontSize: size.base,
		marginTop: 0,
		fontFamily: font.semibold,
	},
	price: {
		fontSize: size.base,
		marginTop: 4,
		fontFamily: font.semibold,
		color: color.highlight,
	},
	type: {
		color: color.placeholder,
		fontSize: size.ssm,
		fontFamily: font.light,
	},
	flexGoal: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "space-between",
		gap: 15,
	},
};

export const tab = {
	active: {
		color: color.highlight,
		paddingBottom: 5,
		borderColor: "#ff9100",
		borderBottomWidth: 2,
		fontFamily: font.semibold,
		fontSize: size.tab,
	},
	normal: {
		color: "#121212",
		fontFamily: font.light,
		fontSize: size.tab,
	},

	activeFilter: {
		fontSize: size.tab,
		fontFamily: font.semibold,
		color: "#ffffff",
		paddingHorizontal: 15,
		paddingVertical: 6,
		backgroundColor: color.button,
		borderRadius: 6,
		marginLeft: 15,
	},
	normalFilter: {
		fontSize: size.tab,
		fontFamily: font.light,
		color: color.text,
		paddingVertical: 6,
		borderRadius: 6,
		marginLeft: 15,
	},
};

export const flex = {
	row: {
		flexDirection: "row",
		gap: 15,
	},
};
