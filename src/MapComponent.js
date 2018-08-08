import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapComponent extends Component {
  render() {
    const defaultCenter = { lat: 48.866667, lng: 2.333333 };
    return (
      <Map
        google={this.props.google}
        initialCenter={defaultCenter}
        zoom={12}
      >
        {this.props.markers.map((marker, i) => {
          return (
            <Marker
              key={'marker_' + marker.id}
              position={marker.position}
              name={marker.address}
              onClick={this.props.addStore(marker.id)}
            />
          )
        })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDe-EdG28Uuz_qISeppFQcALKjI4M4xSEg"
})(MapComponent)
