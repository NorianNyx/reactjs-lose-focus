import * as actions from '../actions';
import * as constants from '../constants';

describe('actions', () => {
    it('should create an action to change selection', () => {
        const payload = 'Phoenix';
        const expectedAction = {
            type: constants.SELECTION_CHANGE,
            payload
        };

        expect(actions.selectionChange(payload)).toEqual(expectedAction);
    });
});