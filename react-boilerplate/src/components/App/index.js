import React from 'react'

/**
 * Import Containers
 */
import MapContainer from '../../containers/Map'
import LocationSelectorContainer from '../../containers/LocationSelector'

import './styles.css'

const App = () => (
    <div className="container">
        <LocationSelectorContainer />
        <MapContainer />
    </div>
)

export default App
