import { call, put, takeLatest } from 'redux-saga/effects';

import MapApi from '../../api/map';

/**
 * Import Actions
 */
import {
    fetchLocationsSuccess
} from './actions';

/**
 * Import Constants
 */
import { 
    FETCH_LOCATIONS_REQUEST
} from './constants';

/**
 * Map Sagas
 * 
 * Sagas are used to call our Api that will retrieve data
 * from a database somewhere.
 * 
 * All saga functions are JavaScript generator functions.
 * 
 * Documentation on generator functions can be found here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 */
export function* fetchLocations(action) {
    const locations = yield call(MapApi.getLocations, action.payload);

    yield put(fetchLocationsSuccess(locations));
}

/**
 * Listeners
 * 
 * This is where we call Redux-Saga's listener functions.
 * Redux-Saga will call the specified function (second parameter)
 * when it is dispatched by an action.
 * 
 * Documentation on redux-saga can be found here:
 * https://redux-saga.js.org/docs/introduction/
 */
export default function* MapSagas() {
    yield takeLatest(FETCH_LOCATIONS_REQUEST, fetchLocations);
}
