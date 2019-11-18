import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {
  private BASE_URL = 'https://statsapi.web.nhl.com/api/v1/standings/';

  constructor(private http: HttpClient) { }

  // Fetches standings JSON by mode (e.g. byDivision or byConference)
  private getStandings(modifier: string): Observable<any> {
    return this.http.get(this.BASE_URL + modifier);
  }

  // Returns divisional standings
  public getByDivisions() {
    const divisions = [];
    this.getStandings('byDivision').subscribe(res => {
      for (const division of res.records) {
        divisions.push(division);
      }
    });
    return divisions;
  }

  // Returns conference standings
  public getByConferences() {
    const conferences = [];
    this.getStandings('byConference').subscribe(res => {
      for (const conference of res.records) {
        conferences.push(conference);
      }
    });
    return conferences;
  }
}
