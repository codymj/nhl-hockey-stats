import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainScheduleComponent} from './main-schedule/main-schedule.component';
import {ScheduleElementComponent} from './schedule-element/schedule-element.component';


@NgModule({
  declarations: [MainScheduleComponent, ScheduleElementComponent],
  exports: [
    MainScheduleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScheduleModule { }
