import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DivisionComponent} from './division/division.component';
import {ConferenceComponent} from './conference/conference.component';


@NgModule({
  declarations: [DivisionComponent, ConferenceComponent],
  exports: [
    DivisionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StandingsModule { }
