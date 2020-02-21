import React from 'react';
import {
  Nav
} from 'react-bootstrap';

export default function AdvancedConfigSubNav() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Financial Year</Nav.Link>
        <Nav.Link eventKey="link-1">Custom Fields</Nav.Link>
        <Nav.Link eventKey="link-2">Permissions</Nav.Link>
        <Nav.Link eventKey="link-3">Role List</Nav.Link>
        <Nav.Link eventKey="link-4">Role Hierarchy</Nav.Link>
        <Nav.Link eventKey="link-5">Audit Workflow</Nav.Link>
        <Nav.Link eventKey="link-6">Report Tag</Nav.Link>
        <Nav.Link eventKey="link-7">Action Plan Settings</Nav.Link>
        <Nav.Link eventKey="link-8">Person Seen</Nav.Link>
        <Nav.Link eventKey="link-9">Tags</Nav.Link>
    </Nav>
  )
}
