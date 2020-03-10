import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { WorkplaceComponent } from './pages/workplace/workplace.component';
import { BasicFormComponent } from './pages/basic-form/basic-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'monitor', component: MonitorComponent },
  { path: 'workplace', component: WorkplaceComponent },
  { path: 'basicForm', component: BasicFormComponent }
];

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: '/login' },
//   { path: '', loadChildren: () => import('./account/account.module').then( m => m.AccountModule) },
//   { path: '', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
