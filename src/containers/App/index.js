import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from '../../components/App';

import { isAdminSelector, inEditModeSelector, themeSelector } from './selectors';

class AppContainer extends Component {
    render() {
        return (
            <App
                isAdmin={this.props.isAdmin}
                inEditMode={this.props.inEditMode}
                theme={this.props.theme} />
        );
    }
}

//----Redux Mappings----//
const mapStateToProps = (state) => ({
    isAdmin: isAdminSelector(state),
    inEditMode: inEditModeSelector(state),
    theme: themeSelector(state)
});

export default connect(mapStateToProps)(AppContainer);
