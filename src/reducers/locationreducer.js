

import { LOCATION_SELECTED } from '../screens/locationSelector/redux/action';
const locationInitialState = {
    selectedCountry: "",
    selctedCity: "",
    lat: 0,
    lng: 0
}
function locationReducer(state = locationInitialState, action) {
    switch (action.type) {
        case LOCATION_SELECTED:
            return { ...state, selectedCountry: action.country, selctedCity: action.city, lat: action.lat, lng: action.lng }
        default:
            return state;
    }
}
export default locationReducer;