import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from '../../components/App';

import { isAdminSelector, inEditModeSelector } from './selectors';

class AppContainer extends Component {
    render() {
        return (
            <App
                isAdmin={this.props.isAdmin}
                inEditMode={this.props.inEditMode} />
        );
    }
}

//----Redux Mappings----//
const mapStateToProps = (state) => ({
    isAdmin: isAdminSelector(state),
    inEditMode: inEditModeSelector(state)
});

export default connect(mapStateToProps)(AppContainer);
