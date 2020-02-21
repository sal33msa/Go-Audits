import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  Navbar,
} from 'react-bootstrap';

export default function MainNavBar() {
  return (
    <Navbar bg="light" expand="lg" >
        <Navbar.Brand><Link to="/"><h3>Go Audit</h3></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link><Link to="/users">Home</Link></Nav.Link>
            <Nav.Link><Link to="/setup">Setup</Link></Nav.Link>
            <Nav.Link><Link to="/advanceConfig">Advanced Configuration</Link></Nav.Link>
            <Nav.Link><Link to="/analytics">Analytics</Link></Nav.Link>
            <Nav.Link><Link to="/support">Support</Link></Nav.Link>
            </Nav>
              {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
        </Navbar.Collapse>
    </Navbar>
  )
}
