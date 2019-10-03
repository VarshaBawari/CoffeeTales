import { LOGGED_IN, AUTHENTICATING, AUTH_ERROR, CLEAR_AUTH_ERROR } from '../screens/login/redux/action';
const authInitialState = {
  loggedIn: false,
  authenticating: false,
  authErrorMessage: ""
};
const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case AUTHENTICATING: {
      return {
        ...state,
        authenticating: true,
        loggedIn: false,
        authErrorMessage: ""
      }
    }
    case LOGGED_IN: {
      return {
        ...state,
        authenticating: false,
        loggedIn: action.value,
        authErrorMessage: ""
      }
    }
    case AUTH_ERROR: {
      return {
        ...state,
        authenticating: false,
        loggedIn: false,
        authErrorMessage: action.value
      }
    }
    case CLEAR_AUTH_ERROR: {
      return {
        ...state,
        authenticating: false,
        authErrorMessage: ""
      }
    }
    default: {
      return state;
    }
  }
};
export default authReducer;