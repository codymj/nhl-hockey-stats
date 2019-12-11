import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../../services/news.service';
import {Article} from '../models/article.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private articles = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  private getNews(): void {
    this.newsService.getNews().subscribe((data) => {
      this.parseArticles(data);
    });
  }

  private parseArticles(data): void {
    for (const article of data.articles) {
      const imgs = article.images;
      let imgUrl = '';
      for (const img of imgs) {
        if (img.width / img.height >= 1.77) {
          imgUrl = img.url;
          break;
        }
      }

      const headline = article.headline;
      const description = article.description;

      this.articles.push(new Article(imgUrl, headline, description));
    }
  }
}
