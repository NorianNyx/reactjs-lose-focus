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
    },
    [THEME_SETTING_CHANGE]: (state, action) => {
        return { ...state,
            theme: { ...state.theme,
                settings: { ...state.theme.settings,
                    [action.payload.parent]: { ...state.theme.settings[action.payload.parent],
                        [action.payload.name]: action.payload.value
                    }
                }
            }
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
    inEditMode: false,
    theme: {
        name: 'Default',
        settings: {
            Header: {},
            MainContent: {}
        }
    }
};

export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ?
        handler(state, action) :
        state;
};
