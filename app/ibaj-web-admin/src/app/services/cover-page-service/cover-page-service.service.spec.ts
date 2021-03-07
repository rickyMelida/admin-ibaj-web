import { TestBed } from '@angular/core/testing';

import { CoverPageServiceService } from './cover-page-service.service';

describe('CoverPageServiceService', () => {
  let service: CoverPageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoverPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
