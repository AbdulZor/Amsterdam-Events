import { TestBed } from '@angular/core/testing';

import { AEventsService } from './a-events.service';

describe('AEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AEventsService = TestBed.get(AEventsService);
    expect(service).toBeTruthy();
  });
});
