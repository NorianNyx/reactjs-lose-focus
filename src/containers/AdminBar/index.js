import React, { Component } from 'react';
import { connect } from 'react-redux';

import AdminBar from '../../components/AdminBar';

import { enterEditMode, exitEditMode } from '../App/actions';

class AdminBarContainer extends Component {
    constructor(props) {
        super(props);

        this.handleOnEditModeChenge = this.handleOnEditModeChenge.bind(this);
    }

    handleOnEditModeChenge() {
        this.props.inEditMode ? 
            this.props.exitEditMode() :
            this.props.enterEditMode();
    }

    render() {
        return (
            <AdminBar
                handleOnEditModeChenge={this.handleOnEditModeChenge}
                inEditMode={this.props.inEditMode} />
        );
    }
}

//----Redux Mappings----//
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
    enterEditMode: () => enterEditMode(),
    exitEditMode: () => exitEditMode()
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminBarContainer);
