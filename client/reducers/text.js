import {REQUEST_TEXT_SUCCESS, REQUEST_TEXT_FAILURE } from '../constants/Text';
const initialState = ['Please, load some tex!'];

export default (state = initialState, action) => {
	switch (action.type) {
        case REQUEST_TEXT_SUCCESS:
            return action.data
        case REQUEST_TEXT_FAILURE:
            return action.data
        default:
            return state;
		}
}
