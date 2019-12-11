import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {ScheduleService} from '../../../services/schedule.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private scoresYday = {};

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.getYdaySchedule();
  }

  private getYdaySchedule(): void {
    const dateYday: string = moment().subtract(1, 'days').format('YYYY-MM-DD').toString();

    this.scheduleService.getScheduleByDate(dateYday).subscribe(data => {
      this.parseScoresFromSchedule(data);
    });
  }

  private parseScoresFromSchedule(data: Observable<any>): void {
    // @ts-ignore
    this.scoresYday = data.dates[0].games;
    console.log(this.scoresYday);
  }
}
