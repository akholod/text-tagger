import { combineReducers } from 'redux';
import textReducer from './text';
import tagsReducer from './tags';

export default combineReducers({
    textReducer,
    tagsReducer
})
