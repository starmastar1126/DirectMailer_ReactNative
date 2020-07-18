import { createAppContainer } from 'react-navigation';

import AppStackNavigator from './navigators/AppStackNavigator';

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer
