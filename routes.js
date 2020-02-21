import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../app/modules/dashboard/dashboard'
import Analytics from '../app/modules/analytics/analytics'
import Support from '../app/modules/support/support';
import Setup from '../app/modules/setup/setup';
import LocationList from '../app/modules/setup/features/Company/subFeatures/companyList/companyList';
import AuditNamesList from '../app/modules/setup/features/Audit Names/subFeatures/auditNamesList/auditNamesList';
import QuestionnaireList from '../app/modules/setup/features/Questionnaire/questionnaire';
import CustomFieldList from '../app/modules/advencedConfig/feature/Custom Fields/subFeatures/customFieldList/customFieldList';
import FinancialYearList from '../app/modules/advencedConfig/feature/Financial Year/subFeatures/financialYearList/financialYearList';
import ActionPlanList from '../app/modules/advencedConfig/feature/Action Plan settings/actionPlanSetting';
import PersonSeenList from '../app/modules/advencedConfig/feature/Person Seen/subFeatures/personSeenList/personSeenList';
import ManageAudits from '../app/modules/dashboard/components/manage audits/manageAudit';
import Notifications from '../app/modules/notifications/notification';
import GroupAudits from '../app/modules/audit/feature/Group Audit/groupAudits';
import MyAccount from '../app/modules/my account/myAccount';
import Schedule from '../app/modules/dashboard/components/schedule/schedule';
import CompanyList from '../app/modules/setup/features/Company/subFeatures/companyList/companyList';
import ReportConfigList from '../app/modules/reporting/feature/report configuration/subFeatures/reportConfigList/reportConfigList';
import AdvancedConfiguration from '../app/modules/advencedConfig/advancedConfig';
import Roles from '../app/modules/usersandroles/feature/Roles/roles';
import RoleHierarchy from '../app/modules/usersandroles/feature/Role Hierarchy/roleHierarchy';
import ReportTags from '../app/modules/tags/feature/Report Tags/reportTags';
import TagsList from '../app/modules/tags/feature/Tags/tagsList';
import ActionPlanSettings from '../app/modules/advencedConfig/feature/Action Plan settings/actionPlanSetting';
import ActionPlan from '../app/modules/dashboard/components/actionPlan/actionPlan';
import Trends from '../app/modules/analytics/feature/trends/trends';
import Summary from '../app/modules/analytics/feature/summary/summary';
import Hierarchy from '../app/modules/analytics/feature/hierarchy/hierarchy';

export const Routes= function(props){
    return  (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/users' component={Dashboard} />
        <Route exact path='/manageaudits' component={ManageAudits} />
        <Route exact path='/actionplan' component={ActionPlan} />
        <Route exact path='/schedule' component={Schedule} />
        <Route exact path='/notification' component={Notifications} />
        <Route exact path='/groupaudit' component={GroupAudits} />
        <Route exact path='/myaccount' component={MyAccount} />
        <Route exact path='/roles' component={Roles} />
        <Route exact path='/permissions' component={Permissions} />
        <Route exact path='/rolehierarchy' component={RoleHierarchy} />
        <Route exact path='/setup' component={Setup} />
        <Route exact path='/advanceConfig' component={AdvancedConfiguration} />        
        <Route exact path='/company' component={CompanyList} />
        <Route exact path='/location' component={LocationList} />
        <Route exact path='/auditnames' component={AuditNamesList} />
        <Route exact path='/questionnaire' component={QuestionnaireList} />
        <Route exact path='/reportconfiguration' component={ReportConfigList} />
        <Route exact path='/customfields' component={CustomFieldList} />
        <Route exact path='/financialyear' component={FinancialYearList} />
        <Route exact path='/actionplan' component={ActionPlanList} />
        <Route exact path='/personseen' component={PersonSeenList} />
        <Route exact path='/analytics' component={Analytics} />
        <Route exact path='/support' component={Support} />
        <Route exact path='/reporttags' component={ReportTags} />
        <Route exact path='/tagslist' component={TagsList} />
        <Route exact path='/analytics' component={Analytics} />
        <Route exact path='/actionplansettings' component={ActionPlanSettings} />
        <Route exact path='/trends' component={Trends} />
        <Route exact path='/summary' component={Summary} />
        <Route exact path='/hiearachy' component={Hierarchy} />
  </Switch>)
}
