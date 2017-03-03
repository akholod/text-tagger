const initialState = null;
export default (state = initialState, action) => {
    switch (action.type) {
        case 'MOUSE_ON_TAG':
            return action.tag
        default:
            return state;
    }
}
