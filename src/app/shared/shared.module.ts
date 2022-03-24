import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { 
  HeroIconModule,
  documentReport, 
  chevronDown, 
  globeAlt,
  code, 
  adjustments,
  chartBar,
  clipboardList,
  folderOpen,
  userGroup,
  userCircle,
  collection,
  cubeTransparent,
  creditCard,
  refresh,
  clock,
  chartSquareBar,
  newspaper,
  globe,
  cog,
  bell,
  questionMarkCircle,
   } from 'ng-heroicon'



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeroIconModule.withIcons({
      documentReport,
      chevronDown,
      globeAlt,
      code,
      adjustments,
      chartBar,
      clipboardList,
      folderOpen,
      userGroup,
      userCircle,
      collection,
      cubeTransparent,
      creditCard,
      refresh,
      clock,
      chartSquareBar,
      newspaper,
      globe,
      cog,
      bell,
      questionMarkCircle
  }, {
      defaultHostDisplay: 'block',
  })
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
