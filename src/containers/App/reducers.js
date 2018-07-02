/**
 * Import Constants
 */
import {
    ENTER_EDIT_MODE,
    EXIT_EDIT_MODE
} from './constants';

/**
 * Action Handlers
 * 
 * Action handlers are used to execute state changes.
 * They are called by the reducer.
 */
const ACTION_HANDLERS = {
    [ENTER_EDIT_MODE]: (state, action) => {
        return { ...state,
            inEditMode: true
        };
    },
    [EXIT_EDIT_MODE]: (state, action) => {
        return { ...state,
            inEditMode: false
        };
    }
};

/**
 * App Reducer
 * 
 * The reducer is passed in an action and
 * calls the appropriate handler.
 * 
 * Documentation on redux reducers can be found here:
 * https://redux.js.org/basics/reducers
 */
const initialState = {
    isAdmin: true,
    inEditMode: false
};

export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ?
        handler(state, action) :
        state;
};
