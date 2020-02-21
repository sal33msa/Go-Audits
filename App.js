import React from 'react';
import {
  Col,
  Container,
  Row
} from 'react-bootstrap';
import MainNavBar from './layout/navBar'
import {Routes} from './routes/routes'

function App() {
  return (
      <Container fluid={true}>
        <Row>
          <Col>
            <MainNavBar />
          </Col>            
        </Row>   
        <Row>
          <Col xs={12}>
            <Routes />
          </Col>
        </Row>
        <Col />
      </Container>
  );
}

export default App;
