import {Component, OnInit} from '@angular/core';
import {NewsService} from '../news.service';
import {Article} from '../models/article.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private articles: Article[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.setArticles();
  }

  private setArticles(): void {
    this.articles = this.newsService.getArticles();
  }
}
