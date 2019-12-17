import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsModule} from '../components/news/news.module';

import {HomeComponent} from './home/home.component';
import {StandingsModule} from '../components/standings/standings.module';
import {ScheduleModule} from '../components/schedule/schedule.module';
import {LeaderboardModule} from '../components/leaderboard/leaderboard.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NewsModule,
    StandingsModule,
    ScheduleModule,
    LeaderboardModule
  ]
})
export class ViewsModule { }
