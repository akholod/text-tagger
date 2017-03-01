const initialState = {
    tags: ['Test']
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TAG':
        return {...state, tags: ['huy']}
    default:
        return state;
    }

}
