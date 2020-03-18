import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/spc/home' },
  // account 和 layout 模块未懒加载，不需要讲其模块import到app.module.ts中
  { 
    path: 'account', 
    loadChildren: () => import('./account/account.module').then( m => m.AccountModule),
    data: { preload: true }
  },
  { 
    path: 'spc', 
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }