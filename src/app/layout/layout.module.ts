import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from "./layout-routing.module";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SpcSidebarComponent } from './spc-sidebar/spc-sidebar.component';
import { SpcTopbarComponent } from './spc-topbar/spc-topbar.component';
import { SpcFooterComponent } from './spc-footer/spc-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from '../pages/calendar/calendar.component';
import { Error403Component } from '../pages/error/error403/error403.component';
import { MonitorComponent } from '../pages/monitor/monitor.component';
import { Error404Component } from '../pages/error/error404/error404.component';
import { Error500Component } from '../pages/error/error500/error500.component';
import { WorkplaceComponent } from '../pages/workplace/workplace.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { UserComponent } from '../administrator/user/user.component';
import { HomeComponent } from '../pages/home/home.component';

@NgModule({
  declarations: [
    LayoutComponent, 
    SpcSidebarComponent, 
    SpcTopbarComponent, 
    SpcFooterComponent,
    CalendarComponent,
    MonitorComponent,
    Error403Component,
    Error404Component,
    Error500Component,
    WorkplaceComponent,
    WelcomeComponent,
    UserComponent,
    HomeComponent,
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
