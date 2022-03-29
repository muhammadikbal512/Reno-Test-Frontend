import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { NgChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProjectComponent } from './administration/project/project.component';
import { RoleComponent } from './administration/role/role.component';
import { UserComponent } from './administration/user/user.component';
import { SchemaComponent } from './api/schema/schema.component';
import { SandboxComponent } from './api/sandbox/sandbox.component';
import { CardRepositoryComponent } from './api/card-repository/card-repository.component';
import { ResponseBuilderComponent } from './api/response-builder/response-builder.component';
import { TestBedComponent } from './test-bed/test-bed.component';
import { LoadGeneratorComponent } from './performance/load-generator/load-generator.component';
import { FunctionalReportComponent } from './statistic/functional-report/functional-report.component';
import { PerformanceReportComponent } from './statistic/performance-report/performance-report.component';
import { SandboxReportComponent } from './statistic/sandbox-report/sandbox-report.component';
import { ProjectTableComponent } from './administration/project/widgets/project-table/project-table.component';
import { ProjectCreateComponent } from './administration/project/widgets/project-create/project-create.component';
import { RoleTableComponent } from './administration/role/widgets/role-table/role-table.component';
import { RoleCreateComponent } from './administration/role/widgets/role-create/role-create.component';
import { RoleCreateTableGeneralComponent } from './administration/role/widgets/role-create/role-create-table-general/role-create-table-general.component';
import { RoleCreateModuleComponent } from './administration/role/widgets/role-create/role-create-module/role-create-module.component';
import { UserTableComponent } from './administration/user/widgets/user-table/user-table.component';
import { UserEditComponent } from './administration/user/widgets/user-edit/user-edit.component';
import { UserTabsComponent } from './administration/user/widgets/user-tabs/user-tabs.component';
import { SchemaTableComponent } from './api/schema/widgets/schema-table/schema-table.component';
import { SchemaCreateComponent } from './api/schema/widgets/schema-create/schema-create.component';
import { SchemaCreateTableGeneralComponent } from './api/schema/widgets/schema-create/schema-create-table-general/schema-create-table-general.component';
import { ProjectEditComponent } from './administration/project/widgets/project-edit/project-edit.component';
import { RoleEditComponent } from './administration/role/widgets/role-edit/role-edit.component';
import { SchemaEditComponent } from './api/schema/widgets/schema-edit/schema-edit.component';
import { SchemaEditTableGeneralComponent } from './api/schema/widgets/schema-edit/schema-edit-table-general/schema-edit-table-general.component';
import { SandboxTableComponent } from './api/sandbox/widgets/sandbox-table/sandbox-table.component';
import { SandboxCreateComponent } from './api/sandbox/widgets/sandbox-create/sandbox-create.component';
import { SandboxCreateTableGeneralComponent } from './api/sandbox/widgets/sandbox-create/sandbox-create-table-general/sandbox-create-table-general.component';
import { SandboxCreateTableRequestsComponent } from './api/sandbox/widgets/sandbox-create/sandbox-create-table-requests/sandbox-create-table-requests.component';
import { SandboxCreateTableAdvanceComponent } from './api/sandbox/widgets/sandbox-create/sandbox-create-table-advance/sandbox-create-table-advance.component';
import { SandboxCreateTableRulesComponent } from './api/sandbox/widgets/sandbox-create/sandbox-create-table-rules/sandbox-create-table-rules.component';
import { SandboxCreateTableClientComponent } from './api/sandbox/widgets/sandbox-create/sandbox-create-table-client/sandbox-create-table-client.component';
import { SchemaCreateTableParameterComponent } from './api/schema/widgets/schema-create/schema-create-table-parameter/schema-create-table-parameter.component';
import { SandboxEditComponent } from './api/sandbox/widgets/sandbox-edit/sandbox-edit.component';
import { SandboxEditTableGeneralComponent } from './api/sandbox/widgets/sandbox-edit/sandbox-edit-table-general/sandbox-edit-table-general.component';
import { SandboxEditTableRequestComponent } from './api/sandbox/widgets/sandbox-edit/sandbox-edit-table-request/sandbox-edit-table-request.component';
import { SandboxEditTableAdvanceComponent } from './api/sandbox/widgets/sandbox-edit/sandbox-edit-table-advance/sandbox-edit-table-advance.component';
import { SandboxEditTableRulesComponent } from './api/sandbox/widgets/sandbox-edit/sandbox-edit-table-rules/sandbox-edit-table-rules.component';
import { SandboxEditTableClientComponent } from './api/sandbox/widgets/sandbox-edit/sandbox-edit-table-client/sandbox-edit-table-client.component';
import { CardTableComponent } from './api/card-repository/widgets/card-table/card-table.component';
import { CardCreateComponent } from './api/card-repository/widgets/card-create/card-create.component';
import { CardEditComponent } from './api/card-repository/widgets/card-edit/card-edit.component';
import { TestbedDataComponent } from './test-bed/testbed-data/testbed-data.component';
import { TestbedObjectComponent } from './test-bed/testbed-object/testbed-object.component';
import { TestbedScriptComponent } from './test-bed/testbed-script/testbed-script.component';
import { TestbedSuiteComponent } from './test-bed/testbed-suite/testbed-suite.component';
import { TestbedDataCreateComponent } from './test-bed/testbed-data/widgets/testbed-data-create/testbed-data-create.component';
import { ScriptTableComponent } from './test-bed/testbed-script/widgets/script-table/script-table.component';
import { ScriptCreateComponent } from './test-bed/testbed-script/widgets/script-create/script-create.component';
import { ScriptCreateTableGeneralComponent } from './test-bed/testbed-script/widgets/script-create/script-create-table-general/script-create-table-general.component';
import { ScriptCreateTableActionsComponent } from './test-bed/testbed-script/widgets/script-create/script-create-table-actions/script-create-table-actions.component';
import { ScriptEditComponent } from './test-bed/testbed-script/widgets/script-edit/script-edit.component';
import { ScriptEditTableGeneralComponent } from './test-bed/testbed-script/widgets/script-edit/script-edit-table-general/script-edit-table-general.component';
import { ScriptEditTableActionsComponent } from './test-bed/testbed-script/widgets/script-edit/script-edit-table-actions/script-edit-table-actions.component';
import { SuiteTableComponent } from './test-bed/testbed-suite/widgets/suite-table/suite-table.component';
import { SuiteCreateComponent } from './test-bed/testbed-suite/widgets/suite-create/suite-create.component';
import { SuiteCreateGeneralComponent } from './test-bed/testbed-suite/widgets/suite-create/suite-create-general/suite-create-general.component';
import { SuiteCreateEmailComponent } from './test-bed/testbed-suite/widgets/suite-create/suite-create-email/suite-create-email.component';
import { SuiteEditComponent } from './test-bed/testbed-suite/widgets/suite-edit/suite-edit.component';
import { SuiteEditGeneralComponent } from './test-bed/testbed-suite/widgets/suite-edit/suite-edit-general/suite-edit-general.component';
import { SuiteEditEmailComponent } from './test-bed/testbed-suite/widgets/suite-edit/suite-edit-email/suite-edit-email.component';
import { LoadCreateComponent } from './performance/load-generator/widgets/load-create/load-create.component';
import { LoadTableComponent } from './performance/load-generator/widgets/load-table/load-table.component';
import { LoadCreateTableGeneralComponent } from './performance/load-generator/widgets/load-create/load-create-table-general/load-create-table-general.component';
import { LoadCreateTableTimeComponent } from './performance/load-generator/widgets/load-create/load-create-table-time/load-create-table-time.component';
import { LoadEditComponent } from './performance/load-generator/widgets/load-edit/load-edit.component';
import { LoadEditGeneralComponent } from './performance/load-generator/widgets/load-edit/load-edit-general/load-edit-general.component';
import { LoadEditTimeComponent } from './performance/load-generator/widgets/load-edit/load-edit-time/load-edit-time.component';
import { FunctionalTableComponent } from './statistic/functional-report/widgets/functional-table/functional-table.component';
import { FunctionalViewComponent } from './statistic/functional-report/widgets/functional-view/functional-view.component';
import { FunctionalviewChartComponent } from './statistic/functional-report/widgets/functional-view/functionalview-chart/functionalview-chart.component';
import { FunctionalviewTableComponent } from './statistic/functional-report/widgets/functional-view/functionalview-table/functionalview-table.component';
import { SandboxReportTableComponent } from './statistic/sandbox-report/widgets/sandbox-report-table/sandbox-report-table.component';
import { SandboxReportViewComponent } from './statistic/sandbox-report/widgets/sandbox-report-view/sandbox-report-view.component';


@NgModule({
  declarations: [DashboardComponent, LoginComponent, ProjectComponent, RoleComponent, UserComponent, SchemaComponent, SandboxComponent, CardRepositoryComponent, ResponseBuilderComponent, TestBedComponent, LoadGeneratorComponent, FunctionalReportComponent, PerformanceReportComponent, SandboxReportComponent, ProjectTableComponent, ProjectCreateComponent, RoleTableComponent, RoleCreateComponent, RoleCreateTableGeneralComponent, RoleCreateModuleComponent, UserTableComponent, UserEditComponent, UserTabsComponent, SchemaTableComponent, SchemaCreateComponent, SchemaCreateTableGeneralComponent, ProjectEditComponent, RoleEditComponent, SchemaEditComponent, SchemaEditTableGeneralComponent, SandboxTableComponent, SandboxCreateComponent, SandboxCreateTableGeneralComponent, SandboxCreateTableRequestsComponent, SandboxCreateTableAdvanceComponent, SandboxCreateTableRulesComponent, SandboxCreateTableClientComponent, SchemaCreateTableParameterComponent, SandboxEditComponent, SandboxEditTableGeneralComponent, SandboxEditTableRequestComponent, SandboxEditTableAdvanceComponent, SandboxEditTableRulesComponent, SandboxEditTableClientComponent, CardTableComponent, CardCreateComponent, CardEditComponent, TestbedDataComponent, TestbedObjectComponent, TestbedScriptComponent, TestbedSuiteComponent, TestbedDataCreateComponent, ScriptTableComponent, ScriptCreateComponent, ScriptCreateTableGeneralComponent, ScriptCreateTableActionsComponent, ScriptEditComponent, ScriptEditTableGeneralComponent, ScriptEditTableActionsComponent, SuiteTableComponent, SuiteCreateComponent, SuiteCreateGeneralComponent, SuiteCreateEmailComponent, SuiteEditComponent, SuiteEditGeneralComponent, SuiteEditEmailComponent, LoadCreateComponent, LoadTableComponent, LoadCreateTableGeneralComponent, LoadCreateTableTimeComponent, LoadEditComponent, LoadEditGeneralComponent, LoadEditTimeComponent, FunctionalTableComponent, FunctionalViewComponent, FunctionalviewChartComponent, FunctionalviewTableComponent, SandboxReportTableComponent, SandboxReportViewComponent,],
  imports: [CommonModule, MaterialModule, NgChartsModule, MatTableModule, SharedModule, RouterModule],
})
export class FeatureModule {}
