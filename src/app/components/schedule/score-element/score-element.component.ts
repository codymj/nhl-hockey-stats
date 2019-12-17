import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-score-element',
  templateUrl: './score-element.component.html',
  styleUrls: ['./score-element.component.css']
})
export class ScoreElementComponent implements OnInit {
  @Input() gameData = {};
  private gameId = null;
  private homeTeam = null;
  private homeScore = null;
  private awayTeam = null;
  private awayScore = null;
  private gameState = null;

  constructor() { }

  ngOnInit() {
    this.setData();
  }

  // Sets game data passed into component
  private setData(): void {
    this.gameId = this.gameData['gamePk'];
    this.gameState = this.gameData['status'].detailedState;
    this.homeTeam = this.idToAbbr(this.gameData['teams'].home.team.id);
    this.homeScore = this.gameData['teams'].home.score;
    this.awayTeam = this.idToAbbr(this.gameData['teams'].away.team.id);
    this.awayScore = this.gameData['teams'].away.score;
  }

  // Convert timestamps in API to local time
  private timestampToTime(ts) {
    return moment(ts).format('h:mm A');
  }

  // Convert teamId to abbreviation
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
