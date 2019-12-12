import {Component, OnInit} from '@angular/core';
import {ScheduleService} from '../../../services/schedule.service';

@Component({
  selector: 'app-main-schedule',
  templateUrl: './main-schedule.component.html',
  styleUrls: ['./main-schedule.component.css']
})
export class MainScheduleComponent implements OnInit {
  private games = [];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.scheduleService.getCurrentDaySchedule().subscribe(data => {
      this.parseGames(data);
    });
  }

  // Extract games from the schedule data
  private parseGames(data): void {
    this.games = data.dates[0].games;
    console.log(this.games);
  }
}
