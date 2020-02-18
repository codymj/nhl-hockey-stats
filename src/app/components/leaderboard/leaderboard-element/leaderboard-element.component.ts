import {Component, Input, OnInit} from '@angular/core';
import {LeaderboardStatsService} from '../../../services/leaderboard-stats.service';

const CURRENT_SEASON = '20192020';

@Component({
  selector: 'app-leaderboard-element',
  templateUrl: './leaderboard-element.component.html',
  styleUrls: ['./leaderboard-element.component.css']
})
export class LeaderboardElementComponent implements OnInit {
  @Input() type: string;
  private statALabel: string;
  private statAData: [];
  private statBLabel: string;
  private statBData: [];
  private statCLabel: string;
  private statCData: [];

  constructor(private leaderboardStatsService: LeaderboardStatsService) { }

  ngOnInit() {
    switch (this.type) {
      case 'skaters': this.getSkaterData(); break;
      case 'defensemen': this.getDefensemenData(); break;
      case 'goalies': this.getGoalieData(); break;
      case 'rookies': this.getRookieData(); break;
    }
  }

  // Get skater leaders
  private getSkaterData() {
    // Points
    this.leaderboardStatsService.getSkaterLeaders(
      'points', CURRENT_SEASON).subscribe(data => {
        this.statALabel = 'Points';
        this.statAData = data.data;
    });

    // Goals
    this.leaderboardStatsService.getSkaterLeaders(
      'goals', CURRENT_SEASON).subscribe(data => {
        this.statBLabel = 'Goals';
        this.statBData = data.data;
    });

    // Assists
    this.leaderboardStatsService.getSkaterLeaders(
      'assists', CURRENT_SEASON).subscribe(data => {
        this.statCLabel = 'Assists';
        this.statCData = data.data;
    });
  }

  // Get defensemen leaders
  private getDefensemenData() {
    // Points
    this.leaderboardStatsService.getDefensemenLeaders(
      'points', CURRENT_SEASON).subscribe(data => {
        this.statALabel = 'Points';
        this.statAData = data.data;
    });

    // Goals
    this.leaderboardStatsService.getDefensemenLeaders(
      'goals', CURRENT_SEASON).subscribe(data => {
        this.statBLabel = 'Goals';
        this.statBData = data.data;
    });

    // Assists
    this.leaderboardStatsService.getDefensemenLeaders(
      'assists', CURRENT_SEASON).subscribe(data => {
        this.statCLabel = 'Assists';
        this.statCData = data.data;
    });
  }

  // Get goalie leaders
  private getGoalieData() {
    // GAA
    this.leaderboardStatsService.getGoalieLeaders(
      'gaa', 30, CURRENT_SEASON).subscribe(data => {
        this.statALabel = 'GAA';
        this.statAData = data.data;
    });

    // SV%
    this.leaderboardStatsService.getGoalieLeaders(
      'savePctg', 30, CURRENT_SEASON).subscribe(data => {
        this.statBLabel = 'SVPct';
        this.statBData = data.data;
    });

    // Shutouts
    this.leaderboardStatsService.getGoalieLeaders(
      'shutouts', 30, CURRENT_SEASON).subscribe(data => {
        this.statCLabel = 'Shutouts';
        this.statCData = data.data;
    });
  }

  // Get rookie leaders
  private getRookieData() {
    // Points
    this.leaderboardStatsService.getRookieLeaders(
      'points', CURRENT_SEASON).subscribe(data => {
        this.statALabel = 'Points';
        this.statAData = data.data;
    });

    // Goals
    this.leaderboardStatsService.getRookieLeaders(
      'goals', CURRENT_SEASON).subscribe(data => {
        this.statBLabel = 'Goals';
        this.statBData = data.data;
    });

    // Assists
    this.leaderboardStatsService.getRookieLeaders(
      'assists', CURRENT_SEASON).subscribe(data => {
        this.statCLabel = 'Assists';
        this.statCData = data.data;
    });
  }
}
