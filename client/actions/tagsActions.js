import { REQUEST_TAGS, REQUEST_TAGS_SUCCESS, REQUEST_TAGS_FAILURE } from '../constants/Tags';
import { getTags } from '../api';

export function getStartTags() {
    return function(dispatch) {
        dispatch({
            type: REQUEST_TAGS
        })
        getTags().then((res) => {
            console.log(res[0].tags);
            dispatch({
                type: REQUEST_TAGS_SUCCESS,
                data: res[0].tags
            })
        },
        (err) => {
            dispatch({
                type: REQUEST_TAGS_FAILURE,
                data: new Error(err)
            })
        })


    }
}

export function addTag(tag) {
    return {
        type: 'ADD_TAG',
        tag
    }
}

export function removeTag(tag) {
    return {
        type: 'REMOVE_TAG',
        tag
    }
}
