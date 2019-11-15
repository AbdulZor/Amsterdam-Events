import { TestBed } from '@angular/core/testing';

import { AEvents11Service } from './a-events11.service';

describe('AEvents11Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AEvents11Service = TestBed.get(AEvents11Service);
    expect(service).toBeTruthy();
  });
});
