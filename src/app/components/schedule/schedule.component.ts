import {Component, OnInit} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import * as moment from 'moment';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  private scoresYday = {};

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.getYdaySchedule();
  }

  private getYdaySchedule(): void {
    const dateYday: string = moment().subtract(1, 'days').format('YYYY-MM-DD').toString();

    this.scheduleService.getScheduleByDate(dateYday).subscribe(data => {
      this.parseGamesFromSchedule(data);
    });
  }

  private parseGamesFromSchedule(data): void {
    this.scoresYday = data.dates[0].games;
    console.log(this.scoresYday);
  }
}
