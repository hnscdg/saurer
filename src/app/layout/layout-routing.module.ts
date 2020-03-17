import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MonitorComponent } from '../pages/monitor/monitor.component';
import { WorkplaceComponent } from '../pages/workplace/workplace.component';
import { BasicFormComponent } from '../pages/basic-form/basic-form.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { UserComponent } from '../administrator/user/user.component';

const routes: Routes = [
  { path: 'spc', 
    component: LayoutComponent,
    children: 
    [
      { path: 'user', component: UserComponent },
      { path: 'monitor', component: MonitorComponent },
      { path: 'workplace', component: WorkplaceComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'basicForm', component: BasicFormComponent }

    ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
