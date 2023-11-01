import { PixelRatio } from "react-native";
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

export const color = {
	text: "#1e0700",
	button: "#1e0700",
	highlight: "#ff9100",
	green: "#087940",
	b1: "#f9f9f9",
	placeholder: "#9f9f9f",
	lines: "#e6e6e6",
	lines2: "#f5f5f5",
};

export const size = {
	xs: getFontSize(11),
	ssm: getFontSize(11.5),
	sm: getFontSize(13),
	base: getFontSize(15),
	md: getFontSize(17),
	lg: getFontSize(20),
	xl: getFontSize(22),
	xxl: getFontSize(28),
	xxxl: getFontSize(30),
	tab: getFontSize(14),
	logoH: 40,
	logoW: 92,
};

export const font = {
	light: "MontserratLight",
	regular: "Regular",
	semibold: "MontserratSemiBold",
};
