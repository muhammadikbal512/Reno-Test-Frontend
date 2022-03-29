import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { 
  HeroIconModule,
  documentReport,
  documentText, 
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
  pencilAlt,
  eye,
  trash,
  colorSwatch,
  viewBoards,
  puzzle,
  plus,
  play,
  trendingUp,
   } from 'ng-heroicon';
import { ButtonBackComponent } from './button-back/button-back.component'



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ButtonBackComponent
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
      questionMarkCircle,
      pencilAlt,
      eye,
      trash,
      documentText,
      colorSwatch,
      viewBoards,
      puzzle,
      plus,
      play,
      trendingUp
  }, {
      defaultHostDisplay: 'block',
  })
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HeroIconModule,
    ButtonBackComponent
  ]
})
export class SharedModule { }
