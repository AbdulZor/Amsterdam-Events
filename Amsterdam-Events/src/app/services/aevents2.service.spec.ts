import { TestBed } from '@angular/core/testing';

import { Aevents2Service } from './aevents2.service';

describe('AEvents2ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Aevents2Service = TestBed.get(Aevents2Service);
    expect(service).toBeTruthy();
  });
});
