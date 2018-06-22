/**
 * Import Constants
 */
import {
    SELECTION_CHANGE
} from './constants'

/**
 * Action Handlers
 * 
 * Action handlers are used to execute state changes.
 * They are called by the reducer.
 */
const ACTION_HANDLERS = {
    [SELECTION_CHANGE]: (state, action) => {
        return { ...state,
            currentSelection: action.payload
        }
    }
}

/**
 * LocationSelector Reducer
 * 
 * The reducer is passed in an action and
 * calls the appropriate handler.
 * 
 * Documentation on redux reducers can be found here:
 * https://redux.js.org/basics/reducers
 */
const initialState = {
    currentSelection: 'Phoenix'
}

export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type]

    return handler ?
        handler(state, action) :
        state
}
