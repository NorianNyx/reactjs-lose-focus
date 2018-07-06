import React from 'react';
import Loadable from 'react-loadable';

import './styles.css';

const AdminPanel = ({ theme }) => {
    const ThemedSideBar = Loadable({
        loader: () => import('../../themes/' + theme.name + '/components/SideBar'),
        loading: () => null
    });

    return (
        <div className='col-sm-3 col-md-2 sidebar'>
            <ThemedSideBar
                settings={theme.settings} />
        </div>
    );
};

export default AdminPanel;