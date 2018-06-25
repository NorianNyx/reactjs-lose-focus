/**
 * Map Actions
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
    FETCH_LOCATIONS_REQUEST,
    FETCH_LOCATIONS_SUCCESS
} from './constants';

/**
 * Dispatch to fetch new locations.
 * 
 * @fires Map/sagas/fetchLocations
 * @return {object} An action with the type of FETCH_LOCATIONS_REQUEST passing
 * the selected location.
 */
export const fetchLocationsRequest = (value) => {
    return { type: FETCH_LOCATIONS_REQUEST, payload: value };
};

/**
 * Dispatch that new locations have been fetched.
 * 
 * @fires Map/reducer/FETCH_LOCATIONS_SUCCESS
 * @return {object} An action with the type of FETCH_LOCATIONS_SUCCESS passing
 * the new locations.
 */
export const fetchLocationsSuccess = (value) => {
    return { type: FETCH_LOCATIONS_SUCCESS, payload: value };
};
