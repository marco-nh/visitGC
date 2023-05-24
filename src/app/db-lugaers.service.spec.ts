import { TestBed } from '@angular/core/testing';

import { DbLugaersService } from './db-lugaers.service';

describe('DbLugaersService', () => {
  let service: DbLugaersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbLugaersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
