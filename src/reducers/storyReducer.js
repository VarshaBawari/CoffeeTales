import { GET_STORIES, GET_STORIES_ERROR, SET_STORIES } from '../screens/dashboard/components/home/redux/action';
const dataInitialState = {
    loadingStories: false,
    stories: [],
    errorMessage: ""
}
function storyReducer(state = dataInitialState, action) {

    switch (action.type) {
        case GET_STORIES:
            return { ...state, loadingStories: true, errorMessage: "" }
        case SET_STORIES:
            return { ...state, loadingStories: false, errorMessage: "", stories: action.value }
        case GET_STORIES_ERROR:
            return { ...state, loadingStories: false, errorMessage: "" }
        default:
            return state;
    }
}
export default storyReducer;