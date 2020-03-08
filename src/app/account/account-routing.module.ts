import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { 
      path: '', 
      component: AccountComponent,
      children: [
        // {
        //     path: '',
        //     redirectTo: 'login',
        //     pathMatch: 'full'
        // },
        {
            path: 'login',
            component: LoginComponent
            // data: { returnUrl: window.location.pathname }
        }]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }