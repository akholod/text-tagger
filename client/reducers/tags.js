import { List, Map } from 'immutable';
import { REQUEST_TAGS_SUCCESS, REQUEST_TAGS_FAILURE, ADD_TAG, REMOVE_TAG } from '../constants/Tags';

const initialState =  List(Map({}));

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TAG:
            return state.push(Map({
                _id: Date.now().toString(),
                tagName: action.tag
            }))
        case REMOVE_TAG:
            return state.delete(action.tag.get('index'));
        case REQUEST_TAGS_SUCCESS:
            return List(action.data.map(item => Map(item)));
        case REQUEST_TAGS_FAILURE:
            return List(action.data.map(item => Map(item)));
        default:
            return state;
    }
}
