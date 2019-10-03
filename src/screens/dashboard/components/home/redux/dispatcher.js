import { loadStories, errorLoadingStories, saveLoadedStories } from './action';
export function getStories() {
    return async dispatch => {
        dispatch(loadStories());
        fetch("https://jsonblob.com/api/jsonBlob/52b4d534-e5fd-11e9-89d4-7588cc44e450")
            .then(response => response.json())
            .then((responseJson) => {
                dispatch(saveLoadedStories(responseJson));
            })
            .catch(error => {
                errorLoadingStories(error)
            }) //to catch the errors if any
    }
}