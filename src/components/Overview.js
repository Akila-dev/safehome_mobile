import {
	View,
	ScrollView,
	Text,
	FlatList,
	Animated,
	useWindowDimensions,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import { color, size, font } from "../utilities/constants";
import { button, formStyle, text, card } from "../utilities/styles";

const Paginator = ({ data, scrollX }) => {
	const { width } = useWindowDimensions();
	return (
		<View style={card.indicatorContainer}>
			{data.map((_, index) => {
				// const inputRange = [(i - 1) * (width - 32)];
				const inputRange = [
					(index - 1) * width,
					index * width,
					(index + 1) * width,
				];

				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: [10, 20, 10],
					extrapolate: "clamp",
				});

				const dotColor = scrollX.interpolate({
					inputRange,
					outputRange: ["#f9f9f9", "#ff9100", "#f9f9f9"],
					extrapolate: "clamp",
				});

				return (
					<Animated.View
						key={index}
						style={[
							card.indicatorNormal,
							{ width: dotWidth, backgroundColor: dotColor },
						]}
					></Animated.View>
				);
			})}
		</View>
	);
};

const HomeOverviewCard = ({ icon, bg, title, price, additionalStyle }) => (
	<View
		// onPress={()=>btnFunc()}
		style={[
			card.overview,
			additionalStyle,
			{
				backgroundColor: bg,
			},
		]}
	>
		<FontAwesome5 name={icon} size={size.xxl} />
		<View>
			<Text style={card.title}>{title}</Text>
			<Text style={card.price}>{price}</Text>
		</View>
	</View>
);

const SavingsOverviewCard = ({ icon, title, price, pa, additionalStyle }) => (
	<View
		style={[
			card.overview,
			additionalStyle,
			{
				backgroundColor: "#fff",
				borderColor: color.lines,
				borderWidth: 1,
			},
		]}
	>
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			<FontAwesome5 name={icon} size={28} />
			<Text
				style={[
					card.title,
					{
						color: color.highlight,
					},
				]}
			>
				Up To{" "}
				<Text
					style={[
						card.title,
						{
							color: color.text,
						},
					]}
				>
					{pa}
				</Text>
			</Text>
		</View>
		<View>
			<Text style={card.title}>{title}</Text>
			<Text style={card.price}>{price}</Text>
		</View>
	</View>
);

const Overview = ({ data, type }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const overviewRef = useRef(null);

	const scrollX = useRef(new Animated.Value(0)).current;

	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0] && viewableItems[0].index);
	}).current;

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	return (
		<View>
			<Paginator data={data} scrollX={scrollX} />
			<View style={{ marginTop: 15 }}>
				<FlatList
					data={data}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item, index) => item.id}
					renderItem={({ item, id }) => (
						<View key={id}>
							{type === "home" ? (
								<HomeOverviewCard
									icon={item.icon}
									bg={item.bg}
									title={item.title}
									price={item.price}
									additionalStyle={id + 1 === data.length && { marginRight: 0 }}
								/>
							) : (
								<SavingsOverviewCard
									icon={item.icon}
									title={item.title}
									price={item.price}
									pa={item.pa}
									additionalStyle={id + 1 === data.length && { marginRight: 0 }}
								/>
							)}
						</View>
					)}
					// pagingEnabled
					bounces={false}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{ useNativeDriver: false }
					)}
					scrollEventThrottle={32}
					onViewableItemsChanged={viewableItemsChanged}
					viewablilityConfig={viewConfig}
					ref={overviewRef}
				/>
			</View>
		</View>
	);
};

export default Overview;
