import {Component, Input, OnInit} from '@angular/core';
import {LeaderboardStatsService} from '../../../services/leaderboard-stats.service';

@Component({
  selector: 'app-leaderboard-element',
  templateUrl: './leaderboard-element.component.html',
  styleUrls: ['./leaderboard-element.component.css']
})
export class LeaderboardElementComponent implements OnInit {
  @Input() type: string;
  private statTypeA: string;
  private statTybeB: string;
  private statTypeC: string;

  constructor(private leaderboardStatsService: LeaderboardStatsService) { }

  ngOnInit() {
  }

}
