//----Imports----//
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { selectionChange } from './actions';
import { fetchLocationsRequest } from '../Map/actions';
import { selectedLocationSelector } from './selectors';

//----Class Definition----//
class LocationSelector extends Component {
    //----Constructor----//
    constructor(props) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    //----Lifecycle Methods----//
    componentDidMount() {
        this.props.fetchLocationsRequest(this.props.selectedLocation);
    }

    //----Handlers----//
    handleOnChange(value) {
        this.props.selectionChange(value);
        this.props.fetchLocationsRequest(value);
    }

    //----Render----//
    render() {
        return (
            <DropdownButton title={this.props.selectedLocation} id="location-selector">
                <MenuItem eventKey="1" onSelect={() => this.handleOnChange("Phoenix")}>Phoenix</MenuItem>
                <MenuItem eventKey="2" onSelect={() => this.handleOnChange("Tucson")}>Tucson</MenuItem>
            </DropdownButton>
        );
    }
}

//----PropTypes----//
LocationSelector.propTypes = {
    selectedLocation: PropTypes.string.isRequired
};

//----Redux Mappings----//
const mapStateToProps = (state) => ({
    selectedLocation: selectedLocationSelector(state)
});

const mapDispatchToProps = {
    selectionChange: (payload) => selectionChange(payload),
    fetchLocationsRequest: (payload) => fetchLocationsRequest(payload)
};

//----Connect----//
export default connect(mapStateToProps, mapDispatchToProps)(LocationSelector);
