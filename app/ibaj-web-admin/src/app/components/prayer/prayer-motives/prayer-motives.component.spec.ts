import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerMotivesComponent } from './prayer-motives.component';

describe('PrayerMotivesComponent', () => {
  let component: PrayerMotivesComponent;
  let fixture: ComponentFixture<PrayerMotivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerMotivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerMotivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
