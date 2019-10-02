import { loadingApp, appLoaded } from './action';

export function loadAppData() {
    return async dispatch => {
        dispatch(loadingApp());
        setTimeout(function () {
            dispatch(appLoaded());
        }, 5000);
    }
}