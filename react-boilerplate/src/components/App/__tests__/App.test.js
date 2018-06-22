import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../../App'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const enzymeWrapper = shallow(<App />)

    return {
        enzymeWrapper
    }
}

describe('App Component', () => {
    it('should render self', () => {
        const { enzymeWrapper } = setup()

        expect(enzymeWrapper.find('div').exists()).toBe(true)
    })
})
