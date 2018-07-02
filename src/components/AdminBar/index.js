import React from 'react';
import { Button } from 'react-bootstrap';

import NavBar from '../common/NavBar';

import './styles.css';

const AdminBar = ({ handleOnEditModeChenge, inEditMode }) => {
    return (
        <NavBar>
            <Button
                bsStyle={inEditMode ? 'success' : 'primary'}
                className='pull-right admin-bar editBtn'
                onClick={handleOnEditModeChenge}>{inEditMode ? 'Save' : 'Edit'}</Button>
        </NavBar>
    );
};

export default AdminBar;
