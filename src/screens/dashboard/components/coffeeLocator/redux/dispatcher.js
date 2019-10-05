import {
    loadNearByCafes, saveNearByCafes, errorSavingNearByCafes,
    loadNearByCafeSearches, saveNearByCafeSearches, errorSavingNearByCafeSearches,
    setIsSearchingCafes, showDetailedView
} from './action';

import { buildUrl } from '../../../../../utils/urlHelper'
import { API, API_KEY } from '../../../../../constants'

export function getNearByCafes() {
    return async dispatch => {
        dispatch(loadNearByCafes());
        var params = {
            location: "-33.8670522, 151.1957362",
            radius: 1500,
            type: "cafe",
            keyword: "coffee",
            key: "AIzaSyB3_Mmv6rtaEs_p6-UCc9Dr2g1F907hmQ0",
        }
        fetch(
            buildUrl(API.NEAR_BY_PLACES, params))
            .then(response => response.json())
            .then((responseJson) => {
                dispatch(saveNearByCafes(responseJson.results));
            })
            .catch(error => {
                errorSavingNearByCafes(error)
            }) //to catch the errors if any
    }
}


export function searchNearByCafes(query, nextpageToken) {
    return async dispatch => {
        dispatch(loadNearByCafeSearches());
        var params = {
            location: "48.1351, 11.5820",
            radius: 1500,
            type: "cafe",
            keyword: "coffee",
            key: API_KEY.GOOGLE_PLACES,
            name: query
        }
        fetch(
            buildUrl(API.NEAR_BY_PLACES, params))
            .then(response => response.json())
            .then((responseJson) => {
                dispatch(saveNearByCafeSearches(responseJson.results));
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

export function shouldShowDetailedView(shouldShow) {
    return async dispatch => {
        dispatch(showDetailedView(shouldShow));
    }
}