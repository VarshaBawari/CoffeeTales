import {
    GET_NEAR_BY_CAFES, GET_NEAR_BY_CAFES_ERROR, SET_NEAR_BY_CAFES,
    GET_NEAR_BY_CAFE_SEARCHES, GET_NEAR_BY_CAFE_SEARCHES_ERROR, SET_NEAR_BY_CAFE_SEARCHES,
    SET_IS_SEARCHING, SHOW_DETAILED_VIEW
} from '../screens/dashboard/components/coffeeLocator/redux/action';
const nearByCafeReducerInitialState = {
    loadingNearByCafes: false,
    nearByCafes: [],
    errorMessageNearByCafes: "",
    isSearchingNearByCafes: false,
    loadingNearByCafeSearch: false,
    searchedNearByCafes: [],
    errorMessageNearByCafeSearch: "",
    nextPageToken: "",
    nextPageSearchToken: "",
    showDetailedView: false
}
function nearByCafeReducer(state = nearByCafeReducerInitialState, action) {

    switch (action.type) {
        case GET_NEAR_BY_CAFES:
            return { ...state, loadingNearByCafes: true, errorMessageNearByCafes: "", isSearchingNearByCafes: false, showDetailedView: false }
        case SET_NEAR_BY_CAFES:
            return { ...state, loadingNearByCafes: false, errorMessageNearByCafes: "", nearByCafes: action.results, isSearchingNearByCafes: false, nextPageToken: action.nextPageToken, showDetailedView: false }
        case GET_NEAR_BY_CAFES_ERROR:
            return { ...state, loadingNearByCafes: false, errorMessageNearByCafes: "", isSearchingNearByCafes: false, showDetailedView: false }
        case GET_NEAR_BY_CAFE_SEARCHES:
            return { ...state, loadingNearByCafeSearch: true, errorMessageNearByCafeSearch: "", showDetailedView: false }
        case SET_NEAR_BY_CAFE_SEARCHES:
            return { ...state, loadingNearByCafeSearch: false, errorMessageNearByCafeSearch: "", searchedNearByCafes: action.results, nextPageSearchToken: action.nextPageSearchToken, showDetailedView: false }
        case GET_NEAR_BY_CAFE_SEARCHES_ERROR:
            return { ...state, loadingNearByCafeSearch: false, errorMessageNearByCafeSearch: "", showDetailedView: false }
        case SET_IS_SEARCHING:
            return { ...state, isSearchingNearByCafes: action.value, showDetailedView: false }
        case SHOW_DETAILED_VIEW:
            return { ...state, showDetailedView: action.shouldShow }
        default:
            return state;
    }
}
export default nearByCafeReducer;