import { combineReducers } from 'redux';

/**
 * Import Reducers
 * 
 * All new reducers should be added here. This tells
 * Redux that your reducer exists and should be added
 * to the store.
 * 
 * Documentation on redux reducers can be found here:
 * https://redux.js.org/basics/reducers
 */
import AppReducer from './containers/App/reducers';

//----Combine Reducers----//
export const reducers = combineReducers({
    app: AppReducer
});
