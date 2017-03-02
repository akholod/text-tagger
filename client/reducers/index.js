import { combineReducers } from 'redux';
import text from './text';
import tags from './tags';

export default combineReducers({
    text,
    tags
})
