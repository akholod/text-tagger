import * as TAGS_CONST from '../constants/Tags';
import { getTags, saveTag, deleteTag } from '../api';

export function getStartTags() {
    return function(dispatch) {
        dispatch({
            type: TAGS_CONST.REQUEST_TAGS
        })
        getTags().then((res) => {
            dispatch({
                type: TAGS_CONST.REQUEST_TAGS_SUCCESS,
                data: res
            })
        },
        (err) => {
            dispatch({
                type: TAGS_CONST.REQUEST_TAGS_FAILURE,
                data: new Error(err)
            })
        })
    }
}

export function saveTagOnServer(tag) {
    return function(dispatch) {
        dispatch({
            type: TAGS_CONST.SAVE_TAG
        })
        saveTag(tag).then((res) => {
            dispatch({
                type: TAGS_CONST.SAVE_TAG_SUCCESS,
                data: res
            })
        },
        (err) => {
            dispatch({
                type: TAGS_CONST.SAVE_TAG_FAILURE,
                data: new Error(err)
            })
        })
    }
}
export function removeTagFromServer(tag) {
    return function(dispatch) {
        dispatch({
            type: TAGS_CONST.DELETE_TAG
        })
        deleteTag(tag.toJS()).then((res) => {
            dispatch({
                type: TAGS_CONST.DELETE_TAG_SUCCESS,
                data: res
            })
        },
        (err) => {
            dispatch({
                type: TAGS_CONST.DELETE_TAG_FAILURE,
                data: new Error(err)
            })
        })
    }
}

export function addTag(tag) {
    return {
        type: TAGS_CONST.ADD_TAG,
        tag
    }
}

export function removeTag(tag) {
    return {
        type: TAGS_CONST.REMOVE_TAG,
        tag
    }
}
