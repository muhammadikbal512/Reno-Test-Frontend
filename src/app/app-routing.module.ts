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
            component: ProjectComponent
          },
          {
            path: 'role',
            component: RoleComponent
          },
          {
            path: 'user',
            component: UserComponent
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
            path: 'sandbox',
            component: SandboxComponent
          },
          {
            path: 'card-repository',
            component: CardRepositoryComponent
          },
          {
            path: 'response-builder',
            component: ResponseBuilderComponent
          },
        ]
      },     
      {
        path: 'test-bed',
        component: TestBedComponent
      },
      {
        path: 'performance',
        children: [
          {
            path: 'load-generator',
            component: LoadGeneratorComponent
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
            path: 'performance-report',
            component: PerformanceReportComponent
          },
          {
            path: 'sandbox-report',
            component: SandboxReportComponent
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
