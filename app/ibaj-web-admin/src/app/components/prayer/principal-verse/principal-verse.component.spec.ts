import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalVerseComponent } from './principal-verse.component';

describe('PrincipalVerseComponent', () => {
  let component: PrincipalVerseComponent;
  let fixture: ComponentFixture<PrincipalVerseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalVerseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalVerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
