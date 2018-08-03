import React, { Component } from 'react';
import MapComponent from './MapComponent.js';
import './App.css';

const API_URL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDxTyc2KdG3Bgp2SQLLvGFtRzoIn6E6eBY";

const markers = [
  {
    position: {lat: 48.8, lng:2.3},
    name: 'test'
  },
  {
    position: {lat: 48.866667, lng: 2.333333},
    name: 'coucou'
  },
  {
    position: {lat: 49, lng:2},
    name: 'abc'
  }
];

class App extends Component {
  render() {
    return (
      <MapComponent
        markers={markers}
        googleMapURL={API_URL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default App;
