import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private BASE_URL = 'https://statsapi.web.nhl.com/api/v1/schedule';

  constructor(private http: HttpClient) { }

  // Returns schedule for the current day
  public getCurrentDaySchedule(): Observable<any> {
    return this.http.get(this.BASE_URL).pipe(map(res => {
      return res;
    }));
  }

  // Returns schedule for a specified date (YYYY-MM-DD)
  public getScheduleByDate(date: string): Observable<any> {
    return this.http.get(this.BASE_URL + '?date=' + date).pipe(map(res => {
      return res;
    }));
  }

  // Returns today's schedule for a specified team
  public getCurrentDayScheduleForTeam(teamId: number): Observable<any> {
    return this.http.get(this.BASE_URL + '?teamId=' + teamId).pipe(map(res => {
      return res;
    }));
  }

  // Returns schedule for a specified date and team
  public getScheduleByDateAndTeam(date: string, teamId: number): Observable<any> {
    return this.http.get(this.BASE_URL + '?date=' + date + '&teamId=' + teamId).pipe(map(res => {
        return res;
      }));
  }

  // Returns three-letter abbreviation given a team ID
  public idToAbbr(teamId): string {
    const abbreviations = {
      1: 'NJD', 2: 'NYI', 3: 'NYR', 4: 'PHI', 5: 'PIT', 6: 'BOS',
      7: 'BUF', 8: 'MTL', 9: 'OTT', 10: 'TOR', 12: 'CAR',
      13: 'FLA', 14: 'TBL', 15: 'WSH', 16: 'CHI', 17: 'DET',
      18: 'NSH', 19: 'STL', 20: 'CGY', 21: 'COL', 22: 'EDM',
      23: 'VAN', 24: 'ANA', 25: 'DAL', 26: 'LAK', 28: 'SJS',
      29: 'CBJ', 30: 'MIN', 52: 'WPG', 53: 'ARI', 54: 'VGK'
    };
    return abbreviations[teamId];
  }
}
