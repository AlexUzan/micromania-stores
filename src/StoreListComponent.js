import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export default class StoreListComponent extends Component {
  render() {
    return (
      <Grid fluid>
        {this.props.selectedStores.map((store, i) => {
          return (
            <Row>
              <Col xs={10} style={{border: '2px solid white'}}>
                <div style={{padding: '5px'}}>{store.address}</div>
              </Col>
              <Col xs={2}>
                <Button
                  bsStyle="danger"
                  onClick={this.props.removeStore(store.id)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          )
        })}
      </Grid>
    )
  }
}
