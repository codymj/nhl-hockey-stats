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
}
