import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'

import MapContainer from '../../Map'

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore()
const initialState = {
    map: {
        markers: []
    }
}

describe('Map Container', () => {
    let wrapper, store

    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = shallow(<MapContainer store={store} />)
    })

    it('maps state to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining({
            markers: expect.any(Array)
        }))
    })
})
