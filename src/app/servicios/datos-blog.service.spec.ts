import { TestBed } from '@angular/core/testing';

import { DatosBlogService } from './datos-blog.service';

describe('DatosBlogService', () => {
  let service: DatosBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
