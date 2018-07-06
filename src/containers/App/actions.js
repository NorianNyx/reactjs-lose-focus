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

import {
    THEME_SETTING_CHANGE
} from '../ThemeSetting/constants';

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

/**
 * Dispatch that the selection has changed
 * 
 * @see ThemeSetting
 * @fires App/reducer/THEME_SETTING_CHANGE
 * @return {object} An action with the type of THEME_SETTING_CHANGE passing payload
 */
export const themeSettingChange = (value) => {
    return { type: THEME_SETTING_CHANGE, payload: value };
};