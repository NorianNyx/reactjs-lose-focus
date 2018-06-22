/**
 * LocationSelector Actions
 * 
 * Actions are used to dispatch payloads to the store
 * or a side effect (saga). This is the only way that
 * we send data to our store.
 * 
 * Documentation on redux actions can be found here:
 * https://redux.js.org/basics/actions
 */

/**
 * Import Constants
 */
import {
    SELECTION_CHANGE
} from './constants'

/**
 * Dispatch that the selection has changed
 * 
 * @fires LocationSelector/reducer/SELECTION_CHANGE
 * @return {object} An action with the type of SELECTION_CHANGE passing payload
 */
export const selectionChange = (value) => {
    return { type: SELECTION_CHANGE, payload: value }
}
