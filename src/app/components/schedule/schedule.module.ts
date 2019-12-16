import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainScheduleComponent} from './main-schedule/main-schedule.component';
import {ScheduleElementComponent} from './schedule-element/schedule-element.component';
import {MainScoresComponent} from './main-scores/main-scores.component';

@NgModule({
  declarations: [MainScheduleComponent, ScheduleElementComponent, MainScoresComponent],
  exports: [
    MainScheduleComponent,
    MainScoresComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScheduleModule { }
