import reducer from '../reducers';
import * as constants from '../constants';

describe('LocationSelector Reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, { type: '' })).toEqual({
            currentSelection: 'Phoenix'
        });
    });

    it('should handle SELECTION_CHANGE', () => {
        expect(reducer(undefined, { 
            type: constants.SELECTION_CHANGE,
            payload: 'test'
        })).toEqual({
            currentSelection: 'test'
        });
    });
});
