import {Component, OnInit} from '@angular/core';
import {ScheduleService} from '../../../services/schedule.service';
import * as moment from 'moment';

@Component({
  selector: 'app-main-scores',
  templateUrl: './main-scores.component.html',
  styleUrls: ['./main-scores.component.css']
})
export class MainScoresComponent implements OnInit {
  private games = [];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.getYdaysScores();
  }

  // Get yesterday's scores
  private getYdaysScores(): void {
    const ydaysDate = moment().subtract(1, 'days')
      .format('YYYY-MM-DD').toString();
    this.scheduleService.getScheduleByDate(ydaysDate).subscribe(data => {
      this.parseGames(data);
    });
  }

  // Extract games from the schedule data
  private parseGames(data): void {
    this.games = data.dates[0].games;
    console.log(this.games);
  }
}
