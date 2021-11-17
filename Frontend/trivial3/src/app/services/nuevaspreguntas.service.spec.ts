import { TestBed } from '@angular/core/testing';

import { NuevaspreguntasService } from './nuevaspreguntas.service';

describe('NuevaspreguntasService', () => {
  let service: NuevaspreguntasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevaspreguntasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
