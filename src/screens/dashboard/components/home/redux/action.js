export const GET_STORIES = 'GET_STORIES';
export const GET_STORIES_ERROR = 'GET_STORIES_ERROR';
export const SET_STORIES = "SET_STORIES";


export function loadStories() {
    return {
        type: GET_STORIES,
    }
}


export function saveLoadedStories(value) {
    return {
        type: SET_STORIES,
        value
    }
}

export function errorLoadingStories(value) {
    return {
        type: GET_STORIES_ERROR,
        value
    }
}
