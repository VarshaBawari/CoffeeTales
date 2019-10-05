export const GET_FACTS = 'GET_FACTS';
export const GET_FACTS_ERROR = 'GET_FACTS_ERROR';
export const SET_FACTS = "SET_FACTS";


export function loadFacts() {
    return {
        type: GET_FACTS,
    }
}


export function saveLoadedFacts(value) {
    return {
        type: SET_FACTS,
        value
    }
}

export function errorLoadingFacts(value) {
    return {
        type: GET_FACTS_ERROR,
        value
    }
}
