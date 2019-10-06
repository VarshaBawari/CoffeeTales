import {
    addressSelected
} from './action';
export function locationSelected(country, city, lat, lng) {
    return async dispatch => {
        dispatch(addressSelected(country, city, lat, lng));
    }
}
