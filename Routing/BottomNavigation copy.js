import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StatusBar, Text } from "react-native";
import { FontAwesome5 } from "react-native-vector-icons";
import Home from "../src/Home/Home";
import Piggy from "../src/Home/Piggy";
import Charts from "../src/Home/Charts";
import ComingSoon from "../src/Home/ComingSoon";
import Profile from "../src/Home/Profile";
import PiggyHome from "../src/Home/Piggy";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
	const tabBarIconStyle = {
		width: 32,
		height: "100%",
	};
	const tabBarLabelStyle = {
		fontFamily: "Regular",
		fontSize: 18,
	};

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					backgroundColor: "white",
					paddingVertical: 12,
					// justifyContent: "center",
					// alignItems: "center",
					height: 55,
				},
				headerStyle: {
					borderBottomWidth: 3,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
					tabBarLabel: "",

					tabBarIcon: ({ focused, color, size }) => (
						<FontAwesome5
							style={[
								tabBarIconStyle,
								{ color: focused ? "#1E0700" : "#66666666" },
							]}
							name="home"
							size={24}
						/>
					),
				}}
			/>

			<Tab.Screen
				options={{
					headerShown: false,
					tabBarLabel: "",

					tabBarIcon: ({ focused, color, size }) => (
						<FontAwesome5
							style={[
								tabBarIconStyle,
								{ color: focused ? "#1E0700" : "#66666666" },
							]}
							name="piggy-bank"
							size={24}
						/>
					),
				}}
				name="Piggy"
				component={PiggyHome}
			/>

			<Tab.Screen
				options={{
					headerShown: false,
					tabBarLabel: "",

					tabBarIcon: ({ focused, color, size }) => (
						<FontAwesome5
							style={[
								tabBarIconStyle,
								{ color: focused ? "#1E0700" : "#66666666" },
							]}
							name="chart-bar"
							size={24}
						/>
					),
				}}
				name="Charts"
				component={Charts}
			/>

			<Tab.Screen
				options={{
					headerShown: false,
					tabBarLabel: "",

					tabBarIcon: ({ focused, color, size }) => (
						<FontAwesome5
							style={[
								tabBarIconStyle,
								{ color: focused ? "#1E0700" : "#66666666" },
							]}
							name="receipt"
							size={24}
						/>
					),
				}}
				name="ComingSoon"
				component={ComingSoon}
			/>

			{/* <Tab.Screen
				options={{
					headerShown: false,
					tabBarLabel: "",

					tabBarIcon: ({ focused, color, size }) => (
						<FontAwesome5
							style={[
								tabBarIconStyle,
								{ color: focused ? "#1E0700" : "#66666666" },
							]}
							name="receipt"
							size={24}
						/>
					),
				}}
				name="ComingSoon"
				component={ComingSoon}
			/> */}

			{/* <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabBarLabelStyle,
                { color: focused ? "#1E0700" : "#66666666", fontSize: 14 },
              ]}
            >
              ComingSoon
            </Text>
          ),

          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              style={[
                tabBarIconStyle,
                { color: focused ? "#1E0700" : "#66666666" },
              ]}
              name="money-check-alt"
              size={24}
            />
          ),
        }}
        name="money-check-alt"
        component={ComingSoon}
      /> */}
			<Tab.Screen
				options={{
					headerShown: false,
					tabBarLabel: "",

					tabBarIcon: ({ focused, color, size }) => (
						<FontAwesome5
							style={[
								tabBarIconStyle,
								{ color: focused ? "#1E0700" : "#66666666" },
							]}
							name="user-alt"
							size={24}
						/>
					),
				}}
				name="Profile"
				component={Profile}
			/>
		</Tab.Navigator>
	);
}

export default BottomNavigation;
