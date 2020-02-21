import React from 'react';
import {
    Row,
    Col,
    Tab,  
    Nav
} from 'react-bootstrap';
import Permissions from '../usersandroles/feature/Permissions/permissions';
import FinancialYear from './feature/Financial Year/financialYear';
import CustomFields from './feature/Custom Fields/customFields';
import Roles from '../usersandroles/feature/Roles/roles';
import RoleHierarchy from '../usersandroles/feature/Role Hierarchy/roleHierarchy';
import AuditWorkflow from '../audit/feature/Audit Workflow/auditWorkflow';
import ReportTags from '../tags/feature/Report Tags/reportTags';
import ActionPlanSettings from './feature/Action Plan settings/actionPlanSetting';
import PersonSeen from './feature/Person Seen/personSeen';
import TagsList from '../tags/feature/Tags/tagsList';

export default function AdvancedConfiguration() {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Financial Year</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Custom Fields</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Permissions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Role List</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Role Hierarchy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth">Audit Workflow</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seventh">Report Tag</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="eigth">Action Plan Settings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="ninth">Person Seen</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tenth">Tags</Nav.Link>
              </Nav.Item>
              
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <FinancialYear/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <CustomFields />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Permissions />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Roles />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <RoleHierarchy />
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <AuditWorkflow />
              </Tab.Pane>
              <Tab.Pane eventKey="seventh">
                <ReportTags/>
              </Tab.Pane>
              <Tab.Pane eventKey="eigth">
                <ActionPlanSettings />
              </Tab.Pane>
              <Tab.Pane eventKey="ninth">
                <PersonSeen />
              </Tab.Pane>
              <Tab.Pane eventKey="tenth">
                <TagsList />
              </Tab.Pane>
           
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}
