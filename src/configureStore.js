/**
 * Configure Store
 * 
 * This is where we configure out Redux store.
 * 
 * Documentation on redux store can be found here:
 * https://redux.js.org/basics/store
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import { reducers } from './reducers';
import Sagas from './sagas';

export default (initial_state = {}) => {
    /**
     * Configure Middleware
     */
    const browserHistory = createHistory();
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        routerMiddleware(browserHistory),
        sagaMiddleware
    ];

    /**
     * Store Enhancers
     */
    const enhancers = [];

    let composeEnhancers = compose;

    if (process.env.NODE_ENV === 'development') {
        const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

        if (typeof composeWithDevToolsExtension !== 'undefined') {
            if (typeof composeWithDevToolsExtension === 'function') {
                composeEnhancers = composeWithDevToolsExtension;
            } else {
                composeEnhancers = compose(middlewares, window.devToolsExtension && window.devToolsExtension());
            }
        }
    }

    /**
     * Instantiate Store
     */
    const store = createStore(
        reducers,
        initial_state,
        composeEnhancers(
            applyMiddleware(...middlewares),
            ...enhancers
        )
    );

    sagaMiddleware.run(Sagas);

    return store;
};
