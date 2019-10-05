import { GET_FACTS, GET_FACTS_ERROR, SET_FACTS } from '../screens/dashboard/components/coffeePedia/redux/action';
const dataInitialState = {
    loadingFacts: false,
    facts: [],
    errorMessage: ""
}
function coffeePediaReducer(state = dataInitialState, action) {

    switch (action.type) {
        case GET_FACTS:
            return { ...state, loadingFacts: true, errorMessage: "" }
        case SET_FACTS:
            return { ...state, loadingFacts: false, errorMessage: "", facts: action.value }
        case GET_FACTS_ERROR:
            return { ...state, loadingFacts: false, errorMessage: "" }
        default:
            return state;
    }
}
export default coffeePediaReducer;