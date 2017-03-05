const initialState =  [{_id: '1',tagName: ''}];
import { REQUEST_TAGS_SUCCESS, REQUEST_TAGS_FAILURE, ADD_TAG, REMOVE_TAG } from '../constants/Tags';
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TAG:
            return [
                ...state,
                {
                    _id: Date.now().toString(),
                    tagName: action.tag
                }
            ]
        case REMOVE_TAG:
            return [
                ...state.slice(0, action.tag.index),
                ...state.slice(action.tag.index +1, state.length)
            ]
        case REQUEST_TAGS_SUCCESS:
            return action.data
        case REQUEST_TAGS_FAILURE:
            return action.data
        default:
            return state;
    }
}
