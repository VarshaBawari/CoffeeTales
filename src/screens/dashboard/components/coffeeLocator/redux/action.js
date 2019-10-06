export const GET_NEAR_BY_CAFES = 'GET_NEAR_BY_CAFES';
export const GET_NEAR_BY_CAFES_ERROR = 'GET_NEAR_BY_CAFES_ERROR';
export const SET_NEAR_BY_CAFES = 'SET_NEAR_BY_CAFES';
export const GET_NEAR_BY_CAFE_SEARCHES = 'GET_NEAR_BY_CAFE_SEARCHES';
export const GET_NEAR_BY_CAFE_SEARCHES_ERROR = 'GET_NEAR_BY_CAFE_SEARCHES_ERROR';
export const SET_NEAR_BY_CAFE_SEARCHES = 'SET_NEAR_BY_CAFE_SEARCHES';
export const SET_IS_SEARCHING = 'SET_IS_SEARCHING';
export const SHOW_DETAILED_VIEW = 'SHOW_DETAILED_VIEW';


export function loadNearByCafes() {
    return {
        type: GET_NEAR_BY_CAFES,
    }
}


export function saveNearByCafes(results) {
    return {
        type: SET_NEAR_BY_CAFES,
        results
    }
}

export function errorSavingNearByCafes(value) {
    return {
        type: GET_NEAR_BY_CAFES_ERROR,
        value
    }
}


export function loadNearByCafeSearches() {
    return {
        type: GET_NEAR_BY_CAFE_SEARCHES,
    }
}


export function saveNearByCafeSearches(results) {
    return {
        type: SET_NEAR_BY_CAFE_SEARCHES,
        results
    }
}

export function errorSavingNearByCafeSearches(value) {
    return {
        type: GET_NEAR_BY_CAFE_SEARCHES_ERROR,
        value
    }
}


export function setIsSearchingCafes(value) {
    return {
        type: SET_IS_SEARCHING,
        value
    }
}

export function  showDetailedView(shouldShow) {
    return {
        type: SHOW_DETAILED_VIEW,
        shouldShow
    } 
}

