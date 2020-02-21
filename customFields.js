import React from 'react';
import {
} from 'react-bootstrap';
import CustomFieldsHeader from './customFieldsHeader';
import CustomFieldsAccordion from './subFeatures/customFieldsAccordion/customFieldsAccordion';

export default function CustomFields() {
  return (
    <>
        <CustomFieldsHeader />
        <CustomFieldsAccordion />   
    </>
  )
}