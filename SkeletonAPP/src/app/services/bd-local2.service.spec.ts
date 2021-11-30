import { TestBed } from '@angular/core/testing';

import { BdLocal2Service } from './bd-local2.service';

describe('BdLocal2Service', () => {
  let service: BdLocal2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdLocal2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
