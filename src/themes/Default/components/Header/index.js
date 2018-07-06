import React from 'react';
import { Navbar } from 'react-bootstrap';

import './styles.css';

const Header = ({ themeSettings }) => {
    console.log(themeSettings);
    return (
        <Navbar
            className='header'
            style={{
                backgroundColor: themeSettings['Background Color'],
                height: themeSettings['Height']
            }} />
    );
};

export default Header;
