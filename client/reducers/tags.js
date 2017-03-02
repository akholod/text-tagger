const initialState =  ['Test'];
import { ADD_TAG, REMOVE_TAG } from '../constants/Tags';
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TAG:
            return [
                ...state,
                action.tag
            ]
        case REMOVE_TAG:
            return state
        default:
            return state;
    }
}
