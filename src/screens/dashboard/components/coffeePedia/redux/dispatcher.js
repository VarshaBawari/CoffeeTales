import { loadFacts, errorLoadingFacts, saveLoadedFacts } from './action';
export function getFacts() {
    return async dispatch => {
        dispatch(loadFacts());
        fetch("https://jsonblob.com/api/jsonBlob/5a0dd93b-e769-11e9-af4b-2d8f3e003ec7")
            .then(response => response.json())
            .then((responseJson) => {
                dispatch(saveLoadedFacts(responseJson));
            })
            .catch(error => {
                errorLoadingFacts(error)
            }) //to catch the errors if any
    }
}