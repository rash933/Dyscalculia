import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TNavBar from '../components/TnavBar';
import THomeScreen from '../screens/THome';
import TProfileScreen from '../screens/TProfile';
import TTermsScreen from '../screens/TTerms';
import SNavBar from '../components/SnavBar';
import StdHomeScreen from '../screens/SHome';
import StdProfileScreen from '../screens/SProfile';
import StdTermsScreen from '../screens/STerms';
import StuResults from '../screens/StuResalts';
import StudentList from '../screens/StudentList';
import ResultList from '../screens/StudentResultlist';
import VerifyCode from '../screens/VerificationCode';
import VerifyStudent from '../screens/VerifyStudentDetails';
import StudentMarks from '../screens/StudentMarksTypes1';
import StudentMarks2 from '../screens/StudentMarksTypes2';
import StudentMarks3 from '../screens/StudentMarksTypes3';
import StudentAttendence from '../screens/StudentAttendenceDeatils';
import ConfirmStuDE from '../screens/ConfirmStuDetails';
import Loader from '../components/loader';
import TFeeddback from '../screens/TeacherFeedBack';
import FinalResults from '../screens/FinalResults';
import FirstPage from '../screens/FirstPage';
import CheckIQ1 from '../screens/CheckIQ1';
import CheckIQ2 from '../screens/CheckIQ2';
import CheckIQ3 from '../screens/CheckIQ3';
import CheckIQ4 from '../screens/CheckIQ4';
import CheckIQ5 from '../screens/CheckIQ5';
import CheckIQ6 from '../screens/CheckIQ6';
import GamePage2 from '../screens/Gamepage2';
import GamePage1 from '../screens/Gamepage1';
import GamePage3 from '../screens/Gamepage3';
import GamePage4 from '../screens/Gamepage4';
import GamePage5 from '../screens/Gamepage5';
import GamePage6 from '../screens/Gamepage6';
import GamePage7 from '../screens/Gamepage7';
import GamePage8 from '../screens/Gamepage8';
import GamePage9 from '../screens/Gamepage9';
import GamePage10 from '../screens/Gamepage10';
import GamePage11 from '../screens/Gamepage11';
import GamePage12 from '../screens/Gamepage12';
import GamePage13 from '../screens/Gamepage13';
import GamePage14 from '../screens/Gamepage14';
import GamePage15 from '../screens/Gamepage15';
import GamePage16 from '../screens/Gamepage16';
import GamePage17 from '../screens/Gamepage17';
import GamePage18 from '../screens/Gamepage18';
import GamePage19 from '../screens/Gamepage19';
import SignIn from '../screens/SignInPage';
import Registation1 from '../screens/Registartion1';
import Registation2 from '../screens/Registartion2';
import Registation3 from '../screens/Registartion3';
import EnterEmailAddressPage from '../screens/EnterEmailAddressPage';
import ResetPwd from '../screens/ResetPassword';
import GetStartedPage from '../screens/GetStarted';
import StSignIn from '../screens/StSignInPage';
import NotifiView from '../screens/NotificationView';
import Notifi from '../screens/NotificationPage';
import Onboardk from '../screens/OnboardingKid';
import Profile1 from '../screens/Profile1';
import Profile2 from '../screens/profile2';
import Profile3 from '../screens/profile3';
import Profile4 from '../screens/profile4';
import BehaviorCheck1 from '../screens/ChildBehaviorCheck1';
import BehaviorCheck2 from '../screens/ChildBehaviorCheck2';
import BehaviorCheck3 from '../screens/ChildBehaviorCheck3';
import QuizResult from '../screens/GameResults';
import Instruction from '../screens/instruction';
import Gamepage2 from '../screens/Gamepage2';
import GamePage20 from '../screens/Gamepage20';
import GamePage21 from '../screens/Gamepage21';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FirstPage">
                <Stack.Screen options={{ headerShown: false }} name="TNavBar" component={TNavBar} />
                <Stack.Screen options={{ headerShown: false }} name="THomeScreen" component={THomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name="TProfileScreen" component={TProfileScreen} />
                <Stack.Screen options={{ headerShown: false }} name="TTermsScreen" component={TTermsScreen} />
                <Stack.Screen options={{ headerShown: false }} name="SNavBar" component={SNavBar} />
                <Stack.Screen options={{ headerShown: false }} name="StdHomeScreen" component={StdHomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name="StdProfileScreen" component={StdProfileScreen} />
                <Stack.Screen options={{ headerShown: false }} name="StdTermsScreen" component={StdTermsScreen} />
                <Stack.Screen options={{ headerShown: false }} name="StudentList" component={StudentList} />
                <Stack.Screen options={{ headerShown: false }} name="ResultList" component={ResultList} />
                <Stack.Screen options={{ headerShown: false }} name="VerifyStudent" component={VerifyStudent} />
                <Stack.Screen options={{ headerShown: false }} name="StudentMarks" component={StudentMarks} />
                <Stack.Screen options={{ headerShown: false }} name="StudentMarks2" component={StudentMarks2} />
                <Stack.Screen options={{ headerShown: false }} name="StudentMarks3" component={StudentMarks3} />
                <Stack.Screen options={{ headerShown: false }} name="StudentAttendence" component={StudentAttendence} />
                <Stack.Screen options={{ headerShown: false }} name="ConfirmStuDE" component={ConfirmStuDE} />
                <Stack.Screen options={{ headerShown: false }} name="Loader" component={Loader} />
                <Stack.Screen options={{ headerShown: false }} name="StuResults" component={StuResults} />
                <Stack.Screen options={{ headerShown: false }} name="TFeeddback" component={TFeeddback} />
                <Stack.Screen options={{ headerShown: false }} name="FinalResults" component={FinalResults} />
                <Stack.Screen options={{ headerShown: false }} name="FirstPage" component={FirstPage} />
                <Stack.Screen options={{ headerShown: false }} name="CheckIQ1" component={CheckIQ1} />
                <Stack.Screen options={{ headerShown: false }} name="CheckIQ2" component={CheckIQ2} />
                <Stack.Screen options={{ headerShown: false }} name="CheckIQ3" component={CheckIQ3} />
                <Stack.Screen options={{ headerShown: false }} name="CheckIQ4" component={CheckIQ4} />
                <Stack.Screen options={{ headerShown: false }} name="CheckIQ5" component={CheckIQ5} />
                <Stack.Screen options={{ headerShown: false }} name="CheckIQ6" component={CheckIQ6} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage1" component={GamePage1} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage2" component={Gamepage2} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage3" component={GamePage3} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage4" component={GamePage4} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage5" component={GamePage5} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage6" component={GamePage6} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage7" component={GamePage7} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage8" component={GamePage8} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage9" component={GamePage9} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage10" component={GamePage10} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage11" component={GamePage11} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage12" component={GamePage12} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage13" component={GamePage13} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage14" component={GamePage14} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage15" component={GamePage15} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage16" component={GamePage16} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage17" component={GamePage17} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage18" component={GamePage18} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage19" component={GamePage19} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage20" component={GamePage20} />
                <Stack.Screen options={{ headerShown: false }} name="GamePage21" component={GamePage21} />
                <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
                <Stack.Screen options={{ headerShown: false }} name="StSignIn" component={StSignIn} />
                <Stack.Screen options={{ headerShown: false }} name="Registation1" component={Registation1} />
                <Stack.Screen options={{ headerShown: false }} name="Registation2" component={Registation2} />
                <Stack.Screen options={{ headerShown: false }} name="Registation3" component={Registation3} />
                <Stack.Screen options={{ headerShown: false }} name="EnterEmailAddressPage" component={EnterEmailAddressPage} />
                <Stack.Screen options={{ headerShown: false }} name="VerifyCode" component={VerifyCode} />
                <Stack.Screen options={{ headerShown: false }} name="ResetPwd" component={ResetPwd} />
                <Stack.Screen options={{ headerShown: false }} name="GetStartedPage" component={GetStartedPage} />
                <Stack.Screen options={{ headerShown: false }} name="NotifiView" component={NotifiView} />
                <Stack.Screen options={{ headerShown: false }} name="Notifi" component={Notifi} />
                <Stack.Screen options={{ headerShown: false }} name="Onboardk" component={Onboardk} />
                <Stack.Screen options={{ headerShown: false }} name="Profile1" component={Profile1} />
                <Stack.Screen options={{ headerShown: false }} name="Profile2" component={Profile2} />
                <Stack.Screen options={{ headerShown: false }} name="Profile3" component={Profile3} />
                <Stack.Screen options={{ headerShown: false }} name="Profile4" component={Profile4} />
                <Stack.Screen options={{ headerShown: false }} name="BehaviorCheck1" component={BehaviorCheck1} />
                <Stack.Screen options={{ headerShown: false }} name="BehaviorCheck2" component={BehaviorCheck2} />
                <Stack.Screen options={{ headerShown: false }} name="BehaviorCheck3" component={BehaviorCheck3} />
                <Stack.Screen options={{ headerShown: false }} name="QuizResult" component={QuizResult} />
                <Stack.Screen options={{ headerShown: false }} name="Instruction" component={Instruction} />
                {/* <Stack.Screen options={{ headerShown: false }} name="Notifi" component={CheckIQ4} />
                <Stack.Screen options={{ headerShown: false }} name="Notifi" component={CheckIQ3} />
                <Stack.Screen options={{ headerShown: false }} name="Notifi" component={CheckIQ3} /> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;