import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ViewsModule} from './views/views.module';
import {NavigationModule} from './navigation/navigation.module';
import {NewsModule} from './news/news.module';
import {StandingsModule} from './standings/standings.module';

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
    StandingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
