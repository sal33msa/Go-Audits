import React, {useState} from 'react';
import {
  Nav,
} from 'react-bootstrap';

export default function HomeTabsNav() {
  const [key, setKey] = useState('home');
  return (
    <>
     <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>Disable></Nav.Link>
    </Nav>
    </>
  )
}
