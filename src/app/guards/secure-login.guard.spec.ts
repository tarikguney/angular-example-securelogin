import { TestBed, async, inject } from '@angular/core/testing';

import { SecureLoginGuard } from './secure-login.guard';

describe('SecureLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureLoginGuard]
    });
  });

  it('should ...', inject([SecureLoginGuard], (guard: SecureLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
