import { createAppContainer, createStackNavigator } from 'react-navigation';
import Dashboard from '../screens/dashboard'
import Login from '../screens/login'
import Splash from '../screens/splash'

const AppNavigator = createStackNavigator({
    Login: { screen: Login },
    Dashboard: { screen: Dashboard },
    Splash: { screen: Splash },
}, {
    headerMode: 'none',
    initialRouteName: 'Splash',
    animationEnabled: true,
});

const AppContainer = createAppContainer(AppNavigator);
export { AppContainer }