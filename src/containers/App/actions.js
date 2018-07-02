/**
 * App Actions
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
    ENTER_EDIT_MODE,
    EXIT_EDIT_MODE
} from './constants';

/**
 * Dispatch that the selection has changed
 * 
 * @see App
 * @fires App/reducer/ENTER_EDIT_MODE
 * @return {object} An action with the type of ENTER_EDIT_MODE passing payload
 */
export const enterEditMode = () => {
    return { type: ENTER_EDIT_MODE };
};

/**
 * Dispatch that the selection has changed
 * 
 * @see App
 * @fires App/reducer/EXIT_EDIT_MODE
 * @return {object} An action with the type of EXIT_EDIT_MODE passing payload
 */
export const exitEditMode = () => {
    return { type: EXIT_EDIT_MODE };
};