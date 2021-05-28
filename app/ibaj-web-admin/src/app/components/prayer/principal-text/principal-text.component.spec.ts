import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTextComponent } from './principal-text.component';

describe('PrincipalTextComponent', () => {
  let component: PrincipalTextComponent;
  let fixture: ComponentFixture<PrincipalTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
