import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  // account 和 layout 模块未懒加载，不需要讲其模块import到app.module.ts中
  { path: '', loadChildren: () => import('./account/account.module').then( m => m.AccountModule) },
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  // { path: '', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
