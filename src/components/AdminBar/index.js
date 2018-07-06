import React from 'react';
import { Button, Navbar } from 'react-bootstrap';

//import NavBar from '../common/NavBar';

import './styles.css';

const AdminBar = ({ handleOnEditModeChenge, inEditMode }) => {
    return (
        <Navbar inverse className='admin-bar'>
            <Button
                bsStyle={inEditMode ? 'success' : 'primary'}
                className='pull-right admin-bar editBtn'
                onClick={handleOnEditModeChenge}>{inEditMode ? 'Save' : 'Edit'}</Button>
        </Navbar>
    );
};

export default AdminBar;
