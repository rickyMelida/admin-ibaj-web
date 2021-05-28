import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateSeccionWhithTitleComponent } from './separate-seccion-whith-title.component';

describe('SeparateSeccionWhithTitleComponent', () => {
  let component: SeparateSeccionWhithTitleComponent;
  let fixture: ComponentFixture<SeparateSeccionWhithTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparateSeccionWhithTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparateSeccionWhithTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
