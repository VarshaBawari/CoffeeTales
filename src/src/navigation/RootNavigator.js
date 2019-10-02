import { createStackNavigator } from 'react-navigation-stack';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import Dashboard from '../screens/dashboard'
import Info from '../screens/info'
import Login from '../screens/login'
import Splash from '../screens/splash'

const StackNavigator = createStackNavigator({
    // InfoScreen: { screen: Info },
    SplashScreen: { screen: Splash },
    // DashboardScreen: { screen: Dashboard },
    LoginScreen: { screen: Login }
}, {
    headerMode: 'none',
    initialRouteName: 'Splash',
    animationEnabled: true,
});

const AppWithNavigationState = createReduxContainer(StackNavigator);
const mapStateToProps = state => ({ state: state.nav, });
const RootNavigator = connect(mapStateToProps)(AppWithNavigationState);
export { RootNavigator }