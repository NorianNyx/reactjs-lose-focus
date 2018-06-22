//----Imports----//
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Map from '../../components/Map'

import { markersSelector } from './selectors'

//----Class Definition----//
class MapContainer extends Component {
    //----Render----//
    render() {
        return (
            <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `800px` }} />}
                mapElement={<div style={{ height: `100%` }} />} 
                markers={this.props.markers} />
        )
    }
}

//----PropTypes----//
MapContainer.propTypes = {
    markers: PropTypes.arrayOf(
        PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number
    })).isRequired
}

//----Redux Mappings----//
const mapStateToProps = (state) => ({
    markers: markersSelector(state)
})

//----Connect----//
export default connect(mapStateToProps)(MapContainer)
