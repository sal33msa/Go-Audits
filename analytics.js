import React from 'react';
import {
    Nav,
    Col,
    Row,
    Tab
} from 'react-bootstrap';
import AnalyticsDashboard from './feature/dashbaord/analyticsDashboard';
import Performance from './feature/Performance/performance';
import Export from './feature/export/export';
import Trends from './feature/trends/trends';
import Summary from './feature/summary/summary';
import Hierarchy from './feature/hierarchy/hierarchy';


export default function Analytics() {
  return (
    <>    
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Dashboard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Performance</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Export</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Trends</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Summary</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth">Hierarchy</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AnalyticsDashboard />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Performance />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Export />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Trends  />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <Summary  />
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <Hierarchy />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    
    </>
  )
}