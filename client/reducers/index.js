import { combineReducers } from 'redux';
import text from './text';
import tags from './tags';
import hoverTag from './hoverTag';

export default combineReducers({
    text,
    tags,
    hoverTag
})
