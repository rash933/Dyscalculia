import { StatusBar } from 'expo-status-bar';
import { configureFonts, MD2LightTheme, PaperProvider, DefaultTheme } from 'react-native-paper';
import AppBa from './components/appBar';
import NavBar from './components/TnavBar';
import ResultList from './screens/StudentResultlist';
import StudentList from './screens/StudentList';
import ConfirmStuDE from './screens/ConfirmStuDetails';
import FinalResults from './screens/FinalResults';
import GetStartedPage from './screens/GetStarted';
import StudentAttendence from './screens/StudentAttendenceDeatils';
import StudentMarks from './screens/StudentMarksTypes1';
import StudentMarks2 from './screens/StudentMarksTypes2';
import StudentMarks3 from './screens/StudentMarksTypes3';
import StuResults from './screens/StuResalts';
import TFeeddback from './screens/TeacherFeedBack';
import VerifyStudent from './screens/VerifyStudentDetails';
import Onboardk from './screens/OnboardingKid';
import Profile1 from './screens/Profile1';
import Profile2 from './screens/profile2';
import Profile3 from './screens/profile3';
import Profile4 from './screens/profile4';
import BehaviorCheck3 from './screens/ChildBehaviorCheck3';
import BehaviorCheck2 from './screens/ChildBehaviorCheck2';
import BehaviorCheck1 from './screens/ChildBehaviorCheck1';
import StuProfile from './screens/StudentProfile';
import Notifi from './screens/NotificationPage';
import NotifiView from './screens/NotificationView';
import GamePage1 from './screens/Gamepage1';
import GamePage2 from './screens/Gamepage2';
import GamePage3 from './screens/Gamepage3';
import QuizResult from './screens/GameResults';
import Instruction from './screens/instruction';
import EnterEmailAddressPage from './screens/EnterEmailAddressPage';
import Background1 from './components/background1';
import SignIn from './screens/SignInPage';
import VerifyCode from './screens/VerificationCode';
import ResetPwd from './screens/ResetPassword';
import Registation1 from './screens/Registartion1';
import Registation2 from './screens/Registartion2';
import Registation3 from './screens/Registartion3';
import StdHomeScreen from './screens/SHome';
import SNavBar from './components/SnavBar';
import TNavBar from './components/TnavBar';
import TestChart, { DonutChart } from './components/donutChart';
import StudentChart from './components/donutChart';
import THomeScreen from './screens/THome';
import Routes from './routes/route';


// const fontConfig = {
//   android: {
//     regular: {
//       fontFamily: 'sans-serif',
//       fontWeight: 'normal',
//     },
//     medium: {
//       fontFamily: 'sans-serif-medium',
//       fontWeight: 'normal',
//     },
//     light: {
//       fontFamily: 'sans-serif-light',
//       fontWeight: 'normal',
//     },
//     thin: {
//       fontFamily: 'sans-serif-thin',
//       fontWeight: 'normal',
//     },
//   }
// };

const theme = {
  ...DefaultTheme,
  colors: {

    primary: '#21005D',
    secondary: '#EADDFF',
    tertiary: '#ffff',
    myOwnProperty: true,

    colors: {
      TitleText: '#0000',
      SubtitleText: '#2B2929',
      TextColor1: '#ffff',
    },
  },
  // fonts: configureFonts({ config: fontConfig, isV3: false }),
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="inverted" />
      <Routes />
    </PaperProvider>

  );
}

