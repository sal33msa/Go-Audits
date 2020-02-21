import React from 'react';
import {
} from 'react-bootstrap';
import DashboardCards from './subfeature/dashboardCards/dashboardCards';
import DashboardProgressbar from './subfeature/dashboardProgressbar/dashboardProgressbar';
import AnalyticsDashboardHeader from './analyticsDashboardHeader';


export default function AnalyticsDashboard() {
  return (
    <>
        <AnalyticsDashboardHeader />
        <br/>
        <DashboardCards />
        <br/>
        <DashboardProgressbar />   
    </>
  )
}