import { List, Map } from 'immutable';

const initialState =  List(Map({}));

import { REQUEST_TAGS_SUCCESS, REQUEST_TAGS_FAILURE, ADD_TAG, REMOVE_TAG } from '../constants/Tags';

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TAG:
            return state.push(Map({
                _id: Date.now().toString(),
                tagName: action.tag
            }))
        case REMOVE_TAG:
            return state.delete(action.tag.get('index'))
        case REQUEST_TAGS_SUCCESS:
        console.log(action.data);
            return List(action.data.map(item => Map(item)))
        case REQUEST_TAGS_FAILURE:
            return action.data
        default:
            return state;
    }
}
