import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ]
})
export class LoginModule { }
