import { List } from 'immutable';
import {REQUEST_TEXT_SUCCESS, REQUEST_TEXT_FAILURE } from '../constants/Text';

const initialState = List('Please, load some text!');

export default (state = initialState, action) => {
	switch (action.type) {
        case REQUEST_TEXT_SUCCESS:
            return List(action.payload);
        case REQUEST_TEXT_FAILURE:
            return List(action.payload);
        default:
            return state;
		}
}
