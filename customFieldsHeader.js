import React from 'react';
import {
 Row
} from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function CustomFieldsHeader() {
  const marginTop20px = {
    'margin-top': '20px'
  }
  return (
    
    <>
      <Row style={marginTop20px}>
          <Col sm={9}><h2>Custom Fields</h2></Col>
          <Col m={1}>
            <button type="button" class="btn btn-outline-dark">+ Add</button>
          </Col>
          <Col sm={2}>
            <button type="button" class="btn btn-outline-dark">My Schedule</button>
          </Col>
      </Row>
    </>
  )
}
