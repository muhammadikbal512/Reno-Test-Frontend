import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default.component';

import { FeatureModule } from 'src/app/modules/module/feature.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    FeatureModule,
    SharedModule,
    RouterModule
  ]
})
export class DefaultModule { }
