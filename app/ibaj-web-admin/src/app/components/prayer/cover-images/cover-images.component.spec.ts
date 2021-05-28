import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverImagesComponent } from './cover-images.component';

describe('CoverImagesComponent', () => {
  let component: CoverImagesComponent;
  let fixture: ComponentFixture<CoverImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
