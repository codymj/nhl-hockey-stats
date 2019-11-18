import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsModule} from '../news/news.module';

import {HomeComponent} from './home/home.component';
import {StandingsModule} from '../standings/standings.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NewsModule,
    StandingsModule
  ]
})
export class ViewsModule { }
