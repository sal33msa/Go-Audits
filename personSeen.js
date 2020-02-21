import React from 'react';
import {
} from 'react-bootstrap';
import PersonSeenHeader from './personSeenHeader';
import PersonSeenAccordion from './subFeatures/personSeenAccordion/personSeenAccordion';

export default function PersonSeen() {
  return (
    <>
        <PersonSeenHeader />
        <br/>
        <PersonSeenAccordion />   
    </>
  )
}