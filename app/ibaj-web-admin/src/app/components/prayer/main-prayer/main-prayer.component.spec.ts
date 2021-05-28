import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPrayerComponent } from './main-prayer.component';

describe('MainPrayerComponent', () => {
  let component: MainPrayerComponent;
  let fixture: ComponentFixture<MainPrayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPrayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
