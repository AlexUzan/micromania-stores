import React, { Component } from 'react';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker, SearchBox
 } from "react-google-maps";


class MapComponent extends Component {
  render() {
    const defaultCenter = { lat: 48.866667, lng: 2.333333 };
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={defaultCenter}
      >
        {this.props.markers.map((marker, i) => {
          return (
            <Marker
              key={'marker_' + i}
              position={marker.position}
              title={marker.name}
            />
          )
        })}
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(MapComponent));
