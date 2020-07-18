import { createAppContainer, createStackNavigator } from 'react-navigation';

import SplashPage from './src/views/SplashPage';
import SelectRoutesPage from './src/views/SelectRoutesPage';
import DesignPrintPage from './src/views/DesignPrintPage';
import ReviewOrderPage from './src/views/ReviewOrderPage';
import BillingInformationPage from './src/views/BillingInformationPage';
import UserProfilePage from './src/views/UserProfilePage';
import ChangeCredentialPage from './src/views/ChangeCredentialPage';
import PaymentMethodPage from './src/views/PaymentMethodPage';
// import GetStartPage from './src/views/GetStartPage';
// import LoginPage from './src/views/LoginPage';
// import RegisterPage from './src/views/RegisterPage';
// import EmailVerificationPage from './src/views/EmailVerificationPage';
// import TargetReviewPage from './src/views/TargetReviewPage';
// import OverViewPage from './src/views/OverViewPage';

// import MyMapsPage from './src/views/MyMapsPage';

// import MapPage from './src/views/MapPage';

const MoonMinerNavigator = createStackNavigator({
    SplashPage: {screen: SplashPage},
    SelectRoutesPage: {screen: SelectRoutesPage},
    DesignPrintPage: {screen: DesignPrintPage},
    ReviewOrderPage: {screen: ReviewOrderPage},
    BillingInformationPage: {screen: BillingInformationPage},
    UserProfilePage: {screen: UserProfilePage},
    ChangeCredentialPage: {screen: ChangeCredentialPage},
    PaymentMethodPage: {screen: PaymentMethodPage},
    // LoginPage: {screen: LoginPage},
    // RegisterPage: {screen: RegisterPage},
    // EmailVerificationPage: {screen: EmailVerificationPage},
    // TargetReviewPage: {screen: TargetReviewPage},
    // OverViewPage: {screen: OverViewPage},
    // MyMapsPage: {screen: MyMapsPage},
    // GetStartPage: {screen: GetStartPage},
},{
    initialRouteName: 'SelectRoutesPage'
});
const AppContainer = createAppContainer(MoonMinerNavigator);

export default AppContainer;