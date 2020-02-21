import React from 'react';
import {
} from 'react-bootstrap';
import FinancialYearHeader from './financialYearHeader';
import FinancialYearAccordion from './subFeatures/financialYearAccordion';

export default function FinancialYear() {
  return (
    <>
        <FinancialYearHeader />
        <FinancialYearAccordion />
        
    </>
  )
}
