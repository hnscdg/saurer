import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorComponent } from './monitor.component';
import { NzStatisticModule } from "ng-zorro-antd/statistic";

@NgModule({
  declarations: [MonitorComponent],
  imports: [
    CommonModule,
    NzStatisticModule
  ]
})
export class MonitorModule { }
