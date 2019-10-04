import {
    loadNearByCafes, saveNearByCafes, errorSavingNearByCafes,
    loadNearByCafeSearches, saveNearByCafeSearches, errorSavingNearByCafeSearches,
    setIsSearchingCafes
} from './action';

function buildUrl(url, parameters) {
    let qs = "";
    for (const key in parameters) {
        if (parameters.hasOwnProperty(key)) {
            const value = parameters[key];
            qs +=
                encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
        }
    }
    if (qs.length > 0) {
        qs = qs.substring(0, qs.length - 1); //chop off last "&"
        url = url + "?" + qs;
    }

    return url;
}


export function getNearByCafes() {
    return async dispatch => {
        dispatch(loadNearByCafes());
        fetch(
            buildUrl("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
                location: "-33.8670522, 151.1957362",
                radius: 1500,
                type: "cafe",
                keyword: "coffee",
                key: "AIzaSyB3_Mmv6rtaEs_p6-UCc9Dr2g1F907hmQ0",
            }))
            .then(response => response.json())
            .then((responseJson) => {
                dispatch(saveNearByCafes(responseJson));
            })
            .catch(error => {
                errorSavingNearByCafes(error)
            }) //to catch the errors if any
    }
}


export function searchNearByCafes(query) {
    return async dispatch => {
        dispatch(loadNearByCafeSearches());
        fetch(
            buildUrl("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
                location: "-33.8670522, 151.1957362",
                radius: 1500,
                type: "cafe",
                keyword: "coffee",
                key: "AIzaSyB3_Mmv6rtaEs_p6-UCc9Dr2g1F907hmQ0",
                name: query
            }))
            .then(response => response.json())
            .then((responseJson) => {
                dispatch(saveNearByCafeSearches(responseJson));
            })
            .catch(error => {
                errorSavingNearByCafeSearches(error)
            }) //to catch the errors if any
    }
}


export function isSearchingNearByCafes(isSearching) {
    return async dispatch => {
        dispatch(setIsSearchingCafes(isSearching));
    }
}