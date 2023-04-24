import { TestBed } from '@angular/core/testing';

import { LoadScreenServiceService } from './load-screen-service.service';

describe('LoadScreenServiceService', () => {
  let service: LoadScreenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadScreenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
