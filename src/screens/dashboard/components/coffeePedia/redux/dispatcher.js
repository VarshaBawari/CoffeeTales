import { loadFacts, errorLoadingFacts, saveLoadedFacts } from './action';
import { API } from '../../../../../constants'
export function getFacts() {
    return async dispatch => {
        dispatch(loadFacts());
        fetch(API.COFFEE_PEDIA)
            .then(response => response.json())
            .then((responseJson) => {
                dispatch(saveLoadedFacts(responseJson));
            })
            .catch(error => {
                errorLoadingFacts(error)
            }) //to catch the errors if any
    }
}