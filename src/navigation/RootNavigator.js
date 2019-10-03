import { createAppContainer, createStackNavigator } from 'react-navigation';
import Dashboard from '../screens/dashboard'
import Info from '../screens/info'
import Login from '../screens/login'
import Splash from '../screens/splash'
import Registeration from '../screens/registeration'

const AppNavigator = createStackNavigator({
    Info: { screen: Info },
    Login: { screen: Login },
    Dashboard: { screen: Dashboard },
    Splash: { screen: Splash },
    Registeration: { screen: Registeration }
}, {
    headerMode: 'none',
    initialRouteName: 'Splash',
    animationEnabled: true,
});

const AppContainer = createAppContainer(AppNavigator);
export { AppContainer }