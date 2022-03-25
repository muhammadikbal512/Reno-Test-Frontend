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

@NgModule({
  declarations: [DashboardComponent, LoginComponent, ProjectComponent, RoleComponent, UserComponent, SchemaComponent, SandboxComponent, CardRepositoryComponent, ResponseBuilderComponent, TestBedComponent, LoadGeneratorComponent, FunctionalReportComponent, PerformanceReportComponent, SandboxReportComponent, ProjectTableComponent, ProjectCreateComponent, RoleTableComponent, RoleCreateComponent, RoleCreateTableGeneralComponent, RoleCreateModuleComponent, UserTableComponent, UserEditComponent, UserTabsComponent, SchemaTableComponent, SchemaCreateComponent, SchemaCreateTableGeneralComponent, ProjectEditComponent, RoleEditComponent, SchemaEditComponent, SchemaEditTableGeneralComponent, SandboxTableComponent, SandboxCreateComponent, SandboxCreateTableGeneralComponent, SandboxCreateTableRequestsComponent, SandboxCreateTableAdvanceComponent, SandboxCreateTableRulesComponent, SandboxCreateTableClientComponent,],
  imports: [CommonModule, MaterialModule, NgChartsModule, MatTableModule, SharedModule, RouterModule],
})
export class FeatureModule {}
