
import { createStore } from 'redux';
import rootReducer from '../reducers';

export default (initialState) => {
    const store = createStore(rootReducer, initialState);

    if(module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReduser = require('../reducers');
            store.replaceReducer(nextRootReduser);
        })
    }

    return store
}
