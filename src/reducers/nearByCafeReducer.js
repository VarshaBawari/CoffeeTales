import {
    GET_NEAR_BY_CAFES, GET_NEAR_BY_CAFES_ERROR, SET_NEAR_BY_CAFES,
    GET_NEAR_BY_CAFE_SEARCHES, GET_NEAR_BY_CAFE_SEARCHES_ERROR, SET_NEAR_BY_CAFE_SEARCHES,
    SET_IS_SEARCHING
} from '../screens/dashboard/components/coffeeLocator/redux/action';
const nearByCafeReducerInitialState = {
    loadingNearByCafes: false,
    nearByCafes: [],
    errorMessageNearByCafes: "",
    isSearchingNearByCafes: false,
    loadingNearByCafeSearch: false,
    searchedNearByCafes: [],
    errorMessageNearByCafeSearch: ""
}
function nearByCafeReducer(state = nearByCafeReducerInitialState, action) {

    switch (action.type) {
        case GET_NEAR_BY_CAFES:
            return { ...state, loadingNearByCafes: true, errorMessageNearByCafes: "", isSearchingNearByCafes: false }
        case SET_NEAR_BY_CAFES:
            return { ...state, loadingNearByCafes: false, errorMessageNearByCafes: "", nearByCafes: action.value, isSearchingNearByCafes: false }
        case GET_NEAR_BY_CAFES_ERROR:
            return { ...state, loadingNearByCafes: false, errorMessageNearByCafes: "", isSearchingNearByCafes: false }

        case GET_NEAR_BY_CAFE_SEARCHES:
            return { ...state, loadingNearByCafeSearch: true, errorMessageNearByCafeSearch: "" }
        case SET_NEAR_BY_CAFE_SEARCHES:
            return { ...state, loadingNearByCafeSearch: false, errorMessageNearByCafeSearch: "", searchedNearByCafes: action.value }
        case GET_NEAR_BY_CAFE_SEARCHES_ERROR:
            return { ...state, loadingNearByCafeSearch: false, errorMessageNearByCafeSearch: "" }

        case SET_IS_SEARCHING:
            return { ...state, isSearchingNearByCafes: action.value }

        default:
            return state;
    }
}
export default nearByCafeReducer;