import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import LocationSelectorContainer from '../../LocationSelector';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
const initialState = {
    locationSelector: {
        currentSelection: ''
    }
};

describe('LocationSelector Container', () => {
    let wrapper, store;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<LocationSelectorContainer store={store} />);
    });

    it('maps state to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining({
            selectedLocation: expect.any(String)
        }));
    });
});
