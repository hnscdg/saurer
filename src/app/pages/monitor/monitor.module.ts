import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorComponent } from './monitor.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';


@NgModule({
  declarations: [MonitorComponent],
  imports: [
    CommonModule,
    NzCalendarModule
  ]
})
export class MonitorModule { }
