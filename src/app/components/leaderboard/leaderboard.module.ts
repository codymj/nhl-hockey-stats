import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainLeaderboardComponent} from './main-leaderboard/main-leaderboard.component';
import {LeaderboardElementComponent} from './leaderboard-element/leaderboard-element.component';

@NgModule({
  declarations: [MainLeaderboardComponent, LeaderboardElementComponent],
  exports: [MainLeaderboardComponent],
  imports: [
    CommonModule
  ]
})
export class LeaderboardModule { }
