import { REQUEST_TEXT, REQUEST_TEXT_SUCCESS, REQUEST_TEXT_FAILURE } from '../constants/Text';
import { getText } from '../api';

export function getStartText() {
    return function(dispatch) {
        dispatch({
            type: REQUEST_TEXT
        })
        getText().then((res) => {
            dispatch({
                type: REQUEST_TEXT_SUCCESS,
                payload: res
            })
        },
        (err) => {
            dispatch({
                type: REQUEST_TEXT_FAILURE,
                error: new Error(err)
            })
        })
    }
}
