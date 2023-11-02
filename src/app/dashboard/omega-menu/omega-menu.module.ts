import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OmegaMenuComponent } from './omega-menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    OmegaMenuComponent
  ],
  imports: [
    CommonModule,
    PanelMenuModule,
    MatMenuModule
  ],
  exports: [
    OmegaMenuComponent
  ]
})
export class OmegaMenuModule { }
