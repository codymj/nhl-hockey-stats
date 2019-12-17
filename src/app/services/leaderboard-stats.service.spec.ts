import {TestBed} from '@angular/core/testing';

import {LeaderboardStatsService} from './leaderboard-stats.service';

describe('LeaderboardStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaderboardStatsService = TestBed.get(LeaderboardStatsService);
    expect(service).toBeTruthy();
  });
});
