import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Modal,
	ScrollView,
	SafeAreaView,
} from "react-native";
import { FontAwesome5 } from "react-native-vector-icons";
import { color, size, font } from "../utilities/constants";

const Transaction = ({ type }) => {
	const [modalVisible, setModalVisible] = React.useState(false);

	const handlePress = () => {
		// Replace this with your logic to open the modal
		setModalVisible(true);
	};

	return (
		<View>
			{type === "deposit" ? (
				<TouchableOpacity
					style={styles.transactionContainer}
					onPress={handlePress}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "start",
							gap: 10,
							overflow: "hidden",
							flex: 5,
						}}
					>
						<View
							style={{
								backgroundColor: color.b1,
								justifyContent: "center",
								alignItems: "center",
								width: 48,
								height: 48,
								borderRadius: 64,
							}}
						>
							<FontAwesome5 name="plus" size={20} color="#19835685" />
						</View>
						<View style={{ flex: 1 }}>
							<Text
								style={{
									fontFamily: font.semibold,
									fontSize: size.base,
									color: color.text,
								}}
								numberOfLines={1}
							>
								KXYKMGFGG3ABBBBBB
							</Text>
							<Text
								style={{
									fontFamily: font.light,
									fontSize: size.sm,
									color: "#198356",
									marginTop: 5,
								}}
							>
								Deposit
							</Text>
						</View>
					</View>
					<View
						style={{
							flex: 3,
						}}
					>
						<Text
							style={{
								fontFamily: font.semibold,
								fontSize: size.base,
								textAlign: "right",
								color: color.text,
							}}
						>
							₦20,100.00
						</Text>
						<Text
							style={{
								fontFamily: font.light,
								fontSize: size.xs,
								marginTop: 5,
								textAlign: "right",
								color: color.placeholder,
							}}
						>
							10/10/2023 - 09:30am
						</Text>
					</View>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					style={styles.transactionContainer}
					onPress={handlePress}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "start",
							gap: 10,
							overflow: "hidden",
							flex: 5,
						}}
					>
						<View
							style={{
								backgroundColor: color.b1,
								justifyContent: "center",
								alignItems: "center",
								width: 48,
								height: 48,
								borderRadius: 64,
							}}
						>
							<FontAwesome5 name="minus" size={20} color="#FF000085" />
						</View>
						<View>
							<Text
								style={{
									fontFamily: font.semibold,
									fontSize: size.base,
								}}
								numberOfLines={1}
							>
								KXYKMGFGG3A
							</Text>
							<Text
								style={{
									fontFamily: font.light,
									fontSize: size.sm,
									color: "#ff0000",
									marginTop: 5,
								}}
							>
								Withdrawal
							</Text>
						</View>
					</View>
					<View
						style={{
							flex: 3,
						}}
					>
						<Text
							style={{
								fontFamily: font.semibold,
								fontSize: size.base,
								textAlign: "right",
							}}
						>
							₦20,100.00
						</Text>
						<Text
							style={{
								fontFamily: font.light,
								fontSize: size.xs,
								marginTop: 5,
								textAlign: "right",
								color: color.placeholder,
							}}
						>
							10/10/2023 - 09:30am
						</Text>
					</View>
				</TouchableOpacity>
			)}

			{/* Transaction Details Popup */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(false);
				}}
			>
				<View style={styles.modalContainer}>
					<View
						style={{
							backgroundColor: "white",
							height: "100%",
							position: "absolut",
							bottom: 0,
							width: "100%",
							paddingBottom: 48,
						}}
					>
						<View style={styles.closeModalButton}>
							<TouchableOpacity
								onPress={() => setModalVisible(false)}
								style={{ padding: 5 }}
							>
								<FontAwesome5 size={24} color={color.text} name="times" />
							</TouchableOpacity>
						</View>

						{/* Header */}
						<View>
							<Text style={styles.transaction}>Transaction Type</Text>
							<Text style={styles.status}>Withdrawal</Text>
						</View>

						{/* Transaction Details */}
						<ScrollView>
							<View style={{ padding: 16, gap: 20 }}>
								<View style={styles.details}>
									<Text style={styles.detailsLeft}>Date</Text>
									<Text style={styles.detailsRight}>
										18 June 2023, 12:56:39
									</Text>
								</View>

								<View style={styles.details}>
									<Text style={styles.detailsLeft}>Amount</Text>
									<Text style={styles.detailsRight}>₦20,100.00</Text>
								</View>

								<View style={styles.details}>
									<Text style={styles.detailsLeft}>Account Name</Text>
									<Text style={styles.detailsRight}>Ibeneme Ikenna </Text>
								</View>

								<View style={styles.details}>
									<Text style={styles.detailsLeft}>Status</Text>
									<Text style={styles.detailsRight}>Pending</Text>
								</View>

								<View style={styles.details}>
									<Text style={styles.detailsLeft}>Account Number</Text>
									<Text style={styles.detailsRight}>0069416902</Text>
								</View>

								<View style={styles.details}>
									<Text style={styles.detailsLeft}>Payment Reference</Text>
									<Text style={styles.detailsRight}>NYELCQDSNRN</Text>
								</View>

								<View style={styles.details}>
									<Text style={styles.detailsLeft}>Fee</Text>
									<Text style={styles.detailsRight}>₦35</Text>
								</View>
							</View>
						</ScrollView>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default Transaction;

const styles = StyleSheet.create({
	transactionContainer: {
		marginTop: 24,
		flexDirection: "row",
		justifyContent: "space-between",
		flex: 1,
		gap: 10,
	},
	modalContainer: {
		flex: 1,
		// justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	closeModalButton: {
		backgroundColor: "#fff",
		padding: 15,
		borderRadius: 10,
		alignItems: "flex-end",
		width: "100%",
	},
	// closeModalButtonText: {
	// 	fontSize: 18,
	// 	color: "#000",
	// 	textAlign: "center",
	// },
	transaction: {
		fontSize: size.base,
		textAlign: "center",
		fontFamily: font.regular,
		marginBottom: 8,
		color: color.text,
	},
	status: {
		fontSize: 22,
		textAlign: "center",
		fontFamily: font.semibold,
		marginBottom: 24,
		color: color.highlight,
	},

	details: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
		paddingBottom: 14,
		borderBottomWidth: 0.5,
		borderBottomColor: "#66666646",
		gap: 20,
	},

	detailsLeft: {
		fontSize: size.sm,
		fontFamily: font.light,
	},
	detailsRight: {
		fontSize: size.base,
		fontFamily: font.regular,
	},
});
