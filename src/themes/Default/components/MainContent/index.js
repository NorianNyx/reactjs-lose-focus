import React from 'react';

import './styles.css';

const MainContent = ({ inEditMode }) => {
    return (
        <div
            className={'mainContent ' + (inEditMode ? 'col-sm-9 col-md-10 col-sm-offset-3 col-md-offset-2' : 'col-sm-12')}>
            <div className='white'>
                HELLO WORLD</div>
        </div>
    );
};

export default MainContent;
