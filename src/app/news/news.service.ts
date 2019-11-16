import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  // Parse the articles and return
  public getArticles() {
    this.getNews().subscribe(res => {
      return res.articles;
    });
  }
}
