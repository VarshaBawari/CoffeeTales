import { authenticatingUser, authenticationComplete, authenticationFailed, clearAuthError } from './action';
export function authenticate(username, password) {
    return async dispatch => {
        dispatch(authenticatingUser());
        if (username === password) {
            dispatch(authenticationComplete(true));
        } else {
            dispatch(authenticationFailed("Username and password do not match"));
        }
    }
}
export function clearPreviousAuthError() {
    return async dispatch => {
        dispatch(clearAuthError());
    }
}