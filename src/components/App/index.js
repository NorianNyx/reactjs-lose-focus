import React from 'react';
import Loadable from 'react-loadable';

/**
 * Import Containers
 */
import AdminBar from '../../containers/AdminBar';
import AdminPanel from '../../components/AdminPanel';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const App = ({ isAdmin, inEditMode, theme }) => {
    const MainContent = Loadable({
        loader: () => import('../../themes/' + theme.name + '/components/MainContent'),
        loading: () => (<div>Loading...</div>)
    });

    const Header = Loadable({
        loader: () => import('../../themes/' + theme.name + '/components/Header'),
        loading: () => (<div>Loading...</div>)
    });

    return (
        <div>
            {
                (isAdmin) ? <AdminBar
                                className='admin-bar'
                                inEditMode={inEditMode} /> : ''
            }
            <Header
                themeSettings={theme.settings.Header} />
            <div className='container-fluid'>
                <div className='row'>
                    {
                        (isAdmin && inEditMode) ? <AdminPanel
                                                    className='admin-panel'
                                                    theme={theme} /> : ''
                    }
                    <MainContent
                        inEditMode={inEditMode} />
                </div>
            </div>
        </div>
    );
};

export default App;
