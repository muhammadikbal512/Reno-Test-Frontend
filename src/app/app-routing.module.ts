import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './modules/module/login/login.component';

import { DashboardComponent } from './modules/module/dashboard/dashboard.component';
import { ProjectComponent } from './modules/module/administration/project/project.component';
import { RoleComponent } from './modules/module/administration/role/role.component';
import { UserComponent } from './modules/module/administration/user/user.component';
import { SchemaComponent } from './modules/module/api/schema/schema.component';
import { SandboxComponent } from './modules/module/api/sandbox/sandbox.component';
import { CardRepositoryComponent } from './modules/module/api/card-repository/card-repository.component';
import { ResponseBuilderComponent } from './modules/module/api/response-builder/response-builder.component';
import { TestBedComponent } from './modules/module/test-bed/test-bed.component';
import { LoadGeneratorComponent } from './modules/module/performance/load-generator/load-generator.component';
import { FunctionalReportComponent } from './modules/module/statistic/functional-report/functional-report.component';
import { PerformanceReportComponent } from './modules/module/statistic/performance-report/performance-report.component';
import { SandboxReportComponent } from './modules/module/statistic/sandbox-report/sandbox-report.component';
import { UserEditComponent } from './modules/module/administration/user/widgets/user-edit/user-edit.component';
import { ProjectCreateComponent } from './modules/module/administration/project/widgets/project-create/project-create.component';
import { ProjectEditComponent } from './modules/module/administration/project/widgets/project-edit/project-edit.component';
import { RoleCreateComponent } from './modules/module/administration/role/widgets/role-create/role-create.component';
import { RoleEditComponent } from './modules/module/administration/role/widgets/role-edit/role-edit.component';
import { SchemaCreateComponent } from './modules/module/api/schema/widgets/schema-create/schema-create.component';
import { SchemaEditComponent } from './modules/module/api/schema/widgets/schema-edit/schema-edit.component';
import { SandboxCreateComponent } from './modules/module/api/sandbox/widgets/sandbox-create/sandbox-create.component';
import { SandboxEditComponent } from './modules/module/api/sandbox/widgets/sandbox-edit/sandbox-edit.component';
import { CardCreateComponent } from './modules/module/api/card-repository/widgets/card-create/card-create.component';
import { CardEditComponent } from './modules/module/api/card-repository/widgets/card-edit/card-edit.component';
import { TestbedDataComponent } from './modules/module/test-bed/testbed-data/testbed-data.component';
import { TestbedObjectComponent } from './modules/module/test-bed/testbed-object/testbed-object.component';
import { TestbedScriptComponent } from './modules/module/test-bed/testbed-script/testbed-script.component';
import { TestbedSuiteComponent } from './modules/module/test-bed/testbed-suite/testbed-suite.component';
import { TestbedDataCreateComponent } from './modules/module/test-bed/testbed-data/widgets/testbed-data-create/testbed-data-create.component';
import { ScriptCreateComponent } from './modules/module/test-bed/testbed-script/widgets/script-create/script-create.component';
import { ScriptEditComponent } from './modules/module/test-bed/testbed-script/widgets/script-edit/script-edit.component';
import { SuiteCreateComponent } from './modules/module/test-bed/testbed-suite/widgets/suite-create/suite-create.component';
import { SuiteEditComponent } from './modules/module/test-bed/testbed-suite/widgets/suite-edit/suite-edit.component';
import { LoadCreateComponent } from './modules/module/performance/load-generator/widgets/load-create/load-create.component'
import { LoadEditComponent } from './modules/module/performance/load-generator/widgets/load-edit/load-edit.component';
import { FunctionalViewComponent } from './modules/module/statistic/functional-report/widgets/functional-view/functional-view.component';
import { SandboxReportViewComponent } from './modules/module/statistic/sandbox-report/widgets/sandbox-report-view/sandbox-report-view.component';


const routes: Routes = [
  {
    path: 'Home',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path:'user-edit',
        component: UserEditComponent
      },
      {
        path: 'administration',
        children: [
          {
            path: 'project',
            component: ProjectComponent,
          },
          {
            path: 'project',
            children: [
              {
                path: 'create',
                component: ProjectCreateComponent
              },
              {
                path: 'edit',
                component: ProjectEditComponent
              }
            ]
          },
          {
            path: 'role',
            component: RoleComponent,
          },
          {
            path: 'role',
            children: [
              {
                path: 'create',
                component: RoleCreateComponent
              },
              {
                path: 'edit',
                component: RoleEditComponent
              }
            ]
          },
          {
            path: 'user',
            component: UserComponent
          },
          {
            path: 'user',
            children: [
              {
                path: 'edit',
                component: UserEditComponent
              }
            ]
          },
        ]
      },
      {
        path: 'api',
        children: [
          {
            path: 'schema',
            component: SchemaComponent
          },
          {
            path: 'schema',
            children: [
              {
                path: 'create',
                component: SchemaCreateComponent
              },
              {
                path: 'edit',
                component: SchemaEditComponent
              }
            ]
          },
          {
            path: 'sandbox',
            component: SandboxComponent
          },
          {
            path: 'sandbox',
            children: [
              {
                path: 'create',
                component: SandboxCreateComponent
              },
              {
                path: 'edit',
                component: SandboxEditComponent
              }
            ]
          },
          {
            path: 'card-repository',
            component: CardRepositoryComponent
          },
          {
            path: 'card-repository',
            children: [
              {
                path: 'create',
                component: CardCreateComponent
              },
              {
                path: 'edit',
                component: CardEditComponent
              }
            ]
          },
          {
            path: 'response-builder',
            component: ResponseBuilderComponent
          },
        ]
      },
      {
        path: 'test-bed',
        children: [ 
          {
            path: 'data',
            component: TestbedDataComponent
          },
          {
            path: 'data',
            children: [
              {
                path: 'create',
                component: TestbedDataCreateComponent
              },
            ]
          },
          {
            path: 'object',
            component: TestbedObjectComponent
          },
          {
            path: 'script',
            component: TestbedScriptComponent
          },
          {
            path: 'script',
            children: [
              {
                path: 'create',
                component: ScriptCreateComponent
              },
              {
                path: 'edit',
                component: ScriptEditComponent
              }
            ]
          },
          {
            path: 'suite',
            component: TestbedSuiteComponent
          },
          {
            path: 'suite',
            children: [
              {
                path: 'create',
                component: SuiteCreateComponent
              },
              {
                path: 'edit',
                component: SuiteEditComponent
              }
            ]
          }
         ]
      },     
      {
        path: 'performance',
        children: [
          {
            path: 'load-generator',
            component: LoadGeneratorComponent
          },
          {
            path: 'load-generator',
            children: [
              {
                path: 'create',
                component: LoadCreateComponent
              },
              {
                path: 'edit',
                component: LoadEditComponent
              }
            ]
          }
        ]
      },
      {
        path: 'statistic',
        children: [
          {
            path: 'functional-report',
            component: FunctionalReportComponent
          },
          {
            path: 'functional-report',
            children: [{
              path: 'id',
              component: FunctionalViewComponent
            }]
          },
          {
            path: 'performance-report',
            component: PerformanceReportComponent
          },
          {
            path: 'sandbox-report',
            component: SandboxReportComponent
          },
          {
            path: 'sandbox-report',
            children: [
              {
                path: 'id',
                component: SandboxReportViewComponent
              }
            ]
          }
        ]
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },


  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
