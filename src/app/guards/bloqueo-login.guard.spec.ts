import { TestBed } from '@angular/core/testing';

import { BloqueoLoginGuard } from './bloqueo-login.guard';

describe('BloqueoLoginGuard', () => {
  let guard: BloqueoLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BloqueoLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
