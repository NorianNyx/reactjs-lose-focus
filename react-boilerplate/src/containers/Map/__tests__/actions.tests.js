import * as actions from '../actions'
import * as constants from '../constants'

describe('actions', () => {
    it('should dispatch an action to request new locations', () => {
        const payload = 'Phoenix'
        const expectedAction = {
            type: constants.FETCH_LOCATIONS_REQUEST,
            payload
        }

        expect(actions.fetchLocationsRequest(payload)).toEqual(expectedAction)
    })

    it('should dispatch an action that locations were successfully fetched', () => {
        const payload = []
        const expectedAction = {
            type: constants.FETCH_LOCATIONS_SUCCESS,
            payload
        }

        expect(actions.fetchLocationsSuccess(payload)).toEqual(expectedAction)
    })
})