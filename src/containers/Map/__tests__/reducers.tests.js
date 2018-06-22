import reducer from '../reducers'
import * as constants from '../constants'

describe('Map Reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, { type: '' })).toEqual({
            markers: [
                { lat: 33.488069, lng: -112.072972 }
            ]
        })
    })

    it('should handle FETCH_LOCATIONS_SUCCESS', () => {
        expect(reducer(undefined, { 
            type: constants.FETCH_LOCATIONS_SUCCESS,
            payload: 'test'
        })).toEqual({
            markers: 'test'
        })
    })
})
