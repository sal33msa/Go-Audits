import React from 'react';
import {
Accordion,
Card,
} from 'react-bootstrap';

export default function PersonSeenAccordion() {
  return (
    <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
    All Data - Data Access
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <br/>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    Analytics - Feature Access
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <br/>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
    App - Feature Access
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <br/>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    Portal - Feature Access
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
  )
}
