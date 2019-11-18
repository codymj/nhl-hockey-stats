import {Component, OnInit} from '@angular/core';
import {StandingsService} from '../standings.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  private division = [];
  private conference = [];

  constructor(private standingsService: StandingsService) { }

  ngOnInit() {
    this.division = this.standingsService.getByDivisions();
    this.conference = this.standingsService.getByConferences();
  }
}
