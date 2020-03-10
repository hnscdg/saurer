import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MonitorComponent } from '../pages/monitor/monitor.component';
import { WorkplaceComponent } from '../pages/workplace/workplace.component';
import { BasicFormComponent } from '../pages/basic-form/basic-form.component';

const routes: Routes = [
  { path: 'home', 
    component: LayoutComponent,
    children: 
    [
      { path: 'monitor', component: MonitorComponent },
      { path: 'workplace', component: WorkplaceComponent },
      { path: 'basicForm', component: BasicFormComponent }

    ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
