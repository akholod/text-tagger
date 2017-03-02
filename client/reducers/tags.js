const initialState =  ['Test'];
import { REQUEST_TAGS_SUCCESS, REQUEST_TAGS_FAILURE, ADD_TAG, REMOVE_TAG } from '../constants/Tags';
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TAG:
            return [
                ...state,
                action.tag
            ]
        case REMOVE_TAG:
            return state
        case REQUEST_TAGS_SUCCESS:
            return action.data
        case REQUEST_TAGS_FAILURE:
            return action.data
        default:
            return state;
    }
}
