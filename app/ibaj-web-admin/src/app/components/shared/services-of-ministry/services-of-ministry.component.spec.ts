import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOfMinistryComponent } from './services-of-ministry.component';

describe('ServicesOfMinistryComponent', () => {
  let component: ServicesOfMinistryComponent;
  let fixture: ComponentFixture<ServicesOfMinistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesOfMinistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesOfMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
