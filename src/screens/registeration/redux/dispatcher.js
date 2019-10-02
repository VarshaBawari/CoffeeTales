import {
    registeringNewUser, registerationComplete, userNameAndpasswordEnteredgenderSelected, ageSelected,
    addressSelected, bioAdded
} from './action';
export function registerUser(userDetails) {
    return async dispatch => {
        dispatch(registeringNewUser(userDetails));
        dispatch(registerationComplete(true));
    }
}
