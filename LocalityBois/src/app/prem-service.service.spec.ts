import { TestBed } from '@angular/core/testing';

import { PremServiceService } from './prem-service.service';

describe('PremServiceService', () => {
  let service: PremServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
