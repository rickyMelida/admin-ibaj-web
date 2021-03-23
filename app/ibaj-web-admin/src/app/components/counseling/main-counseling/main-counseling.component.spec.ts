import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCounselingComponent } from './main-counseling.component';

describe('MainCounselingComponent', () => {
  let component: MainCounselingComponent;
  let fixture: ComponentFixture<MainCounselingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCounselingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCounselingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
