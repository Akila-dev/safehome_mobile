import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../src/Auth/Login";
import CreateAccount from "../src/Auth/CreateAccount";
import CreateAccountNext from "../src/Auth/CreateAccountNext";
import EmailVerification from "../src/Auth/EmailVerification";
import KYCVerification from "../src/Auth/KYCVerification";
import KYCProcessing from "../src/Auth/KYCProcessing";
import BottomNavigation from "./BottomNavigation";
import TransactionPage from "../src/Pages/Home/Transaction";
import NotificationPage from "../src/Pages/Home/Notifications";
import AddFund from "../src/Pages/Home/AddFund";
import Withdraw from "../src/Pages/Home/Withdraw";
import CreateGoal from "../src/Pages/Savings/CreateGoal";
import AddCreateGoal from "../src/Pages/Savings/Create";
import AddCreateGoalNext from "../src/Pages/Savings/NextCreateGoal";
import ViewGoal from "../src/Pages/Savings/ViewGoal";
import AddFundsGoal from "../src/Pages/Savings/AddFunds";
import GoalSettings from "../src/Pages/Savings/GoalSetting";
import ExtendedGoal from "../src/Pages/Savings/ExtendedGoal";
import LockedHome from "../src/Pages/Locked/Locked";
import ViewLocked from "../src/Pages/Savings/ViewLocked";
import LockedFundForm from "../src/Pages/Locked/LockedFund";
import AboutOpp from "../src/Pages/Locked/AboutOppurtunity";
import InvestHome from "../src/Pages/Investment/Invest";
import ViewInvestment from "../src/Pages/Savings/ViewInvestment";
import InvestmentFundForm from "../src/Pages/Investment/InvestmentFund";
import AboutInvestment from "../src/Pages/Investment/AboutInvestment";
import Update from "../src/Profile/Update";
import UpdateKYC from "../src/Profile/UpdateKYC";
import Notifications from "../src/Profile/Notifications";
import Cards from "../src/Profile/Cards";
import Security from "../src/Profile/Security";
import Refer from "../src/Profile/Refer";
import Contact from "../src/Profile/Contact";
import AddCard from "../src/Profile/AddCard";
import AddBank from "../src/Profile/AddBank";
import ChangePassword from "../src/Profile/ChangePassword";
import SecurityQuestion from "../src/Profile/SecurityQuestion";
import ForgotPassword from "../src/Auth/Forgot";
import PassVerify from "../src/Auth/PassVerify";
import ResetPassword from "../src/Auth/Reset";
import PinEntryScreen from "../src/Auth/PinEntry";
import LoanType from "../src/Pages/Loan/LoanType";
import PersonalLoan from "../src/Pages/Loan/Personal";
import PersonalFormOne from "../src/Pages/Loan/PersonalForm";
import PersonalFormTwo from "../src/Pages/Loan/PersonalFormTwo";
import PersonalFormThree from "../src/Pages/Loan/PersonalThree";
import SuccessScreen from "../src/Pages/Loan/SuccessScreen";
const Stack = createStackNavigator();

const MyStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="pinentry"
				options={{ headerShown: false }}
				component={PinEntryScreen}
			/>

			<Stack.Screen
				name="Login"
				options={{ headerShown: false }}
				component={Login}
			/>
			<Stack.Screen
				name="Forgot"
				//options={{ headerShown: false }}
				component={ForgotPassword}
			/>
			<Stack.Screen name="passverify" component={PassVerify} />
			<Stack.Screen name="reset" component={ResetPassword} />
			<Stack.Screen name="CreateAccount" component={CreateAccount} />
			<Stack.Screen name="CreateAccountNext" component={CreateAccountNext} />
			<Stack.Screen name="EmailVerification" component={EmailVerification} />
			<Stack.Screen
				name="KYCVerification"
				//     options={{ headerShown: false }}
				component={KYCVerification}
			/>
			<Stack.Screen
				name="KYCProcessing"
				//     options={{ headerShown: false }}
				component={KYCProcessing}
			/>
			<Stack.Screen
				name="NavBar"
				options={{ headerShown: false }}
				component={BottomNavigation}
			/>
			<Stack.Screen name="TransactionPage" component={TransactionPage} />
			<Stack.Screen name="NotificationPage" component={NotificationPage} />
			<Stack.Screen name="AddFund" component={AddFund} />
			<Stack.Screen name="Withdraw" component={Withdraw} />
			<Stack.Screen name="CreateGoal" component={CreateGoal} />
			<Stack.Screen name="AddCreateGoal" component={AddCreateGoal} />
			<Stack.Screen name="AddCreateGoalNext" component={AddCreateGoalNext} />
			<Stack.Screen name="ViewGoal" component={ViewGoal} />
			<Stack.Screen name="AddFundsGoal" component={AddFundsGoal} />
			<Stack.Screen name="GoalSettings" component={GoalSettings} />
			<Stack.Screen name="ExtendedGoal" component={ExtendedGoal} />
			{/* locked */}
			<Stack.Screen name="LockedHome" component={LockedHome} />
			<Stack.Screen name="ViewLocked" component={ViewLocked} />
			<Stack.Screen name="LockedFundForm" component={LockedFundForm} />
			<Stack.Screen name="AboutOpp" component={AboutOpp} />
			{/* invest screens */}
			<Stack.Screen name="InvestHome" component={InvestHome} />
			<Stack.Screen name="ViewInvestment" component={ViewInvestment} />
			<Stack.Screen name="InvestmentFundForm" component={InvestmentFundForm} />
			<Stack.Screen name="AboutInvestment" component={AboutInvestment} />
			{/* Profile screens */}
			<Stack.Screen name="profileInformation" component={Update} />
			<Stack.Screen name="profileKYC" component={UpdateKYC} />
			<Stack.Screen name="profileNotifications" component={Notifications} />
			<Stack.Screen name="cards" component={Cards} />
			<Stack.Screen name="Security" component={Security} />
			<Stack.Screen name="Refer" component={Refer} />
			<Stack.Screen name="Contact" component={Contact} />
			<Stack.Screen name="AddCard" component={AddCard} />
			<Stack.Screen name="AddBank" component={AddBank} />
			<Stack.Screen name="ChangePassword" component={ChangePassword} />
			<Stack.Screen name="SecurityQuestion" component={SecurityQuestion} />

			{/* Loan type */}
			<Stack.Screen name="loantype" component={LoanType} />
			<Stack.Screen name="PersonalLoan" component={PersonalLoan} />
			<Stack.Screen name="PersonalFormOne" component={PersonalFormOne} />
			<Stack.Screen name="PersonalFormTwo" component={PersonalFormTwo} />
			<Stack.Screen name="PersonalFormThree" component={PersonalFormThree} />
			<Stack.Screen name="SuccessScreen" component={SuccessScreen} />
		</Stack.Navigator>
	);
};

export default MyStack;
