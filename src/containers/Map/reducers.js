/**
 * Import Constants
 */
import {
    FETCH_LOCATIONS_SUCCESS
} from './constants';

/**
 * Action Handlers
 * 
 * Action handlers are used to execute state changes.
 * They are called by the reducer.
 */
const ACTION_HANDLERS = {
    [FETCH_LOCATIONS_SUCCESS]: (state, action) => {
        return { ...state,
            markers: action.payload
        };
    }
};


/**
 * Map Reducer
 * 
 * The reducer is passed in an action and
 * calls the appropriate handler.
 * 
 * Documentation on redux reducers can be found here:
 * https://redux.js.org/basics/reducers
 */
const initialState = {
    markers: [
        { lat: 33.488069, lng: -112.072972 }
    ]
};

export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ?
        handler(state, action) :
        state;
};
