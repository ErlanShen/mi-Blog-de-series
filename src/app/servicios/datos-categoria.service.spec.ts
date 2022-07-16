import { TestBed } from '@angular/core/testing';

import { DatosCategoriaService } from './datos-categoria.service';

describe('DatosCategoriaService', () => {
  let service: DatosCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
