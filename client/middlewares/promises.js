const middleware = store => next => action => {
    if (action.type !== 'PROMISE') {
        return next(action);
    }
    const [startActions, successAction, failureAction] = action.actions;
    store.dispatch({
        type: startActions
    })
    action.promise.then((data) => {
        store.dispatch({
            type: successAction,
            data
        })
    }, (error) => {
        store.dispatch({
            type: failureAction,
            error
        })
    });
}

export default middleware;
