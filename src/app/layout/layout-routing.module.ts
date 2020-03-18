import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { MonitorComponent } from '../pages/monitor/monitor.component';
import { WorkplaceComponent } from '../pages/workplace/workplace.component';
import { BasicFormComponent } from '../pages/basic-form/basic-form.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { UserComponent } from '../administrator/user/user.component';
import { HomeComponent } from "../pages/home/home.component";

import { AuthGuard } from '../_helpers';

const routes: Routes = [
  { path: '', 
    component: LayoutComponent,
    children: 
    [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
      { path: 'monitor', component: MonitorComponent, canActivate: [AuthGuard] },
      { path: 'workplace', component: WorkplaceComponent, canActivate: [AuthGuard] },
      { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
      { path: 'basicForm', component: BasicFormComponent, canActivate: [AuthGuard] }

    ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
