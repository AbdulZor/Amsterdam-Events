import { TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';

describe('SessionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionService = TestBed.get(SessionService);
    expect(service).toBeTruthy();
  });
});
