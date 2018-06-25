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
import LocationSelectorReducer from './containers/LocationSelector/reducers';
import MapReducer from './containers/Map/reducers';

//----Combine Reducers----//
export const reducers = combineReducers({
    map: MapReducer,
    locationSelector: LocationSelectorReducer
});
