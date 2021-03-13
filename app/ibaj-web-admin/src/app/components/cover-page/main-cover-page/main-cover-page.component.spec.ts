import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCovePageComponent } from './main-cover-page.component';
MainCovePageComponent
describe('MainComponent', () => {
  let component: MainCovePageComponent;
  let fixture: ComponentFixture<MainCovePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCovePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCovePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
