import React from 'react';
import { 
  Row,
  Col,
  ProgressBar
}  from 'react-bootstrap';

export default function DashboardProgressbar() {
  return (
    <>
      <Row>
                <Col>
                    <ProgressBar variant="info" now={25} label={`${25}%`} />New Audits<br/>
                    <ProgressBar variant="info" now={50} label={`${50}%`} />Still todo<br/>
                    <ProgressBar variant="info" now={75} label={`${75}%`} />Done<br/>
                </Col>
                
      </Row>
        
    </>
  )
}
