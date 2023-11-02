import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from './header/header.module';
import { OmegaMenuModule } from './omega-menu/omega-menu.module';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { MatCardModule } from '@angular/material/card';
import { ChartModule } from 'primeng/chart';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    DashboardComponent,
    ConteudoComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatToolbarModule,
    HeaderModule,
    OmegaMenuModule,
    MatCardModule,
    ChartModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
