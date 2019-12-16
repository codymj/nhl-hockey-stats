import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainScoresComponent} from './main-scores.component';

describe('MainScoresComponent', () => {
  let component: MainScoresComponent;
  let fixture: ComponentFixture<MainScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
