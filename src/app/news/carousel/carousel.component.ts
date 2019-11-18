import {Component, OnInit} from '@angular/core';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private fallbackImgUrl = 'https://i.imgur.com/ETAC3fC.jpg';
  private articles: [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getArticles();
  }

  // Parse the articles from news service
  public getArticles() {
    this.newsService.getNews().subscribe(res => {
      this.articles = res.articles;
    });
  }
}
