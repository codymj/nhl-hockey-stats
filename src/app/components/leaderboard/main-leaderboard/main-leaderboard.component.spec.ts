import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainLeaderboardComponent} from './main-leaderboard.component';

describe('LeaderboardComponent', () => {
  let component: MainLeaderboardComponent;
  let fixture: ComponentFixture<MainLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
