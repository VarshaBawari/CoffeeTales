export const APP_LOADING = 'APP_LOADING';
export const APP_LOADED = 'APP_LOADED';

export function loadingApp() {
    return {
        type: APP_LOADING
    }
}

export function appLoaded() {
    return {
        type: APP_LOADED
    }
}