export const REGISTER = 'REGISTER';
export const REGISTERATION_COMPLETE = 'REGISTERATION_COMPLETE';
export const USERNAME_ENTERED = 'USERNAME_ENTERED';
export const GENDER_SELECTED = 'GENDER_SELECTED';
export const AGE_SELECTED = 'AGE_SELECTED';
export const ADDRESS_SELECTED = 'ADDRESS_SELECTED';
export const BIO_ADDED = 'BIO_ADDED';

export function registeringNewUser() {
    return {
        type: REGISTER
    }
}

export function registerationComplete(value) {
    return {
        type: REGISTERATION_COMPLETE,
    }
}
export function userNameAndpasswordEntered(value) {
    return {
        type: USERNAME_ENTERED,
        value
    }
}
export function genderSelected(value) {
    return {
        type: GENDER_SELECTED,
        value
    }
}
export function ageSelected(value) {
    return {
        type: AGE_SELECTED,
        value
    }
}
export function addressSelected(value) {
    return {
        type: ADDRESS_SELECTED,
        value
    }
}
export function bioAdded(value) {
    return {
        type: BIO_ADDED,
        value
    }
}

