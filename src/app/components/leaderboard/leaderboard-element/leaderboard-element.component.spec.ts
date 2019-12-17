import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LeaderboardElementComponent} from './leaderboard-element.component';

describe('LeaderboardElementComponent', () => {
  let component: LeaderboardElementComponent;
  let fixture: ComponentFixture<LeaderboardElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
