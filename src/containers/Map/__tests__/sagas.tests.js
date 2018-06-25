import SagaTester from 'redux-saga-tester';

import sagas from '../sagas';
import * as constants from '../constants';
import * as actions from '../actions';

describe('Map Sagas', () => {
    let sagaTester = null;

    beforeEach(() => {
        sagaTester = new SagaTester({ markers: [] });
        sagaTester.start(sagas);
    });

    it('should fetch locations and send FETCH_LOCATION_SUCCESS action', async () => {
        sagaTester.dispatch(actions.fetchLocationsRequest('Phoenix'));

        await sagaTester.waitFor(constants.FETCH_LOCATIONS_SUCCESS);

        expect(sagaTester.getLatestCalledAction().payload).not.toBeNull();
    });
});