import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainScheduleComponent} from './main-schedule/main-schedule.component';
import {ScheduleElementComponent} from './schedule-element/schedule-element.component';
import {MainScoresComponent} from './main-scores/main-scores.component';
import {ScoreElementComponent} from './score-element/score-element.component';

@NgModule({
  declarations: [MainScheduleComponent, ScheduleElementComponent, MainScoresComponent, ScoreElementComponent],
  exports: [
    MainScheduleComponent,
    MainScoresComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScheduleModule { }
