import React, { Component } from 'react';
import { connect } from 'react-redux';

import { themeSettingChange } from '../App/actions';

import ThemeSetting from '../../components/ThemeSetting';

class ThemeSettingContainer extends Component {
    constructor(props) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(name, parent, value) {
        const payload = {
            name: name,
            parent,
            value: value
        };

        this.props.themeSettingChange(payload);
    }

    render() {
        return (
            <ThemeSetting
                name={this.props.name}
                setting={this.props.setting}
                parent={this.props.parent}
                type={this.props.type}
                handleOnChange={this.handleOnChange}
                id={this.props.id} />
        );
    }
}

//----Redux Mappings----//
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
    themeSettingChange: (value) => themeSettingChange(value)
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSettingContainer);
