import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav
} from 'react-bootstrap';

export default function AnalyticsSubNav() {
  return (
    <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link><Link to="/analyticsdashboard">Dashboard</Link></Nav.Link>
        <Nav.Link><Link to="/performance">Performance</Link></Nav.Link>       
        <Nav.Link><Link to="/export"></Link>Export</Nav.Link>
        <Nav.Link><Link to="/trends"></Link>Trends</Nav.Link>
        <Nav.Link><Link to="/link-1"></Link>Action Plan</Nav.Link>
        <Nav.Link><Link to="/summary"></Link>Summary</Nav.Link>
        <Nav.Link><Link to="/link-1"></Link>Search</Nav.Link>
        <Nav.Link><Link to="/link-1"></Link>Hierarchy</Nav.Link>
    </Nav>
  )
}
