import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessWithoutLoginComponent } from './access-without-login.component';

describe('AccessWithoutLoginComponent', () => {
  let component: AccessWithoutLoginComponent;
  let fixture: ComponentFixture<AccessWithoutLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessWithoutLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessWithoutLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
