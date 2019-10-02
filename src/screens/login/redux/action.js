export const LOGGED_IN = 'LOGGED_IN';
export const AUTHENTICATING = 'AUTHENTICATING';
export const AUTH_ERROR = 'AUTH_ERROR';
export const CLEAR_AUTH_ERROR = 'CLEAR_AUTH_ERROR';

export function authenticatingUser() {
    return {
        type: AUTHENTICATING
    }
}

export function authenticationComplete(value) {
    return {
        type: LOGGED_IN,
        value
    }
}

export function authenticationFailed(value) {
    return {
        type: AUTH_ERROR,
        value
    }
}

export function clearAuthError() {
    return {
        type: CLEAR_AUTH_ERROR
    }
}
