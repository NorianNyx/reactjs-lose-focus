import React from 'react';

import TextField from '../common/TextField';

import './styles.css';

const ThemeSetting = ({ name, setting, type, parent, handleOnChange, id }) => {
    return (
        <div className='row theme-setting'>
            <div className='col-xs-7'>
                {name}
            </div>
            <div className='col-xs-5'>
                {
                    generateField(type, setting, name, parent, handleOnChange, id)
                }
            </div>
        </div>
    );
};

function generateField(type, setting, name, parent, handleOnChange, id) {
    const value = setting ? setting[name] : '';

    switch (type) {
        case 'text':
            return <TextField
                        value={value}
                        name={name}
                        parent={parent}
                        handleOnChange={handleOnChange}
                        id={id} />;
        default:
            break;
    }
}

export default ThemeSetting;
