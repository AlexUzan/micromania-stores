import React, { Component } from 'react';
import MapComponent from './MapComponent.js';
import { Grid, Row, Col } from 'react-bootstrap';
import stores from './data/stores_unicode.json';
import './App.css';

const API_URL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDe-EdG28Uuz_qISeppFQcALKjI4M4xSEg";

var markers = []
for (let key in stores) {
  if (!stores.hasOwnProperty(key)) continue;

  markers.push({
    address: key,
    position: stores[key]
  })
}

MapContainer = () => {
  return (
    <Col xs={12} md={8}></Col>
  )
}

class App extends Component {
  render() {
    const headerStyle = {
      backgroundColor: '#0A0A0B',
      color: 'white',
      height: '10vh',
      fontFamily: "'Roboto', 'sans-serif'"
    };
    const sideBarStyle = {
      backgroundColor: '#2E2F32'
    };
    return (
      <Grid fluid>
        <Row style={headerStyle}>
          <h1 style={{margin: '0.5vh 45vw'}}>Magasins Micromania</h1>
        </Row>

        <Row>
          <MapComponent
            markers={markers}
            googleMapURL={API_URL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<MapContainer/>}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <Col xs={12} md={4}>
            <div style={sideBarStyle}>Test</div>
          </Col>
        </Row>
    </Grid>
    );
  }
}

export default App;
