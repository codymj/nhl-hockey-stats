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
    this.getArticles();
  }

  // Parse the articles from news service
  public getArticles() {
    this.newsService.getNews().subscribe(res => {
      // Clear array
      this.articles = [];

      // Parse JSON into Article objects
      for (const article of res.articles) {
        let imgUrl = '';
        if (article.images.length > 0 && article.images[0].width >= article.images[0].height * 1.5) {
          imgUrl = article.images[0].url;
        }

        const headline = article.headline;
        const description = article.description;

        this.articles.push(new Article(imgUrl, headline, description));
      }
    });
  }
}
