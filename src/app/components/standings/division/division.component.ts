import {Component, Input, OnInit} from '@angular/core';
import {StandingsService} from '../../../services/standings.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  private divisions = [];
  private standings = {};
  @Input() division: string;

  constructor(private standingsService: StandingsService) { }

  ngOnInit() {
    this.standingsService.getStandingsByDivisions();
    this.getDivisionStandings();
  }

  private getDivisionStandings(): void {
    this.standingsService.getStandingsByDivisions().subscribe((data) => {
      this.parseDivisions(data);
    });
  }

  private parseDivisions(data): void {
    for (const division of data.records) {
      this.divisions.push(division);
    }
    this.setStandings();
  }

  private setStandings() {
    switch (this.division) {
      case 'metro': {
        this.standings = this.divisions[0];
        break;
      }
      case 'atlantic': {
        this.standings = this.divisions[1];
        break;
      }
      case 'central': {
        this.standings = this.divisions[2];
        break;
      }
      case 'pacific': {
        this.standings = this.divisions[3];
        break;
      }
      default: {
        console.log('Division does not exist');
      }
    }
  }

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
