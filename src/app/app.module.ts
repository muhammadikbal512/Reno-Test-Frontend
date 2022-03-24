import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { DefaultModule } from './layout/default/default.module';
import { NgChartsModule } from 'ng2-charts'


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DefaultModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
