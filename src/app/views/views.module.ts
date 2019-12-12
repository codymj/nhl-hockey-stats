import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsModule} from '../components/news/news.module';

import {HomeComponent} from './home/home.component';
import {StandingsModule} from '../components/standings/standings.module';
import {ScheduleModule} from '../components/schedule/schedule.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NewsModule,
    StandingsModule,
    ScheduleModule
  ]
})
export class ViewsModule { }
