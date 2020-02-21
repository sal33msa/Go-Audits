import React from 'react';
import {
Accordion,
Card,
} from 'react-bootstrap';

export default function CustomFieldsAccordion() {
  return (
    <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
     Shop Review - Monthly - Jan 2020
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <br/>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    Shop Review - Monthly - Feb 2020
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
  )
}
