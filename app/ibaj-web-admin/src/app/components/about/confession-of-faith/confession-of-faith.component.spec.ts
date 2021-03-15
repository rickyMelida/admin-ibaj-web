import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfessionOfFaithComponent } from './confession-of-faith.component';

describe('ConfessionOfFaithComponent', () => {
  let component: ConfessionOfFaithComponent;
  let fixture: ComponentFixture<ConfessionOfFaithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfessionOfFaithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfessionOfFaithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
