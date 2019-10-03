import { APP_LOADING, APP_LOADED } from '../screens/splash/redux/action';
const splashInitialState = {
    loadingAppData: false,
}
function splashReducer(state = splashInitialState, action) {

    switch (action.type) {
        case APP_LOADING:
            return { ...state, loadingAppData: false }
        case APP_LOADED:
            return { ...state, loadingAppData: true }
        default:
            return state;
    }
}
export default splashReducer;