import React from 'react';
import { 
  Row,
  Col,
  Card
}  from 'react-bootstrap';

export default function DashboardCards() {
  return (
    <>
      <Row>
        <Col>
            <br/>
            <Card bg="info" text="white" style={{ width: '18rem' }}>
                        <Card.Header>New Clients</Card.Header>
                        <Card.Body>
                        <Card.Title><h1>1,203</h1></Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        </Card.Body>
                </Card>
          </Col>
      </Row>
        
    </>
  )
}
