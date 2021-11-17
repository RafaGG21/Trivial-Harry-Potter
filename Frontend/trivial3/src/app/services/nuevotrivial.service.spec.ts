import { TestBed } from '@angular/core/testing';

import { NuevotrivialService } from './nuevotrivial.service';

describe('NuevotrivialService', () => {
  let service: NuevotrivialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevotrivialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
