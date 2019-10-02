import { REGISTER, REGISTERATION_COMPLETE } from '../screens/registeration/redux/action';

const userRegisterationInitialState = {
    isRegistering: false,
    allRegitsteredUsers: [],
    currentRegisteringUserName: "",
    currentRegisteringPassword: "",
    currentRegisteringAge: "",
    currentRegisteringAddress: "",
    currentRegisteringBio: "",
};
const userRegisterationReducer = (state = userRegisterationInitialState, action) => {
    switch (action.type) {
        case REGISTER: {
            return {
                ...state,
                isRegistering: true,
                currentRegisteringUserName: "",
                currentRegisteringPassword: "",
                currentRegisteringAge: "",
                currentRegisteringAddress: "",
                currentRegisteringBio: ""
            }
        }
        case REGISTERATION_COMPLETE: {
            return {
                ...state,
                isRegistering: false,
                regitsteredUsers: { ...state.regitsteredUsers, ...action.value },
            }
        }
        default: {
            return state;
        }
    }
};
export default userRegisterationReducer;