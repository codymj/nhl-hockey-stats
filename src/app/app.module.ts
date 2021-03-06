import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ViewsModule} from './views/views.module';
import {NavigationModule} from './components/navigation/navigation.module';
import {NewsModule} from './components/news/news.module';
import {StandingsModule} from './components/standings/standings.module';
import {ScheduleModule} from './components/schedule/schedule.module';
import {LeaderboardModule} from './components/leaderboard/leaderboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ViewsModule,
    NavigationModule,
    NewsModule,
    StandingsModule,
    ScheduleModule,
    LeaderboardModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
