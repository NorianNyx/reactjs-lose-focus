import React from 'react';

const NavBar = ({ children }) => {
    return (
        <div className='navbar navbar-inverse navbar-fixed-top'>
            <div className='container'>
                <div id='navbar'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
