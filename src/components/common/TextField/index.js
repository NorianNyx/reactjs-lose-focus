import React from 'react';
import { FormControl } from 'react-bootstrap';

const TextField = ({ value, name, parent, handleOnChange, id }) => {
    return (
        <FormControl
            type='text'
            value={value}
            onChange={(e) => {
                handleOnChange(name, parent, e.target.value);
            }} />
    );
};

export default TextField;
