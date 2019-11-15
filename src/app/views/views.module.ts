import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsModule} from '../news/news.module';

import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NewsModule
  ]
})
export class ViewsModule { }
