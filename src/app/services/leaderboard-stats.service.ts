import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardStatsService {
  private BASE_URL = 'https://api.nhle.com/stats/rest/en/leaders/';

  constructor(private http: HttpClient) { }

  // Returns skater leaderboard stats for a season
  // mode: 'points', 'goals' or 'assists'
  // season: In format '20192020'
  public getSkaterLeaderboard(mode: string, season: string): Observable<any> {
    const attr = 'skaters/' + mode + '?cayenneExp=season=' + season +
      '%20and%20gameType=2';
    return this.http.get(this.BASE_URL + attr).pipe(map(res => {
      return res;
    }));
  }

  // Returns defensemen leaderboard stats for a season
  // mode: 'points', 'goals' or 'assists'
  // season: In format '20192020'
  public getDefensemenLeaderboard(
  mode: string, season: string): Observable<any> {
    const attr = 'skaters/' + mode + '?cayenneExp=season=' + season +
      '%20and%20gameType=2%20and%20player.positionCode%20=%20%27D%27';
    return this.http.get(this.BASE_URL + attr).pipe(map(res => {
      return res;
    }));
  }

  // Returns goalie leaderboard stats for a season
  // mode: 'gaa', 'savePctg' or 'shutouts'
  // gamesPlayed: Minimum number of games played to be included in query
  // season: In format '20192020'
  public getGoalieLeaderboard(
  mode: string, gamesPlayed: number, season: string): Observable<any> {
    const attr = 'goalies/' + mode + '?cayenneExp=season=' + season +
      '%20and%20gameType=2%20and%20gamesPlayed%20>=%20' + gamesPlayed;
    return this.http.get(this.BASE_URL + attr).pipe(map(res => {
      return res;
    }));
  }
}
