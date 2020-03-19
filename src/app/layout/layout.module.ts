import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from "./layout-routing.module";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SpcSidebarComponent } from './spc-sidebar/spc-sidebar.component';
import { SpcTopbarComponent } from './spc-topbar/spc-topbar.component';
import { SpcFooterComponent } from './spc-footer/spc-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent, 
    SpcSidebarComponent, 
    SpcTopbarComponent, 
    SpcFooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ]
})
export class LayoutModule { }
