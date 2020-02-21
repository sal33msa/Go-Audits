import React from 'react';
import {
} from 'react-bootstrap';
import ActionPlanHeader from './actionPlanHeader';
import ActionPlanCard from './subFeatures/actionPlanCards/actionPlanCard';

export default function ActionPlanSettings() {
  return (
    <>
        <ActionPlanHeader />
        <ActionPlanCard />   
    </>
  )
}