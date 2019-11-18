import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from './models/article.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private BASE_URL = 'http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news';

  constructor(private http: HttpClient) { }

  // Gets entire news JSON from endpoint
  private getNews(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  // Parse the articles from news service
  public getArticles() {
    const articles = [];

    this.getNews().subscribe(res => {
      // Parse JSON into Article objects
      for (const article of res.articles) {
        let imgUrl = '';
        if (article.images.length > 0 && article.images[0].width >= article.images[0].height * 1.5) {
          imgUrl = article.images[0].url;
        }

        const headline = article.headline;
        const description = article.description;

        articles.push(new Article(imgUrl, headline, description));
      }
    });
    return articles;
  }
}
