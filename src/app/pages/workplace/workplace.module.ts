import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './workplace.component';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';



@NgModule({
  declarations: [WorkplaceComponent],
  imports: [
    CommonModule,
    NzTimelineModule
  ]
})
export class WorkplaceModule { }
