import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

/**
 * Import CSS
 */
import 'bootstrap/dist/css/bootstrap.css';

// react-google-maps uses a technique called
// Higher-Order Components.
//
// Documentation on HOCs can be found here:
// https://reactjs.org/docs/higher-order-components.html
const Map = withScriptjs(withGoogleMap((props) => (
    <GoogleMap
        defaultZoom={12}
        center={{ lat: props.markers[0].lat, lng: props.markers[0].lng }} >
        {
            props.markers.map((marker, i) => (
                <Marker key={i} position={{ lat: marker.lat, lng: marker.lng }} />
            ))
        }
    </GoogleMap>
)));

export default Map;
