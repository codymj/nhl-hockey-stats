import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {
  private BASE_URL = 'https://statsapi.web.nhl.com/api/v1/standings/';

  constructor(private http: HttpClient) { }

  // Returns divisional standings
  public getStandingsByDivisions(): Observable<any> {
    return this.http.get(this.BASE_URL + 'byDivision').pipe(map(res => {
      return res;
    }));
  }

  // Returns conference standings
  /*public getByConferences() {
    const conferences = [];
    this.getStandings('byConference').subscribe(res => {
      for (const conference of res.records) {
        conferences.push(conference);
      }
    });
    return conferences;
  }*/
}
