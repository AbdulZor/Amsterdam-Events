import { TestBed } from '@angular/core/testing';

import { Overview11InterceptorService } from './overview11-interceptor.service';

describe('Overview11InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Overview11InterceptorService = TestBed.get(Overview11InterceptorService);
    expect(service).toBeTruthy();
  });
});
