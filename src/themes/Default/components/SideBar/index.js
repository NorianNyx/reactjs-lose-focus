import React from 'react';

import ThemeSettingPanel from '../../../../components/ThemeSettingPanel';
import ThemeSetting from '../../../../containers/ThemeSetting';

import './styles.css';

const SideBar = ({ settings }) => {
    return (
        <ThemeSettingPanel
            name='Header'>
            <ThemeSetting
                name='Background Color'
                setting={settings.Header}
                type='text'
                parent='Header'
                id='1' />
            <ThemeSetting
                name='Height'
                setting={settings.Header}
                type='text'
                parent='Header'
                id='2' />
        </ThemeSettingPanel>
    );
};

export default SideBar;
