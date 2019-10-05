import { loadStories, errorLoadingStories, saveLoadedStories } from './action';
import { API } from "../../../../../constants"
export function getStories() {
    return async dispatch => {
        dispatch(loadStories());
        fetch(API.STORIES)
            .then(response => response.json())
            .then((responseJson) => {
                dispatch(saveLoadedStories(responseJson));
            })
            .catch(error => {
                errorLoadingStories(error)
            }) //to catch the errors if any
    }
}