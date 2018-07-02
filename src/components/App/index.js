import React from 'react';

/**
 * Import Containers
 */
import AdminBar from '../../containers/AdminBar';
import AdminPanel from '../../components/AdminPanel';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const App = ({ isAdmin, inEditMode }) => (
    <div>
        {
            (isAdmin) ? <AdminBar
                            className='admin-bar'
                            inEditMode={inEditMode} /> : ''
        }
        <div className='container-fluid'>
            <div className='row'>
                {
                    (isAdmin && inEditMode) ? <AdminPanel className='admin-panel' /> : ''
                }
            </div>
        </div>
    </div>
);

export default App;
