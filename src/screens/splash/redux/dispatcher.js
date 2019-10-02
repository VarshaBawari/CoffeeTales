import { loadingApp, appLoaded } from './action';
export function loadAppData() {
    return async dispatch => {
        dispatch(loadingApp());
        
    }
}
export function appLoadingComplete() {
    return async dispatch => {
        dispatch(appLoaded());
    }
}